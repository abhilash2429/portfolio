"use client";

import { useEffect, useRef, useState } from "react";

type Stage = { name: string; detail: string; p50: number; p90?: number };

/**
 * A pipeline drawn as stages with latency bars that fill when scrolled into
 * view. Bars are scaled to the slowest p90 so the bottleneck is obvious.
 */
const StagePipeline = ({
  stages,
  caption,
  unit = "s",
}: {
  stages: Stage[];
  caption?: string;
  unit?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const max = Math.max(...stages.map((s) => s.p90 ?? s.p50));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setSeen(true), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="not-prose my-8">
      <div
        ref={ref}
        className="grid gap-2.5 sm:grid-cols-[repeat(var(--n),minmax(0,1fr))]"
        style={{ "--n": stages.length } as React.CSSProperties}
      >
        {stages.map((stage, i) => (
          <div
            key={stage.name}
            className="relative rounded-sm bg-sheet p-3 text-[#2a2924] shadow-[var(--desk-shadow)]"
          >
            <div className="font-hand text-xl leading-none text-[#b8332a]">{i + 1}.</div>
            <div className="mt-1 font-serif text-lg leading-tight text-[#1c1b18]">{stage.name}</div>
            <div className="mt-1 text-xs leading-snug text-[#57534b]">{stage.detail}</div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e3ddcf]">
              <div
                className="h-full rounded-full bg-[#d97757] transition-[width] duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]"
                style={{
                  width: seen ? `${(stage.p50 / max) * 100}%` : "0%",
                  transitionDelay: `${i * 140}ms`,
                }}
              />
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-[#57534b]">
              p50 {stage.p50.toFixed(1)}
              {unit}
              {stage.p90 !== undefined && (
                <span className="text-[#8b867b]">
                  {" "}
                  / p90 {stage.p90.toFixed(1)}
                  {unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-hand text-lg text-subtle">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default StagePipeline;
