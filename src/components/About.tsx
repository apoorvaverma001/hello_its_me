import { motion } from 'framer-motion';
import { Download, Github, Instagram, Linkedin, Twitter, Target, Zap, AlertTriangle } from 'lucide-react';
import { personal } from '../data/personal';
import { socials } from '../data/socials';
import { techStack } from '../data/techStack';

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

// Map social platform names to their lucide-react icons
// This avoids hardcoding icons in the data file
const socialIcons: Record<string, React.ReactNode> = {
  Github: <Github size={22} />,
  Linkedin: <Linkedin size={22} />,
  Twitter: <Twitter size={22} />,
  Instagram: <Instagram size={22} />,
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
          About Me
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
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/40 rounded-xl text-body transition-all duration-200 hover:scale-105"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {socialIcons[social.icon]}
                    <span className="text-sm font-bold">{social.name}</span>
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

          {/* Row 3: Tech Stack (full width grid) */}
          <Card>
            <h3 className="text-heading font-bold text-xl mb-6">Tech Stack</h3>
            {/* Responsive grid:
                - 3 columns on mobile (small icons)
                - 4 columns on sm (640px+)
                - 6 columns on lg (1024px+)
                This ensures icons don't get too cramped or too spread out */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1 }}  // Slight zoom on hover for interactivity
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/20 transition-colors duration-200"
                >
                  <img
                    src={tech.iconUrl}
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    loading="lazy"  // Lazy load: only loads when scrolled into view (performance)
                  />
                  <span className="text-xs sm:text-sm text-body/70 text-center font-bold">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>

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
