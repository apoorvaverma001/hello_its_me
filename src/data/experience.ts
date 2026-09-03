// Experience & Education data file
// ================================
// Add your real work history and education below.
// The Experience component renders these as a vertical timeline.

export interface ExperienceItem {
  company: string;
  jobTitle: string;
  dateRange: string;
  description: string[];  // Array of bullet points
  isCurrent?: boolean;     // Highlights the latest/current role
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Sasahyog Technologies Private Limited",
    jobTitle: "Software Developer",
    dateRange: "Jan 2024 — Present",
    description: [
      "Built an AI-powered consultation platform integrating OpenAI API, Razorpay payment gateway, and Google Meet scheduling with automated WhatsApp notifications, acquiring 30+ unique visitors within weeks of launch.",
      "Engineered a multi-tenant SaaS platform serving full-lifecycle HRMS (payroll, leaves, compliance, org hierarchy) and sales CRM with strict tenant data isolation using PostgreSQL row-level security and schema-per-tenant architecture. Gathered feedback from 3+ beta clients to refine features and improve UX following Agile methodologies",
      "Automated real-time lead ingestion from social media ad campaigns, intelligent sales agent assignment, and omni-channel outreach (WhatsApp, SMS, Email, calling) reducing manual lead routing time by 80%.",
      "Implemented JWT Authentication with granular RBAC, immutable audit trails, and live sales performance analytics dashboards using WebSockets for real-time data streaming across client organizations",
      "Developed an event promotion and registration website for Rotary Club, enabling 200+ registrations, reducing manual registration effort by 90% which contributed to a sold-out event and was recognized by organizers for project excellence.",
    ],
    isCurrent: true,
  },
  // {
  //   company: "[COMPANY_NAME_2]",
  //   jobTitle: "[JOB_TITLE_2]",
  //   dateRange: "[START_DATE] — [END_DATE]",
  //   description: [
  //     "[RESPONSIBILITY_1] — e.g., Built and deployed full-stack web applications using React and Node.js",
  //     "[RESPONSIBILITY_2] — e.g., Implemented CI/CD pipelines reducing deployment time by 60%",
  //     "[RESPONSIBILITY_3] — e.g., Collaborated with cross-functional teams in an Agile environment",
  //   ],
  // },
  // {
  //   company: "[COMPANY_NAME_3]",
  //   jobTitle: "[JOB_TITLE_3]",
  //   dateRange: "[START_DATE] — [END_DATE]",
  //   description: [
  //     "[RESPONSIBILITY_1] — e.g., Developed RESTful APIs and integrated third-party services",
  //     "[RESPONSIBILITY_2] — e.g., Wrote unit and integration tests achieving 90% code coverage",
  //   ],
  // },
];

export const education: EducationItem[] = [
  {
    institution: "Galgotias University",
    degree: "Bachelor of Technology in Computer Scienc, AI/ML Specialization",
    year: "2019 — 2023",
    description: "CGPA: 8/10",
  },
  {
    institution: "St. Maria Goretti Inter College",
    degree: "Higher Secondary (XII), ISC",
    year: "2017 - 2018",
    description: "71%",
  },
  {
    institution: "St. Maria Goretti Inter College",
    degree: "Secondary (X), ICSE",
    year: "2015-2016",
    description: "91%",
  },
];
