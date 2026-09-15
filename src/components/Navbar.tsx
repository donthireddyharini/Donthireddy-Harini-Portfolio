import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo, activeSection }) => {
  const navScrollItems = [
    { id: 'hero-section', label: 'Home' },
    { id: 'about-section', label: 'About' },
    { id: 'projects-section', label: 'Projects' },
    { id: 'internship-section', label: 'Experience' },
    { id: 'achievements-section', label: 'Achievements' },
    { id: 'certificates-section', label: 'Certificates' },
    { id: 'contact-section', label: 'Contact' },
  ];

  return (
    <nav className="relative z-30 pl-4 sm:pl-6 pr-4 sm:pr-6 py-4 sm:py-6 w-full">
      <div className="black-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between max-w-5xl mx-auto border border-white/20 bg-black/85 backdrop-blur-2xl shadow-2xl">
        {/* Brand Logo: "DH" Monogram Symbol */}
        <button
          id="navbar-brand-logo"
          onClick={() => onScrollTo('hero-section')}
          className="flex items-center gap-2.5 text-white hover:opacity-95 transition-all focus:outline-none cursor-pointer group"
          aria-label="Donthireddy Harini - DH Home"
          title="Donthireddy Harini (Home)"
        >
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-emerald-500/10 shadow-lg group-hover:border-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all duration-300 group-active:scale-95">
            {/* Ambient subtle glow ring */}
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            {/* Monogram "DH" Typography */}
            <span
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="relative text-lg sm:text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-100 to-amber-200 select-none leading-none"
            >
              DH
            </span>

            {/* Micro emerald pulse accent */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-zinc-950 shadow-sm" />
          </div>
        </button>

        {/* Action and Navigation buttons */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {navScrollItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.label.toLowerCase()}`}
              onClick={() => onScrollTo(item.id)}
              className={`text-xs sm:text-sm font-medium px-2.5 sm:px-3.5 py-1.5 rounded-full transition-all cursor-pointer focus:outline-none ${
                activeSection === item.id && item.id !== 'hero-section'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-zinc-200 hover:text-white hover:bg-white/15'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Resume Link in Navbar: Opens in new tab */}
          <a
            id="nav-btn-resume"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Resume in new tab"
            className="text-xs sm:text-sm font-medium px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 hover:bg-emerald-400 hover:text-black transition-all cursor-pointer focus:outline-none flex items-center gap-1.5 border border-emerald-400/30 active:scale-95"
          >
            <FileText size={13} className="shrink-0" />
            <span>Resume</span>
            <ExternalLink size={11} className="opacity-70 shrink-0" />
          </a>
        </div>
      </div>
    </nav>
  );
};
