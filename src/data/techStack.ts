// Tech stack data file
// ================================
// Icons are sourced from: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/
// Each item has a category for tabbed filtering in the About section

export type TechCategory =
  | "Expertise"
  | "Frontend"
  | "Backend"
  | "AI & Data"
  | "Tools & DevOps"
  | "Concepts";

export interface TechItem {
  name: string;
  iconUrl: string;
  category: TechCategory[];
}

/** Ordered list of tab labels. "All" is prepended automatically in the UI. */
export const techCategories: TechCategory[] = [
  "Expertise",
  "Frontend",
  "Backend",
  "AI & Data",
  "Tools & DevOps",
  "Concepts",
];

export const techStack: TechItem[] = [
  // ── Frontend ────────────────────────────────────────────
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: ["Expertise", "Frontend"],
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: ["Expertise", "Frontend"],
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: ["Expertise", "Frontend"],
  },
  {
    name: "Tailwind CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: ["Frontend"],
  },
  {
    name: "Next.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: ["Frontend"],
  },
  {
    name: "HTML5",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: ["Frontend"],
  },
  {
    name: "CSS3",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: ["Frontend"],
  },

  // ── Backend ─────────────────────────────────────────────
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: ["Expertise", "Backend"],
  },
  {
    name: "Python",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: ["Expertise", "Backend", "AI & Data"],
  },
  {
    name: "Express",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: ["Backend"],
  },
  {
    name: "MongoDB",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: ["Backend"],
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: ["Backend"],
  },
  {
    name: "Redis",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    category: ["Backend"],
  },

  // ── AI & Data ───────────────────────────────────────────
  {
    name: "TensorFlow",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    category: ["AI & Data"],
  },
  {
    name: "PyTorch",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    category: ["AI & Data"],
  },
  {
    name: "OpenAI API",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg",
    category: ["AI & Data"],
  },
  {
    name: "LangChain",
    iconUrl:
      "https://cdn.simpleicons.org/langchain/1C3C3C",
    category: ["AI & Data"],
  },
  {
    name: "Gemini",
    iconUrl:
      "https://cdn.simpleicons.org/googlegemini/8E75B2",
    category: ["AI & Data"],
  },
  {
    name: "Claude",
    iconUrl:
      "https://cdn.simpleicons.org/anthropic/191919",
    category: ["AI & Data"],
  },
  {
    name: "Cursor",
    iconUrl:
      "https://cdn.simpleicons.org/cursor/000000",
    category: ["AI & Data", "Tools & DevOps"],
  },
  {
    name: "Antigravity",
    iconUrl:
      "https://cdn.simpleicons.org/google/4285F4",
    category: ["AI & Data", "Tools & DevOps"],
  },
  {
    name: "Pandas",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    category: ["AI & Data"],
  },
  {
    name: "NumPy",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    category: ["AI & Data"],
  },

  // ── Tools & DevOps ─────────────────────────────────────
  {
    name: "Docker",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: ["Tools & DevOps"],
  },
  {
    name: "AWS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    category: ["Expertise", "Tools & DevOps"],
  },
  {
    name: "Git",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: ["Tools & DevOps"],
  },
  {
    name: "GitHub",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: ["Tools & DevOps"],
  },
  {
    name: "Linux",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: ["Tools & DevOps"],
  },
  {
    name: "VS Code",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: ["Tools & DevOps"],
  },
];

/**
 * Concept items don't have icons — they're displayed as text chips.
 * Kept separate so the grid renderer can handle them differently.
 */
export const conceptItems: string[] = [
  "REST APIs",
  "GraphQL",
  "Microservices",
  "CI/CD",
  "Agile / Scrum",
  "System Design",
  "Data Structures",
  "Algorithms",
  "OOP",
  "Design Patterns",
  "Testing (TDD)",
  "Responsive Design",
  "RAG",
  "Prompt Engineering",
];
