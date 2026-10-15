import Image from "next/image";
import { CSSProperties } from "react";
import twoMechanics from "~/assets/images/two_mechanics.png";
import { TProject } from "~/components/project/_project-mock";
import DeskObject, { Tape } from "./desk-object";

type ArtifactProps = { project: TProject; href: string; style?: CSSProperties };

const Incident = ({ project, href, style }: ArtifactProps) => (
  <DeskObject
    href={href}
    label={`${project.title} case study`}
    className="incident"
    style={style}
    before={<Tape style={{ left: 20, top: -10, transform: "rotate(-8deg)" }} />}
    extras={<span className="scrawl">no human in the loop</span>}
  >
    <div className="incident-head">
      <b>bladerunner</b>
      <span>case c90be7b2</span>
    </div>
    <dl>
      <dt>agent</dt>
      <dd>research_agent_1</dd>
      <dt>what it did</dt>
      <dd>acted on a planted instruction</dd>
      <dt>flagged</dt>
      <dd>12:56:22</dd>
      <dt>fixed</dt>
      <dd>13:04:26</dd>
    </dl>
    <div className="incident-chain">
      {["flagged", "paused", "investigated", "verified", "quarantined", "patched"].map((s, i) => (
        <span key={s} style={{ "--i": i } as CSSProperties}>
          {s} <em>&rarr;</em>
        </span>
      ))}
      <span className="incident-fixed" style={{ "--i": 6 } as CSSProperties}>
        fixed
      </span>
    </div>
  </DeskObject>
);

const NotchPostcard = ({ project, href, style }: ArtifactProps) => (
  <DeskObject
    href={href}
    label={project.title}
    className="postcard"
    style={style}
    extras={<span aria-hidden className="postcard-notch" />}
  >
    {project.cover && (
      <Image
        src={project.cover}
        alt={`${project.title} landing page`}
        placeholder="blur"
        sizes="400px"
      />
    )}
  </DeskObject>
);

const SketchPrint = ({ project, href, style }: ArtifactProps) => (
  <DeskObject
    href={href}
    label={`${project.title} case study`}
    className="print"
    style={style}
    before={
      <>
        <Tape style={{ left: -14, top: 14, transform: "rotate(-40deg)" }} />
        <Tape style={{ right: -16, top: 12, transform: "rotate(38deg)" }} />
      </>
    }
  >
    <Image
      src={twoMechanics}
      alt="Oversight Arena sketch: a deceptive worker that only shows its flaw under deep inspection, and two colluding workers that agree with each other"
      placeholder="blur"
      sizes="440px"
    />
  </DeskObject>
);

const VideoDevice = ({ project, href, style }: ArtifactProps) => (
  <DeskObject href={href} label={`${project.title} case study`} className="device" style={style}>
    <div className="device-cam" />
    {project.previewVideo ? (
      <video
        src={project.previewVideo}
        poster={typeof project.cover === "object" ? project.cover.src : undefined}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden
      />
    ) : (
      project.cover && <Image src={project.cover} alt="" sizes="420px" />
    )}
  </DeskObject>
);

const Datasheet = ({ project, href, style }: ArtifactProps) => (
  <DeskObject
    href={href}
    label={`${project.title} repository`}
    className="datasheet"
    style={style}
    before={<Tape style={{ right: 24, top: -10, transform: "rotate(6deg)" }} />}
    extras={<span className="scrawl">the answer lives here</span>}
  >
    <div className="datasheet-head">
      <span>datasheet</span>
      <span>p. 14</span>
    </div>
    <h5>Pin configuration</h5>
    <div className="datasheet-lines" aria-hidden>
      <i style={{ width: "94%" }} />
      <i style={{ width: "88%" }} />
      <i style={{ width: "60%" }} />
    </div>
    <div className="datasheet-fig" aria-hidden>
      <div className="datasheet-pins" style={{ left: 40 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="datasheet-chip" />
      <div className="datasheet-pins" style={{ right: 40 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="datasheet-ring" />
    </div>
    <div className="datasheet-cap">Figure. Package pinout</div>
    <div className="datasheet-flow">
      route &rarr; retrieve figure crops &rarr; answer with page cites
    </div>
  </DeskObject>
);

const ARTIFACTS: Record<string, (props: ArtifactProps) => React.ReactNode> = {
  bladerunner: Incident,
  macky: NotchPostcard,
  "oversight-arena": SketchPrint,
  "enterprise-search": VideoDevice,
  "m-rag": Datasheet,
};

export const projectHref = (project: TProject) =>
  project.caseStudy ? `/work/${project.slug}` : (project.deployedURL ?? project.repoUrl ?? "/work");

export const hasArtifact = (slug: string) => slug in ARTIFACTS;

const ProjectArtifact = ({
  project,
  href = projectHref(project),
  style,
}: {
  project: TProject;
  href?: string;
  style?: CSSProperties;
}) => {
  const Artifact = ARTIFACTS[project.slug];
  return Artifact ? <Artifact project={project} href={href} style={style} /> : null;
};

export default ProjectArtifact;
