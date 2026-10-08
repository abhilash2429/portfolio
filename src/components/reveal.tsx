"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef, useSyncExternalStore } from "react";
import { introStore } from "./intro-store";

const useIntroDone = () =>
  useSyncExternalStore(
    introStore.subscribe,
    () => !introStore.isPending(),
    () => false,
  );

const variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } },
};

/**
 * Fades a section up as it scrolls into view. Holds while the first-visit
 * intro is running so the first wave lands as the curtain lifts.
 */
const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const introDone = useIntroDone();
  const reduced = useReducedMotion();
  const show = reduced || (introDone && inView);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      transition={reduced ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
