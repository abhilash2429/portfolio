import { STACK } from "~/constants/stack";
import DeskObject, { Tape } from "./desk-object";

const Notes = () => {
  return (
    <section className="notes" id="about" aria-label="About">
      <DeskObject
        label="What I build"
        className="note"
        faceClassName="grid-paper"
        before={
          <Tape style={{ left: "50%", top: -11, marginLeft: -37, transform: "rotate(-3deg)" }} />
        }
      >
        <h2>I build agents end to end.</h2>
        <ol>
          <li>
            The agent itself: the loop, the tools it can call, the sub-agents it hands work to, and
            when it should stop.
          </li>
          <li>
            Everything it plugs into: MCP servers, realtime voice, streaming UIs, queues, and the
            deploy.
          </li>
          <li>
            The checks that keep it honest: citations that resolve to the source, and a second model
            looking over the first.
          </li>
        </ol>
        <p className="note-foot">
          I&rsquo;ve sent fixes upstream to pipecat and kornia, won the TCS AI Hackathon, and made
          the Meta PyTorch OpenEnv grand finale. Away from the keyboard I follow the markets, read,
          and watch more movies than I should.
        </p>
        <div className="note-sign">Abhilash</div>
      </DeskObject>

      <DeskObject label="Tools I use" className="stack">
        <div className="stack-file">
          <span>stack.txt</span>
          <span>utf-8</span>
        </div>
        {STACK.map(({ group, items }) => (
          <div key={group} className="stack-group">
            <div className="stack-comment"># {group}</div>
            {items.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        ))}
      </DeskObject>
    </section>
  );
};

export default Notes;
