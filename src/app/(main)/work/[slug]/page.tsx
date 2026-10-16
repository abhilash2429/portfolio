import { works } from "#site/content";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectArtifact from "~/components/desk/artifacts";
import { MDXContent } from "~/components/mdx";
import { projects } from "~/components/project";
import { getSEOTags } from "~/lib/seo";
import "~/styles/mdx.css";

type Params = { params: Promise<{ slug: string }> };

const getCaseStudy = (slug: string) => {
  const work = works.find((w) => w.slugAsParams === slug && w.published);
  const project = work && projects.find((p) => p.slug === work.project);
  if (!work || !project) notFound();
  return { work, project };
};

export const generateStaticParams = () =>
  works.filter((w) => w.published).map((w) => ({ slug: w.slugAsParams }));

export async function generateMetadata({ params }: Params) {
  const { work } = getCaseStudy((await params).slug);
  return getSEOTags({
    title: work.title,
    description: work.description,
    canonicalUrlRelative: `/work/${work.slugAsParams}`,
  });
}

const linkClass = "underline underline-offset-2 hover:text-pen";

const CaseStudyPage = async ({ params }: Params) => {
  const { work, project } = getCaseStudy((await params).slug);
  const published = works.filter((w) => w.published);
  const next = published[(published.findIndex((w) => w.slug === work.slug) + 1) % published.length];

  const links = [
    project.repoUrl && { label: "Repo", href: project.repoUrl },
    project.deployedURL && { label: "Live", href: project.deployedURL },
    project.demoUrl && { label: "Demo", href: project.demoUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article className="pb-10 pt-28 sm:pt-32">
      <header className="col">
        <Link href="/work" className="text-sm text-muted-foreground hover:text-pen">
          &larr; All work
        </Link>
        <h1 className="mt-6 font-serif text-[40px] leading-[1.05] sm:text-5xl">{work.title}</h1>
        <p className="mt-2 text-[13.5px] text-subtle">{work.meta}</p>
        <p className="mt-5 text-[17px] leading-normal text-muted-foreground">{work.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {l.label} &#8599;
            </a>
          ))}
          <span className="text-subtle">{project.stacks.join(", ")}</span>
        </div>
      </header>

      <div className="case-hero" aria-hidden>
        <ProjectArtifact project={project} href="" />
      </div>

      <div className="col">
        <div className="mdx-content prose max-w-none dark:prose-invert">
          <MDXContent code={work.body} />
        </div>
      </div>

      {next && next.slug !== work.slug && (
        <div className="col mt-16 border-t border-foreground/10 pt-6 text-sm text-muted-foreground">
          Next case study:{" "}
          <Link
            href={`/work/${next.slugAsParams}`}
            className={`font-serif text-xl text-foreground ${linkClass}`}
          >
            {next.title}
          </Link>
        </div>
      )}
    </article>
  );
};

export default CaseStudyPage;
