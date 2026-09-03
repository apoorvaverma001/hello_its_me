import { motion } from 'framer-motion';
import { GraduationCap, BriefcaseBusiness } from 'lucide-react';
import { experiences, education } from '../data/experience';

/**
 * Experience Component — Vertical timeline
 * 
 * Structure:
 * - A vertical line (the "connector") runs down the left side
 * - Each job entry has a dot on the line and content to the right
 * - The current/latest role gets a pulsing dot and highlighted border
 * - Education section at the bottom is visually distinguished
 * 
 * WHY a timeline layout?
 * - Timelines are universally understood for showing progression
 * - Recruiters can quickly scan your career trajectory
 * - The vertical line creates visual continuity between entries
 */

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical timeline line — positioned on the left side.
              Uses absolute positioning so it doesn't affect the layout of entries.
              The line runs from top to bottom of the container. */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-secondary/50" />

          {/* Work Experience Entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"  // Left padding to clear the timeline line
              >
                {/* Timeline Dot — sits on the vertical line.
                    Current role gets a larger, pulsing dot to draw attention. */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 top-2 w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent
                      ? 'bg-heading border-heading shadow-lg shadow-heading/30 animate-pulse'
                      : 'bg-base border-secondary'
                  }`}
                />

                {/* Entry Card */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                    exp.isCurrent
                      ? 'bg-base-light/60 border-heading/30 shadow-sm'  // Highlighted for current role
                      : 'bg-base-light/30 border-secondary/20'          // Subtle for past roles
                  }`}
                >
                  {/* Header: Company + Date Range */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-body font-bold text-lg flex items-center gap-2">
                      <BriefcaseBusiness size={16} className="text-heading" />
                      {exp.company}
                    </h3>
                   
                    <span className="text-heading text-sm font-bold">{exp.dateRange} 
                      {/* Job Location
                  <p className="flex items-center gap 1"> <MapPin size={16} className="text-heading" /> Bareilly </p> */}
                    </span>
                  </div>

                  

                  {/* Job Title */}
                  <p className="text-heading font-bold mb-1">{exp.jobTitle}</p>

                  

                  {/* Responsibilities as bullet points */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-body/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* "Current" badge for the active role */}
                  {exp.isCurrent && (
                    <span className="inline-block mt-3 px-3 py-1 bg-heading/15 text-heading text-xs font-bold rounded-full">
                      Current Position
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section — visually separated from work experience */}
          <div className="mt-16 pt-8 border-t border-secondary/30">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-heading font-bold text-2xl mb-8 flex items-center gap-3 pl-12 sm:pl-20"
            >
              <GraduationCap size={28} />
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline dot for education */}
                  <div className="absolute left-2.5 sm:left-6.5 top-2 w-4 h-4 rounded-full border-2 bg-base border-heading" />

                  <div className="p-6 rounded-2xl bg-base-light/30 border border-secondary/20 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="text-body font-bold text-lg">{edu.institution}</h4>
                      <span className="text-heading text-sm font-bold">{edu.year}</span>
                    </div>
                    <p className="text-heading font-bold">{edu.degree}</p>
                    {edu.description && (
                      <p className="text-body/70 text-sm mt-2">{edu.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
