"use client";

import Image from "next/image";
import config from "~/config";
import { cn } from "~/lib/utils";
import { typo } from "~/components/ui/typograpghy";
import codingImage from "~/assets/images/coding.png";
import BlurText from "./ui-blur-text";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="grid scroll-mt-24 gap-8 sm:gap-4 md:grid-cols-3"
      aria-label="About"
    >
      <div className="order-2 space-y-3 sm:order-1 md:col-span-2">
        <h1 className="font-serif text-2xl sm:text-3xl">
          <BlurText text="Abhilash Reddy" />
        </h1>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          I&apos;m an applied AI engineer. I build AI agents end to end: the agent loop, the tools
          and sub-agents it works with, and the systems it plugs into.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          Lately that&apos;s Bladerunner, a watchdog agent that catches other agents acting on
          planted instructions and patches the guardrail; Macky, a voice agent that lives in the Mac
          notch; and Oversight Arena, where a supervisor model learns to police five worker agents.
          I&apos;ve sent fixes upstream to pipecat and kornia, won the TCS AI Hackathon and made the
          Meta PyTorch OpenEnv grand finale.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          Away from the keyboard I follow the markets, read, and watch more movies than I should.
        </p>

        <p className={cn(typo({ variant: "paragraph", font: "sans" }), "sm:!mt-4")}>
          <span className="text-foreground font-medium">Open to work</span>: full-time remote roles
          building AI agents.{" "}
          <a href={`mailto:${config.social.email}`} className="el-focus-styles text-ring">
            Let&apos;s talk.
          </a>
        </p>
      </div>

      <div className="relative order-1 block aspect-square sm:order-2 sm:hidden md:block md:h-[352px] md:w-[352px] md:self-center">
        <div className="absolute inset-0 -z-10 size-full rounded-md bg-gradient-to-br from-muted via-secondary to-background opacity-80" />
        <Image
          id="about-photo"
          alt="Locked In"
          src={codingImage}
          placeholder="blur"
          className="size-full -rotate-3 transform rounded-md object-cover shadow-md dark:brightness-90 dark:contrast-125 dark:grayscale dark:saturate-0"
          priority
        />
      </div>
    </section>
  );
};

export default AboutSection;
