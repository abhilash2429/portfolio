"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const OPTIONS = [
  { label: "Desk", href: "/", title: "The paper desk portfolio" },
  { label: "Classic", href: "/classic", title: "The classic one-page portfolio" },
];

/** Two-way switch between the desk site and the classic portfolio */
const ViewSwitch = ({ className }: { className?: string }) => {
  const active = usePathname().startsWith("/classic") ? "Classic" : "Desk";

  return (
    <div
      role="group"
      aria-label="Portfolio view"
      className={cn(
        "relative inline-flex items-center rounded-full border border-foreground/15 bg-background/60 p-0.5 text-[12.5px] backdrop-blur",
        className,
      )}
    >
      {OPTIONS.map((o) => (
        <Link
          key={o.label}
          href={o.href}
          title={o.title}
          aria-current={active === o.label ? "page" : undefined}
          className={cn(
            "el-focus-styles relative rounded-full px-2.5 py-1 transition-colors",
            active === o.label ? "text-background" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {active === o.label && (
            <motion.span
              layoutId="view-switch-knob"
              className="absolute inset-0 -z-10 rounded-full bg-foreground"
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
            />
          )}
          {o.label}
        </Link>
      ))}
    </div>
  );
};

export default ViewSwitch;
