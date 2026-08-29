import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { hackathons } from '../data/hackathons';

/**
 * HackathonsCertificates Component — Achievement showcase grid
 * 
 * Displays hackathon participations, awards, and certifications
 * as a responsive card grid.
 * 
 * Each card shows:
 * - Badge/certificate image
 * - Event name, organizer, date
 * - Description of achievement
 * - Optional "Verify" link to credential URL
 * 
 * Layout: 1 column mobile → 2 columns tablet → 3 columns desktop
 */

export default function HackathonsCertificates() {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Hackathons & Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body/60 text-center mb-16 max-w-2xl mx-auto"
        >
          Achievements that pushed me beyond my comfort zone.
        </motion.p>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-base-light/50 border border-secondary/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Certificate/Badge Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={`Certificate or badge for ${item.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Event Name */}
                <h3 className="text-body font-bold text-lg mb-2 flex items-start gap-2">
                  <Award size={18} className="text-heading mt-1 flex-shrink-0" />
                  <span>{item.name}</span>
                </h3>

                {/* Organizer */}
                <p className="text-heading text-sm font-bold mb-1">{item.organizer}</p>

                {/* Date */}
                <p className="text-body/50 text-sm flex items-center gap-1 mb-3">
                  <Calendar size={14} />
                  {item.date}
                </p>

                {/* Description */}
                <p className="text-body/70 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Verify Link — only shown if verifyUrl is provided */}
                {item.verifyUrl && (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-heading hover:text-body text-sm font-bold transition-colors"
                  >
                    <ExternalLink size={14} />
                    Verify Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
