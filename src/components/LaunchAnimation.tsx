import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface LaunchAnimationProps {
  onComplete?: () => void;
}

export const LaunchAnimation: React.FC<LaunchAnimationProps> = ({ onComplete }) => {
  const [finished, setFinished] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('portfolio_launched') === 'true';
    }
    return false;
  });
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  const firstName = 'DONTHIREDDY';
  const lastName = 'HARINI';

  const handleSkip = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('portfolio_launched', 'true');
    }
    setExiting(true);
    setTimeout(() => {
      setFinished(true);
      if (onComplete) onComplete();
    }, 700);
  };

  useEffect(() => {
    // If already launched in this session, immediately complete without rendering
    if (typeof window !== 'undefined' && sessionStorage.getItem('portfolio_launched') === 'true') {
      setFinished(true);
      if (onComplete) onComplete();
      return;
    }

    // Trigger entrance wave
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 100);

    // Auto-advance after animation completes smoothly
    const exitTimer = setTimeout(() => {
      handleSkip();
    }, 3400);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  if (finished) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between items-center bg-[#07080a] text-white select-none px-6 py-8 sm:py-10 transition-all duration-700 ease-in-out ${
        exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Radial Glow in Portfolio Emerald Tint */}
      <div 
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.14)_0%,transparent_65%)] pointer-events-none transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      
      {/* Laser Horizon Glowing Line with Light Flare in center that expands */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center">
        <div 
          className={`h-[1px] bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent shadow-[0_0_20px_rgba(52,211,153,1)] transition-all duration-1000 ease-out ${
            mounted ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`} 
        />
        <div 
          className={`absolute w-96 h-14 bg-emerald-500/25 blur-3xl rounded-full transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} 
        />
      </div>

      {/* Top Header: SKIP Button */}
      <div className="w-full max-w-6xl flex justify-end items-center relative z-20">
        <button
          onClick={handleSkip}
          className={`group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 hover:border-emerald-400/50 text-white/70 hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-500 backdrop-blur-md shadow-lg cursor-pointer hover:shadow-[0_0_15px_rgba(52,211,153,0.25)] active:scale-95 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          }`}
          aria-label="Skip animation"
        >
          <span>SKIP</span>
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform text-emerald-400" />
        </button>
      </div>

      {/* Center Hero: Massive Bold Typography with Per-Letter Opening Effect */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full max-w-5xl">
        
        {/* Giant Watermark Monogram "DH" in the background fading in with zoom */}
        <div 
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className={`absolute text-[160px] sm:text-[240px] md:text-[320px] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter leading-none -translate-y-4 transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          DH
        </div>

        {/* First Name: Per-letter staggered Fade-In & Blur Reveal in Solid White (Never wraps) */}
        <h1 
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-normal sm:tracking-wider uppercase text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] leading-none mb-2 sm:mb-3 flex justify-center flex-nowrap whitespace-nowrap overflow-visible"
        >
          {firstName.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out transform ${
                mounted
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 translate-y-12 blur-md'
              }`}
              style={{
                transitionDelay: `${150 + index * 45}ms`
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Last Name: Per-letter staggered Fade-In & Blur Reveal in Vibrant Emerald (Never wraps) */}
        <h2 
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-normal sm:tracking-wider uppercase text-emerald-400 drop-shadow-[0_0_40px_rgba(52,211,153,0.7)] leading-none relative z-10 flex justify-center flex-nowrap whitespace-nowrap overflow-visible"
        >
          {lastName.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out transform ${
                mounted
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 translate-y-12 blur-md'
              }`}
              style={{
                transitionDelay: `${650 + index * 55}ms`
              }}
            >
              {char}
            </span>
          ))}
        </h2>

        {/* Thin Divider Line that smoothly expands from center */}
        <div 
          className={`h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 sm:mt-10 mb-6 transition-all duration-1000 ease-out ${
            mounted ? 'w-full max-w-3xl opacity-100' : 'w-0 opacity-0'
          }`} 
        />

        {/* Subtitle Footer Row fading in with subtle upward slide */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1.5 text-[11px] sm:text-xs md:text-sm font-mono tracking-widest text-white/80 uppercase transition-all duration-800 ease-out delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-bold text-white">B.TECH CSE</span>
          <span className="text-emerald-400 font-black">&bull;</span>
          <span className="font-bold text-white">LPU</span>
          <span className="text-emerald-400 font-black">&bull;</span>
          <span className="text-emerald-300 font-semibold tracking-wider">
            AI &bull; SOFTWARE DEVELOPER &bull; PROBLEM SOLVER
          </span>
        </div>
      </div>

      {/* Bottom Status Pill */}
      <div 
        className={`relative z-10 flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest uppercase transition-opacity duration-700 delay-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>HARINI PORTFOLIO 2026</span>
      </div>
    </div>
  );
};
