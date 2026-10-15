import { ConfigProps } from "./types/config";

export const config = {
  appName: "Abhilash Reddy",
  appDesignation: "Applied AI Engineer",
  appDescription: `Applied AI engineer building agents, evals and the backend behind them. Open to full-time remote roles.`,

  domainName: "abhilash24.me",

  colors: {
    theme: "dark",
    main: "#000000",
  },

  social: {
    github: "https://github.com/abhilash2429",
    linkedin: "https://www.linkedin.com/in/abhilashreddymanda",
    instagram: "",
    discord: "https://discordapp.com/users/abhilash_2429",
    email: "abhilashreddy2429@gmail.com",
    youtube: "",
    twitter: "",
    resume: "/resume",
  },

  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
