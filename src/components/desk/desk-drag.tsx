"use client";

import { useEffect, useState } from "react";

const MOVE_THRESHOLD = 5;

/**
 * Lets you pick up the hero objects and move them around the desk, like
 * the stickers on surya.website. A drag never triggers the object's link.
 * Desktop pointers only, so touch scrolling stays untouched.
 */
const DeskDrag = () => {
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const desk = document.querySelector<HTMLElement>(".desk");
    if (!desk) return;
    desk.classList.add("desk-draggable");

    let el: HTMLElement | null = null;
    let startX = 0;
    let startY = 0;
    let baseX = 0;
    let baseY = 0;
    let lastX = 0;
    let dragging = false;
    let z = 10;

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      const target = (e.target as HTMLElement).closest<HTMLElement>(".desk .obj");
      if (!target) return;
      el = target;
      startX = lastX = e.clientX;
      startY = e.clientY;
      baseX = parseFloat(el.style.getPropertyValue("--dx")) || 0;
      baseY = parseFloat(el.style.getPropertyValue("--dy")) || 0;
      dragging = false;
    };

    const onMove = (e: PointerEvent) => {
      if (!el) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!dragging && Math.hypot(dx, dy) < MOVE_THRESHOLD) return;
      if (!dragging) {
        dragging = true;
        el.classList.add("is-dragging");
        el.style.zIndex = String(++z);
        el.setPointerCapture?.(e.pointerId);
      }
      const tilt = Math.max(-8, Math.min(8, (e.clientX - lastX) * 0.6));
      lastX = e.clientX;
      el.style.setProperty("--dx", `${baseX + dx}px`);
      el.style.setProperty("--dy", `${baseY + dy}px`);
      el.style.setProperty("--dr", `${tilt}deg`);
    };

    const onUp = () => {
      if (!el) return;
      if (dragging) {
        const dropped = el;
        dropped.classList.remove("is-dragging");
        dropped.style.setProperty("--dr", "0deg");
        // Swallow the click that follows a drag so links don't fire
        dropped.addEventListener("click", (ev) => ev.preventDefault(), {
          once: true,
          capture: true,
        });
        setMoved(true);
      }
      el = null;
      dragging = false;
    };

    // Links and images are natively draggable; that would cancel our pointer stream
    const noNativeDrag = (e: DragEvent) => e.preventDefault();

    desk.addEventListener("pointerdown", onDown);
    desk.addEventListener("dragstart", noNativeDrag);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      desk.removeEventListener("dragstart", noNativeDrag);
      window.removeEventListener("pointercancel", onUp);
      desk.classList.remove("desk-draggable");
      desk.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const tidy = () => {
    document.querySelectorAll<HTMLElement>(".desk .obj").forEach((o) => {
      o.classList.add("is-tidying");
      o.style.setProperty("--dx", "0px");
      o.style.setProperty("--dy", "0px");
      setTimeout(() => o.classList.remove("is-tidying"), 700);
    });
    setMoved(false);
  };

  return (
    <button
      type="button"
      onClick={tidy}
      data-no-spark
      className={`desk-tidy font-hand text-xl text-muted-foreground hover:text-pen ${moved ? "is-visible" : ""}`}
      tabIndex={moved ? 0 : -1}
      aria-hidden={!moved}
    >
      tidy the desk &#8635;
    </button>
  );
};

export default DeskDrag;
