import { ConfigProps } from "./types/config";

export const config = {
  appName: "Abhilash Reddy",
  appDesignation: "Applied AI Engineer",
  appDescription: `Applied AI engineer building AI agents that do the work, and the systems they plug into. Open to full-time remote roles.`,

  domainName: "abhilash24.me",

  colors: {
    theme: "light",
    main: "#f2efe8",
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
