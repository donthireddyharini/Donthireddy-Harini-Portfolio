import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects-section" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/15 text-xs text-white/80 mb-4 backdrop-blur-xl">
          <span className="font-mono uppercase tracking-wider text-[11px] text-emerald-300">
            Featured Projects & Engineering
          </span>
        </div>
        
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4"
        >
          Key Projects
        </h2>
        
        <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Interactive web applications, algorithm canvas engines, and multimodal AI literature analysis tools built with clean architecture and modern engineering workflows.
        </p>
      </div>

      {/* Projects Grid with equal card heights and perfect image alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {PORTFOLIO_DATA.projects.map((project: Project) => (
          <article
            key={project.id}
            className="black-glass rounded-3xl p-6 sm:p-7 border border-white/20 bg-black/85 hover:bg-black/95 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/30 flex flex-col justify-between group shadow-2xl h-full"
          >
            <div className="flex flex-col flex-1">
              {/* Responsive 16:9 Image Container with object-contain, object-position center, overflow-hidden, rounded-2xl */}
              {project.imageUrl && (
                <div className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/15 mb-5 shrink-0 group/img flex items-center justify-center">
                  {/* Subtle blurred ambient backdrop to softly fill any pillarbox/letterbox areas if aspect ratio differs from 16:9 */}
                  <img
                    src={project.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
                  />
                  {/* Complete, fully visible project screenshot - no cropping on top, bottom, left, or right */}
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Preview`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  {/* Subtle dark vignette overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                    <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/40">
                      {project.category}
                    </span>
                  </div>
                  {project.status && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="text-xs font-mono text-white font-medium px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/30">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Card Meta Row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-mono text-zinc-200 px-2.5 py-0.5 rounded bg-black/70 border border-white/15 font-medium">
                  {project.period}
                </span>
                <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wide uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 
                onClick={() => onSelectProject && onSelectProject(project.id)}
                className={`text-2xl sm:text-3xl font-medium text-white group-hover:text-emerald-300 transition-colors mb-3 flex items-center justify-between ${onSelectProject ? 'cursor-pointer' : ''}`}
                title="Click to view full project details"
              >
                <span>{project.title}</span>
                <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400 shrink-0" />
              </h3>

              <p className="text-base text-zinc-100 leading-relaxed mb-5 font-normal">
                {project.description}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-2 mb-6 bg-[#090b10]/90 p-4 sm:p-5 rounded-2xl border border-white/12 shadow-inner">
                <p className="text-xs sm:text-sm font-mono text-zinc-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
                  <Terminal size={14} className="text-emerald-400" />
                  Key Highlights &amp; Implementation:
                </p>
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed">
                    <span className="text-emerald-400 font-mono mt-0.5 font-bold">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Tech Stack & Action Links */}
            <div className="mt-auto pt-2">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.08] text-white border border-white/15 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass text-xs font-medium px-4 py-2 rounded-full text-white hover:text-white hover:bg-white/15 transition-all flex items-center gap-2 border border-white/20 bg-black/80 cursor-pointer shadow-md"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/90 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Project Link</span>
                  <ExternalLink size={13} className="stroke-[2.5]" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
