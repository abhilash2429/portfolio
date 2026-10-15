import type { Metadata } from "next";
import Script from "next/script";
import config from "~/config";

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, unknown>;
} = {}) => {
  return {
    title: title ? `${title} | ${config.appName}` : `${config.appName} | ${config.appDesignation}`,
    description: description || config.appDescription,
    keywords: keywords || [
      "Abhilash Reddy",
      "applied AI engineer",
      "AI engineer",
      "AI agents",
      "agentic AI",
      "multi-agent systems",
      "MCP",
      "voice agents",
      "RAG",
      "remote",
    ],
    applicationName: config.appName,

    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },

    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`,
    ),

    openGraph: {
      title: openGraph?.title || `${config.appName} | ${config.appDesignation}`,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: config.appName,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || `${config.appName} | ${config.appDesignation}`,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

export const renderSchemaTags = () => {
  return (
    <Script
      id="schemaTags"
      strategy="afterInteractive"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "ProfilePage",
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/logo.png`,
          url: `https://${config.domainName}/`,

          mainEntity: {
            "@type": "Person",
            name: "Abhilash Reddy Manda",
            url: `https://${config.domainName}/`,
            sameAs: [config.social.github, config.social.linkedin],
          },
        }),
      }}
    />
  );
};
