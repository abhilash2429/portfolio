import { MergedIcon, OpenPrIcon } from "~/components/desk/icons";
import RowList, { SectionHead } from "~/components/ui/row-list";
import { cn } from "~/lib/utils";
import { TContribution } from "./_open-source-data";

const Status = ({ status }: { status: TContribution["status"] }) => {
  const merged = status === "merged";
  const Icon = merged ? MergedIcon : OpenPrIcon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[13px]",
        merged
          ? "bg-[#8250df]/10 text-[#8250df] dark:text-[#b392f0]"
          : "bg-[#1a7f37]/10 text-[#1a7f37] dark:text-[#56d364]",
      )}
    >
      <Icon className="size-[13px]" />
      {status}
    </span>
  );
};

const OpenSourceList = ({ contributions }: { contributions: TContribution[] }) => (
  <section aria-labelledby="open-source">
    <SectionHead title="Open source" id="open-source" />
    <RowList
      rows={contributions.map((c) => ({
        key: c.id,
        title: c.title,
        description: `${c.repo} #${c.number}`,
        aside: <Status status={c.status} />,
        href: c.url,
      }))}
    />
  </section>
);

export default OpenSourceList;
