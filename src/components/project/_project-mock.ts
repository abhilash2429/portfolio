import { StaticImageData } from "next/image";

import Macky from "~/assets/images/cover/Macky.png";
import IntelliCredit from "~/assets/images/cover/IntelliCredit.png";
import DeepRead from "~/assets/images/cover/DeepRead.png";
import EnterpriseSearch from "~/assets/images/cover/EnterpriseSearch.jpg";
import AfterCare from "~/assets/images/cover/AfterCare.jpg";
import AnonChat from "~/assets/images/cover/Anon-Chat.png";

export type TProject = {
  slug: string;
  title: string;
  /** One line for archive rows */
  summary: string;
  /** Handwritten caption under the desk object */
  caption?: string;
  /** Small print under the caption */
  captionMeta?: string;
  /** ISO month the work shipped, from the repo's first commit */
  date: string;
  stacks: string[];
  /** Has a case study at /work/[slug] */
  caseStudy?: boolean;
  /** Shown as an object on the home desk */
  onDesk?: boolean;
  cover?: StaticImageData;
  previewVideo?: string;
  repoUrl?: string;
  deployedURL?: string;
  demoUrl?: string;
};

const projects: TProject[] = [
  {
    slug: "bladerunner",
    title: "Bladerunner",
    summary:
      "Watchdog agent for agent fleets. Catches policy breaks in traces, quarantines the run, patches the guardrail and confirms the fix.",
    caption: "Bladerunner, a watchdog agent for agent fleets",
    captionMeta: "Case study. Built solo at neatHack, Oct 2026",
    date: "2026-10",
    stacks: ["Python", "neatlogs", "Bedrock", "OpenCode", "DuckDB", "FastAPI"],
    caseStudy: true,
    onDesk: true,
    repoUrl: "https://github.com/abhilash2429/BladeRunner",
  },
  {
    slug: "macky",
    title: "Macky",
    summary:
      "Voice assistant in the Mac notch. Push-to-talk realtime speech, background sub-agents and MCP tools.",
    caption: "Macky, voice in, action out from the Mac notch",
    captionMeta: "Realtime speech, sub-agents, MCP tools. Swift, Jun 2026",
    date: "2026-06",
    stacks: ["Swift", "GPT-Realtime-2", "Cloudflare Workers", "Azure AI Foundry", "MCP"],
    onDesk: true,
    cover: Macky,
    repoUrl: "https://github.com/abhilash2429/Macky",
    deployedURL: "https://heymacky.vercel.app/",
    demoUrl: "https://youtu.be/SIRyFt7ISx0",
  },
  {
    slug: "oversight-arena",
    title: "Oversight Arena",
    summary:
      "RL environment where a supervisor LLM manages five worker agents, some deceptive, some colluding. GRPO on Qwen2.5-3B.",
    caption: "Oversight Arena, a supervisor for five worker agents",
    captionMeta: "Case study. RL environment, GRPO on Qwen2.5-3B, Apr 2026",
    date: "2026-04",
    stacks: ["Python", "OpenEnv", "GRPO", "Qwen2.5-3B", "Gradio"],
    caseStudy: true,
    onDesk: true,
    repoUrl: "https://github.com/abhilash2429/overSight_Arena",
    deployedURL: "https://huggingface.co/spaces/abhilash242299/oversight-arena",
  },
  {
    slug: "enterprise-search",
    title: "Enterprise Search",
    summary:
      "Cited answers over 512K company docs, served to agents over MCP. +20 over BM25 on a held-out test split.",
    caption: "Enterprise Search, cited answers over 512K docs",
    captionMeta: "Case study. Served to agents over MCP, Oct 2026",
    date: "2026-10",
    stacks: ["Python", "Qwen3 Embedding", "Qwen3 Reranker", "Bedrock", "MCP", "Next.js"],
    caseStudy: true,
    onDesk: true,
    cover: EnterpriseSearch,
    previewVideo: "/previews/enterprise-search.mp4",
    repoUrl: "https://github.com/abhilash2429/enterprise-search-rag",
  },
  {
    slug: "m-rag",
    title: "M-RAG",
    summary:
      "Multimodal RAG over hardware datasheets. Routes the question, retrieves figure and table crops, cites the page.",
    caption: "M-RAG, answers that live in figures",
    captionMeta: "FastAPI, SSE, Aug 2026",
    date: "2026-08",
    stacks: ["Python", "FastAPI", "FAISS", "MinerU", "Azure OpenAI"],
    onDesk: true,
    repoUrl: "https://github.com/abhilash2429/Multimodal-Rag",
  },
  {
    slug: "deepread",
    title: "DeepRead",
    summary:
      "ML paper to implementation brief, with a cited Q&A agent and a skeptic pass. LangGraph, FastAPI.",
    date: "2026-02",
    stacks: ["LangGraph", "LangChain", "FastAPI", "Azure OpenAI", "PostgreSQL"],
    cover: DeepRead,
    repoUrl: "https://github.com/abhilash2429/DeepRead",
    deployedURL: "https://deep-read-seven.vercel.app/",
  },
  {
    slug: "gitmergeenv",
    title: "GitMergeEnv",
    summary: "RL environment where an agent resolves merge conflicts block by block. OpenEnv.",
    date: "2026-03",
    stacks: ["Python", "OpenEnv", "FastAPI"],
    repoUrl: "https://github.com/abhilash2429/GitMergeEnv",
  },
  {
    slug: "aftercare",
    title: "AfterCare",
    summary:
      "Discharge summary in, picture and voice medicine schedule out. Never changes a dose. Lambda, Bedrock, DynamoDB.",
    date: "2026-09",
    stacks: ["Next.js", "AWS Lambda", "Textract", "Bedrock", "DynamoDB", "Polly"],
    cover: AfterCare,
    repoUrl: "https://github.com/abhilash2429/afterCare",
    deployedURL: "https://main.d2nozesb14q5me.amplifyapp.com",
  },
  {
    slug: "intelli-credit",
    title: "Intelli Credit",
    summary: "Credit appraisal engine with Celery pipelines and XGBoost risk scoring. IIT Hyderabad hackathon finalist.",
    date: "2026-03",
    stacks: ["XGBoost", "LangChain", "Celery", "FastAPI"],
    cover: IntelliCredit,
    repoUrl: "https://github.com/abhilash2429/Intelli-Credit",
    deployedURL: "https://intelli-credit-kappa.vercel.app/",
  },
  {
    slug: "anon-chat",
    title: "Anon-Chat",
    summary: "Stateless Node.js WebSockets, 1,000+ concurrent connections.",
    date: "2025-11",
    stacks: ["Node.js", "WebSockets", "Next.js", "TypeScript"],
    cover: AnonChat,
    repoUrl: "https://github.com/abhilash2429/Anon-chat",
    deployedURL: "https://anon-chat2.vercel.app/",
  },
];

export const formatMonth = (iso: string) =>
  new Date(`${iso}-01T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export default projects;
