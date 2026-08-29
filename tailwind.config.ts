/** @type {import('tailwindcss').Config} */
export default {
  // "content" tells Tailwind which files to scan for class names.
  // It only generates CSS for classes it actually finds in these files,
  // keeping the final CSS bundle small.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette from the design spec.
      // These become usable as bg-base, text-heading, border-secondary, text-body, etc.
      colors: {
        base: {
          DEFAULT: '#FFDAB3',       // Page background, card backgrounds
          light: '#FFF0DC',         // Lighter shade for hover states, subtle backgrounds
          dark: '#F5C48A',          // Darker shade for active states, pressed buttons
        },
        secondary: {
          DEFAULT: '#C8AAAA',       // Borders, subtle accents, hover states, dividers
          light: '#DCC5C5',         // Lighter shade for hover
          dark: '#B08F8F',          // Darker shade for active states
        },
        heading: {
          DEFAULT: '#9F8383',       // All section headings, nav links
          light: '#B89E9E',         // Lighter shade for hover
          dark: '#876A6A',          // Darker shade for emphasis
        },
        body: {
          DEFAULT: '#574964',       // Paragraphs, descriptions, labels
          light: '#6E5F7A',         // Lighter shade
          dark: '#43374F',          // Darker shade for emphasis
        },
      },
      // Andika font family from Google Fonts.
      // Usage: className="font-andika"
      fontFamily: {
        andika: ['"Andika"', 'sans-serif'],
      },
      // Custom animation keyframes for micro-interactions
      animation: {
        'bounce-slow': 'bounce 2s infinite',        // Slow bounce for scroll indicator
        'fade-in': 'fadeIn 0.6s ease-out forwards',  // Fade-in for sections
        'slide-up': 'slideUp 0.6s ease-out forwards', // Slide-up entrance
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
