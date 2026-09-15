import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { ShowcaseSection } from './components/ShowcaseSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InternshipSection } from './components/InternshipSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { SocialFooter } from './components/SocialFooter';
import { LaunchAnimation } from './components/LaunchAnimation';
import { ProjectDetailView } from './components/ProjectDetailView';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero-section');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [hasLaunched, setHasLaunched] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('portfolio_launched') === 'true';
    }
    return false;
  });
  const scrollPosBeforeProjectRef = useRef<number>(0);

  const handleSelectProject = (projectId: string) => {
    scrollPosBeforeProjectRef.current = window.scrollY;
    setSelectedProjectId(projectId);
  };

  const handleBackToPortfolio = () => {
    setSelectedProjectId(null);
    setActiveSection('hero-section');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Activate premium momentum scroll engine
  useSmoothScroll();

  // Programmatic scroll: easeInOutQuart — smoother acceleration curve than cubic
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const NAVBAR_H = 80;
    const target   = el.getBoundingClientRect().top + window.scrollY - NAVBAR_H;
    const start    = window.scrollY;
    const distance = target - start;
    const duration = Math.min(1100, Math.max(600, Math.abs(distance) * 0.55));
    let   startTime: number | null = null;

    // easeInOutQuart — silky S-curve: slow start, fast middle, slow end
    const ease = (t: number) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, start + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // Monitor scroll position to highlight active navbar section
  useEffect(() => {
    const sectionIds = ['hero-section', 'showcase-section', 'about-section', 'projects-section', 'internship-section', 'achievements-section', 'certificates-section', 'contact-section'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When a project is selected: ONLY display that single project!
  // NO Navbar (home, about, projects...), NO other sections, NO other content!
  if (selectedProjectId) {
    return (
      <main className="min-h-screen bg-black text-white relative flex flex-col justify-between select-none overflow-x-hidden">
        {/* Fixed full-screen background image / video */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <BackgroundVideo />
        </div>

        {/* Dedicated Single Project View */}
        <ProjectDetailView
          projectId={selectedProjectId}
          onBack={handleBackToPortfolio}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col justify-between select-none overflow-x-hidden">
      {/* Unique Futuristic Launch Boot Animation - Only runs once on initial session visit */}
      {!hasLaunched && (
        <LaunchAnimation
          onComplete={() => {
            setHasLaunched(true);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('portfolio_launched', 'true');
            }
          }}
        />
      )}

      {/* Fixed full-screen background image */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <BackgroundVideo />
      </div>

      {/* Fixed Top Navbar - stays visible while scrolling */}
      <header className="fixed top-0 z-40 w-full">
        <Navbar
          onScrollTo={scrollToSection}
          activeSection={activeSection}
        />
      </header>

      {/* Spacer to offset fixed navbar height */}
      <div className="h-[80px]" />

      {/* 1. Cinematic Hero Section */}
      <section
        id="hero-section"
        className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-between"
      >
        <HeroContent />
        <SocialFooter onOpenGlobe={() => scrollToSection('contact-section')} />
      </section>

      {/* 2. Visual Showcase Section (placed directly above About Me as requested) */}
      <div className="relative z-10">
        <ShowcaseSection onSelectProject={handleSelectProject} />
      </div>

      {/* 3. Scrolling Section: About with direct Resume link and visible celestial background */}
      <div className="relative z-10">
        <AboutSection />
      </div>

      {/* 4. Scrolling Section: Projects */}
      <div className="relative z-10">
        <PortfolioSection onSelectProject={handleSelectProject} />
      </div>

      {/* 5. Scrolling Section: Internship & Training */}
      <div className="relative z-10">
        <InternshipSection />
      </div>

      {/* 6. Scrolling Section: Achievements */}
      <div className="relative z-10">
        <AchievementsSection />
      </div>

      {/* 7. Scrolling Section: Certificates */}
      <div className="relative z-10">
        <CertificatesSection />
      </div>

      {/* 8. Scrolling Section: Contact */}
      <div className="relative z-10 pt-4 pb-16">
        <ContactSection />
      </div>

      {/* Clean Footer Bar with LinkedIn and GitHub Profile Links */}
      <footer className="relative z-10 py-10 border-t border-white/15 text-center text-sm text-zinc-200 bg-black/80 backdrop-blur-md font-mono flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/harini-donthireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full black-glass border border-white/20 text-white hover:text-white hover:border-white/40 hover:bg-white/15 text-xs sm:text-sm transition-all active:scale-95 shadow-md group cursor-pointer bg-black/80"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} className="text-[#0A66C2] group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white">LinkedIn</span>
          </a>

          <a
            href="https://github.com/donthireddyharini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full black-glass border border-white/20 text-white hover:text-white hover:border-white/40 hover:bg-white/15 text-xs sm:text-sm transition-all active:scale-95 shadow-md group cursor-pointer bg-black/80"
            aria-label="GitHub Profile"
          >
            <Github size={16} className="text-white group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white">GitHub</span>
          </a>
        </div>
        <p className="text-zinc-200 font-medium text-xs sm:text-sm">© {new Date().getFullYear()} Donthireddy Harini — All rights reserved.</p>
      </footer>
    </main>
  );
}
