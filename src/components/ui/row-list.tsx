import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "~/lib/utils";

export type Row = {
  key: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  href?: string;
  /** Image shown next to the cursor while the row is hovered */
  preview?: string;
};

const external = (href: string) => !href.startsWith("/") && !href.startsWith("#");

const RowInner = ({ title, description, aside }: Row) => (
  <>
    <div className="min-w-0">
      <div className="text-[15.5px] text-foreground transition-colors group-hover:text-pen">
        {title}
      </div>
      {description && <div className="mt-0.5 text-[13.5px] text-subtle">{description}</div>}
    </div>
    {aside && (
      <span className="shrink-0 whitespace-nowrap text-[13.5px] tabular-nums text-subtle">
        {aside}
      </span>
    )}
  </>
);

const rowClass = "group flex items-baseline justify-between gap-5 py-[13px]";

/** Hairline-divided rows: title left, date or status right */
const RowList = ({ rows, className }: { rows: Row[]; className?: string }) => (
  <ul role="list" className={cn("mt-4 border-b border-foreground/10", className)}>
    {rows.map((row) => (
      <li key={row.key} className="border-t border-foreground/10">
        {row.href ? (
          external(row.href) ? (
            <a
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              data-preview={row.preview}
              className={cn(rowClass, "el-focus-styles rounded-sm")}
            >
              <RowInner {...row} />
            </a>
          ) : (
            <Link
              href={row.href}
              data-preview={row.preview}
              className={cn(rowClass, "el-focus-styles rounded-sm")}
            >
              <RowInner {...row} />
            </Link>
          )
        ) : (
          <div className={rowClass}>
            <RowInner {...row} />
          </div>
        )}
      </li>
    ))}
  </ul>
);

export const SectionHead = ({
  title,
  id,
  as: Tag = "h2",
  action,
}: {
  title: string;
  id?: string;
  as?: "h1" | "h2";
  action?: ReactNode;
}) => (
  <div className="flex items-baseline justify-between gap-4">
    <Tag id={id} className="font-serif text-[30px] leading-tight">
      {title}
    </Tag>
    {action && <div className="text-sm text-muted-foreground">{action}</div>}
  </div>
);

export default RowList;
