import ContentNotFound from "~/components/ui/content-not-found";
import { typo } from "~/components/ui/typograpghy";
import BlurText from "./ui-blur-text";
import { TProject } from "~/components/project/_project-mock";

import ProjectItem from "./project-project-item";

const ProjectList = ({ projects, metadata }: { projects: TProject[]; metadata?: boolean }) => {
  return (
    <section aria-label="projects" className="mt-5 space-y-6" id="projects">
      {metadata && (
        <h2 className={typo({ variant: "h2" })}>
          <BlurText text="Featured Projects" />
        </h2>
      )}

      <div className="!mt-8">
        {projects.length > 0 ? (
          <ol className="grid gap-8 md:grid-cols-2" role="list">
            {projects.map((project, index) => (
              <ProjectItem key={project.slug} index={index} {...project} />
            ))}
          </ol>
        ) : (
          <ContentNotFound text="No Projects Found" />
        )}
      </div>
    </section>
  );
};

export default ProjectList;
