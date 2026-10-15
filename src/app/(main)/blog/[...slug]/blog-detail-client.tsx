"use client";

import { Post } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import Comments from "~/components/comments";
import { MDXContent } from "~/components/mdx";
import { PostMetadata, TableOfContent } from "~/components/post";
import Tags from "~/components/tags";

interface BlogDetailClientProps {
  post: Post;
  views: number;
}

export default function BlogDetailClient({ post, views }: BlogDetailClientProps) {
  return (
    <article className="col pb-10 pt-28 sm:pt-32">
      <Link href="/blog" className="text-sm text-muted-foreground hover:text-pen">
        &larr; All writing
      </Link>

      <div className="mb-10 mt-6 space-y-8">
        <PostMetadata
          isDetailPage
          title={post.title}
          metadata={post.metadata}
          date={post.date}
          views={views}
          slug={post.slugAsParams}
        />

        <ViewTransition name={`post-cover-${post.slugAsParams}`}>
          <span className="cover-print !w-full">
            <span className="obj-face">
              <span className="relative block aspect-[1200/630]">
                <Image
                  src={post.cover}
                  alt=""
                  priority
                  fill
                  sizes="(max-width: 652px) 100vw, 620px"
                  className="object-cover"
                />
              </span>
            </span>
          </span>
        </ViewTransition>

        <TableOfContent toc={post.toc} />
      </div>

      <div className="mdx-content prose max-w-none dark:prose-invert">
        <MDXContent code={post.body} />
      </div>

      <div className="mt-12 border-t border-foreground/10 pt-6">
        <h2 className="font-serif text-xl">Tags</h2>
        <div className="mt-2">
          <Tags tags={post.tags} />
        </div>
      </div>

      <section className="mt-10 border-t border-foreground/10 pt-6">
        <h2 className="mb-4 font-serif text-2xl">Comments</h2>
        <Comments />
      </section>
    </article>
  );
}
