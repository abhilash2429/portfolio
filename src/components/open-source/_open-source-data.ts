import { createId } from "@paralleldrive/cuid2";

export type TContribution = {
  id: string;
  repo: string;
  number: number;
  title: string;
  status: "merged" | "open";
  url: string;
};

const contributions: TContribution[] = [
  {
    id: createId(),
    repo: "kornia/kornia",
    number: 5361,
    title: "Fix torch.compile on augmentation containers",
    status: "merged",
    url: "https://github.com/kornia/kornia/pull/5361",
  },
  {
    id: createId(),
    repo: "pipecat-ai/pipecat",
    number: 6024,
    title: "Keep the OpenAI Realtime receive loop alive",
    status: "open",
    url: "https://github.com/pipecat-ai/pipecat/pull/6024",
  },
];

export default contributions;
