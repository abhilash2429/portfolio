"use client";

import codingImage from "~/assets/images/coding.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { introStore } from "./intro-store";

/**
 * First homepage visit per session:
 * 1. "Hello" cycles through a few languages.
 * 2. "i'm ● Abhilash" holds briefly.
 * 3. The stage lifts away like a curtain while the page reveals underneath.
 *
 * Click, Esc, Enter or Space skips straight to the curtain.
 * Never plays for reduced motion (see INTRO_BOOT_SCRIPT).
 */

type Phase = "idle" | "hello" | "name" | "exiting";

const HELLOS = ["Hello", "Hola", "Bonjour", "こんにちは", "नमस्ते", "నమస్తే"];

const HELLO_MS = 190;
const NAME_MS = 950;
const CURTAIN_S = 0.75;
const AVATAR_SIZE = 96;
const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const;

const IntroLoader = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const lenis = useLenis();

  const beginExit = useCallback(() => {
    setPhase((p) => (p === "hello" || p === "name" ? "exiting" : p));
  }, []);

  useEffect(() => {
    // The pending flag is set by a pre-hydration script, so it can only be read after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (introStore.isPending()) setPhase("hello");
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (phase === "hello" || phase === "name") lenis.stop();
    else lenis.start();
  }, [lenis, phase]);

  useEffect(() => {
    if (phase === "exiting") introStore.done();
  }, [phase]);

  useEffect(() => {
    if (phase !== "hello" && phase !== "name") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        beginExit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, beginExit]);

  useEffect(() => {
    if (phase !== "hello") return;
    const iv = setInterval(() => {
      setIndex((i) => {
        if (i + 1 >= HELLOS.length) {
          clearInterval(iv);
          setPhase("name");
          return i;
        }
        return i + 1;
      });
    }, HELLO_MS);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase !== "name") return;
    const t = setTimeout(beginExit, NAME_MS);
    return () => clearTimeout(t);
  }, [phase, beginExit]);

  if (phase === "idle") return null;

  const exiting = phase === "exiting";

  return (
    <motion.div
      role="dialog"
      aria-label="Intro, press Escape to skip"
      onClick={beginExit}
      className="fixed inset-0 z-[9998] flex cursor-pointer select-none items-center justify-center bg-background"
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={{ clipPath: exiting ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)" }}
      transition={{ duration: exiting ? CURTAIN_S : 0, ease: EASE_CURTAIN }}
      onAnimationComplete={exiting ? () => setPhase("idle") : undefined}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,hsl(var(--muted))_0%,transparent_62%)] opacity-70 dark:opacity-40"
      />

      <motion.div
        className="relative flex items-center justify-center px-6 text-center"
        animate={exiting ? { y: -60, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: CURTAIN_S * 0.8, ease: EASE_CURTAIN }}
      >
        <AnimatePresence mode="wait">
          {phase === "hello" && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(5px)" }}
              transition={{ duration: 0.11, ease: "easeOut" }}
            >
              <span className="font-serif text-5xl tracking-tight text-foreground sm:text-7xl">
                {HELLOS[index]}
                <span aria-hidden className="ml-2 align-middle text-muted-foreground/60">
                  ·
                </span>
              </span>
            </motion.div>
          )}

          {(phase === "name" || exiting) && (
            <motion.div
              key="name-stage"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 sm:gap-5"
            >
              <span className="font-serif text-2xl italic text-muted-foreground sm:text-4xl">
                i&apos;m
              </span>

              <span
                className="block overflow-hidden rounded-full shadow-md ring-1 ring-border dark:ring-white/20"
                style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, marginLeft: "-0.25rem" }}
              >
                <Image
                  src={codingImage}
                  alt=""
                  priority
                  className="size-full object-cover object-top"
                />
              </span>

              <span className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
                Abhilash
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {!exiting && (
        <span className="absolute bottom-8 text-xs tracking-wide text-muted-foreground/70">
          click or press esc to skip
        </span>
      )}
    </motion.div>
  );
};

export default IntroLoader;
