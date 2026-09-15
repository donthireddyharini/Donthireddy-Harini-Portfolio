import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Terminal, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ATTACHED_PROJECTS, ProjectData } from './ProjectShowcaseCards';

interface ProjectDetailViewProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ projectId, onBack }) => {
  // Scroll to top on mount and support Esc key to navigate back
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  const portfolioProj: Project | undefined = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  const attachedProj: ProjectData | undefined = ATTACHED_PROJECTS.find(p => p.id === projectId);

  const title = portfolioProj?.title || attachedProj?.title || 'Project Details';
  const category = portfolioProj?.category || attachedProj?.category || 'Software Engineering';
  const tagline = attachedProj?.tagline || '';
  const description = portfolioProj?.description || attachedProj?.description || '';
  const highlights = portfolioProj?.highlights || [];
  const techStack = portfolioProj?.techStack || attachedProj?.techStack || [];
  const repoUrl = portfolioProj?.repoUrl || PORTFOLIO_DATA.github;
  const demoUrl = portfolioProj?.demoUrl;
  const imageUrl = portfolioProj?.imageUrl || attachedProj?.imageUrl;
  const keyMetric = attachedProj?.keyMetric;
  const period = portfolioProj?.period;
  const status = portfolioProj?.status;

  return (
    <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-5xl mx-auto animate-fade-in">
      {/* Dedicated Project Header Bar (No home/about/project navbar tabs) */}
      <header className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/15">
        <button
          id="back-to-portfolio-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full black-glass border border-white/20 bg-black/80 hover:bg-black text-white hover:text-emerald-300 transition-all cursor-pointer text-xs sm:text-sm font-mono shadow-xl hover:scale-105 active:scale-95 group"
          aria-label="Back to Portfolio"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-300 font-semibold">
            {category}
          </span>
        </div>
      </header>

      {/* Main Single Project Presentation Card */}
      <main className="flex-1 w-full">
        <article className="black-glass rounded-3xl p-6 sm:p-10 border border-white/20 bg-black/85 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Meta Badges */}
          <div className="relative z-10 flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-mono text-emerald-300 font-semibold px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              {category}
            </span>
            {status && (
              <span className="text-xs font-mono text-white px-3 py-1 rounded-full bg-black/80 border border-white/20">
                {status}
              </span>
            )}
            {period && (
              <span className="text-xs font-mono text-zinc-300 px-3 py-1 rounded-full bg-black/80 border border-white/20 flex items-center gap-1.5">
                <Calendar size={12} className="text-zinc-400" />
                {period}
              </span>
            )}
            {keyMetric && (
              <span className="text-xs font-mono text-amber-300 font-medium px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 flex items-center gap-1.5">
                <Activity size={12} className="text-amber-400" />
                {keyMetric}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="relative z-10 text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.1] mb-2"
          >
            {title}
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="relative z-10 text-sm sm:text-base md:text-lg font-mono text-amber-300/90 mb-6 font-medium">
              {tagline}
            </p>
          )}

          {/* 16:9 Aspect Video/Image Screenshot Banner (Full width, contained, no cropping) */}
          {imageUrl && (
            <div className="relative z-10 w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-black/90 mb-8 shadow-2xl flex items-center justify-center group">
              {/* Soft ambient background blur */}
              <img
                src={imageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30 pointer-events-none"
              />
              {/* Fully visible crisp project preview */}
              <img
                src={imageUrl}
                alt={`${title} Preview`}
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-full object-contain object-center block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          )}

          {/* Project Overview */}
          <div className="relative z-10 mb-8">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
              <Layers size={14} className="text-emerald-400" />
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-zinc-100 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Engineering & Architectural Highlights */}
          {highlights.length > 0 && (
            <div className="relative z-10 mb-8 bg-[#090b10]/95 p-5 sm:p-7 rounded-2xl border border-white/15 shadow-inner">
              <h2 className="text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2 font-semibold">
                <Terminal size={14} className="text-emerald-400" />
                Key Engineering Highlights &amp; Implementation
              </h2>
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-200 leading-relaxed">
                    <span className="text-emerald-400 font-mono mt-1 font-bold text-base">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="relative z-10 mb-8">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-amber-400" />
                Technologies &amp; Tools Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/15 text-xs sm:text-sm font-mono text-white font-medium hover:border-emerald-400/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/15">
            <div className="flex flex-wrap items-center gap-3">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs sm:text-sm font-mono transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Open Live Project</span>
                  <ExternalLink size={14} className="stroke-[2.5]" />
                </a>
              )}

              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full black-glass border border-white/25 bg-black/80 hover:bg-black text-white hover:text-white transition-all text-xs sm:text-sm font-mono shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-full black-glass border border-white/15 bg-white/5 hover:bg-white/15 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              Back to Portfolio
            </button>
          </div>
        </article>
      </main>

      {/* Minimal Footer for Project Page */}
      <footer className="pt-8 text-center text-xs font-mono text-zinc-400">
        <p>Donthireddy Harini • Portfolio Project Presentation</p>
      </footer>
    </div>
  );
};
