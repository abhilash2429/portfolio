

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    qualities: [75, 95],
    minimumCacheTTL: 60,
  },
  redirects: async () => {
    return [
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1H0mKGg6zKlIv4JX1op4lCwsDkWdYutu4/view?usp=sharing",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/abhilashreddymanda/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/abhilash2429",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/users/abhilash_2429",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
