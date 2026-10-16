import RowList, { SectionHead } from "~/components/ui/row-list";
import { TEducation } from "./_education-data";

const EducationList = ({ educationList }: { educationList: TEducation[] }) => (
  <section aria-labelledby="school">
    <SectionHead title="School" id="school" />
    <RowList
      rows={educationList.map((e) => ({
        key: e.id,
        title: e.institution,
        description: e.degree,
        aside: e.duration,
        href: e.website,
      }))}
    />
  </section>
);

export default EducationList;
