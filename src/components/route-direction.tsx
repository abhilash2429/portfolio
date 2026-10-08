"use client";

import { useEffect } from "react";

/**
 * Tags <html data-nav-dir> before a route change so the page view transition
 * can slide forward (new page from the right) or back (from the left),
 * following the nav order: Home, Projects, Blog, then a post.
 */

const rank = (path: string) => {
  if (path === "/") return 0;
  if (path.startsWith("/projects")) return 1;
  if (path.startsWith("/blog/")) return 3;
  if (path.startsWith("/blog") || path.startsWith("/tags")) return 2;
  return null;
};

let clearTimer: number | undefined;

const setDirection = (from: string, to: string) => {
  const root = document.documentElement;
  const a = rank(from);
  const b = rank(to);
  window.clearTimeout(clearTimer);
  if (a === null || b === null || a === b) {
    delete root.dataset.navDir;
    return;
  }
  root.dataset.navDir = b > a ? "forward" : "back";
  clearTimer = window.setTimeout(() => delete root.dataset.navDir, 3000);
};

const RouteDirection = () => {
  useEffect(() => {
    let current = location.pathname;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      setDirection(location.pathname, url.pathname);
      current = url.pathname;
    };

    const onPopState = () => {
      setDirection(current, location.pathname);
      current = location.pathname;
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
};

export default RouteDirection;
