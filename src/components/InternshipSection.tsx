import React, { useState } from 'react';
import { ExternalLink, Github, Building2, GraduationCap, Calendar, ArrowUpRight, Award, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const InternshipSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    issuer: string;
    imageUrl: string;
  } | null>(null);
  return (
    <section id="internship-section" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/15 text-xs text-white/80 mb-4 backdrop-blur-xl">
          <span className="font-mono uppercase tracking-wider text-[11px] text-emerald-300">
            Professional Experience &amp; Training
          </span>
        </div>

        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4"
        >
          Internship &amp; Training
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Real-world industry software engineering experience combined with advanced algorithmic problem-solving masterclasses.
        </p>
      </div>

      {/* Grid of 2 Cards: 1. Internship, 2. Training */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* CARD 1: INTERNSHIP */}
        <article className="black-glass rounded-3xl p-6 sm:p-7 border border-white/20 bg-black/85 hover:bg-black/95 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/30 flex flex-col justify-between group shadow-2xl h-full">
          <div className="flex flex-col flex-1">
            
            {/* 16:9 Image Preview Container */}
            <div className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/15 mb-5 shrink-0 group/img flex items-center justify-center">
              <img
                src="/gnd-internship.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
              />
              <img
                src="/gnd-internship.jpg"
                alt="GND Solutions Internship Event Management System Preview"
                loading="lazy"
                className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/40 flex items-center gap-1">
                  <Building2 size={12} />
                  INTERNSHIP
                </span>
              </div>
              <div className="absolute top-3 right-3 z-20">
                <span className="text-xs font-mono text-white font-medium px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/30">
                  GND Solutions
                </span>
              </div>
            </div>

            {/* Meta Row: Period & Role */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono text-zinc-200 px-2.5 py-0.5 rounded bg-black/70 border border-white/15 flex items-center gap-1 font-medium">
                <Calendar size={12} className="text-emerald-400" />
                Nov 2024 – May 2025
              </span>
              <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wide uppercase">
                Certificate Verified
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2 flex items-center justify-between">
              <span className="text-white">Software Engineering Intern</span>
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/60 shrink-0" />
            </h3>

            <p className="text-xs sm:text-sm font-mono text-emerald-400/90 uppercase tracking-wider mb-4 font-medium">
              GND Solutions Pvt Limited | Certificate
            </p>

            {/* Structured Bullet Points */}
            <div className="space-y-3 mb-6 bg-[#090b10]/90 p-4 sm:p-5 rounded-2xl border border-white/12 shadow-inner flex-1">
              <div className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed font-normal">
                <span className="text-emerald-400 font-mono mt-0.5 font-bold">&bull;</span>
                <span>
                  Engineered software solutions using JavaScript, applying core programming principles and structured problem-solving practices to strengthen development proficiency in real-world engineering workflows.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed font-normal">
                <span className="text-emerald-400 font-mono mt-0.5 font-bold">&bull;</span>
                <span>
                  Developed and refined web application components with React.js, translating software requirements into modular, maintainable interfaces while building practical experience with modern frontend engineering.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed font-normal">
                <span className="text-emerald-400 font-mono mt-0.5 font-bold">&bull;</span>
                <span>
                  Applied AWS concepts alongside JavaScript and React.js development, strengthening end-to-end understanding of cloud-enabled software engineering and preparing solutions for scalable application environments.
                </span>
              </div>
            </div>

          </div>

          {/* Tech Stack & Action Buttons */}
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['JavaScript', 'React.js', 'AWS Concepts', 'Frontend Engineering', 'REST APIs', 'Cloud Workflows'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.08] text-white border border-white/15 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
              <a
                href="https://github.com/donthireddyharini/Event-Management-System.git"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass text-xs font-medium px-4 py-2 rounded-full text-white hover:text-white hover:bg-white/15 transition-all flex items-center gap-2 border border-white/20 bg-black/80 cursor-pointer shadow-md"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: 'Certificate of Internship — Software Engineering',
                    issuer: 'GND Solutions India Pvt. Ltd. • Nov 2024 – May 2025',
                    imageUrl: '/gnd-certificate.webp',
                  })
                }
                className="bg-emerald-400 text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-emerald-300 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <Award size={14} className="stroke-[2.5]" />
                <span>Certificate</span>
              </button>
            </div>
          </div>
        </article>

        {/* CARD 2: TRAINING */}
        <article className="black-glass rounded-3xl p-6 sm:p-7 border border-white/20 bg-black/85 hover:bg-black/95 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/30 flex flex-col justify-between group shadow-2xl h-full">
          <div className="flex flex-col flex-1">
            
            {/* 16:9 Image Preview Container */}
            <div className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/15 mb-5 shrink-0 group/img flex items-center justify-center">
              <img
                src="/dsa-training.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
              />
              <img
                src="/dsa-training.png"
                alt="DSA Legends MasterClass Training Preview"
                loading="lazy"
                className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                <span className="text-[10px] font-mono text-emerald-300 font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/40 flex items-center gap-1">
                  <GraduationCap size={12} />
                  TRAINING
                </span>
              </div>
              <div className="absolute top-3 right-3 z-20">
                <span className="text-[10px] font-mono text-white font-medium px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/30">
                  LPU CPE
                </span>
              </div>
            </div>

            {/* Meta Row: Period & Role */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono text-zinc-200 px-2.5 py-0.5 rounded bg-black/70 border border-white/15 flex items-center gap-1 font-medium">
                <Calendar size={12} className="text-emerald-400" />
                Jun&apos;26 – Jul&apos;26
              </span>
              <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wide uppercase">
                MasterClass
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-2xl sm:text-3xl font-medium text-white group-hover:text-emerald-300 transition-colors mb-2 flex items-center justify-between">
              <span>Data Structures, Algorithms &amp; Problem Solving MasterClass</span>
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-400 shrink-0" />
            </h3>

            <p className="text-xs sm:text-sm font-mono text-emerald-400/90 uppercase tracking-wider mb-4 font-medium">
              Centre for Professional Enhancement (Lovely Professional University)
            </p>

            {/* Structured Bullet Points */}
            <div className="space-y-3 mb-6 bg-[#090b10]/90 p-4 sm:p-5 rounded-2xl border border-white/12 shadow-inner flex-1">
              <div className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed font-normal">
                <span className="text-emerald-400 font-mono mt-0.5 font-bold">&bull;</span>
                <span>
                  Strengthened understanding of Data Structures, Algorithms, and Problem-Solving techniques, focusing on efficient approaches to solving computational and programming challenges.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed font-normal">
                <span className="text-emerald-400 font-mono mt-0.5 font-bold">&bull;</span>
                <span>
                  Designed and built an interactive DSA Learning Game to make concepts such as arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching easier to understand through interactive learning activities.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-zinc-100 leading-relaxed font-normal">
                <span className="text-emerald-400 font-mono mt-0.5 font-bold">&bull;</span>
                <span>
                  Enhanced algorithmic thinking and problem-solving skills while creating an engaging learning platform that helps users understand and practice DSA Concepts interactively.
                </span>
              </div>
            </div>

          </div>

          {/* Tech Stack & Action Buttons */}
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Data Structures', 'Algorithms', 'Java', 'JavaScript', 'Canvas API', 'Problem Solving'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.08] text-white border border-white/15 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
              <a
                href="https://github.com/donthireddyharini/DSA-Learning-Game.git"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass text-xs font-medium px-4 py-2 rounded-full text-white hover:text-white hover:bg-white/15 transition-all flex items-center gap-2 border border-white/20 bg-black/80 cursor-pointer shadow-md"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              <a
                href="https://dsa-legends.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/90 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Project Link</span>
                <ExternalLink size={13} className="stroke-[2.5]" />
              </a>

              <button
                onClick={() =>
                  setSelectedCertificate({
                    title: 'Certificate of Merit — DSA & Problem Solving Masterclass',
                    issuer: 'Lovely Professional University (Centre for Professional Enhancement) • Grade A',
                    imageUrl: '/lpu-certificate.png',
                  })
                }
                className="bg-emerald-400 text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-emerald-300 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <Award size={14} className="stroke-[2.5]" />
                <span>Certificate</span>
              </button>
            </div>
          </div>
        </article>

      </div>

      {/* High-Resolution Certificate Viewing Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass w-full max-w-3xl rounded-3xl p-5 sm:p-7 bg-zinc-950/95 border border-white/20 text-white shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                  Verified Credential
                </span>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close certificate modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Title & Details */}
            <div className="mb-4 shrink-0">
              <h3
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl sm:text-3xl font-normal text-white mb-1"
              >
                {selectedCertificate.title}
              </h3>
              <p className="text-xs font-mono text-white/60">
                {selectedCertificate.issuer}
              </p>
            </div>

            {/* Certificate Image Frame */}
            <div className="relative flex-1 min-h-[300px] max-h-[60vh] rounded-2xl overflow-auto border border-white/15 bg-black/80 flex items-center justify-center p-2 sm:p-4">
              <img
                src={selectedCertificate.imageUrl}
                alt={selectedCertificate.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4 shrink-0">
              <span className="text-xs font-mono text-white/50">
                Official Certification Document
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={selectedCertificate.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Open Full Size</span>
                  <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs font-mono transition-all cursor-pointer shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
