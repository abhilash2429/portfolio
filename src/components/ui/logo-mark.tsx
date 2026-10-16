import { CSSProperties } from "react";

/** [cx, cy, r, hover dx, hover dy]: dots that make an "A" and scatter a little on hover */
const DOTS: [number, number, number, number, number][] = [
  [16.25, 4.45, 2.58, 1.01, -1.6],
  [13.23, 10.1, 2.55, 2.36, 1.53],
  [18.78, 10.24, 2.59, 0.23, -2.29],
  [11.02, 15.37, 2.14, -3.12, -0.33],
  [21.23, 15.57, 2.28, 1.66, -0.5],
  [8.42, 20.73, 2.17, -0.97, 1.85],
  [23.8, 20.58, 2.72, 1.87, -0.96],
  [6.06, 26.65, 2.12, -1.46, -2.48],
  [26.31, 26.2, 2.69, -0.29, 2.77],
  [13.29, 19.49, 2.42, 1.03, 1.51],
  [16.25, 19.33, 2.78, 1.63, 1.77],
  [18.58, 19.47, 2.45, 0.12, 2.61],
];

const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" aria-hidden className={`logo-mark ${className ?? ""}`}>
    {DOTS.map(([cx, cy, r, dx, dy], i) => (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={r}
        style={
          { "--dx": `${dx}px`, "--dy": `${dy}px`, transitionDelay: `${i * 18}ms` } as CSSProperties
        }
      />
    ))}
  </svg>
);

export default LogoMark;
