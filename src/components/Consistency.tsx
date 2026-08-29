import { motion } from 'framer-motion';
import Heatmap from './Heatmap';

/**
 * Consistency Component — GitHub + LeetCode heatmaps
 * 
 * Displays two contribution heatmaps side by side to demonstrate
 * consistent coding activity.
 * 
 * WHY show this?
 * - Consistency is one of the most valued traits in developers
 * - Heatmaps provide visual proof of regular practice
 * - Having both GitHub (projects) and LeetCode (DSA) shows breadth
 * 
 * Layout: Side by side on desktop (md+), stacked on mobile
 */

export default function Consistency() {
  return (
    <section id="consistency" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Consistency
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body/60 text-center mb-16 max-w-2xl mx-auto"
        >
          Building great things requires showing up every day.
        </motion.p>

        {/* Two-column grid for heatmaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Heatmap
            title="GitHub Contributions"
            totalCount="847 contributions in the last year"
            colorScheme="green"
          />
          <Heatmap
            title="LeetCode Activity"
            totalCount="312 problems solved"
            colorScheme="amber"
          />
        </div>
      </div>
    </section>
  );
}
