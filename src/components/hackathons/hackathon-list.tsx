import RowList, { SectionHead } from "~/components/ui/row-list";
import { THackathon } from "./_hackathon-data";

const HackathonList = ({ hackathons }: { hackathons: THackathon[] }) => (
  <section aria-labelledby="hackathons" className="scroll-mt-28">
    <SectionHead title="Hackathons" id="hackathons" />
    <RowList
      rows={hackathons.map((h) => ({
        key: h.id,
        title: `${h.title}, ${h.role}`,
        description: h.summary,
        aside: h.date,
        href: h.link,
      }))}
    />
  </section>
);

export default HackathonList;
