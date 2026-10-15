import { Post } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { shortDate } from "./post-list";

/** Latest post up top: tilted cover print, title, excerpt, pill link */
const FeaturedPost = ({ post }: { post: Post }) => (
  <Link href={`/blog/${post.slugAsParams}`} className="el-focus-styles group mt-7 block rounded-md">
    <ViewTransition name={`post-cover-${post.slugAsParams}`}>
      <span className="cover-print">
        <span className="obj-face">
          <span className="relative block aspect-[1200/630]">
            <Image
              src={post.cover}
              alt=""
              fill
              sizes="(min-width: 860px) 400px, 100vw"
              className="object-cover"
            />
          </span>
        </span>
      </span>
    </ViewTransition>
    <ViewTransition name={`post-title-${post.slugAsParams}`}>
      <h3 className="mt-8 font-serif text-[30px] leading-[1.15]">{post.title}</h3>
    </ViewTransition>
    <div className="mt-1.5 text-[13.5px] text-subtle">
      <time dateTime={post.date}>{shortDate(post.date)}</time>
      <span className="mx-2">/</span>
      {post.metadata.readingTime} min read
    </div>
    <p className="mt-3 text-[15.5px] text-muted-foreground">{post.description}</p>
    <span className="mt-[18px] inline-flex items-center gap-1.5 rounded-full border border-pen px-3.5 py-1.5 text-sm text-pen transition-colors group-hover:bg-pen group-hover:text-background">
      Continue reading &rarr;
    </span>
  </Link>
);

export default FeaturedPost;
