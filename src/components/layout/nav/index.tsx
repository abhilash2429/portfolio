"use client";

import NavList from "./nav-list";
import ThemeToggle from "~/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith("/blog/");

  return (
    <div className={cn("nav-drop-in pointer-events-none z-50 mb-8 mt-8", isBlogPost ? "static" : "sticky top-4")}>
      <nav className="flex justify-center" role="navigation">
        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border/20 bg-background/30 p-1 shadow-lg backdrop-blur-xl">
          <NavList />
          <span className="h-5 w-px bg-border" aria-hidden="true" />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

