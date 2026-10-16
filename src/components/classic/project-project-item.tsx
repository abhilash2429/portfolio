"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "~/lib/utils";
import { CustomLink } from "~/components/mdx";
import { typo } from "~/components/ui/typograpghy";
import { TProject } from "~/components/project/_project-mock";

type ProjectItemProps = { index: number } & TProject;

const linkClass = "!p-0 h-full hover:!text-foreground !flex items-center gap-2 !text-sm !text-ring";

const ProjectItem: React.FC<ProjectItemProps> = ({
  index,
  title,
  summary: description,
  deployedURL,
  demoUrl,
  cover,
  previewVideo,
  slug,
  stacks,
  repoUrl,
}) => {
  const reduced = useReducedMotion();
  const primaryUrl = deployedURL ?? repoUrl;
  const frameRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const startPreview = () => {
    const video = videoRef.current;
    if (!video || reduced || !window.matchMedia("(hover: hover)").matches) return;
    setPlaying(true);
    video.play().catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    setPlaying(false);
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) stopPreview();
  };

  const handleSpotlight = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    frame.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    frame.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.li
      role="listitem"
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.12 }}
    >
      <div
        className="group/card grid gap-4 rounded-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1"
        onPointerEnter={startPreview}
        onPointerLeave={stopPreview}
        onFocus={startPreview}
        onBlur={handleBlur}
      >
        <a
          ref={frameRef}
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          onPointerMove={handleSpotlight}
          className="el-focus-styles relative block aspect-video overflow-hidden rounded-md border border-border/60 bg-muted"
        >
          <Image
            alt={`${title} screenshot`}
            priority={index < 2}
            placeholder={typeof cover !== "string" ? "blur" : undefined}
            src={cover!}
            sizes="(min-width: 768px) 50vw, 100vw"
            className={cn(
              "size-full object-cover",
              slug === "aftercare"
                ? "object-top transition-[object-position] duration-[4000ms] ease-in-out motion-safe:group-hover/card:object-bottom"
                : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/card:scale-[1.04]",
            )}
          />

          {previewVideo && (
            <video
              ref={videoRef}
              src={previewVideo}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden
              tabIndex={-1}
              className={cn(
                "absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500",
                playing && "opacity-100",
              )}
            />
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
            style={{
              background:
                "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), hsl(0 0% 100% / 0.14), transparent 60%)",
            }}
          />

          {previewVideo && (
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute bottom-2 left-2 rounded-full bg-background/80 px-2 py-0.5 text-[11px] text-muted-foreground backdrop-blur transition-opacity duration-300 [@media(hover:none)]:hidden",
                playing && "opacity-0",
              )}
            >
              hover to preview
            </span>
          )}
        </a>

        <hgroup className="space-y-2 sm:space-y-1">
          <h2 className="flex items-center gap-2 font-serif text-lg">
            <span>{title}</span>
            <FiArrowUpRight
              aria-hidden
              className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100"
            />
          </h2>

          <p className={"text-xs text-ring"} aria-label="project stacks">
            {stacks.join(" / ")}
          </p>

          <p className={cn(typo({ variant: "paragraph", size: "sm" }), "!mt-4 line-clamp-2")}>
            {description}
          </p>

          <div className="!mt-2 flex flex-wrap items-center gap-4">
            {deployedURL && (
              <CustomLink
                aria-label={`visit ${title} live URL`}
                href={deployedURL}
                className={linkClass}
              >
                <FaExternalLinkAlt size={12} />
                <span> Live Preview</span>
              </CustomLink>
            )}

            {demoUrl && (
              <CustomLink
                aria-label={`watch ${title} demo video`}
                href={demoUrl}
                className={linkClass}
              >
                <FaYoutube size={14} />
                <span> Demo</span>
              </CustomLink>
            )}

            {repoUrl && (
              <CustomLink
                aria-label={`visit ${title} Github Repo`}
                href={repoUrl as string}
                className={linkClass}
              >
                <FaGithub />
                <span> Repo Url</span>
              </CustomLink>
            )}
          </div>
        </hgroup>
      </div>
    </motion.li>
  );
};
export default ProjectItem;
