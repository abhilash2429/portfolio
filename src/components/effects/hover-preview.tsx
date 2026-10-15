"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Rows with a data-preview image show it as a small tilted print that trails
 * the cursor. Desktop pointers only.
 */
const HoverPreview = ({ children }: { children: ReactNode }) => {
  const wrap = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const root = wrap.current;
    const el = card.current;
    if (!root || !el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      const tilt = Math.max(-10, Math.min(10, (x - cx) * 0.08));
      el.style.transform = `translate(${cx + 28}px, ${cy - 90}px) rotate(${tilt - 3}deg)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const row = (e.target as HTMLElement).closest<HTMLElement>("[data-preview]");
      setSrc(row && root.contains(row) ? row.dataset.preview! : null);
    };
    const onLeave = () => setSrc(null);

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrap}>
      {children}
      <div
        ref={card}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden w-[220px] [@media(hover:hover)]:block"
      >
        <div
          className={`obj-face bg-[#fbfaf6] p-1.5 transition-[opacity,scale] duration-300 ${src ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
        >
          {src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt="" className="aspect-video w-full object-cover object-top" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverPreview;
