import React from 'react';
import { Linkedin, Github, Mail, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SocialFooterProps {
  onOpenGlobe?: () => void;
}

export const SocialFooter: React.FC<SocialFooterProps> = ({ onOpenGlobe }) => {
  return (
    <footer className="relative z-10 flex justify-center gap-3 sm:gap-4 pb-3 sm:pb-4 md:pb-5 w-full">
      {/* LinkedIn button */}
      <a
        id="social-link-linkedin"
        href={PORTFOLIO_DATA.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="black-glass rounded-full p-3 sm:p-3.5 text-white/90 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 border border-white/20 shadow-xl bg-black/70 backdrop-blur-md"
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
        className="black-glass rounded-full p-3 sm:p-3.5 text-white/90 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 border border-white/20 shadow-xl bg-black/70 backdrop-blur-md"
      >
        <Github size={20} className="text-white" />
      </a>

      {/* Email button */}
      <a
        id="social-link-email"
        href={`mailto:${PORTFOLIO_DATA.email}`}
        aria-label="Send Email"
        className="black-glass rounded-full p-3 sm:p-3.5 text-white/90 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 border border-white/20 shadow-xl bg-black/70 backdrop-blur-md"
      >
        <Mail size={20} className="text-emerald-400" />
      </a>

      {/* Globe / Browser Contact button */}
      <button
        id="social-link-globe"
        onClick={onOpenGlobe}
        aria-label="Explore Contact and Network"
        className="black-glass rounded-full p-3 sm:p-3.5 text-white/90 hover:text-white hover:bg-white/15 transition-all focus:outline-none flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 border border-white/20 shadow-xl bg-black/70 backdrop-blur-md"
      >
        <Globe size={20} className="text-zinc-200" />
      </button>
    </footer>
  );
};
