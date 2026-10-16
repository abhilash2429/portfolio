"use client";

import { Post } from "#site/content";
import { useMemo } from "react";
import { FeaturedPost, PostList } from "~/components/post";
import Reveal from "~/components/reveal";
import SearchInput from "~/components/search-input";
import { SectionHead } from "~/components/ui/row-list";

interface BlogPageClientProps {
  posts: Post[];
  searchTerm?: string;
}

export default function BlogPageClient({ posts, searchTerm }: BlogPageClientProps) {
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;
    const term = decodeURIComponent(searchTerm).toLowerCase();
    return posts.filter((post) => post.title.toLowerCase().includes(term));
  }, [posts, searchTerm]);

  const [latest] = posts;

  return (
    <div className="col pb-10 pt-28 sm:pt-32">
      <SectionHead
        as="h1"
        title="Writing"
        action={
          <a href="/feed.xml" className="underline underline-offset-2 hover:text-pen">
            RSS
          </a>
        }
      />
      <p className="mt-3 text-[15.5px] text-muted-foreground">
        Notes from building agents: what worked, what didn&rsquo;t, and the numbers behind both.
      </p>

      {latest && !searchTerm && (
        <Reveal>
          <FeaturedPost post={latest} />
        </Reveal>
      )}

      <Reveal className="mt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-2xl">All writing</h2>
          <SearchInput placeholder="Search posts..." />
        </div>
        <PostList posts={filteredPosts} />
      </Reveal>
    </div>
  );
}
