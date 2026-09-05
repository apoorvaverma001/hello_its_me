import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Target, Zap, AlertTriangle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon, HackerrankIcon } from './SocialIcons';
import { personal } from '../data/personal';
import { socials } from '../data/socials';
import { techStack, techCategories, conceptItems } from '../data/techStack';
import type { TechCategory } from '../data/techStack';

/**
 * About Component — Comprehensive "about me" section
 * 
 * Sub-sections rendered as cards:
 * 1. Socials — Row of social media icon links
 * 2. Resume — Prominent download button
 * 3. Goals — Bullet list of career objectives
 * 4. Tech Stack — Grid of technology logos from Devicon CDN
 * 5. Strengths — Tag chips showing key strengths
 * 6. Weaknesses — Tag chips (shows self-awareness and honesty)
 * 
 * Each card uses a consistent style with rounded corners, subtle border,
 * and shadow for visual separation from the background.
 */

// Map social platform names to their custom SVG icons
// lucide-react doesn't include brand logos, so we use our own inline SVGs
const socialIcons: Record<string, React.ReactNode> = {
  Github: <GithubIcon size={22} />,
  Linkedin: <LinkedinIcon size={22} />,
  Twitter: <TwitterIcon size={22} />,
  Leetcode: <LeetcodeIcon size={22} />,
  Hackerrank: <HackerrankIcon size={22} />,
};

// Reusable card wrapper — keeps styling consistent across all sub-sections
function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-base-light/50 border border-secondary/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** All tab labels including "All" */
type TabLabel = "All" | TechCategory;
const allTabs: TabLabel[] = ["All", ...techCategories];

/**
 * TechStackTabs — Tabbed tech stack with animated filtering
 * 
 * Tabs: All | Expertise | Frontend | Backend | AI & Data | Tools & DevOps | Concepts
 * - "All" & category tabs show icon grids filtered by category
 * - "Concepts" tab shows text-only chips (no icons)
 * - Active tab has a sliding underline indicator
 * - Content fades/slides in on tab change via AnimatePresence
 */
function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<TabLabel>("All");

  // Filter tech items based on the active tab
  const filteredTech =
    activeTab === "All"
      ? techStack
      : activeTab === "Concepts"
        ? [] // Concepts tab uses conceptItems, not techStack
        : techStack.filter((t) => t.category.includes(activeTab as TechCategory));

  const showConcepts = activeTab === "Concepts" || activeTab === "All";
  const showTechGrid = activeTab !== "Concepts";

  return (
    <Card>
      <h3 className="text-heading font-bold text-xl mb-6">Tech Stack</h3>

      {/* Tab bar — horizontally scrollable on mobile */}
      <div className="relative mb-8">
        <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {allTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-200
                ${activeTab === tab
                  ? 'text-heading bg-heading/10'
                  : 'text-body/60 hover:text-body hover:bg-secondary/10'
                }`}
            >
              {tab}
              {/* Animated underline indicator */}
              {activeTab === tab && (
                <motion.div
                  layoutId="tech-tab-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-heading rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        {/* Fade edge hint for scrollable tabs on mobile */}
        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-base-light/50 to-transparent pointer-events-none sm:hidden" />
      </div>

      {/* Animated tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Icon grid for tech items */}
          {showTechGrid && filteredTech.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {filteredTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/20 transition-colors duration-200"
                >
                  <img
                    src={tech.iconUrl}
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm text-body/70 text-center font-bold">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Concepts chips (shown on Concepts tab or All tab) */}
          {showConcepts && conceptItems.length > 0 && (
            <div className={showTechGrid && filteredTech.length > 0 ? 'mt-8' : ''}>
              {activeTab === "All" && (
                <h4 className="text-body/60 text-sm font-semibold uppercase tracking-wider mb-4">
                  Concepts & Methodologies
                </h4>
              )}
              <div className="flex flex-wrap gap-2">
                {conceptItems.map((concept) => (
                  <motion.span
                    key={concept}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-heading/10 text-body rounded-full text-sm font-semibold border border-heading/15 hover:bg-heading/20 transition-colors duration-200 cursor-default"
                  >
                    {concept}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          More About Me
        </motion.h2>

        <div className="space-y-8">
          {/* Row 1: Socials + Resume side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Socials Card */}
            <Card>
              <h3 className="text-heading font-bold text-xl mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="p-3 bg-secondary/20 hover:bg-secondary/40 rounded-xl text-body transition-all duration-200 hover:scale-110"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {socialIcons[social.icon]}
                  </a>
                ))}
              </div>
            </Card>

            {/* Resume Card */}
            <Card>
              <h3 className="text-heading font-bold text-xl mb-4">Resume</h3>
              <p className="text-body/70 mb-4 text-sm">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <a
                href={personal.resumePath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-heading hover:bg-heading-dark text-base-light rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-md"
              >
                <Download size={18} />
                Download Resume
              </a>
            </Card>
          </div>

          {/* Row 2: Goals (full width) */}
          <Card>
            <h3 className="text-heading font-bold text-xl mb-4 flex items-center gap-2">
              <Target size={22} />
              Goals
            </h3>
            <ul className="space-y-3">
              {personal.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3 text-body/80">
                  {/* Decorative bullet dot */}
                  <span className="w-2 h-2 bg-heading rounded-full mt-2 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Row 3: Tech Stack with category tabs */}
          <TechStackTabs />

          {/* Row 4: Strengths + Weaknesses side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Strengths Card */}
            <Card>
              <h3 className="text-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Zap size={22} />
                Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.strengths.map((strength, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-heading/15 text-body rounded-full text-sm font-bold border border-heading/20"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </Card>

            {/* Weaknesses Card — showing self-awareness is a strength in itself */}
            <Card>
              <h3 className="text-heading font-bold text-xl mb-4 flex items-center gap-2">
                <AlertTriangle size={22} />
                Areas of Growth
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.weaknesses.map((weakness, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary/20 text-body/80 rounded-full text-sm font-bold border border-secondary/30"
                  >
                    {weakness}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
