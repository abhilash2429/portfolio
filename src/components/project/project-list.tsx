import { projectHref } from "~/components/desk/artifacts";
import HoverPreview from "~/components/effects/hover-preview";
import ContentNotFound from "../ui/content-not-found";
import RowList from "../ui/row-list";
import { TProject, formatMonth } from "./_project-mock";

/** Archive rows: title and one line, date on the right */
const ProjectList = ({ projects }: { projects: TProject[] }) =>
  projects.length > 0 ? (
    <HoverPreview>
      <RowList
        rows={projects.map((p) => ({
          key: p.slug,
          title: (
            <>
              {p.title}
              {p.caseStudy && <span className="ml-2 font-hand text-lg text-pen">case study</span>}
            </>
          ),
          description: p.summary,
          aside: formatMonth(p.date),
          href: projectHref(p),
          preview: p.cover?.src,
        }))}
      />
    </HoverPreview>
  ) : (
    <ContentNotFound text="No projects found" />
  );

export default ProjectList;
