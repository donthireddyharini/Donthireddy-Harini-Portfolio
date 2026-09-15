import React, { useState } from 'react';
import { X, ExternalLink, Github, Star, GitBranch, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Autonomous Systems & AI', 'Distributed Systems & Storage', 'High-Performance Data Visualization', 'Cloud Infrastructure & Networking'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="liquid-glass w-full max-w-5xl max-h-[90vh] rounded-3xl p-6 sm:p-8 flex flex-col text-white shadow-2xl border border-white/15 overflow-hidden"
        style={{ background: 'rgba(12, 12, 16, 0.75)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                Portfolio Showcase • Live Codebases
              </span>
            </div>
            <h2 
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl sm:text-4xl font-normal tracking-tight text-white"
            >
              Featured Projects & Repositories
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Projects Showcase"
            className="liquid-glass rounded-full p-2.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category Filters */}
        <div className="py-4 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-lg font-semibold'
                  : 'liquid-glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="overflow-y-auto space-y-4 pr-1 flex-1 custom-scrollbar">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="liquid-glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all group"
              style={{ background: 'rgba(255, 255, 255, 0.02)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                {/* 16:9 Project Thumbnail Container */}
                {project.imageUrl && (
                  <div className="featured-image-wrapper w-full md:w-56 lg:w-64 aspect-video shrink-0 rounded-xl overflow-hidden border border-white/10 relative bg-black/60 flex items-center justify-center">
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
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
                  </div>
                )}

                <div className="flex-1 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      ● {project.status}
                    </span>
                  </div>

                  <h3 
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-2xl sm:text-3xl text-white group-hover:text-emerald-300 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 pt-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-white/70 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/90 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col gap-2.5 shrink-0 pt-2 md:pt-0">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass rounded-xl px-4 py-2.5 text-xs font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/15 transition-all border border-white/15 group/btn"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                    <ExternalLink size={12} className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/90 active:scale-95 transition-all"
                  >
                    <Sparkles size={14} className="text-amber-600" />
                    <span>Live Deployment</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="pt-4 mt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2 shrink-0">
          <span>Author: Harini Donthireddy • Systems & Full Stack</span>
          <a
            href={PORTFOLIO_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
          >
            <Github size={14} />
            <span>Explore all repositories on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
