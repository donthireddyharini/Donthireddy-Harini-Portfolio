import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Github, 
  X, 
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Terminal,
  Layers
} from 'lucide-react';
import { 
  AgroPriceCard, 
  BiteSaverCard, 
  LitMindCard, 
  CpuSchedulerCard, 
  DsaLegendsCard,
  EventManagementCard,
  ATTACHED_PROJECTS,
  ProjectData
} from './ProjectShowcaseCards';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Project focal anchors for accurate jump and active indicator
const PROJECT_ANCHORS = [
  { id: 'agro-price', title: 'Agro Price Predictor', progress: 0.0 },
  { id: 'bitesaver', title: 'BiteSaver', progress: 0.20 },
  { id: 'litmind', title: 'LitMind', progress: 0.40 },
  { id: 'cpu-scheduler', title: 'CPU Scheduler', progress: 0.60 },
  { id: 'dsa-legends', title: 'DSA Legends', progress: 0.80 },
  { id: 'event-management', title: 'Event Management', progress: 1.0 },
];

export const ShowcaseSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // References for zero-latency direct GPU DOM updates
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const row1TrackRef = useRef<HTMLDivElement>(null);
  const row2TrackRef = useRef<HTMLDivElement>(null);
  const progressBarFillRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  const row1MaxScrollRef = useRef(0);
  const row2MaxScrollRef = useRef(0);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastActiveIndexRef = useRef(0);

  // Measure track widths accurately with ResizeObserver
  const updateMetrics = useCallback(() => {
    if (!viewportRef.current) return;
    const viewportWidth = viewportRef.current.clientWidth;

    if (row1TrackRef.current) {
      const w1 = row1TrackRef.current.scrollWidth;
      row1MaxScrollRef.current = Math.max(0, w1 - viewportWidth);
    }
    if (row2TrackRef.current) {
      const w2 = row2TrackRef.current.scrollWidth;
      row2MaxScrollRef.current = Math.max(0, w2 - viewportWidth);
    }
  }, []);

  useEffect(() => {
    updateMetrics();

    // High accuracy ResizeObserver detects font loading and dynamic dimension updates
    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });

    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (row1TrackRef.current) resizeObserver.observe(row1TrackRef.current);
    if (row2TrackRef.current) resizeObserver.observe(row2TrackRef.current);

    window.addEventListener('resize', updateMetrics);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateMetrics);
    };
  }, [updateMetrics]);

  // High-performance 120fps direct hardware-accelerated scroll loop
  useEffect(() => {
    const handleScroll = () => {
      if (sectionContainerRef.current) {
        const rect = sectionContainerRef.current.getBoundingClientRect();
        const sectionHeight = sectionContainerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const totalScrollableDistance = sectionHeight - windowHeight;

        if (totalScrollableDistance > 0) {
          const scrolled = -rect.top;
          const rawProgress = scrolled / totalScrollableDistance;
          targetProgressRef.current = Math.max(0, Math.min(1, rawProgress));
        }
      }
    };

    const renderFrame = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const delta = target - current;

      if (Math.abs(delta) < 0.0001) {
        currentProgressRef.current = target;
      } else {
        // Critically damped lerp — 0.10 gives a silky cinematic glide
        currentProgressRef.current = current + delta * 0.10;
      }

      const p = currentProgressRef.current;

      // Direct GPU Transform Updates (Bypasses React virtual DOM diffing for 120fps smoothness)
      const r1Max = row1MaxScrollRef.current;
      const r2Max = row2MaxScrollRef.current;

      // Row 1: Starts at 0, slides LEFT (-X) to reveal projects 1 -> 5
      const row1X = -r1Max * p;
      // Row 2: Starts at -r2Max, slides RIGHT (+X) to reveal projects 5 -> 1
      const row2X = -r2Max * (1 - p);

      if (row1TrackRef.current) {
        row1TrackRef.current.style.transform = `translate3d(${row1X.toFixed(2)}px, 0, 0)`;
      }
      if (row2TrackRef.current) {
        row2TrackRef.current.style.transform = `translate3d(${row2X.toFixed(2)}px, 0, 0)`;
      }

      // Progress bar & label direct updates
      if (progressBarFillRef.current) {
        progressBarFillRef.current.style.width = `${Math.max(6, p * 100).toFixed(1)}%`;
      }
      if (progressTextRef.current) {
        progressTextRef.current.textContent = `${Math.round(p * 100)}%`;
      }

      // Accurately track active project index without causing continuous re-renders
      const activeIdx = Math.min(
        PROJECT_ANCHORS.length - 1,
        Math.max(0, Math.round(p * (PROJECT_ANCHORS.length - 1)))
      );
      if (activeIdx !== lastActiveIndexRef.current) {
        lastActiveIndexRef.current = activeIdx;
        setActiveProjectIndex(activeIdx);
      }

      // Update button states at bounds
      const isAtStart = p <= 0.005;
      const isAtEnd = p >= 0.995;
      setCanPrev(!isAtStart);
      setCanNext(!isAtEnd);

      animationFrameRef.current = requestAnimationFrame(renderFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animationFrameRef.current = requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Jump to specific project percentage with smooth ease
  const scrollToAnchor = (targetPct: number) => {
    if (!sectionContainerRef.current) return;
    const rect         = sectionContainerRef.current.getBoundingClientRect();
    const sectionTop   = window.scrollY + rect.top;
    const sectionH     = sectionContainerRef.current.offsetHeight;
    const totalDist    = sectionH - window.innerHeight;
    const destY        = sectionTop + targetPct * totalDist;
    const startY       = window.scrollY;
    const distance     = destY - startY;
    const duration     = Math.min(1000, Math.max(500, Math.abs(distance) * 0.5));
    let   startTime: number | null = null;

    const ease = (t: number) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // Stepper handlers
  const handleNudge = (direction: 'next' | 'prev') => {
    const step = 1 / (PROJECT_ANCHORS.length - 1);
    const current = currentProgressRef.current;
    let target = direction === 'next' ? current + step : current - step;
    target = Math.max(0, Math.min(1, target));
    scrollToAnchor(target);
  };

  // Selected project modal data
  const activeProject = ATTACHED_PROJECTS.find(p => p.id === selectedProjectId);
  const matchingPortfolioProject = PORTFOLIO_DATA.projects.find(p => p.id === selectedProjectId);

  return (
    <section
      id="showcase-section"
      ref={sectionContainerRef}
      style={{ height: '130vh' }}
      className="relative w-full"
    >
      {/* Sticky Fullscreen Frame that pins during vertical page scroll */}
      <div 
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-3 sm:py-5 z-20"
      >
        
        {/* Top Minimal Navigation Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shrink-0">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/10">
            {/* Left: Section Pill */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-emerald-300 uppercase">
                Featured Works
              </span>
            </div>

            {/* Right: Quick Stepper Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleNudge('prev')}
                disabled={!canPrev}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-white/5 text-white/80 hover:text-white transition-all border border-white/10 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Previous project"
                title="Previous project"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => handleNudge('next')}
                disabled={!canNext}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-white/5 text-white/80 hover:text-white transition-all border border-white/10 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Next project"
                title="Next project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle: 2 Horizontal Rows Scrolling in Opposite Directions */}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden flex flex-col justify-center my-auto py-1 sm:py-2 gap-3 sm:gap-4 md:gap-5"
        >
          {/* Row 1: Slides LEFT (←) as you scroll down */}
          <div
            ref={row1TrackRef}
            style={{
              willChange: 'transform',
            }}
            className="flex gap-4 sm:gap-6 items-stretch w-max px-4 sm:px-8 py-0.5"
          >
            <AgroPriceCard onSelect={() => setSelectedProjectId('agro-price')} />
            <BiteSaverCard onSelect={() => setSelectedProjectId('bitesaver')} />
            <LitMindCard onSelect={() => setSelectedProjectId('litmind')} />
            <CpuSchedulerCard onSelect={() => setSelectedProjectId('cpu-scheduler')} />
            <DsaLegendsCard onSelect={() => setSelectedProjectId('dsa-legends')} />
            <EventManagementCard onSelect={() => setSelectedProjectId('event-management')} />
            {/* Extended loop cards */}
            <AgroPriceCard onSelect={() => setSelectedProjectId('agro-price')} />
            <BiteSaverCard onSelect={() => setSelectedProjectId('bitesaver')} />
          </div>

          {/* Row 2: Slides RIGHT (→) in opposing parallax as you scroll down */}
          <div
            ref={row2TrackRef}
            style={{
              willChange: 'transform',
            }}
            className="flex gap-4 sm:gap-6 items-stretch w-max px-4 sm:px-8 py-0.5"
          >
            <AgroPriceCard onSelect={() => setSelectedProjectId('agro-price')} />
            <BiteSaverCard onSelect={() => setSelectedProjectId('bitesaver')} />
            <LitMindCard onSelect={() => setSelectedProjectId('litmind')} />
            <CpuSchedulerCard onSelect={() => setSelectedProjectId('cpu-scheduler')} />
            <DsaLegendsCard onSelect={() => setSelectedProjectId('dsa-legends')} />
            <EventManagementCard onSelect={() => setSelectedProjectId('event-management')} />
            {/* Symmetrical extension */}
            <CpuSchedulerCard onSelect={() => setSelectedProjectId('cpu-scheduler')} />
            <DsaLegendsCard onSelect={() => setSelectedProjectId('dsa-legends')} />
          </div>
        </div>

        {/* Bottom Control & Progress Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shrink-0">
          <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
            {/* Minimalist Position Indicators (no project names) */}
            <div className="flex items-center gap-2 py-1">
              {PROJECT_ANCHORS.map((anchor, idx) => {
                const isActive = activeProjectIndex === idx;
                return (
                  <button
                    key={anchor.id}
                    onClick={() => scrollToAnchor(anchor.progress)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'w-7 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to project ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span 
                ref={progressTextRef}
                className="text-[10px] font-mono text-white/50 tabular-nums w-7 text-right"
              >
                0%
              </span>
              <div className="w-20 sm:w-28 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  ref={progressBarFillRef}
                  className="h-full bg-gradient-to-r from-emerald-400 to-amber-300 rounded-full"
                  style={{ width: '6%' }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* High-Resolution Project Details Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in"
          onClick={() => setSelectedProjectId(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-zinc-950 border border-white/20 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                  {activeProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProjectId(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Title & Tagline */}
            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl sm:text-4xl font-normal mb-1.5 text-white leading-tight"
            >
              {activeProject.title}
            </h3>

            <p className="text-sm font-mono text-amber-300/90 mb-4">
              {activeProject.tagline}
            </p>

            {/* 16:9 Project Preview Banner */}
            {matchingPortfolioProject?.imageUrl && (
              <div className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black/60 mb-5 shrink-0 flex items-center justify-center">
                {/* Subtle blurred ambient backdrop to softly fill any pillarbox/letterbox areas if aspect ratio differs from 16:9 */}
                <img
                  src={matchingPortfolioProject.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
                />
                {/* Complete, fully visible project screenshot - no cropping on top, bottom, left, or right */}
                <img
                  src={matchingPortfolioProject.imageUrl}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="featured-image-contain relative z-10 w-full h-full object-contain object-center block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
              </div>
            )}

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5">
              {activeProject.description}
            </p>

            {/* Highlights if in portfolio data */}
            {matchingPortfolioProject && matchingPortfolioProject.highlights && (
              <div className="mb-5 bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Terminal size={12} className="text-emerald-400" />
                  Engineering Highlights
                </div>
                <ul className="space-y-1.5 text-xs text-white/75">
                  {matchingPortfolioProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-emerald-400">
                {activeProject.keyMetric}
              </span>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={PORTFOLIO_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs font-mono transition-all shadow-lg cursor-pointer"
                >
                  <Github size={14} />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

