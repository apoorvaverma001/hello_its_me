import { motion } from 'framer-motion';
import { Briefcase, Building2, Clock, User } from 'lucide-react';
import { personal } from '../data/personal';

/**
 * Introduction Component — Profile overview section
 * 
 * Layout: Two columns on desktop (image left, details right), stacked on mobile.
 * 
 * Features:
 * - Circular profile image with decorative border and shadow
 * - Key details displayed with icons for visual scanning
 * - About Me paragraph with full description
 * - Scroll-triggered fade-in animation (only animates once when first visible)
 */

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport.once: true means the animation only plays once
          // (when the element first enters the viewport, not every time you scroll past)
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Introduction
        </motion.h2>

        {/* Two-column grid: 
            - On mobile (default): single column, items stack vertically
            - On lg (1024px+): two columns side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}   // Slides in from the left
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring behind the image — creates a layered depth effect */}
              <div className="absolute inset-0 bg-secondary/30 rounded-full scale-110 blur-sm" />
              <img
                src="/images/pic.png"
                alt={`Profile photo of ${personal.name}`}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-secondary shadow-xl"
              />
            </div>
          </motion.div>

          {/* Right Column: Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}    // Slides in from the right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Name */}
            <h3 className="text-body text-2xl sm:text-3xl font-bold">
              {personal.name}
            </h3>

            {/* Detail items with icons — makes scanning easier than plain text */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-body">
                <Briefcase size={20} className="text-heading flex-shrink-0" />
                <span>{personal.jobTitle}</span>
              </div>
              <div className="flex items-center gap-3 text-body">
                <Building2 size={20} className="text-heading flex-shrink-0" />
                <span>{personal.company}</span>
              </div>
              <div className="flex items-center gap-3 text-body">
                <Clock size={20} className="text-heading flex-shrink-0" />
                <span>{personal.experienceYears} of experience</span>
              </div>
              <div className="flex items-center gap-3 text-body">
                <User size={20} className="text-heading flex-shrink-0" />
                <span>Based in India</span>
              </div>
            </div>

            {/* About Me paragraph */}
            <div>
              <h4 className="text-heading font-bold text-lg mb-2">About Me</h4>
              <p className="text-body/80 leading-relaxed">
                {personal.aboutText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
