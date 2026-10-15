import { posts } from "#site/content";
import { getSEOTags } from "~/lib/seo";
import { sortPosts } from "~/lib/utils";
import BlogPageClient from "./blog-page-client";

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: "Writing",
  description:
    "Notes from building AI agents: what worked, what didn't, and the numbers behind both.",
  canonicalUrlRelative: "/blog",
});

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) => {
  const { search } = await searchParams;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return <BlogPageClient posts={sortedPosts} searchTerm={search} />;
};

export default BlogPage;
