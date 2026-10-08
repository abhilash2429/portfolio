"use client";

import Image from "next/image";
import config from "~/config";
import { cn } from "~/lib/utils";
import { typo } from "./ui/typograpghy";
import codingImage from "~/assets/images/coding.png";
import BlurText from "~/components/ui/blur-text";

const AboutSection = () => {
  return (
    <section className="grid gap-8 sm:gap-4 md:grid-cols-3" aria-label="About">
      <div className="order-2 space-y-3 sm:order-1 md:col-span-2">
        <h1 className="font-serif text-2xl sm:text-3xl">
          <BlurText text="Abhilash, 19" />
        </h1>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          I&apos;m an AI and software engineer in the making. I build products
          around ideas that keep me up at 2 AM, and most of them start with me
          asking &quot;why?&quot;
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          Tech has had me hooked since I was a kid: iPods, keypad phones, then
          Android, and now AI. These days I love building with AI, even when I
          don&apos;t fully know how yet.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          I&apos;m usually in the middle of building something and breaking a
          few things along the way. I&apos;m pretty sure it all adds up to
          something.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          When I&apos;m not building, I follow the financial markets, read,
          watch movies, or fall down YouTube rabbit holes.
        </p>

        <p
          className={cn(
            typo({ variant: "paragraph", font: "sans" }),
            "sm:!mt-4"
          )}
        >
          <span className="text-foreground font-medium">Open to work</span>:
          internships, full-time roles, or collabs.{" "}
          <a
            href={`mailto:${config.social.email}`}
            aria-label="Hire Me"
            className="el-focus-styles text-ring"
          >
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