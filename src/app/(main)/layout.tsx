import { ReactNode, ViewTransition } from "react";
import Footer from "~/components/layout/footer";
import Navbar from "~/components/layout/nav";
import SkipContent from "~/components/ui/skip-content";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <SkipContent />
      <Navbar />
      <ViewTransition name="page">
        <main id="main-content" className="relative z-[2] flex-1 overflow-x-clip">
          {children}
        </main>
      </ViewTransition>
      <Footer />
    </div>
  );
};

export default Layout;
