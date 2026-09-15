import React, { useState } from 'react';
import {
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  GraduationCap,
  Cpu,
  Sparkles,
  ExternalLink,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TechSymbolBadge } from './TechSkillSymbols';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about-section" className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-0 pb-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-2"
        >
          About Me
        </h2>
        <p className="text-emerald-400 font-mono text-xs sm:text-sm tracking-wider uppercase">
          {PORTFOLIO_DATA.name} — {PORTFOLIO_DATA.title}
        </p>

        {/* Action Buttons: LinkedIn, GitHub, Email, Resume */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          {/* LinkedIn Button */}
          <a
            id="about-btn-linkedin"
            href={PORTFOLIO_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass px-4 py-2.5 rounded-full text-xs font-medium text-white hover:text-white hover:bg-white/15 transition-all border border-white/15 flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <Linkedin size={15} className="text-[#0A66C2]" />
            <span>LinkedIn</span>
            <ExternalLink size={12} className="opacity-60" />
          </a>

          {/* GitHub Button */}
          <a
            id="about-btn-github"
            href={PORTFOLIO_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass px-4 py-2.5 rounded-full text-xs font-medium text-white hover:text-white hover:bg-white/15 transition-all border border-white/15 flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <Github size={15} className="text-white" />
            <span>GitHub</span>
            <ExternalLink size={12} className="opacity-60" />
          </a>

          {/* Email Button */}
          <div className="inline-flex items-center rounded-full liquid-glass border border-white/15 p-0.5 shadow-lg">
            <a
              id="about-btn-email"
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="px-3.5 py-2 text-xs font-medium text-white hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Mail size={15} className="text-emerald-400" />
              <span>{PORTFOLIO_DATA.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email address"
              className="p-2 rounded-full hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer border-l border-white/10"
              aria-label="Copy email"
            >
              {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            </button>
          </div>

          {/* Resume Button: Opens resume in a new tab with exact 1:1 format, font, size, and alignments */}
          <a
            id="about-btn-resume"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-white/90 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-xl"
            title="Open Harini's Resume in a new tab"
          >
            <FileText size={14} className="text-black stroke-[2.2]" />
            <span className="text-black">Resume</span>
            <ExternalLink size={12} className="text-black/70 stroke-[2.2]" />
          </a>
        </div>
      </div>

      {/* Structured Content Container: 1. Professional Summary, 2. Core Technologies, 3. Education */}
      <div className="space-y-8">
        {/* 1. Professional Summary */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/15 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 mb-4 text-white pb-3 border-b border-white/10">
            <Sparkles size={18} className="text-emerald-400" />
            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-2xl sm:text-3xl font-normal"
            >
              Professional Summary
            </h3>
          </div>

          <div className="space-y-3.5 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
            <p>
              {PORTFOLIO_DATA.summary}
            </p>
          </div>
        </div>

        {/* 2. Core Technologies */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/15 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-2.5 mb-6 text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Cpu size={18} className="text-emerald-400" />
              <h3
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl sm:text-3xl font-normal"
              >
                Core Technologies & Skills
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400/80 hidden sm:inline-block bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
              Interactive Symbols
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 mb-3.5 font-semibold">
                    <span className="block truncate">{skillGroup.category}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 items-start">
                    {skillGroup.items.map((item) => (
                      <TechSymbolBadge key={item} itemName={item} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Education */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/15 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 mb-5 text-white pb-3 border-b border-white/10">
            <GraduationCap size={18} className="text-emerald-400" />
            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-2xl sm:text-3xl font-normal"
            >
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.educationList.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex flex-col justify-between gap-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 shrink-0">
                      {edu.cgpa}
                    </span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">
                    {edu.institution}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/45 pt-2 border-t border-white/5">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
