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
    company: "Sasahyog Technologies",
    jobTitle: "Software Developer",
    dateRange: "Jan 2024 — Present",
    description: [
      "[RESPONSIBILITY_1] — e.g., Led development of microservices architecture serving 1M+ users",
      "[RESPONSIBILITY_2] — e.g., Reduced API response times by 40% through caching strategies",
      "[RESPONSIBILITY_3] — e.g., Mentored a team of 4 junior developers",
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
