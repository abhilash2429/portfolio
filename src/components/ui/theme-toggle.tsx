"use client";

import { LampDesk } from "lucide-react";
import { useTheme } from "next-themes";
import { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Button } from "./button";
import useIsClient from "~/hooks/use-client";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-8 rounded-lg text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
        aria-label="Toggle theme"
      >
        <LampDesk className="size-[17px]" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  // Paints the new theme outward from the bottom of the button
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) {
      setTheme(nextTheme);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.bottom;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;

    root.dataset.vt = "theme";
    const transition = document.startViewTransition(() => {
      // next-themes applies the class in an effect; set it here so the
      // new-state snapshot is guaranteed to be in the new theme
      root.classList.remove("light", "dark");
      root.classList.add(nextTheme);
      root.style.colorScheme = nextTheme;
      flushSync(() => setTheme(nextTheme));
    });

    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 750,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
    transition.finished.finally(() => delete root.dataset.vt);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 rounded-lg text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
      onClick={toggle}
      aria-label={isDark ? "Turn the desk lamp off (light mode)" : "Turn the desk lamp on (dark mode)"}
    >
      <LampDesk className="size-[17px]" />
    </Button>
  );
};

export default ThemeToggle;
