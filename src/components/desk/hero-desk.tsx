import Image from "next/image";
import { CSSProperties } from "react";
import codingImage from "~/assets/images/coding.png";
import config from "~/config";
import DeskObject, { Tape } from "./desk-object";
import GithubStrip, { Contributions } from "./github-strip";
import { MergedIcon } from "./icons";

const delay = (i: number): CSSProperties => ({ animationDelay: `${0.1 + i * 0.12}s` });

const AgentSketch = ({ style }: { style?: CSSProperties }) => (
  <DeskObject
    href="https://github.com/abhilash2429/DeepRead"
    label="DeepRead's cited Q&A agent"
    className="sketch settle"
    faceClassName="grid-paper"
    style={style}
    before={<Tape style={{ left: "50%", top: -11, marginLeft: -37, transform: "rotate(4deg)" }} />}
  >
    <div className="sketch-file">deepread / cited_qa_agent.py</div>
    <svg viewBox="0 0 260 306" aria-hidden>
      <defs>
        <marker
          id="sk-ah"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1 L9 5 L1 9"
            fill="none"
            stroke="#2a2924"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </marker>
        <marker
          id="sk-ahr"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1 L9 5 L1 9"
            fill="none"
            stroke="#b8332a"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </marker>
      </defs>
      <g className="sketch-nodes">
        <path d="M62 8 L196 9 L197 38 L61 37 Z" />
        <text x="129" y="29">
          question
        </text>
        <path d="M61 60 L197 59 L196 89 L62 90 Z" />
        <text x="129" y="80">
          retrieve
        </text>
        <path d="M62 112 L196 111 L198 141 L61 142 Z" />
        <text x="129" y="132">
          grade evidence
        </text>
        <path d="M61 164 L197 165 L196 194 L62 193 Z" />
        <text x="129" y="184">
          generate
        </text>
        <path d="M62 216 L197 215 L196 245 L61 246 Z" />
        <text x="129" y="236">
          verify citations
        </text>
        <path d="M61 268 L196 267 L197 298 L62 297 Z" />
        <text x="129" y="288">
          answer
        </text>
      </g>
      <g className="sketch-edges">
        {[39, 91, 143, 195, 247].map((y) => (
          <path key={y} d={`M129 ${y} L129 ${y + 18}`} markerEnd="url(#sk-ah)" />
        ))}
      </g>
      <path
        className="sketch-loop"
        d="M199 232 C 250 228, 252 184, 201 180"
        markerEnd="url(#sk-ahr)"
      />
      <text className="sketch-note" x="200" y="262" transform="rotate(-5 200 262)">
        revise once
      </text>
      <text className="sketch-side" x="6" y="72">
        BM25 +
      </text>
      <text className="sketch-side" x="6" y="88">
        dense
      </text>
      <text className="sketch-side" x="6" y="183">
        streams
      </text>
    </svg>
  </DeskObject>
);

const HeroDesk = ({ contributions }: { contributions: Contributions }) => {
  return (
    <section className="desk" aria-label="Intro">
      <div className="desk-text">
        <h1
          className="settle font-serif text-[40px] leading-[1.05] sm:text-[clamp(40px,4.4vw,60px)]"
          style={delay(0)}
        >
          I build AI{" "}
          <span className="circled drawn">
            agents
            <svg viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden>
              <path d="M64 4 C 18 2, 2 22, 8 38 C 14 56, 92 60, 112 40 C 124 26, 104 6, 60 7 C 46 8, 36 12, 30 15" />
            </svg>
          </span>
          <br />
          that do the work.
        </h1>
        <p
          className="settle mx-auto mt-[22px] max-w-[540px] text-[17px] leading-normal text-muted-foreground"
          style={delay(1)}
        >
          Lately: a voice agent in your Mac&rsquo;s notch, a watchdog that polices agent fleets, and
          a supervisor trained with RL to catch deceptive workers.
        </p>
        <p className="settle mt-3.5 text-[14.5px] text-subtle" style={delay(2)}>
          {config.appName}, applied AI engineer.{" "}
          <span className="inline-flex items-center gap-2">
            <i className="size-[7px] rounded-full bg-[#3f8f5a] shadow-[0_0_0_3px_rgba(63,143,90,.18)]" />
            Open to full-time remote roles.
          </span>
        </p>
      </div>

      <DeskObject
        href="#about"
        label="About Abhilash"
        className="badge settle"
        style={delay(3)}
        before={<div className="badge-clip" />}
      >
        <div className="badge-hole" />
        <Image src={codingImage} alt={config.appName} placeholder="blur" priority sizes="212px" />
        <b>{config.appName}</b>
        <span>{config.appDesignation}</span>
        <div className="badge-bars" />
      </DeskObject>

      <DeskObject
        href="#hackathons"
        label="Meta PyTorch OpenEnv Grand Finale, finalist"
        className="pass settle"
        style={delay(4)}
        before={<div className="pass-lanyard" />}
      >
        <small>Meta x PyTorch x OpenEnv</small>
        <b>Grand Finale</b>
        <small>Bangalore, May 2026</small>
        <span className="pass-tag">finalist</span>
      </DeskObject>

      <AgentSketch style={delay(5)} />

      <GithubStrip data={contributions} className="settle" style={delay(6)} />

      <DeskObject
        href="https://github.com/kornia/kornia/pull/5361"
        label="kornia pull request 5361, merged"
        className="pr settle"
        style={delay(7)}
      >
        <div className="pr-repo">
          <MergedIcon />
          kornia/kornia
        </div>
        <b>Fix torch.compile on augmentation containers</b>
        <div className="pr-num">#5361</div>
        <div className="stamp">merged</div>
      </DeskObject>
    </section>
  );
};

export default HeroDesk;
