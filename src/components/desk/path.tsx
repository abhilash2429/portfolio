"use client";

import { useEffect, useRef } from "react";

type Stop = { when: string; title: string; line: string; href?: string };

/** Real milestones only: dates from repos, results from hackathon records */
const STOPS: Stop[] = [
  {
    when: "2022",
    title: "Intermediate, MPC",
    line: "Excellencia Junior College, Hyderabad. Finished with 97%.",
  },
  { when: "2024", title: "B.Tech, CS (AI & ML)", line: "GRIET, Hyderabad. CGPA 9.0 so far." },
  {
    when: "Nov 2025",
    title: "Anon-Chat",
    line: "Stateless Node.js WebSockets holding 1,000+ concurrent connections.",
    href: "https://github.com/abhilash2429/Anon-chat",
  },
  {
    when: "Feb 2026",
    title: "DeepRead",
    line: "A LangGraph pipeline that turns ML papers into implementation briefs.",
    href: "https://github.com/abhilash2429/DeepRead",
  },
  {
    when: "Mar 2026",
    title: "IIT Hyderabad finalist",
    line: "Intelli Credit, an AI credit appraisal engine.",
  },
  {
    when: "May 2026",
    title: "OpenEnv grand finale",
    line: "Round 1 solo with GitMergeEnv, then Oversight Arena in Bangalore.",
    href: "/work/oversight-arena",
  },
  {
    when: "Jun 2026",
    title: "Macky",
    line: "A voice agent that lives in the Mac notch.",
    href: "https://heymacky.vercel.app/",
  },
  {
    when: "Jul 2026",
    title: "Won the TCS AI Hackathon",
    line: "An agent that turns bulk customer feedback into categories and trends.",
  },
  {
    when: "Oct 2026",
    title: "Bladerunner, kornia #5361",
    line: "A watchdog agent built solo at neatHack, and a fix merged into kornia.",
    href: "/work/bladerunner",
  },
];

const Path = () => {
  const track = useRef<HTMLDivElement>(null);

  // Drag to scroll on desktop; touch already scrolls natively
  useEffect(() => {
    const el = track.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e: PointerEvent) => {
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) {
        moved = true;
        el.classList.add("is-dragging");
      }
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      el.classList.remove("is-dragging");
      if (moved)
        el.addEventListener("click", (ev) => ev.preventDefault(), { once: true, capture: true });
    };

    const noNativeDrag = (e: DragEvent) => e.preventDefault();

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("dragstart", noNativeDrag);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("dragstart", noNativeDrag);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <section aria-labelledby="path-title" className="mt-[90px] sm:mt-[120px]">
      <div className="col flex items-baseline justify-between gap-4">
        <h2 id="path-title" className="font-serif text-[30px] leading-tight">
          How I got here
        </h2>
        <span className="font-hand text-xl text-subtle">drag along &rarr;</span>
      </div>

      <div ref={track} className="path-track" tabIndex={0} aria-label="Timeline, scrolls sideways">
        <ol className="path-list">
          {STOPS.map((stop, i) => {
            const card = (
              <>
                <span className="path-when">{stop.when}</span>
                <span className="path-title">{stop.title}</span>
                <span className="path-line">{stop.line}</span>
              </>
            );
            return (
              <li
                key={stop.title}
                className="path-stop"
                style={{ "--r": `${i % 2 ? 1.6 : -1.4}deg` } as React.CSSProperties}
              >
                <span aria-hidden className="path-pin" />
                {stop.href ? (
                  <a
                    href={stop.href}
                    className="path-card obj-face"
                    {...(stop.href.startsWith("/")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {card}
                  </a>
                ) : (
                  <div className="path-card obj-face">{card}</div>
                )}
              </li>
            );
          })}
          <li className="path-stop" style={{ "--r": "-1deg" } as React.CSSProperties}>
            <span aria-hidden className="path-pin" />
            <div className="path-card path-next">
              <span className="path-when">next</span>
              <span className="path-title">A full-time remote role</span>
              <span className="path-line">Building agents with a team that ships them.</span>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Path;
