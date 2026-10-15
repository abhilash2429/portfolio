"use client";

import { useEffect } from "react";

const CLAUDE = "#D97757";
const DROPLETS = 7;

/**
 * A Claude-orange bubble pops wherever you click, with a few droplets
 * flying off it. Pure DOM + Web Animations, removed as soon as it ends.
 */
const ClickBubbles = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    layer.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:9997;overflow:hidden;";
    document.body.appendChild(layer);

    const spawn = (x: number, y: number) => {
      const make = (size: number, css: string) => {
        const el = document.createElement("span");
        el.style.cssText = `position:absolute;left:${x - size / 2}px;top:${y - size / 2}px;width:${size}px;height:${size}px;border-radius:50%;${css}`;
        layer.appendChild(el);
        return el;
      };

      const bubble = make(
        44,
        `background:radial-gradient(circle at 34% 30%, #f6c8b6 0 14%, ${CLAUDE} 48%, #c4613f 100%);box-shadow:0 4px 14px rgba(217,119,87,.35);`,
      );
      bubble
        .animate(
          [
            { transform: "scale(0.1)", opacity: 1, filter: "blur(0px)" },
            { transform: "scale(1.12)", opacity: 1, offset: 0.35 },
            { transform: "scale(0.96)", opacity: 0.9, offset: 0.55 },
            { transform: "scale(1.5)", opacity: 0, filter: "blur(3px)" },
          ],
          { duration: 680, easing: "cubic-bezier(.22,1,.36,1)" },
        )
        .finished.then(() => bubble.remove());

      const ring = make(46, `border:1.5px solid ${CLAUDE};`);
      ring
        .animate(
          [
            { transform: "scale(0.4)", opacity: 0.9 },
            { transform: "scale(2.1)", opacity: 0 },
          ],
          { duration: 700, easing: "cubic-bezier(.22,1,.36,1)" },
        )
        .finished.then(() => ring.remove());

      for (let i = 0; i < DROPLETS; i++) {
        const angle = (Math.PI * 2 * i) / DROPLETS + Math.random() * 0.6;
        const dist = 34 + Math.random() * 26;
        const size = 4 + Math.random() * 5;
        const drop = make(size, `background:${CLAUDE};`);
        drop
          .animate(
            [
              { transform: "translate(0,0) scale(1)", opacity: 1 },
              {
                transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist + 10}px) scale(0.2)`,
                opacity: 0,
              },
            ],
            { duration: 560 + Math.random() * 200, easing: "cubic-bezier(.2,.8,.3,1)" },
          )
          .finished.then(() => drop.remove());
      }
    };

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0 || !e.isPrimary) return;
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea, select, [contenteditable='true'], [data-no-bubble]")) return;
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      layer.remove();
    };
  }, []);

  return null;
};

export default ClickBubbles;
