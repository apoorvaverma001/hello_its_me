import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/projects';

/**
 * ProjectCard Component — Individual project card with accordion
 * 
 * Structure:
 * - Top: Project image/screenshot
 * - Middle: Title + Live Demo / GitHub buttons
 * - Bottom: Expandable accordion with detailed info
 * 
 * WHY an accordion?
 * - Shows the most important info (title, links) immediately
 * - Detailed info (what, why, learnings, challenges) is one click away
 * - Prevents the page from being overwhelmingly long
 * - AnimatePresence from framer-motion handles smooth expand/collapse
 * 
 * @param project - Project data object from projects.ts
 */

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Track whether the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-base-light/50 border border-secondary/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      {/* Project Image — aspect-video (16:9) ensures consistent card heights */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle gradient overlay on the image — makes text more readable if overlaid */}
        <div className="absolute inset-0 bg-gradient-to-t from-body/10 to-transparent" />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-body font-bold text-xl mb-3">{project.title}</h3>

        {/* CTA Buttons — always visible, not inside the accordion */}
        <div className="flex gap-3 mb-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-heading hover:bg-heading-dark text-base-light rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 border border-heading text-heading hover:bg-heading hover:text-base-light rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
            aria-label={`View GitHub repository of ${project.title}`}
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        </div>

        {/* Accordion Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-heading hover:text-body font-bold text-sm transition-colors w-full cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Collapse project details' : 'Expand project details'}
        >
          <span>{isOpen ? 'Hide Details' : 'View Details'}</span>
          {/* Chevron rotates 180° when open — provides visual feedback */}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Accordion Content — AnimatePresence handles enter/exit animations.
            The content smoothly expands its height when opening and collapses when closing.
            This is much smoother than a simple show/hide. */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}     // Start: collapsed and invisible
              animate={{ height: 'auto', opacity: 1 }} // End: natural height, fully visible
              exit={{ height: 0, opacity: 0 }}          // Exit: collapse back
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-secondary/20 space-y-4">
                {/* Tech Stack Tags */}
                <div>
                  <h4 className="text-heading font-bold text-sm mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.details.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/20 text-body/80 rounded-full text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detail sections — each with a label and paragraph */}
                <DetailSection title="What I Built" content={project.details.what} />
                <DetailSection title="Why I Made It" content={project.details.why} />
                <DetailSection title="What I Learnt" content={project.details.learnings} />
                <DetailSection title="Challenges & Solutions" content={project.details.challenges} />
                <DetailSection title="Tradeoffs" content={project.details.tradeoffs} />
                <DetailSection title="Scalability" content={project.details.scalability} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/**
 * DetailSection — A small reusable sub-component for accordion detail items.
 * Keeps the accordion content DRY (Don't Repeat Yourself).
 */
function DetailSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="text-heading font-bold text-sm mb-1">{title}</h4>
      <p className="text-body/70 text-sm leading-relaxed">{content}</p>
    </div>
  );
}
