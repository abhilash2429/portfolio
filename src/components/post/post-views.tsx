import { Eye } from "lucide-react";

interface PostViewsProps {
  views: number;
}

const PostViews = ({ views }: PostViewsProps) => {
  // A freshly published post reading "0 Views" is noise that makes it look
  // ignored. Show the counter once there is something to count.
  if (!views) return null;

  return (
    <dl>
      <dt className="sr-only">Blog post views</dt>
      <dd className="flex items-center gap-1 text-sm text-muted-foreground">
        <Eye className="size-4" aria-hidden="true" />
        <span>{views} Views</span>
      </dd>
    </dl>
  );
};

export default PostViews;
