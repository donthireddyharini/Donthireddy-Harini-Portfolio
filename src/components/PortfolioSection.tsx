import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const PortfolioSection: React.FC = () => {
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
        
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Interactive web applications, algorithm canvas engines, and multimodal AI literature analysis tools built with clean architecture and modern engineering workflows.
        </p>
      </div>

      {/* Projects Grid with equal card heights and perfect image alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {PORTFOLIO_DATA.projects.map((project: Project) => (
          <article
            key={project.id}
            className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/15 bg-black/40 hover:bg-black/55 backdrop-blur-xl transition-all duration-300 hover:border-white/30 flex flex-col justify-between group shadow-xl h-full"
          >
            <div className="flex flex-col flex-1">
              {/* Responsive 16:9 Image Container with object-contain, object-position center, overflow-hidden, rounded-2xl */}
              {project.imageUrl && (
                <div className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-5 shrink-0 group/img flex items-center justify-center">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                    <span className="text-[10px] font-mono text-emerald-300 font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/30">
                      {project.category}
                    </span>
                  </div>
                  {project.status && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="text-[10px] font-mono text-white/90 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Card Meta Row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-[11px] font-mono text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {project.period}
                </span>
                <span className="text-[11px] font-mono text-emerald-400/90 tracking-wide uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-emerald-300 transition-colors mb-3 flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400 shrink-0" />
              </h3>

              <p className="text-sm text-white/75 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-1.5 mb-6 bg-white/[0.03] p-3.5 rounded-2xl border border-white/5">
                <p className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Terminal size={12} className="text-emerald-400" />
                  Key Highlights & Implementation:
                </p>
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-white/80 leading-normal">
                    <span className="text-emerald-400/80 font-mono mt-0.5">•</span>
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
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.06] text-white/80 border border-white/10"
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
                    className="liquid-glass text-xs font-medium px-4 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-all flex items-center gap-2 border border-white/15 cursor-pointer"
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
