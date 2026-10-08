import { createId } from "@paralleldrive/cuid2";
import { StaticImageData } from "next/image";

// Project cover images
import Macky from "~/assets/images/cover/Macky.png";
import IntelliCredit from "~/assets/images/cover/IntelliCredit.png";
import DeepRead from "~/assets/images/cover/DeepRead.png";
import EnterpriseSearch from "~/assets/images/cover/EnterpriseSearch.jpg";
import AfterCare from "~/assets/images/cover/AfterCare.jpg";
import AnonChat from "~/assets/images/cover/Anon-Chat.png";

export type TProject = {
  id: string;
  title: string;
  description: string;
  deployedURL?: string;
  demoUrl?: string;
  cover: StaticImageData | string;
  /** Muted clip from /public that plays over the cover on hover */
  previewVideo?: string;
  /** Cover is a tall full-page screenshot that scrolls top to bottom on hover */
  coverPan?: boolean;
  stacks: string[];
  isRepo?: boolean;
  repoUrl?: string;
};

const projects: TProject[] = [
  {
    id: createId(),
    title: `Enterprise Search`,
    description:
      "Cited answers over 512K company docs. +20 points over BM25 on a held-out test split (95% CI +15.7 to +24.5).",
    cover: EnterpriseSearch,
    previewVideo: "/previews/enterprise-search.mp4",
    stacks: ["Python", "Qwen3 Embedding", "Qwen3 Reranker", "Bedrock", "MCP", "Next.js"],
    isRepo: true,
    repoUrl: "https://github.com/abhilash2429/enterprise-search-rag",
  },
  {
    id: createId(),
    title: `Macky`,
    description:
      "macOS voice assistant in the screen notch with push-to-talk real-time streaming, background sub-agent orchestration, and MCP integrations.",
    deployedURL: "https://heymacky.vercel.app/",
    demoUrl: "https://youtu.be/SIRyFt7ISx0",
    cover: Macky,
    stacks: ["Swift", "GPT-Realtime-2", "Cloudflare Workers", "Azure AI Foundry", "MCP"],
    isRepo: false,
  },
  {
    id: createId(),
    title: `DeepRead`,
    description:
      "AI system that breaks down ML research papers with a 4-stage LangGraph pipeline and an SSE-streamed PyTorch code Q&A agent.",
    deployedURL: "https://deep-read-seven.vercel.app/",
    cover: DeepRead,
    stacks: ["LangGraph", "LangChain", "FastAPI", "Gemini", "PostgreSQL"],
    isRepo: true,
    repoUrl: "https://github.com/abhilash2429/DeepRead",
  },
  {
    id: createId(),
    title: `AfterCare`,
    description:
      "Photograph a hospital discharge summary, get a picture and voice medicine schedule in your language, then check the pill box against it. Never changes a dose.",
    deployedURL: "https://main.d2nozesb14q5me.amplifyapp.com",
    cover: AfterCare,
    coverPan: true,
    stacks: ["Next.js", "AWS Lambda", "Textract", "Bedrock", "DynamoDB", "Polly"],
    isRepo: true,
    repoUrl: "https://github.com/abhilash2429/afterCare",
  },
  {
    id: createId(),
    title: `Anon-Chat`,
    description:
      "High-concurrency anonymous chat backend handling 1,000+ simultaneous connections on stateless Node.js WebSockets.",
    deployedURL: "https://anon-chat2.vercel.app/",
    cover: AnonChat,
    stacks: ["Node.js", "WebSockets", "Next.js", "TypeScript"],
    isRepo: true,
    repoUrl: "https://github.com/abhilash2429/Anon-Chat",
  },
  {
    id: createId(),
    title: `Intelli Credit`,
    description:
      "AI-powered corporate credit appraisal engine with distributed Celery pipelines and XGBoost risk scoring.",
    deployedURL: "https://intelli-credit-kappa.vercel.app/",
    cover: IntelliCredit,
    stacks: ["XGBoost", "LangChain", "Celery", "FastAPI"],
    isRepo: true,
    repoUrl: "https://github.com/abhilash2429/IITH_Argus",
  },
];

export default projects;
