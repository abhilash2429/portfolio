import Link from "next/link";
import ThemeToggle from "~/components/ui/theme-toggle";
import ViewSwitch from "~/components/view-switch";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "/blog" },
];

const ClassicNav = () => (
  <div className="nav-drop-in pointer-events-none sticky top-4 z-50 mb-8 mt-8">
    <nav aria-label="Primary" className="flex justify-center">
      <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border/20 bg-background/30 p-1 shadow-lg backdrop-blur-xl">
        <ul role="list" className="flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.label} className="flex">
              <Link
                href={l.href}
                className="el-focus-styles rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="h-5 w-px bg-border" aria-hidden="true" />
        <ViewSwitch className="border-transparent bg-transparent" />
        <ThemeToggle />
      </div>
    </nav>
  </div>
);

export default ClassicNav;
