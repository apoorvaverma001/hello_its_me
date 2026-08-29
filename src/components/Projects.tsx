import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

/**
 * Projects Component — Responsive grid of project cards
 * 
 * This is a layout component — it doesn't contain any project data itself.
 * It maps over the projects array from data/projects.ts and renders
 * a ProjectCard for each one.
 * 
 * Grid behavior:
 * - 1 column on mobile (cards stack)
 * - 2 columns on md (768px+)
 * - 2 columns on lg (kept at 2 so cards have room for accordion content)
 */

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body/60 text-center mb-16 max-w-2xl mx-auto"
        >
          Click "View Details" on any card to explore the technical depth behind each project.
        </motion.p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
