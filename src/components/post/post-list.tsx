import { Post } from "#site/content";
import ContentNotFound from "../ui/content-not-found";
import RowList from "../ui/row-list";

const shortDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const PostList = ({ posts }: { posts: Post[] }) =>
  posts.length > 0 ? (
    <RowList
      rows={posts.map((post) => ({
        key: post.slug,
        title: post.title,
        aside: <time dateTime={post.date}>{shortDate(post.date)}</time>,
        href: `/blog/${post.slugAsParams}`,
      }))}
    />
  ) : (
    <ContentNotFound text="No posts found" />
  );

export { shortDate };
export default PostList;
