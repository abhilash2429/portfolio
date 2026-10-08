import { posts } from "#site/content";
import AboutSection from "~/components/about-section";
import { PostList } from "~/components/post";
import { ProjectList, projects } from "~/components/project";
import Skills from "~/components/skills";
import { EducationList, educationList } from "~/components/education";
import { HackathonList, hackathons } from "~/components/hackathons";
import { sortPosts } from "~/lib/utils";
import ContactUs from "../../components/contact-us";
import GitHubContributions from "~/components/github-contributions";
import Reveal from "~/components/reveal";
import { OpenSourceList, contributions } from "~/components/open-source";

const HomePage = () => {
  const publishedPosts = posts.filter((post) => post.published);
  const sortedPosts = sortPosts(publishedPosts);

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
      <ProjectList projects={projects.slice(0, 4)} metadata />
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

export default HomePage;
