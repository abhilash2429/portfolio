import config from "~/config";
import Reveal from "~/components/reveal";
import DeskObject from "./desk-object";

const ContactDesk = () => (
  <section aria-label="Contact" className="col pb-10 pt-[100px] text-center">
    <Reveal>
      <p className="mx-auto max-w-[560px] font-serif text-[25px] leading-[1.15] sm:text-[30px]">
        I&rsquo;m looking for a full-time remote role building agents. If your team ships agentic
        AI, I&rsquo;d like to hear about it.
      </p>
    </Reveal>
    <Reveal delay={0.12} className="relative mx-auto mt-[60px] h-[230px] w-[210px]">
      <DeskObject href={`mailto:${config.social.email}`} label="Email me" className="sticky">
        <b>
          Email
          <br />
          <u className="decoration-2 underline-offset-[6px]">me</u>
        </b>
      </DeskObject>
      <div aria-hidden className="absolute -top-10 left-[250px] hidden w-[170px] text-pen md:block">
        <span className="block rotate-[10deg] whitespace-nowrap font-hand text-[25px] leading-none text-foreground">
          I reply fast
        </span>
        <svg
          viewBox="0 0 110 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="-ml-2.5 mt-1 h-[100px] w-[110px]"
        >
          <path d="M88 6 C 92 40, 70 72, 14 82" />
          <path d="M26 70 L 12 82 L 28 92" />
        </svg>
      </div>
    </Reveal>
  </section>
);

export default ContactDesk;
