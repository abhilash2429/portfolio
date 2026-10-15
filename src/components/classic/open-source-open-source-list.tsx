import { GoGitMerge, GoGitPullRequest } from "react-icons/go";
import BlurText from "./ui-blur-text";
import { CustomLink } from "~/components/mdx";
import { typo } from "~/components/ui/typograpghy";
import { TContribution } from "~/components/open-source/_open-source-data";

type OpenSourceListProps = {
  contributions: TContribution[];
};

const OpenSourceList = ({ contributions }: OpenSourceListProps) => {
  return (
    <section aria-label="open source contributions" className="mt-5 space-y-6">
      <h2 className={typo({ variant: "h2" })}>
        <BlurText text="Open Source" />
      </h2>

      <ol role="list" className="!mt-8 space-y-3">
        {contributions.map((contribution) => {
          const isMerged = contribution.status === "merged";
          const Icon = isMerged ? GoGitMerge : GoGitPullRequest;

          return (
            <li key={contribution.id} role="listitem">
              <CustomLink
                href={contribution.url}
                className="!p-0 flex min-w-0 items-center gap-3 hover:!text-ring"
              >
                <Icon
                  size={16}
                  aria-hidden
                  className={
                    isMerged
                      ? "shrink-0 text-[#8250df]"
                      : "shrink-0 text-[#1a7f37] dark:text-[#3fb950]"
                  }
                />
                <span className="sr-only">
                  {isMerged ? "merged pull request" : "open pull request"}
                </span>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {contribution.repo}#{contribution.number}
                </span>
                <span className="truncate text-sm text-foreground">{contribution.title}</span>
              </CustomLink>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default OpenSourceList;
