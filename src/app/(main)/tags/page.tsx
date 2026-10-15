import { posts } from "#site/content";
import { PostList } from "~/components/post";
import { Tag } from "~/components/tags";
import { SectionHead } from "~/components/ui/row-list";
import { getAllTags, sortPosts, sortedTagsCount } from "~/lib/utils";

const TagsPage = () => {
  const published = sortPosts(posts.filter((post) => post.published));
  const tags = getAllTags(published);
  const sortedTags = sortedTagsCount(tags);

  return (
    <div className="col pb-10 pt-28 sm:pt-32">
      <SectionHead as="h1" title="Tags" />
      <ul role="list" id="main-nav" className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {sortedTags.map((tag) => (
          <Tag key={tag} tag={tag} count={tags[tag]} />
        ))}
      </ul>

      {[...sortedTags].sort().map((tag) => (
        <section key={tag} aria-labelledby={`tag-${tag}`} className="mt-12">
          <h2 id={`tag-${tag}`} className="font-serif text-2xl">
            #{tag}
          </h2>
          <PostList posts={published.filter((post) => post.tags.includes(tag))} />
        </section>
      ))}
    </div>
  );
};

export default TagsPage;
