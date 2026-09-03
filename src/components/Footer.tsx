import { ArrowUp } from 'lucide-react';

/**
 * Footer Component — Page footer with back-to-top button
 * 
 * Contains:
 * - "Made with ❤️" tagline (personality touch)
 * - Quick navigation links (for users who scroll to the bottom)
 * - Copyright notice
 * - Floating back-to-top button (scrolls smoothly to hero section)
 * 
 * WHY a footer?
 * - Provides navigation closure (users know they've reached the end)
 * - Quick links save scrolling back up for navigation
 * - Copyright is standard professional practice
 * - Back-to-top button is essential UX for long single-page sites
 */

// Quick navigation links — subset of the main nav
const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Tagline */}
          <p className="text-body/70 text-lg">
            Made with <span className="text-body font-bold"> ⋆˙⟡ 🖥️ ⋆˙⟡ 🎧 ⋆˙⟡ 🤎 ⋆˙⟡ </span> by{' '}
            <span className="text-body font-bold">Apoorva Verma</span>
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-heading hover:text-body text-sm font-bold transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-secondary/30 rounded-full" />

          {/* Copyright */}
          <p className="text-body/50 text-sm">
            © 2026 Apoorva Verma. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button — fixed in bottom-right corner.
            Uses fixed positioning so it's always accessible regardless of scroll position.
            The circular shape and arrow icon are universally understood as "go to top". */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-heading hover:bg-heading-dark text-base-light rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-40 cursor-pointer"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
