"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { NavType } from "./_nav-mock";

const isActive = (pathname: string, path: string) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

const NavItem = ({ label, path }: NavType[number]) => {
  const active = isActive(usePathname(), path);

  return (
    <li className="flex">
      <Link
        href={path}
        aria-current={active ? "page" : undefined}
        className={cn(
          "el-focus-styles relative rounded-sm px-0.5 py-1 text-sm transition-colors",
          active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {label}
        {active && (
          <svg
            aria-hidden
            viewBox="0 0 60 6"
            preserveAspectRatio="none"
            className="absolute -bottom-0.5 -left-0.5 h-1.5 w-[calc(100%+4px)] text-pen"
          >
            <path
              d="M1 4 C 15 1.5, 30 5, 59 2.5"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        )}
      </Link>
    </li>
  );
};

export default NavItem;
