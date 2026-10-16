"use client";

import { useEffect } from "react";

const COLOR = "#D97757";
const COUNT = 10;
const SIZE = 15;
const RADIUS = 15;
const DURATION = 450;

type Spark = { x: number; y: number; angle: number; start: number };

const easeOut = (t: number) => t * (2 - t);

/**
 * Line sparks burst radially from every click and shrink as they travel,
 * drawn on one fixed canvas. Same feel as React Bits' ClickSpark.
 */
const ClickSpark = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText =
      "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9997;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let sparks: Spark[] = [];
    let frame: number | null = null;

    const draw = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.strokeStyle = COLOR;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      sparks = sparks.filter((s) => {
        const elapsed = now - s.start;
        if (elapsed >= DURATION) return false;
        const p = easeOut(elapsed / DURATION);
        const dist = p * RADIUS;
        const len = SIZE * (1 - p);
        const cos = Math.cos(s.angle);
        const sin = Math.sin(s.angle);
        ctx.beginPath();
        ctx.moveTo(s.x + dist * cos, s.y + dist * sin);
        ctx.lineTo(s.x + (dist + len) * cos, s.y + (dist + len) * sin);
        ctx.stroke();
        return true;
      });
      frame = sparks.length ? requestAnimationFrame(draw) : null;
    };

    let downX = 0;
    let downY = 0;
    const onDown = (e: PointerEvent) => {
      downX = e.clientX;
      downY = e.clientY;
    };

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.detail === 0) return;
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > 5) return;
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea, select, [contenteditable='true'], [data-no-spark]")) return;
      const start = performance.now();
      for (let i = 0; i < COUNT; i++) {
        sparks.push({ x: e.clientX, y: e.clientY, angle: (2 * Math.PI * i) / COUNT, start });
      }
      if (frame === null) frame = requestAnimationFrame(draw);
    };

    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
      if (frame !== null) cancelAnimationFrame(frame);
      canvas.remove();
    };
  }, []);

  return null;
};

export default ClickSpark;
