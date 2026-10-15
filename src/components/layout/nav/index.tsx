import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import config from "~/config";
import ThemeToggle from "~/components/ui/theme-toggle";
import NavList from "./nav-list";

const iconBtn =
  "el-focus-styles hidden size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground sm:grid";

const Navbar = () => (
  <nav
    aria-label="Primary"
    className="nav-drop-in fixed inset-x-0 top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center px-4 py-3.5 before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-6 before:top-0 before:-z-10 before:bg-gradient-to-b before:from-background before:from-40% before:to-transparent sm:grid-cols-[1fr_auto_1fr] sm:px-7 sm:py-[18px]"
  >
    <Link
      href="/"
      aria-label={`${config.appName}, home`}
      className="el-focus-styles block size-[30px] overflow-hidden rounded-lg shadow-[var(--desk-shadow)]"
    >
      <Image src="/logo.png" alt="" width={30} height={30} priority />
    </Link>
    <div className="flex justify-center">
      <NavList />
    </div>
    <div className="flex items-center justify-end gap-2">
      <a
        href={config.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={iconBtn}
      >
        <FaGithub className="size-[17px]" />
      </a>
      <a
        href={config.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconBtn}
      >
        <FaLinkedin className="size-[17px]" />
      </a>
      <a href={`mailto:${config.social.email}`} aria-label="Email" className={iconBtn}>
        <FiMail className="size-[17px]" />
      </a>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
