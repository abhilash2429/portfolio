"use client";

/**
 * Shared intro state. An inline script in the root layout sets
 * <html data-intro="pending"> before first paint on a first homepage visit,
 * so CSS can hide the page with no flash. The loader clears it when the
 * curtain starts lifting, and everything waiting on the intro reveals then.
 */

type Listener = () => void;

export const INTRO_STORAGE_KEY = "ab24-intro-played";

/** Runs before hydration. Keep in sync with introStore.isPending. */
export const INTRO_BOOT_SCRIPT = `try{if(location.pathname==="/"&&sessionStorage.getItem("${INTRO_STORAGE_KEY}")!=="1"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="pending"}catch(e){}`;

const listeners = new Set<Listener>();

export const introStore = {
  isPending: () =>
    typeof document !== "undefined" && document.documentElement.dataset.intro === "pending",
  done() {
    if (!introStore.isPending()) return;
    delete document.documentElement.dataset.intro;
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {}
    listeners.forEach((listener) => listener());
  },
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};
