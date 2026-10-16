import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { fontHand, fontMono, fontSans, fontSerif } from "~/components/ui/fonts";
import { getSEOTags, renderSchemaTags } from "~/lib/seo";
import { cn } from "~/lib/utils";
import { INTRO_BOOT_SCRIPT } from "~/components/intro-store";
import RootProviders from "~/providers";
import BoilFilters from "~/components/effects/boil-filters";
import "~/styles/globals.css";
import "~/styles/desk.css";

export const viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#141310" },
  ],
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable,
          fontHand.variable,
        )}
      >
        {renderSchemaTags()}
        <BoilFilters />

        <RootProviders>{children}</RootProviders>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
