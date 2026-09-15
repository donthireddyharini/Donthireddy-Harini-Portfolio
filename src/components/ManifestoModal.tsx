import React from 'react';
import { X, Sparkles, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProjects: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({
  isOpen,
  onClose,
  onExploreProjects,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="liquid-glass w-full max-w-3xl max-h-[90vh] rounded-3xl p-6 sm:p-10 flex flex-col text-white shadow-2xl border border-white/15 overflow-hidden"
        style={{ background: 'rgba(10, 10, 14, 0.85)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Compass size={16} className="text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                Philosophy & Craft
              </span>
            </div>
            <h2 
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl sm:text-5xl font-normal tracking-tight text-white italic"
            >
              {PORTFOLIO_DATA.manifesto.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-1">
              {PORTFOLIO_DATA.manifesto.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Manifesto"
            className="liquid-glass rounded-full p-2.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Manifesto Content */}
        <div className="overflow-y-auto space-y-6 py-6 pr-1 custom-scrollbar text-white/90 leading-relaxed font-serif text-base sm:text-lg">
          {PORTFOLIO_DATA.manifesto.paragraphs.map((p, idx) => (
            <p key={idx} className="tracking-wide">
              {idx === 0 && (
                <span className="text-4xl sm:text-5xl float-left mr-3 mt-1 font-serif text-white/80 leading-none">
                  W
                </span>
              )}
              {idx === 0 ? p.slice(1) : p}
            </p>
          ))}

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <div>
              <span className="text-sm font-semibold text-white block">Harini Donthireddy</span>
              <span className="text-xs text-white/50 font-mono">Full Stack & Systems Engineer</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onExploreProjects();
              }}
              className="liquid-glass rounded-full px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/15 transition-all flex items-center gap-2 border border-white/15"
            >
              <Sparkles size={14} className="text-emerald-400" />
              <span>Explore The Projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
