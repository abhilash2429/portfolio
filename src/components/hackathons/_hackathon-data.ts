export type THackathon = {
  id: string;
  title: string;
  role: string;
  date: string;
  link?: string;
  summary: string;
};

const hackathons: THackathon[] = [
  {
    id: "tcs-ai",
    title: "TCS AI Hackathon",
    role: "winner",
    date: "Jul 2026",
    link: "https://drive.google.com/file/d/10CNecnstq9_I7sGFySNo0rsbjeyZCStA/view?usp=sharing",
    summary:
      "First place with a 5-person team. An agent that turns bulk customer feedback into complaint categories, sentiment trends and next actions.",
  },
  {
    id: "openenv",
    title: "Meta PyTorch OpenEnv Hackathon",
    role: "grand finalist",
    date: "May 2026",
    link: "https://drive.google.com/file/d/1WuTUidWNzSoFeN349NXxyhVj-Tt4AKbd/view",
    summary:
      "Cleared Round 1 solo with GitMergeEnv, then took Oversight Arena to the in-person grand finale in Bangalore.",
  },
  {
    id: "iith",
    title: "IIT Hyderabad Innovation Hackathon",
    role: "finalist",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/12bqjwjR-m-M1cy7cO535n9wDSOPxa5L8/view",
    summary:
      "Intelli Credit, an AI credit appraisal engine with Celery pipelines and XGBoost risk scoring.",
  },
];

export default hackathons;
