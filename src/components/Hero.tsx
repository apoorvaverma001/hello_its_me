import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personal } from '../data/personal';

/**
 * Hero Component — Full viewport landing section
 * 
 * Features:
 * - Full 100vh height (fills the entire screen)
 * - Staggered fade-in animation for headline, subtitle, and scroll indicator
 * - Typing effect for the role/tagline (types one character at a time)
 * - Bouncing chevron at the bottom to hint "scroll down"
 * - Decorative gradient background shapes for visual depth
 */

export default function Hero() {
  // State for the typing animation
  const [typedText, setTypedText] = useState('');
  const fullText = personal.jobTitle;

  useEffect(() => {
    // Typing effect: adds one character every 80ms
    // This creates a typewriter-like animation for the job title
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer); // Stop when all characters are typed
      }
    }, 80);

    // Cleanup: stop the interval if the component unmounts mid-animation
    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToIntro = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Decorative Background Elements
          These are purely visual — soft gradient circles that add depth
          and visual interest to the plain background color. They use
          absolute positioning so they don't affect the text layout. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right warm glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        {/* Bottom-left subtle glow */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-heading/20 rounded-full blur-3xl" />
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content — uses framer-motion for staggered entrance animations */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Greeting — fades in first (delay: 0s) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}     // Start: invisible, 20px below
          animate={{ opacity: 1, y: 0 }}       // End: fully visible, original position
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-heading text-lg sm:text-xl mb-4 font-bold"
        >
          Hello there 👋 I'm
        </motion.p>

        {/* Name — fades in second (delay: 0.4s) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          {personal.name}
        </motion.h1>

        {/* Typing Effect Subtitle — fades in third (delay: 0.8s) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-heading text-xl sm:text-2xl md:text-3xl mb-8 h-10"
        >
          <span>{typedText}</span>
          {/* Blinking cursor — appears while typing, uses CSS animation */}
          <span className="inline-block w-[3px] h-7 bg-heading ml-1 animate-pulse" />
        </motion.div>

        {/* Tagline — fades in fourth (delay: 1.2s) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-body/70 text-base sm:text-lg max-w-2xl mx-auto mb-12"
        >
          Crafting digital experiences that are both beautiful and functional.
        </motion.p>
      </div>

      {/* Scroll Down Indicator — bounces to hint "there's more below" */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        onClick={scrollToIntro}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-heading hover:text-body transition-colors cursor-pointer"
        aria-label="Scroll down to see more"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
