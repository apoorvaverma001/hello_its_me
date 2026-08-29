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
    company: "[COMPANY_NAME_1]",
    jobTitle: "[JOB_TITLE_1]",
    dateRange: "[START_DATE] — Present",
    description: [
      "[RESPONSIBILITY_1] — e.g., Led development of microservices architecture serving 1M+ users",
      "[RESPONSIBILITY_2] — e.g., Reduced API response times by 40% through caching strategies",
      "[RESPONSIBILITY_3] — e.g., Mentored a team of 4 junior developers",
    ],
    isCurrent: true,
  },
  {
    company: "[COMPANY_NAME_2]",
    jobTitle: "[JOB_TITLE_2]",
    dateRange: "[START_DATE] — [END_DATE]",
    description: [
      "[RESPONSIBILITY_1] — e.g., Built and deployed full-stack web applications using React and Node.js",
      "[RESPONSIBILITY_2] — e.g., Implemented CI/CD pipelines reducing deployment time by 60%",
      "[RESPONSIBILITY_3] — e.g., Collaborated with cross-functional teams in an Agile environment",
    ],
  },
  {
    company: "[COMPANY_NAME_3]",
    jobTitle: "[JOB_TITLE_3]",
    dateRange: "[START_DATE] — [END_DATE]",
    description: [
      "[RESPONSIBILITY_1] — e.g., Developed RESTful APIs and integrated third-party services",
      "[RESPONSIBILITY_2] — e.g., Wrote unit and integration tests achieving 90% code coverage",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "[INSTITUTION_1]",
    degree: "[DEGREE_1] — e.g., B.Tech in Computer Science",
    year: "[YEAR_1] — e.g., 2018 — 2022",
    description: "[OPTIONAL_DESCRIPTION] — e.g., CGPA: 8.5/10, Dean's List",
  },
  {
    institution: "[INSTITUTION_2]",
    degree: "[DEGREE_2] — e.g., Higher Secondary (XII)",
    year: "[YEAR_2] — e.g., 2016 — 2018",
  },
];
