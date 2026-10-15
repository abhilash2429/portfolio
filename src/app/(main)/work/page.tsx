import { works } from "#site/content";
import Link from "next/link";
import ProjectArtifact, { projectHref } from "~/components/desk/artifacts";
import { Caption } from "~/components/desk/desk-object";
import { ProjectList, projects } from "~/components/project";
import { formatMonth } from "~/components/project/_project-mock";
import Reveal from "~/components/reveal";
import { SectionHead } from "~/components/ui/row-list";
import { getSEOTags } from "~/lib/seo";

export const metadata = getSEOTags({
  title: "Work",
  description:
    "Agents I've built: a watchdog for agent fleets, a voice agent in the Mac notch, an RL supervisor for worker agents, and cited search served over MCP.",
  canonicalUrlRelative: "/work",
});

const WorkPage = () => {
  const caseStudies = projects.filter(
    (p) => p.caseStudy && works.some((w) => w.project === p.slug),
  );

  return (
    <div className="pb-10 pt-28 sm:pt-32">
      <div className="col">
        <SectionHead as="h1" title="Work" />
        <p className="mt-3 text-[15.5px] text-muted-foreground">
          Agents and the systems around them. The three below have full write-ups. Everything else
          links to its repo or live build.
        </p>
      </div>

      <section
        aria-label="Case studies"
        className="mx-auto mt-10 grid max-w-[1000px] gap-x-6 gap-y-4 px-4 sm:grid-cols-3"
      >
        {caseStudies.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link href={projectHref(project)} className="el-focus-styles group block rounded-md">
              <div className="work-thumb" aria-hidden>
                <ProjectArtifact project={project} href="" />
              </div>
              <div className="px-2 text-center">
                <div className="font-serif text-xl transition-colors group-hover:text-pen">
                  {project.title}
                </div>
                <div className="text-[13.5px] text-subtle">{formatMonth(project.date)}</div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <Reveal className="col mt-20">
        <SectionHead title="Everything" />
        <ProjectList projects={projects} />
      </Reveal>
    </div>
  );
};

export default WorkPage;
