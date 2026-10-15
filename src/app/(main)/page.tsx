import { posts } from "#site/content";
import Link from "next/link";
import ContactDesk from "~/components/desk/contact-desk";
import { getContributions } from "~/components/desk/github-strip";
import HeroDesk from "~/components/desk/hero-desk";
import Notes from "~/components/desk/notes";
import Path from "~/components/desk/path";
import WorkDesk from "~/components/desk/work-desk";
import { EducationList, educationList } from "~/components/education";
import { HackathonList, hackathons } from "~/components/hackathons";
import { OpenSourceList, contributions } from "~/components/open-source";
import { FeaturedPost, PostList } from "~/components/post";
import { ProjectList, projects } from "~/components/project";
import Reveal from "~/components/reveal";
import { SectionHead } from "~/components/ui/row-list";
import { sortPosts } from "~/lib/utils";

const HomePage = async () => {
  const contributionData = await getContributions();
  const [latest, ...rest] = sortPosts(posts.filter((post) => post.published));

  return (
    <>
      <HeroDesk contributions={contributionData} />

      <Reveal>
        <Notes />
      </Reveal>

      <section id="work" aria-label="Work" className="scroll-mt-24">
        <Reveal>
          <p className="col text-center font-serif text-[28px] leading-[1.15] sm:text-[34px]">
            Here&rsquo;s what I&rsquo;ve been{" "}
            <Link
              href="/work"
              className="underline decoration-1 underline-offset-[5px] hover:text-pen"
            >
              building
            </Link>{" "}
            lately&hellip;
          </p>
        </Reveal>

        <WorkDesk />

        <Reveal className="col mt-[120px]">
          <SectionHead
            title="More work"
            action={
              <Link href="/work" className="underline underline-offset-2 hover:text-pen">
                All work &rarr;
              </Link>
            }
          />
          <ProjectList projects={projects.filter((p) => !p.onDesk)} />
        </Reveal>
      </section>

      <Path />

      {latest && (
        <Reveal className="col mt-[90px] sm:mt-[140px]">
          <section id="writing" aria-labelledby="writing-title" className="scroll-mt-24">
            <SectionHead
              title="Writing"
              id="writing-title"
              action={
                <Link href="/blog" className="underline underline-offset-2 hover:text-pen">
                  All writing &rarr;
                </Link>
              }
            />
            <FeaturedPost post={latest} />
            {rest.length > 0 && (
              <div className="mt-14">
                <PostList posts={rest.slice(0, 4)} />
              </div>
            )}
          </section>
        </Reveal>
      )}

      <Reveal className="col mt-[90px] sm:mt-[110px]">
        <OpenSourceList contributions={contributions} />
      </Reveal>

      <Reveal className="col mt-[90px] sm:mt-[110px]">
        <HackathonList hackathons={hackathons} />
      </Reveal>

      <Reveal className="col mt-[90px] sm:mt-[110px]">
        <EducationList educationList={educationList} />
      </Reveal>

      <div
        aria-hidden
        className="mx-auto mt-[150px] w-[min(900px,90%)] -rotate-[0.4deg] border-t-[1.5px] border-dashed border-subtle/50"
      />

      <ContactDesk />
    </>
  );
};

export default HomePage;
