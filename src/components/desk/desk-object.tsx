import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { cn } from "~/lib/utils";

type DeskObjectProps = {
  href?: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  faceClassName?: string;
  children: ReactNode;
  /** Rendered outside the face so it is not dimmed or clipped (tape, scrawls) */
  extras?: ReactNode;
  before?: ReactNode;
};

/**
 * A physical thing on the desk: tilted, shadowed, lifts on hover.
 * Internal hrefs use Link, everything else opens in a new tab.
 */
const DeskObject = ({
  href,
  label,
  className,
  style,
  faceClassName,
  children,
  extras,
  before,
}: DeskObjectProps) => {
  const inner = (
    <>
      {before}
      <div className={cn("obj-face", faceClassName)}>{children}</div>
      {extras}
    </>
  );

  if (!href) {
    return (
      <div className={cn("obj", className)} style={style}>
        {inner}
      </div>
    );
  }

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} aria-label={label} className={cn("obj", className)} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("obj", className)}
      style={style}
    >
      {inner}
    </a>
  );
};

export const Tape = ({ style }: { style: CSSProperties }) => (
  <span aria-hidden className="tape" style={style} />
);

export const Caption = ({
  title,
  meta,
  tilt = -2,
}: {
  title: string;
  meta?: string;
  tilt?: number;
}) => (
  <span className="caption" style={{ "--cr": `${tilt}deg` } as CSSProperties}>
    {title}
    {meta && <small>{meta}</small>}
  </span>
);

export default DeskObject;
