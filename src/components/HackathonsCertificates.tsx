import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { hackathons } from '../data/hackathons';

/**
 * HackathonsCertificates Component — Peek Carousel
 * 
 * HOW THIS CAROUSEL WORKS:
 * 1. All cards live in a single horizontal flex row (never unmounted)
 * 2. The entire row slides left/right via translateX on the container
 * 3. The outer wrapper has overflow:hidden but with padding so
 *    adjacent cards "peek" from the sides
 * 4. The active card is full opacity + scale, neighbors are faded + smaller
 * 5. Transition duration is 0.6s for a smooth, readable slide
 * 
 * WHY this approach vs AnimatePresence?
 * - No mount/unmount = no flickering or missing cards
 * - Single translateX = predictable, debuggable positioning
 * - CSS transitions handle the slide animation natively
 */

export default function HackathonsCertificates() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? hackathons.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === hackathons.length - 1 ? 0 : prev + 1));
  };

  // Handle swipe gestures — drag left/right to navigate
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 50;
    if (info.offset.x > threshold) goToPrevious();
    else if (info.offset.x < -threshold) goToNext();
  };

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

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="hidden sm:flex absolute -left-4 lg:-left-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-base-light/90 border border-secondary/30 rounded-full shadow-lg hover:shadow-xl hover:bg-base-light transition-all duration-200 cursor-pointer"
            aria-label="Previous achievement"
          >
            <ChevronLeft size={22} className="text-heading" />
          </button>

          <button
            onClick={goToNext}
            className="hidden sm:flex absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-base-light/90 border border-secondary/30 rounded-full shadow-lg hover:shadow-xl hover:bg-base-light transition-all duration-200 cursor-pointer"
            aria-label="Next achievement"
          >
            <ChevronRight size={22} className="text-heading" />
          </button>

          {/* Outer clip container — overflow hidden but with horizontal padding
              so adjacent cards peek through from the sides.
              The px-[12%] creates the peek gap on each side. */}
          <div className="overflow-hidden mx-auto">
            {/* Draggable track — this entire row slides via translateX.
                All cards are always rendered. The active card index determines
                how far the row is shifted. */}
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={{
                // Shift the row so the active card is centered.
                // Each card is 80% of container width, so we offset by
                // (activeIndex * 80%) and then add 10% to center it
                // (leaving 10% peek on each side).
                x: `calc(-${activeIndex * 80}% + 10%)`,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 30,
                duration: 0.6,
              }}
              style={{ cursor: 'grab' }}
              whileDrag={{ cursor: 'grabbing' }}
            >
              {hackathons.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: '80%' }}
                  >
                    {/* Card — rectangular shape, with opacity/scale transition
                        based on whether it's the active card or a neighbor. */}
                    <div
                      className={`bg-base-light/50 border rounded-2xl overflow-hidden shadow-sm transition-all duration-500 ease-out ${
                        isActive
                          ? 'border-heading/30 shadow-lg scale-100 opacity-100'
                          : 'border-secondary/20 shadow-sm scale-[0.92] opacity-50'
                      }`}
                    >
                      {/* Certificate/Badge Image — rectangular aspect ratio */}
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img
                          src={item.image}
                          alt={`Certificate or badge for ${item.name}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-5 sm:p-6">
                        {/* Event Name */}
                        <h3 className="text-body font-bold text-lg mb-2 flex items-start gap-2">
                          <Award size={18} className="text-heading mt-1 flex-shrink-0" />
                          <span>{item.name}</span>
                        </h3>

                        {/* Date */}
                        <p className="text-body/50 text-sm flex items-center gap-1 mb-3">
                          <Calendar size={14} />
                          {item.date}
                        </p>

                        {/* Description
                        <p className="text-body/70 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p> */}

                        {/* Verify Link */}
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
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {hackathons.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? 'w-8 h-3 bg-heading'
                    : 'w-3 h-3 bg-secondary/40 hover:bg-secondary/60'
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-body/50 text-sm mt-3">
            {activeIndex + 1} / {hackathons.length}
          </p>
        </div>
      </div>
    </section>
  );
}
