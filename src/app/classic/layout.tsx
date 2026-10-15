import { ReactNode } from "react";
import ClassicNav from "~/components/classic/nav";

const ClassicLayout = ({ children }: { children: ReactNode }) => (
  <div className="classic min-h-dvh bg-background text-foreground">
    <div className="mx-auto flex min-h-dvh max-w-[57rem] flex-col px-4 py-2">
      <ClassicNav />
      <main id="main-content">{children}</main>
      <footer className="mt-auto py-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Abhilash Reddy
      </footer>
    </div>
  </div>
);

export default ClassicLayout;
