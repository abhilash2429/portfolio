import { posts } from "#site/content";
import AboutSection from "~/components/classic/about-section";
import ContactUs from "~/components/classic/contact-us";
import EducationList from "~/components/classic/education-education-list";
import GitHubContributions from "~/components/classic/github-contributions";
import HackathonList from "~/components/classic/hackathons-hackathon-list";
import OpenSourceList from "~/components/classic/open-source-open-source-list";
import PostList from "~/components/classic/post-post-list";
import ProjectList from "~/components/classic/project-project-list";
import Skills from "~/components/classic/skills";
import { educationList } from "~/components/education";
import { hackathons } from "~/components/hackathons";
import { contributions } from "~/components/open-source";
import { projects } from "~/components/project";
import Reveal from "~/components/reveal";
import { getSEOTags } from "~/lib/seo";
import { sortPosts } from "~/lib/utils";

export const metadata = getSEOTags({
  title: "Classic",
  description: "The classic one-page version of my portfolio.",
  canonicalUrlRelative: "/classic",
});

const ClassicPage = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="!mt-8 space-y-14">
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal delay={0.12}>
        <Skills />
      </Reveal>
      <Reveal delay={0.24}>
        <GitHubContributions />
      </Reveal>
      <ProjectList projects={projects.filter((p) => p.cover)} metadata />
      <Reveal>
        <HackathonList hackathons={hackathons} />
      </Reveal>
      <Reveal>
        <OpenSourceList contributions={contributions} />
      </Reveal>
      <Reveal>
        <PostList posts={sortedPosts.slice(0, 4)} showRss layout="single" />
      </Reveal>
      <Reveal>
        <EducationList educationList={educationList} />
      </Reveal>
      <Reveal>
        <ContactUs />
      </Reveal>
    </div>
  );
};

export default ClassicPage;
