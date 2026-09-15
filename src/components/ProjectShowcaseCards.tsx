import React from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  Cpu, 
  BookOpen, 
  Leaf, 
  Sprout, 
  Gamepad2, 
  Database,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  Send,
  Mic,
  Image as ImageIcon,
  MapPin,
  Flame,
  Zap,
  CalendarDays,
  Users,
  Clock
} from 'lucide-react';

export interface ProjectData {
  id: 'agro-price' | 'bitesaver' | 'litmind' | 'cpu-scheduler' | 'dsa-legends' | 'event-management';
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyMetric: string;
  techStack: string[];
  imageUrl: string;
  imagePosition?: string;
}

export const ATTACHED_PROJECTS: ProjectData[] = [
  {
    id: 'agro-price',
    title: 'Agro Price Predictor',
    category: 'ML Agricultural Intelligence',
    tagline: 'ML-powered modal price prediction across 205 agros & 26 Indian states',
    description: 'Trained Random Forest regressor on 5,947 samples achieving 99.76% accuracy (R² = 0.9976) with ₹85.87 MAE for Indian agricultural commodities.',
    keyMetric: '99.76% Model Accuracy (R²)',
    techStack: ['Python', 'Random Forest', 'Scikit-Learn', 'Pandas', 'Flask', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center 45%'
  },
  {
    id: 'bitesaver',
    title: 'BiteSaver',
    category: 'Food Rescue & Sustainability Platform',
    tagline: 'Rescue Delicious Food, Save the Planet',
    description: 'Surplus food rescue marketplace connecting consumers with local bakeries and stores at up to 70% discount. Saving 10,000+ meals daily.',
    keyMetric: '2.5M+ Meals Saved',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Geolocation API', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center'
  },
  {
    id: 'litmind',
    title: 'LitMind',
    category: 'AI Literature Tutor',
    tagline: 'Your Personal Literature Tutor',
    description: 'Full-stack AI literature mentor analyzing themes, symbolism, and narrative techniques powered by Llama 3.3 via Groq with persistent session histories.',
    keyMetric: 'Multi-Modal Literary AI',
    techStack: ['Node.js', 'Express', 'SQLite', 'Groq API', 'Llama 3.3', 'Passport.js'],
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center'
  },
  {
    id: 'cpu-scheduler',
    title: 'CPU Scheduler Showdown',
    category: 'OS Systems & Algorithm Benchmark',
    tagline: 'DVFS Algorithm Halves Energy Use — 50.00% Savings',
    description: 'Dynamic Voltage and Frequency Scaling scheduler benchmark simulating 100 CPU tasks, cutting baseline energy from 10,205 J down to 5,102 J.',
    keyMetric: '50.00% Energy Cut',
    techStack: ['C++', 'Operating Systems', 'DVFS Algorithm', 'Canvas', 'Benchmarking'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center'
  },
  {
    id: 'dsa-legends',
    title: 'DSA Legends',
    category: 'Gamified EdTech RPG Adventure',
    tagline: 'World of Algorithms — From Apprentice to Legend',
    description: 'Browser-based DSA learning RPG across 7 progressive worlds featuring interactive step-by-step canvas visualizers and verified Java implementations.',
    keyMetric: '7 Worlds • 50+ Missions',
    techStack: ['JavaScript', 'HTML Canvas API', 'Java', 'Web Audio API', 'LocalStorage'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center'
  },
  {
    id: 'event-management',
    title: 'Event Management System',
    category: 'Full-Stack Web Application',
    tagline: 'Organize, Manage & Track Events Seamlessly',
    description: 'A comprehensive event management platform for organizing, managing, and tracking events with seamless user experience, featuring event creation, registration, scheduling, and real-time updates.',
    keyMetric: 'End-to-End Event Platform',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center center'
  }
];

interface CardProps {
  onSelect?: () => void;
  className?: string;
}

// Consistent responsive card dimensions for both rows - enlarged for prominence
const CARD_SIZE_CLASSES = "w-[330px] xs:w-[370px] sm:w-[430px] md:w-[470px] lg:w-[500px] h-[255px] xs:h-[270px] sm:h-[290px] md:h-[305px] p-4 sm:p-5";

/** 1. Agro Price Predictor */
export const AgroPriceCard: React.FC<CardProps> = ({ onSelect, className = '' }) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/25 bg-[#140f0a] hover:border-amber-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer select-none ${CARD_SIZE_CLASSES} ${className}`}
    >
      {/* Background Project Image Layer (16:9 aspect, object-cover, centered, overflow-hidden and hover scale) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
          alt="Agro Price Predictor"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-20 group-hover:opacity-35"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140f0a] via-[#140f0a]/90 to-[#140f0a]/75" />
      </div>

      {/* Background ambient radiance */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

      {/* Mini App Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-amber-500/15 text-[10px] sm:text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sprout size={12} />
          </div>
          <span className="font-semibold text-amber-100 tracking-wide text-[11px] sm:text-xs">Agro Price Prediction</span>
          <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] border border-amber-400/30 font-bold">
            ML v1.0
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-300/70 text-[9px] sm:text-[10px]">
          <span className="text-amber-300 font-bold">Predict</span>
          <span>•</span>
          <span>Models</span>
        </div>
      </div>

      {/* Main Visual Body - Perfectly Fitted & Enlarged */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between py-2 overflow-hidden">
        <div>
          <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-400/90 uppercase leading-none mb-1.5">
            Agricultural Intelligence • 2025
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl sm:text-[26px] md:text-3xl text-white font-normal leading-tight truncate"
              >
                Agro <span className="italic text-amber-300">Price</span> Predictor
              </h3>
              <p className="text-xs sm:text-[13px] text-amber-100/75 truncate mt-1">
                Modal price prediction across 205 agros & 26 Indian states
              </p>
            </div>

            <div className="shrink-0 bg-[#22180e] px-2.5 py-1.5 rounded-lg border border-amber-500/30 text-right">
              <div className="text-sm sm:text-base font-bold text-amber-300 font-mono leading-none">
                99.76%
              </div>
              <div className="text-[8px] text-amber-200/60 font-mono mt-0.5">R² Score</div>
            </div>
          </div>
        </div>

        {/* 5 Stat Cards Row - Enlarged */}
        <div className="grid grid-cols-5 gap-1.5 pt-2 border-t border-amber-500/15">
          <div className="bg-[#1f160d] p-1.5 rounded-lg border border-emerald-500/30 text-center">
            <div className="text-xs sm:text-[13px] font-mono font-bold text-emerald-300 leading-none">0.9976</div>
            <div className="text-[7.5px] text-emerald-200/70 font-mono uppercase mt-0.5">R²</div>
          </div>
          <div className="bg-[#1f160d] p-1.5 rounded-lg border border-amber-500/30 text-center">
            <div className="text-xs sm:text-[13px] font-mono font-bold text-amber-300 leading-none">₹85.87</div>
            <div className="text-[7.5px] text-amber-200/70 font-mono uppercase mt-0.5">MAE</div>
          </div>
          <div className="bg-[#1f160d] p-1.5 rounded-lg border border-rose-500/30 text-center">
            <div className="text-xs sm:text-[13px] font-mono font-bold text-rose-300 leading-none">5,947</div>
            <div className="text-[7.5px] text-rose-200/70 font-mono uppercase mt-0.5">Samples</div>
          </div>
          <div className="bg-[#1f160d] p-1.5 rounded-lg border border-amber-500/20 text-center">
            <div className="text-xs sm:text-[13px] font-mono font-bold text-amber-100 leading-none">205</div>
            <div className="text-[7.5px] text-amber-200/60 font-mono uppercase mt-0.5">Agros</div>
          </div>
          <div className="bg-[#1f160d] p-1.5 rounded-lg border border-amber-500/20 text-center">
            <div className="text-xs sm:text-[13px] font-mono font-bold text-amber-100 leading-none">26</div>
            <div className="text-[7.5px] text-amber-200/60 font-mono uppercase mt-0.5">States</div>
          </div>
        </div>
      </div>

      {/* Mini Bottom Status Mockup */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-amber-500/15 text-[10px] sm:text-[11px] font-mono text-amber-300/80 shrink-0">
        <div className="flex items-center gap-1.5 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="truncate">Random Forest • AI Engine</span>
        </div>
        <div className="flex items-center gap-1 group-hover:text-amber-200 transition-colors shrink-0">
          <span className="font-semibold">Details</span>
          <ArrowUpRight size={13} className="text-amber-400" />
        </div>
      </div>
    </div>
  );
};

/** 2. BiteSaver */
export const BiteSaverCard: React.FC<CardProps> = ({ onSelect, className = '' }) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-400/30 bg-[#091711] hover:border-emerald-300/60 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer select-none ${CARD_SIZE_CLASSES} ${className}`}
    >
      {/* Background Project Image Layer (16:9 aspect, object-cover, centered, overflow-hidden and hover scale) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
          alt="BiteSaver Food Rescue"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-20 group-hover:opacity-35"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091711] via-[#091711]/90 to-[#091711]/75" />
      </div>

      {/* Ambient background radiance */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-4 w-28 h-28 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />

      {/* Mini App Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-emerald-500/20 text-[10px] sm:text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
            <Leaf size={12} className="text-zinc-950 fill-zinc-950" />
          </div>
          <span className="font-bold text-white text-sm tracking-tight font-sans">BiteSaver</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] border border-emerald-500/30 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            10k+ meals/day
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-black font-semibold text-[9px]">
          Surprise Bags
        </span>
      </div>

      {/* Main Visual Body - Perfectly Fitted & Enlarged */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between py-2 overflow-hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-2xl sm:text-[26px] md:text-3xl text-white font-normal leading-tight truncate"
            >
              Rescue Food, <span className="text-emerald-400 italic">Save Planet</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-white/75 truncate mt-1">
              Surprise bags at up to 70% off from local stores
            </p>
          </div>

          <div className="shrink-0 bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-400/30 text-center flex items-center gap-1.5">
            <MapPin size={13} className="text-emerald-300 shrink-0" />
            <div className="text-[10px] sm:text-[11px] font-bold text-white font-mono leading-tight">3 Nearby</div>
          </div>
        </div>

        {/* 3 Key Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/15 text-center">
          <div className="bg-white/[0.03] p-1.5 rounded-lg border border-white/10">
            <div className="text-sm sm:text-base font-bold text-white font-mono leading-none">2.5M+</div>
            <div className="text-[8px] sm:text-[9px] text-white/60 font-mono mt-0.5">Meals Saved</div>
          </div>
          <div className="bg-white/[0.03] p-1.5 rounded-lg border border-white/10">
            <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono leading-none">5,000+</div>
            <div className="text-[8px] sm:text-[9px] text-white/60 font-mono mt-0.5">Stores</div>
          </div>
          <div className="bg-white/[0.03] p-1.5 rounded-lg border border-white/10">
            <div className="text-sm sm:text-base font-bold text-amber-300 font-mono leading-none">500K+</div>
            <div className="text-[8px] sm:text-[9px] text-white/60 font-mono mt-0.5">Users</div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-emerald-500/15 text-[10px] sm:text-[11px] font-mono text-emerald-300/80 shrink-0">
        <span className="text-[9px] uppercase tracking-wider text-emerald-400/90 truncate font-semibold">Food Waste Tech</span>
        <div className="flex items-center gap-1 group-hover:text-emerald-200 transition-colors shrink-0">
          <span className="font-semibold">Details</span>
          <ArrowUpRight size={13} className="text-emerald-400" />
        </div>
      </div>
    </div>
  );
};

/** 3. LitMind */
export const LitMindCard: React.FC<CardProps> = ({ onSelect, className = '' }) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-600/30 bg-[#120d08] hover:border-amber-500/60 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer select-none ${CARD_SIZE_CLASSES} ${className}`}
    >
      {/* Background Project Image Layer (16:9 aspect, object-cover, centered, overflow-hidden and hover scale) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
          alt="LitMind AI Tutor"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-20 group-hover:opacity-35"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120d08] via-[#120d08]/90 to-[#120d08]/75" />
      </div>

      {/* Ambient Library Lighting */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-700/10 rounded-full blur-xl pointer-events-none" />

      {/* Mini App Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-amber-600/20 text-[10px] sm:text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <BookOpen size={12} />
          </div>
          <span className="font-bold text-amber-100 tracking-wide font-sans text-sm">LitMind</span>
          <span className="text-[9px] text-amber-400/80 font-mono uppercase tracking-wider font-semibold">
            AI TUTOR
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-black font-semibold text-[9px]">
          Multimodal
        </span>
      </div>

      {/* Hero & Prompt Topics Grid */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between py-2 overflow-hidden">
        <div>
          <h3
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-2xl sm:text-[26px] md:text-3xl text-white font-normal leading-tight truncate"
          >
            Your Personal <span className="italic text-amber-300">Literature Tutor</span>
          </h3>
          <p className="text-xs sm:text-[13px] text-amber-100/75 truncate mt-1">
            Analyze novels, decode poetry & study Shakespeare to Toni Morrison
          </p>
        </div>

        {/* 2 Focused Analysis Topic Cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#1f150c] p-2 rounded-lg border border-amber-500/25">
            <div className="text-[8px] sm:text-[9px] font-mono text-amber-400 uppercase font-bold">Theme Analysis</div>
            <div className="text-[10px] sm:text-[11px] text-amber-100/95 font-medium truncate mt-0.5">To Kill a Mockingbird</div>
          </div>
          <div className="bg-[#1f150c] p-2 rounded-lg border border-amber-500/25">
            <div className="text-[8px] sm:text-[9px] font-mono text-amber-400 uppercase font-bold">Symbolism</div>
            <div className="text-[10px] sm:text-[11px] text-amber-100/95 font-medium truncate mt-0.5">Gatsby's Green Light</div>
          </div>
        </div>

        {/* Mini Chat Input Bar Mockup */}
        <div className="flex items-center justify-between p-1.5 px-3 rounded-full bg-[#1f150c] border border-amber-500/30 text-[10px] sm:text-[11px] font-mono text-white/60">
          <div className="flex items-center gap-2 truncate">
            <Mic size={12} className="text-amber-400 shrink-0" />
            <ImageIcon size={12} className="text-amber-400 shrink-0" />
            <span className="truncate">Ask about any book, poem, or theme...</span>
          </div>
          <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-black shrink-0">
            <Send size={10} />
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-amber-600/20 text-[10px] sm:text-[11px] font-mono text-amber-300/80 shrink-0">
        <span className="text-[9px] uppercase tracking-wider text-amber-400 truncate font-semibold">Gemini Multimodal</span>
        <div className="flex items-center gap-1 group-hover:text-amber-200 transition-colors shrink-0">
          <span className="font-semibold">Details</span>
          <ArrowUpRight size={13} className="text-amber-400" />
        </div>
      </div>
    </div>
  );
};

/** 4. CPU Scheduler Showdown */
export const CpuSchedulerCard: React.FC<CardProps> = ({ onSelect, className = '' }) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#050f1a] hover:border-cyan-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer select-none ${CARD_SIZE_CLASSES} ${className}`}
    >
      {/* Background Project Image Layer (16:9 aspect, object-cover, centered, overflow-hidden and hover scale) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
          alt="CPU Scheduler Showdown"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-20 group-hover:opacity-35"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a] via-[#050f1a]/90 to-[#050f1a]/75" />
      </div>

      {/* Cyber Neon Radiance */}
      <div className="absolute top-0 right-6 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-cyan-500/20 text-[10px] sm:text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
            <Cpu size={12} />
          </div>
          <span className="font-bold text-white tracking-wide text-[10px] sm:text-[11px] truncate">
            CPU SCHEDULER: ENERGY AWARE
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 text-[9px] border border-cyan-400/30 shrink-0 font-semibold">
          100 Tasks
        </span>
      </div>

      {/* Main Comparison Mockup - Perfectly Fitted & Enlarged */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between py-2 overflow-hidden">
        {/* Savings Announcement */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm sm:text-base font-bold text-rose-400 font-mono tracking-wider drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]">
            50.00% SAVINGS!
          </span>
          <Zap size={13} className="text-yellow-400 animate-bounce" />
        </div>

        {/* 3D Isometric Comparison Towers - Proportional Height */}
        <div className="flex items-end justify-center gap-8 sm:gap-12 h-20 relative">
          {/* FCFS Baseline */}
          <div className="flex flex-col items-center">
            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-300 leading-none">10,205 J</div>
            <div className="w-14 sm:w-16 h-14 rounded-t bg-gradient-to-t from-cyan-600 via-sky-500 to-cyan-300 border border-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.4)] relative mt-1.5">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-cyan-100 rounded-t" />
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-white/80 mt-1 font-semibold">FCFS</div>
          </div>

          <div className="text-amber-400 font-bold text-xs sm:text-sm animate-pulse mb-3">
            → -50%
          </div>

          {/* DVFS Tower */}
          <div className="flex flex-col items-center">
            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-300 leading-none">5,102 J</div>
            <div className="w-14 sm:w-16 h-7 rounded-t bg-gradient-to-t from-emerald-600 via-green-500 to-emerald-300 border border-emerald-200 shadow-[0_0_10px_rgba(16,185,129,0.4)] relative mt-1.5">
              <div className="absolute inset-x-0 top-0 h-1 bg-emerald-100 rounded-t" />
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-emerald-300 font-bold mt-1">DVFS</div>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="relative z-10 flex items-center justify-between pt-1.5 border-t border-cyan-500/20 text-[9px] font-mono text-cyan-300/80 shrink-0">
        <div className="flex items-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="truncate">Simulated 100 Dynamic Tasks</span>
        </div>
        <div className="flex items-center gap-1 group-hover:text-cyan-200 transition-colors shrink-0">
          <span>Benchmark</span>
          <ArrowUpRight size={11} className="text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

/** 5. DSA Legends */
export const DsaLegendsCard: React.FC<CardProps> = ({ onSelect, className = '' }) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/30 bg-[#080710] hover:border-purple-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer select-none ${CARD_SIZE_CLASSES} ${className}`}
    >
      {/* Background Project Image Layer (16:9 aspect, object-cover, centered, overflow-hidden and hover scale) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
          alt="DSA Legends RPG"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-20 group-hover:opacity-35"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080710] via-[#080710]/90 to-[#080710]/75" />
      </div>

      {/* Cosmic Constellation Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-8 w-1 h-1 rounded-full bg-white animate-ping" />
      <div className="absolute bottom-8 right-8 w-1 h-1 rounded-full bg-cyan-300/70" />

      {/* Header bar with Play button */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-purple-500/20 text-[10px] sm:text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
            <Gamepad2 size={12} />
          </div>
          <span className="font-semibold text-purple-200 tracking-wider text-[10px] sm:text-[11px]">
            ALGORITHM RPG GAME
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full border border-purple-400/50 text-purple-200 font-mono text-[9px] bg-purple-500/15 font-semibold">
          Play Now
        </span>
      </div>

      {/* Main Sci-Fi Title & RPG Stats - Enlarged */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between py-2 text-center overflow-hidden">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] font-mono leading-none">
            DSA LEGENDS
          </h3>
          <div className="text-[9px] sm:text-[10px] font-mono text-purple-300/90 tracking-[0.2em] uppercase mt-1.5 font-bold">
            WORLD OF ALGORITHMS • RPG
          </div>
          <p className="text-xs sm:text-[13px] text-white/75 truncate mt-1">
            Master Data Structures & Algorithms through progressive RPG quests
          </p>
        </div>

        {/* 4 HUD Metric Boxes - Enlarged */}
        <div className="grid grid-cols-4 gap-1.5">
          <div className="bg-[#130f1f] p-1.5 rounded-lg border border-purple-500/30">
            <div className="text-sm sm:text-base font-mono font-black text-white leading-none">7</div>
            <div className="text-[7.5px] font-mono text-purple-300/80 uppercase mt-0.5 font-semibold">WORLDS</div>
          </div>
          <div className="bg-[#130f1f] p-1.5 rounded-lg border border-purple-500/30">
            <div className="text-sm sm:text-base font-mono font-black text-white leading-none">50+</div>
            <div className="text-[7.5px] font-mono text-purple-300/80 uppercase mt-0.5 font-semibold">MISSIONS</div>
          </div>
          <div className="bg-[#130f1f] p-1.5 rounded-lg border border-purple-500/30">
            <div className="text-sm sm:text-base font-mono font-black text-white leading-none">7</div>
            <div className="text-[7.5px] font-mono text-purple-300/80 uppercase mt-0.5 font-semibold">BOSSES</div>
          </div>
          <div className="bg-[#130f1f] p-1.5 rounded-lg border border-purple-500/30">
            <div className="text-sm sm:text-base font-mono font-black text-white leading-none">∞</div>
            <div className="text-[7.5px] font-mono text-purple-300/80 uppercase mt-0.5 font-semibold">QUIZZES</div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-purple-500/20 text-[10px] sm:text-[11px] font-mono text-purple-300/80 shrink-0">
        <span className="text-[9px] uppercase tracking-wider text-purple-400 truncate font-semibold">Canvas Engine RPG</span>
        <div className="flex items-center gap-1 group-hover:text-purple-200 transition-colors shrink-0">
          <span className="font-semibold">Game</span>
          <ArrowUpRight size={13} className="text-purple-400" />
        </div>
      </div>
    </div>
  );
};

/** 6. Event Management System */
export const EventManagementCard: React.FC<CardProps> = ({ onSelect, className = '' }) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-500/30 bg-[#060a14] hover:border-blue-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer select-none ${CARD_SIZE_CLASSES} ${className}`}
    >
      {/* Background Project Image Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
          alt="Event Management System"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-20 group-hover:opacity-35"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/90 to-[#060a14]/75" />
      </div>

      {/* Ambient Radiance */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-4 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-blue-500/20 text-[10px] sm:text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
            <CalendarDays size={12} />
          </div>
          <span className="font-bold text-blue-100 tracking-wide font-sans text-sm">Event Manager</span>
          <span className="px-2 py-0.5 rounded bg-blue-400/20 text-blue-300 text-[9px] border border-blue-400/30 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Live
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-blue-500 text-white font-semibold text-[9px]">
          Full-Stack
        </span>
      </div>

      {/* Main Visual Body - Enlarged */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between py-2 overflow-hidden">
        <div>
          <h3
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-2xl sm:text-[26px] md:text-3xl text-white font-normal leading-tight truncate"
          >
            Event <span className="italic text-blue-300">Management</span> System
          </h3>
          <p className="text-xs sm:text-[13px] text-blue-100/75 truncate mt-1">
            Organize, manage & track events with seamless experience
          </p>
        </div>

        {/* 3 Key Feature Cards - Enlarged */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-blue-500/15 text-center">
          <div className="bg-[#0c1225] p-2 rounded-lg border border-blue-500/25">
            <CalendarDays size={14} className="text-blue-400 mx-auto mb-1" />
            <div className="text-[8px] sm:text-[9px] text-blue-200/90 font-mono uppercase font-semibold">Create</div>
          </div>
          <div className="bg-[#0c1225] p-2 rounded-lg border border-blue-500/25">
            <Users size={14} className="text-indigo-400 mx-auto mb-1" />
            <div className="text-[8px] sm:text-[9px] text-blue-200/90 font-mono uppercase font-semibold">Register</div>
          </div>
          <div className="bg-[#0c1225] p-2 rounded-lg border border-blue-500/25">
            <Clock size={14} className="text-sky-400 mx-auto mb-1" />
            <div className="text-[8px] sm:text-[9px] text-blue-200/90 font-mono uppercase font-semibold">Schedule</div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-blue-500/20 text-[10px] sm:text-[11px] font-mono text-blue-300/80 shrink-0">
        <span className="text-[9px] uppercase tracking-wider text-blue-400 truncate font-semibold">Full-Stack Platform</span>
        <div className="flex items-center gap-1 group-hover:text-blue-200 transition-colors shrink-0">
          <span className="font-semibold">Details</span>
          <ArrowUpRight size={13} className="text-blue-400" />
        </div>
      </div>
    </div>
  );
};
