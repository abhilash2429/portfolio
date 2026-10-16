import { projects } from "~/components/project";
import Reveal from "~/components/reveal";
import { Caption } from "./desk-object";
import ProjectArtifact from "./artifacts";

const TILTS = [-2, 1.5, -2, 2, -1.5];

const MACKY_REQUEST =
  "“Message Rahul that the auth bug is fixed, and add a reminder to follow up tomorrow.”";

const WorkDesk = () => {
  const onDesk = projects.filter((p) => p.onDesk);

  return (
    <div className="works">
      {onDesk.map((project, i) => (
        <Reveal key={project.slug} className="work" delay={(i % 2) * 0.1}>
          <ProjectArtifact project={project} />
          {project.slug === "macky" && <span className="said">{MACKY_REQUEST}</span>}
          {project.caption && (
            <Caption
              title={project.caption}
              meta={project.captionMeta}
              tilt={TILTS[i % TILTS.length]}
            />
          )}
        </Reveal>
      ))}
    </div>
  );
};

export default WorkDesk;
