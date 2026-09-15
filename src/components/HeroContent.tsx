import React from 'react';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex-1 flex flex-col items-center justify-start px-4 sm:px-6 text-center pt-1 sm:pt-2 md:pt-3 pb-2">
      {/* Name: Highlighted with emerald-amber radiance and balanced size */}
      <div className="relative mb-1.5 sm:mb-2">
        {/* Ambient subtle glow halo behind the name */}
        <div className="absolute inset-0 -inset-x-12 bg-emerald-500/15 blur-2xl rounded-full pointer-events-none -z-10" />

        <h1
          id="hero-name-title"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] text-white"
        >
          <span className="bg-gradient-to-r from-white via-emerald-100 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.4)]">
            Donthireddy Harini
          </span>
        </h1>
      </div>

      {/* Role / Tagline Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full black-glass border border-white/20 mb-2 sm:mb-2.5 text-xs sm:text-sm font-mono text-emerald-300 shadow-xl bg-black/75">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="tracking-wide text-white font-medium">Software Engineer &amp; Problem Solver</span>
      </div>

      {/* Requested Statement Card on Home Starting Page - Compact & sleek frosted glass */}
      <div className="max-w-xl sm:max-w-2xl mx-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl black-glass border border-white/20 bg-black/75 backdrop-blur-xl shadow-xl">
        <p className="text-sm sm:text-base md:text-lg text-white font-normal tracking-wide leading-snug mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          What connects a DSA game, an AI tutor, and an athletics track?
        </p>
        <p className="text-xs sm:text-sm md:text-base text-emerald-300 font-medium tracking-wide leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          For me, it is one thing— the mindset to keep learning, building, and improving
        </p>
      </div>
    </div>
  );
};

