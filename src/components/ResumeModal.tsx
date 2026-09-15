import React, { useState } from 'react';
import { X, Briefcase, GraduationCap, Code, Mail, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="liquid-glass w-full max-w-4xl max-h-[92vh] rounded-3xl p-6 sm:p-8 flex flex-col text-white shadow-2xl border border-white/15 overflow-hidden"
        style={{ background: 'rgba(10, 10, 14, 0.85)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Curriculum Vitae & Background
            </span>
            <h2 
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl sm:text-4xl font-normal text-white mt-0.5"
            >
              {PORTFOLIO_DATA.name}
            </h2>
            <p className="text-sm text-white/70 mt-1 max-w-xl">
              {PORTFOLIO_DATA.title} — {PORTFOLIO_DATA.bio}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Download or Print Resume"
              className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              className="liquid-glass rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto space-y-6 py-6 pr-1 custom-scrollbar">
          {/* Quick Contact Bar */}
          <div className="liquid-glass rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-white/80">
              <Mail size={14} className="text-emerald-400" />
              <span>{PORTFOLIO_DATA.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="liquid-glass rounded-lg px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="bg-white text-black rounded-lg px-3 py-1.5 text-xs font-semibold hover:bg-white/90 transition-colors flex items-center gap-1"
              >
                <span>Compose Mail</span>
              </a>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <Code size={18} className="text-emerald-400" />
              <h3 
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl"
              >
                Technical Competencies
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="liquid-glass rounded-xl p-3.5 border border-white/10">
                  <span className="text-xs font-semibold text-white/60 block mb-2 font-mono">
                    {skillGroup.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-white font-mono border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <Briefcase size={18} className="text-emerald-400" />
              <h3 
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl"
              >
                Engineering Experience
              </h3>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="liquid-glass rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-semibold text-base text-white">{exp.role}</h4>
                    <span className="text-xs font-mono text-white/50">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="space-y-1.5 pt-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-white/80 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-1.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <GraduationCap size={18} className="text-emerald-400" />
              <h3 
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl"
              >
                Education
              </h3>
            </div>
            <div className="liquid-glass rounded-2xl p-5 border border-white/10 space-y-1">
              <h4 className="font-semibold text-base text-white">{PORTFOLIO_DATA.education.degree}</h4>
              <p className="text-xs font-mono text-emerald-400">{PORTFOLIO_DATA.education.honors}</p>
              <p className="text-xs text-white/70 pt-1">
                Core Specializations: {PORTFOLIO_DATA.education.focus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
