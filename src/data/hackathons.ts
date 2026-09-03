// Hackathons & Certificates data file
// ================================
// Add your hackathon participations, awards, and certifications below.

export interface HackathonItem {
  name: string;
  image: string;         // Path to certificate image or badge
  date: string;         
  verifyUrl?: string;     // Optional link to verify credential
}

export const hackathons: HackathonItem[] = [
  {
    name: "[EVENT_NAME_1] — e.g., HackMIT 2023",
    image: "/images/cisco.png",
    date: "2023",
    verifyUrl: "https://www.ijrte.org/portfolio-item/b70990711222/",
  },
  {
    name: "Dextrix Hackathon 2.0",
    image: "/images/hackcert.png",
    date: "2019",
    verifyUrl: "#",
  },
  {
    name: "[EVENT_NAME_3] — e.g., Google Code Jam",
    image: "/images/pub2.png",
    date: "2023",
    verifyUrl: "#",
  },
  {
    name: "[EVENT_NAME_4] — e.g., MongoDB Developer Certification",
    image: "/images/cert-placeholder.svg",
    date: "2023",
    verifyUrl: "#",
  },
];
