import React from 'react';
import { Linkedin, Github, Mail, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SocialFooterProps {
  onOpenGlobe?: () => void;
}

export const SocialFooter: React.FC<SocialFooterProps> = ({ onOpenGlobe }) => {
  return (
    <footer className="relative z-10 flex justify-center gap-4 pb-12 w-full">
      {/* LinkedIn button */}
      <a
        id="social-link-linkedin"
        href={PORTFOLIO_DATA.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 border border-white/10 shadow-lg"
      >
        <Linkedin size={20} className="text-[#0A66C2]" />
      </a>

      {/* GitHub button */}
      <a
        id="social-link-github"
        href={PORTFOLIO_DATA.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 border border-white/10 shadow-lg"
      >
        <Github size={20} className="text-white" />
      </a>

      {/* Email button */}
      <a
        id="social-link-email"
        href={`mailto:${PORTFOLIO_DATA.email}`}
        aria-label="Send Email"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 border border-white/10 shadow-lg"
      >
        <Mail size={20} className="text-emerald-400" />
      </a>

      {/* Globe / Contact button */}
      <button
        id="social-link-globe"
        onClick={onOpenGlobe}
        aria-label="Explore Contact and Network"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 border border-white/10 shadow-lg"
      >
        <Globe size={20} />
      </button>
    </footer>
  );
};
