import { posts, works } from "#site/content";
import { MetadataRoute } from "next";
import { BasePath } from "~/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = posts.map((post) => ({
    url: BasePath(`/blog/${post.slugAsParams}`),
    lastModified: post.date,
  }));

  const caseStudies = works
    .filter((work) => work.published)
    .map((work) => ({ url: BasePath(`/work/${work.slugAsParams}`), lastModified: work.date }));

  return [
    {
      url: BasePath(""),
      lastModified: new Date(),
    },

    {
      url: BasePath("/blog"),
      lastModified: new Date(),
    },
    {
      url: BasePath("/work"),
      lastModified: new Date(),
    },
    ...caseStudies,

    ...blogPosts,
  ];
}
