export type Theme = "light" | "dark";

export interface ConfigProps {
  appName: string;
  appDescription: string;
  appDesignation: string;
  domainName: string;

  social: {
    github: string;
    linkedin: string;
    instagram: string;
    discord: string;
    email: string;
    youtube: string;
    twitter: string;
    resume: string;
  };

  colors: {
    theme: Theme;
    main: string;
  };
  auth: {
    loginUrl: string;
    callbackUrl: string;
  };
}
