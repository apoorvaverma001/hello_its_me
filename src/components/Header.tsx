import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

/**
 * Header Component — Sticky navigation bar
 * 
 * Features:
 * - Fixed to the top of the viewport (always visible while scrolling)
 * - Backdrop-blur effect when scrolled (semi-transparent glassmorphism)
 * - Active section highlighting via Intersection Observer
 * - Mobile hamburger menu with slide-in overlay
 * - Smooth scroll to section on click
 */

// Navigation items — each maps to a section ID in the page
const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Introduction', id: 'introduction' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Consistency', id: 'consistency' },
  { label: 'Achievements', id: 'hackathons' },
  { label: 'Contact', id: 'contact' },
];

// Extract just the IDs for the scroll spy hook
const sectionIds = navItems.map((item) => item.id);

export default function Header() {
  // Track whether the user has scrolled down (to add blur effect)
  const [isScrolled, setIsScrolled] = useState(false);
  // Track mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Get the currently visible section from our custom hook
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    // Listen for scroll events to toggle the blur effect.
    // When scrollY > 20px, we add a semi-transparent background + blur.
    // This makes the header look "glassy" over the content below.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth-scroll to a section when a nav link is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-base/90 backdrop-blur-md shadow-md' // Scrolled: glassy effect
          : 'bg-transparent'                         // Top: fully transparent
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Wordmark — clicking scrolls to top */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-heading font-bold text-xl hover:text-heading-dark transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          Apoorva Verma
        </button>

        {/* Desktop Navigation — hidden on mobile (md: breakpoint = 768px+) */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-body bg-secondary/30'    // Active: highlighted
                    : 'text-heading hover:text-body hover:bg-secondary/20' // Inactive: subtle hover
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button — visible only on mobile (hidden on md+) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-heading hover:text-body transition-colors p-2 cursor-pointer"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {/* Animate between hamburger (☰) and X (✕) icons */}
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay — slides in from top when hamburger is clicked */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-base/95 backdrop-blur-md px-4 pb-4 space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-body bg-secondary/30'
                    : 'text-heading hover:text-body hover:bg-secondary/20'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
