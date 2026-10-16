import { CSSProperties } from "react";
import config from "~/config";
import DeskObject, { Tape } from "./desk-object";

type Day = { date: string; count: number; level: number };
export type Contributions = { total: number; days: Day[] } | null;

const USERNAME = config.social.github.split("/").pop();

/** Same public API react-github-calendar used, fetched at build and refreshed daily */
export const getContributions = async (): Promise<Contributions> => {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return { total: data.total.lastYear, days: data.contributions };
  } catch {
    return null;
  }
};

const GithubStrip = ({
  data,
  className,
  style,
}: {
  data: Contributions;
  className?: string;
  style?: CSSProperties;
}) => {
  const pad = data ? new Date(data.days[0].date).getUTCDay() : 0;

  return (
    <DeskObject
      href={config.social.github}
      label="GitHub contributions"
      className={`strip ${className ?? ""}`}
      style={style}
      before={
        <>
          <Tape style={{ left: -18, top: -6, transform: "rotate(-28deg)" }} />
          <Tape style={{ right: -22, top: -4, transform: "rotate(24deg)" }} />
        </>
      }
    >
      {data && (
        <div className="strip-grid" aria-hidden>
          {Array.from({ length: pad }, (_, i) => (
            <i key={`pad-${i}`} style={{ visibility: "hidden" }} />
          ))}
          {data.days.map((d) => (
            <i key={d.date} data-l={d.level} title={`${d.count} on ${d.date}`} />
          ))}
        </div>
      )}
      <div className="strip-meta">
        <span>github.com/{USERNAME}</span>
        <span>
          {data ? `${data.total} contributions, last 12 months` : "contributions, last 12 months"}
        </span>
      </div>
    </DeskObject>
  );
};

export default GithubStrip;
