import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Consistency from './components/Consistency';
import HackathonsCertificates from './components/HackathonsCertificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App Component — Main application layout
 * 
 * This is the root component that assembles all sections into a single page.
 * 
 * Structure:
 * - <Header /> is fixed/sticky (rendered outside <main>)
 * - <main> contains all content sections in order
 * - <Footer /> comes after main
 * 
 * Each section has a unique `id` attribute that corresponds to the
 * nav links in the Header component. When a nav link is clicked,
 * the browser smooth-scrolls to the matching section.
 * 
 * The component itself has no logic — it's purely compositional.
 * All data and interactivity lives within individual section components.
 */

function App() {
  return (
    <div className="font-andika min-h-screen bg-base text-body">
      {/* Header is positioned fixed, so it floats above all content */}
      <Header />

      {/* Main content area — semantic <main> tag for accessibility.
          Screen readers use this to identify the primary content area. */}
      <main>
        <Hero />
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Consistency />
        <HackathonsCertificates />
        <Contact />
      </main>

      {/* Footer — semantic <footer> tag */}
      <Footer />
    </div>
  );
}

export default App;
