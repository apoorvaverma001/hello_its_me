// Social media links data file
// ================================

export interface Social {
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/[YOUR_GITHUB_USERNAME]",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "[YOUR_LINKEDIN_URL]",
    icon: "Linkedin",
  },
  {
    name: "Twitter / X",
    url: "[YOUR_TWITTER_URL]",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    url: "[YOUR_INSTAGRAM_URL]",
    icon: "Instagram",
  },
];
