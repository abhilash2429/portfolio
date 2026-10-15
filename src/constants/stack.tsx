export type StackGroup = { group: string; items: string[] };

export const STACK: StackGroup[] = [
  {
    group: "agents & ml",
    items: [
      "LangGraph, LangChain",
      "OpenAI Agents SDK, MCP",
      "Agentic RAG, Qdrant",
      "PyTorch, TensorFlow",
      "scikit-learn, NumPy, Pandas",
    ],
  },
  {
    group: "backend",
    items: ["FastAPI, Node.js, Express", "WebSockets, Docker"],
  },
  {
    group: "data",
    items: ["PostgreSQL, MongoDB"],
  },
  {
    group: "languages",
    items: ["Python, TypeScript, Swift", "JavaScript, C, SQL"],
  },
  {
    group: "frontend & tools",
    items: ["Next.js, React, Tailwind", "Git, GitHub"],
  },
];
