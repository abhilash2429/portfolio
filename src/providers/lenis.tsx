"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const LenisProvider = ({ children }: { children: ReactNode }) => {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
