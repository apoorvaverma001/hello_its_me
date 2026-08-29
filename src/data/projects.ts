// Projects data file
// ================================
// Each project becomes a card in the Projects grid.
// The "details" object powers the accordion expand/collapse section.
// Add your real projects below.

export interface ProjectDetails {
  techStack: string[];     // List of technologies used
  what: string;            // What the project is
  why: string;             // Motivation / problem statement
  learnings: string;       // Key takeaways
  challenges: string;      // Difficulties and how you solved them
  tradeoffs: string;       // Design or technical tradeoffs
  scalability: string;     // How it could scale
}

export interface Project {
  title: string;
  image: string;           // Path to project screenshot/image
  liveUrl: string;         // URL to live demo
  githubUrl: string;       // URL to GitHub repo
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    title: "[PROJECT_TITLE_1]",
    image: "/images/project-placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    details: {
      techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
      what: "[WHAT_1] — e.g., A real-time collaborative code editor with syntax highlighting and live cursors.",
      why: "[WHY_1] — e.g., Wanted to understand WebSocket communication and operational transforms for real-time sync.",
      learnings: "[LEARNINGS_1] — e.g., Learned about conflict resolution in distributed systems and debouncing strategies.",
      challenges: "[CHALLENGES_1] — e.g., Handling concurrent edits was tricky — solved with operational transform algorithm.",
      tradeoffs: "[TRADEOFFS_1] — e.g., Chose eventual consistency over strict consistency for better user experience.",
      scalability: "[SCALABILITY_1] — e.g., Could add horizontal scaling with Redis pub/sub for multi-server support.",
    },
  },
  {
    title: "[PROJECT_TITLE_2]",
    image: "/images/project-placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    details: {
      techStack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      what: "[WHAT_2] — e.g., A URL shortener with analytics dashboard tracking clicks, geography, and referrers.",
      why: "[WHY_2] — e.g., Built to practice system design concepts like rate limiting, caching, and analytics.",
      learnings: "[LEARNINGS_2] — e.g., Gained experience with Redis caching and database indexing for high-throughput reads.",
      challenges: "[CHALLENGES_2] — e.g., Handling high concurrency for popular links — solved with read replicas and caching.",
      tradeoffs: "[TRADEOFFS_2] — e.g., Used Base62 encoding over UUIDs for shorter URLs, accepting collision risk.",
      scalability: "[SCALABILITY_2] — e.g., Could shard by URL hash and add CDN-level redirect caching.",
    },
  },
  {
    title: "[PROJECT_TITLE_3]",
    image: "/images/project-placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    details: {
      techStack: ["React", "Tailwind CSS", "Firebase", "Stripe"],
      what: "[WHAT_3] — e.g., An e-commerce platform with cart, checkout, and payment integration.",
      why: "[WHY_3] — e.g., Wanted to build a full-stack product from scratch including payment processing.",
      learnings: "[LEARNINGS_3] — e.g., Learned about PCI compliance, webhook handling, and inventory management.",
      challenges: "[CHALLENGES_3] — e.g., Cart synchronization across tabs — solved with BroadcastChannel API.",
      tradeoffs: "[TRADEOFFS_3] — e.g., Chose Firebase over custom backend for faster iteration, accepting vendor lock-in.",
      scalability: "[SCALABILITY_3] — e.g., Would migrate to a dedicated backend with queue-based order processing at scale.",
    },
  },
  {
    title: "[PROJECT_TITLE_4]",
    image: "/images/project-placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    details: {
      techStack: ["Next.js", "TypeScript", "Prisma", "AWS"],
      what: "[WHAT_4] — e.g., A task management app with real-time updates and team collaboration features.",
      why: "[WHY_4] — e.g., Built to explore SSR, ISR, and real-time data patterns with Next.js.",
      learnings: "[LEARNINGS_4] — e.g., Deep understanding of server-side rendering trade-offs and caching strategies.",
      challenges: "[CHALLENGES_4] — e.g., Real-time updates with SSR was complex — used hybrid CSR for dynamic content.",
      tradeoffs: "[TRADEOFFS_4] — e.g., Chose Prisma over raw SQL for developer experience, accepting ORM overhead.",
      scalability: "[SCALABILITY_4] — e.g., Could add WebSocket rooms for team-scoped real-time updates.",
    },
  },
];
