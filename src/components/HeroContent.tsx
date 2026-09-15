import React from 'react';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center py-8 my-auto">
      {/* Name: Highlighted with emerald-amber radiance and increased size */}
      <div className="relative mb-3 sm:mb-4">
        {/* Ambient subtle glow halo behind the name */}
        <div className="absolute inset-0 -inset-x-12 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none -z-10" />

        <h1
          id="hero-name-title"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[1.05] text-white"
        >
          <span className="bg-gradient-to-r from-white via-emerald-100 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(52,211,153,0.45)]">
            Donthireddy Harini
          </span>
        </h1>
      </div>

      {/* Role / Tagline Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-white/20 mb-6 sm:mb-8 text-xs sm:text-sm font-mono text-emerald-300 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="tracking-wide text-white/90">Software Engineer &amp; Problem Solver</span>
      </div>

      {/* Requested Statement Card on Home Starting Page */}
      <div className="max-w-2xl sm:max-w-3xl mx-auto px-6 sm:px-8 py-5 sm:py-6 rounded-2xl sm:rounded-3xl liquid-glass border border-white/15 bg-black/45 backdrop-blur-xl shadow-2xl">
        <p className="text-base sm:text-lg md:text-xl text-white/95 font-light tracking-wide leading-relaxed mb-2.5">
          What connects a DSA game, an AI tutor, and an athletics track?
        </p>
        <p className="text-sm sm:text-base md:text-lg text-emerald-300 font-medium tracking-wide leading-relaxed">
          For me, it is one thing— the mindset to keep learning, building, and improving
        </p>
      </div>
    </div>
  );
};

