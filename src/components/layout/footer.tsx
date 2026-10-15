import config from "~/config";

const link = "text-muted-foreground underline underline-offset-2 hover:text-pen";

const Footer = () => (
  <footer className="col relative z-[2] mt-auto pb-10 pt-8 text-center text-[13px] text-subtle">
    <p>
      You can{" "}
      <a className={link} href={`mailto:${config.social.email}`}>
        email me
      </a>
      , read my code on{" "}
      <a className={link} href={config.social.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      , find me on{" "}
      <a className={link} href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      , or follow the{" "}
      <a className={link} href="/feed.xml">
        RSS feed
      </a>
      .
    </p>
    <p className="mt-2 text-xs">
      &copy; {new Date().getFullYear()} {config.appName}
    </p>
  </footer>
);

export default Footer;
