import { motion } from 'framer-motion';

/**
 * Heatmap Component — CSS grid contribution calendar
 * 
 * HOW IT WORKS:
 * - Generates a grid of 52 columns × 7 rows (52 weeks × 7 days = 1 year)
 * - Each cell's color intensity represents contribution level (0-4)
 * - Contribution levels map to progressively darker shades of our palette
 * - Placeholder data is randomly generated using a seeded approach
 * 
 * WHY custom instead of embedding GitHub's image?
 * - GitHub's heatmap image doesn't match our color scheme
 * - We can style cells using our palette colors
 * - We have full control over hover effects and interactions
 * - Works for LeetCode too (no official embed exists)
 * 
 * @param title - Label above the heatmap (e.g., "GitHub Contributions")
 * @param totalCount - Stat displayed below (e.g., "847 contributions")
 * @param colorScheme - 'green' for GitHub-style, 'amber' for LeetCode-style
 */

interface HeatmapProps {
  title: string;
  totalCount: string;
  colorScheme?: 'green' | 'amber';
}

// Color intensity levels for each scheme
// Level 0 = no contribution (lightest), Level 4 = most contributions (darkest)
const colorMap = {
  green: [
    'bg-secondary/20',      // Level 0: very light (no activity)
    'bg-heading/30',         // Level 1: some activity
    'bg-heading/50',         // Level 2: moderate
    'bg-heading/70',         // Level 3: active
    'bg-heading',            // Level 4: very active
  ],
  amber: [
    'bg-secondary/20',
    'bg-base-dark/40',
    'bg-base-dark/60',
    'bg-base-dark/80',
    'bg-base-dark',
  ],
};

// Generate placeholder contribution data
// Uses a deterministic-ish approach so the heatmap looks realistic
// (clusters of activity with quiet periods, like real coding patterns)
function generatePlaceholderData(): number[] {
  const data: number[] = [];
  for (let i = 0; i < 52 * 7; i++) {
    // Create a realistic-looking pattern:
    // - Some days have no contributions (weight toward 0)
    // - Weekends have less activity
    // - Random bursts of high activity
    const dayOfWeek = i % 7;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const random = Math.random();

    if (isWeekend) {
      data.push(random > 0.7 ? Math.floor(Math.random() * 3) : 0);
    } else {
      if (random > 0.3) {
        data.push(Math.floor(Math.random() * 5));
      } else {
        data.push(0);
      }
    }
  }
  return data;
}

export default function Heatmap({ title, totalCount, colorScheme = 'green' }: HeatmapProps) {
  const data = generatePlaceholderData();
  const colors = colorMap[colorScheme];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-base-light/50 border border-secondary/30 rounded-2xl p-4 sm:p-6"
    >
      {/* Title */}
      <h3 className="text-heading font-bold text-lg mb-4">{title}</h3>

      {/* Month labels above the grid */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="min-w-[700px]">
          <div className="flex mb-1 pl-8">
            {months.map((month) => (
              <span key={month} className="text-body/50 text-xs flex-1 text-center">
                {month}
              </span>
            ))}
          </div>

          {/* Heatmap Grid
              CSS Grid with 52 columns (weeks) and 7 rows (days).
              grid-flow-col means cells fill top-to-bottom first, then move to the next column.
              This matches how real calendars work (Mon-Sun vertically, weeks horizontally). */}
          <div className="flex gap-1">
            {/* Day-of-week labels */}
            <div className="flex flex-col gap-[3px] justify-between pr-1">
              {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                <span key={i} className="text-body/40 text-[10px] h-[13px] leading-[13px]">
                  {day}
                </span>
              ))}
            </div>

            {/* The actual grid of cells */}
            <div className="grid grid-rows-7 grid-flow-col gap-[3px] flex-1">
              {data.map((level, i) => (
                <div
                  key={i}
                  className={`w-[13px] h-[13px] rounded-sm ${colors[level]} hover:ring-1 hover:ring-heading/50 transition-all duration-150`}
                  title={`Contribution level: ${level}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats + Legend */}
      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
        <span className="text-body/60 text-sm">{totalCount}</span>

        {/* Color legend — shows what each intensity level means */}
        <div className="flex items-center gap-1 text-body/50 text-xs">
          <span>Less</span>
          {colors.map((color, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </motion.div>
  );
}
