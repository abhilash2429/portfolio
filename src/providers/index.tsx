"use client";
import { ReactNode } from "react";

import BottomBlur from "~/components/bottom-blur";
import ClickSpark from "~/components/effects/click-spark";
import LampFollow from "~/components/effects/lamp-follow";
import IntroLoader from "~/components/intro-loader";
import ScrollProgress from "~/components/scroll-progress";
import { TooltipProvider } from "~/components/ui/tooltip";
import TopLoader from "~/components/ui/top-loader";
import ThemeProvider from "~/components/ui/theme-provider";
import LenisProvider from "./lenis";
import ReactQueryProvider from "./react-query";
import { Toaster } from "~/components/ui/sonner";

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LenisProvider>
        <ReactQueryProvider>
          <TooltipProvider>
            <ScrollProgress />
            <TopLoader />
            <IntroLoader />
            <ClickSpark />
            <LampFollow />
            {children}
            <BottomBlur />
            <Toaster />
          </TooltipProvider>
        </ReactQueryProvider>
      </LenisProvider>
    </ThemeProvider>
  );
};

export default RootProviders;
