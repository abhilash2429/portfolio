import { posts } from "#site/content";
import Link from "next/link";
import { PostList } from "~/components/post";
import { SectionHead } from "~/components/ui/row-list";
import { getPostsByTagSlug, sortPosts } from "~/lib/utils";

interface TagDetailPageProps {
  params: Promise<{
    tag: string;
  }>;
}

const TagDetailPage = async ({ params }: TagDetailPageProps) => {
  const { tag } = await params;
  const title = tag.split("-").join(" ");
  const displayPosts = sortPosts(
    getPostsByTagSlug(
      posts.filter((post) => post.published),
      tag,
    ),
  );

  return (
    <div className="col pb-10 pt-28 sm:pt-32">
      <SectionHead as="h1" title={`#${title}`} />
      <PostList posts={displayPosts} />
      <p className="mt-6 text-sm text-muted-foreground" id="main-nav">
        Or browse{" "}
        <Link href="/tags" className="underline underline-offset-2 hover:text-pen">
          all tags
        </Link>{" "}
        and{" "}
        <Link href="/blog" className="underline underline-offset-2 hover:text-pen">
          all writing
        </Link>
        .
      </p>
    </div>
  );
};

export default TagDetailPage;
