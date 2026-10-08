"use client";

const BottomBlur = () => {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-20"
      style={{
        background: "linear-gradient(to top, hsl(var(--background) / 0.35) 0%, transparent 100%)",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      aria-hidden="true"
    />
  );
};

export default BottomBlur;
