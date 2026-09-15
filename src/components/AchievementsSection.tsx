import React, { useState } from 'react';
import { Trophy, Medal, Award, Sparkles, ExternalLink, Calendar, MapPin, Landmark, ArrowUpRight, Flame, X, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    description: string;
    imageUrl: string;
  } | null>(null);

  return (
    <section id="achievements-section" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/15 text-xs text-white/80 mb-4 backdrop-blur-xl">
          <span className="font-mono uppercase tracking-wider text-[11px] text-amber-300 flex items-center gap-1.5">
            <Trophy size={12} className="text-amber-400" />
            Honors &amp; Recognition
          </span>
        </div>

        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-3"
        >
          Achievements
        </h2>

        {/* Requested Subtitle */}
        <p className="text-emerald-400 font-mono text-xs sm:text-sm md:text-base tracking-wider uppercase max-w-3xl mx-auto font-medium">
          From national level hackathon stage to athletics stadium
        </p>
      </div>

      {/* Grid of 2 Cards: 1. Hackathon, 2. Athletics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* CARD 1: NATIONAL FINALIST HACKATHON */}
        <article className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/15 bg-black/40 hover:bg-black/55 backdrop-blur-xl transition-all duration-300 hover:border-white/30 flex flex-col justify-between group shadow-xl h-full">
          <div className="flex flex-col flex-1">
            
            {/* 16:9 Image Preview Frame */}
            <div 
              onClick={() =>
                setSelectedImage({
                  title: 'HACK-ADHYAAY National Level Hackathon Certificate',
                  description: 'National Finalist • CodIntern & Vibranta • Nov 28-29, 2025',
                  imageUrl: '/hackadhyaay-certificate.png',
                })
              }
              className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-5 shrink-0 group/img flex items-center justify-center cursor-pointer"
            >
              <img
                src="/hackadhyaay-certificate.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
              />
              <img
                src="/hackadhyaay-certificate.png"
                alt="HACK-ADHYAAY National Level Hackathon Certificate Preview"
                loading="lazy"
                className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                <span className="text-[10px] font-mono text-purple-300 font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-purple-500/30 flex items-center gap-1">
                  <Trophy size={11} className="text-purple-400" />
                  NATIONAL FINALIST
                </span>
              </div>
              <div className="absolute top-3 right-3 z-20">
                <span className="text-[10px] font-mono text-white/90 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20">
                  Nov &apos;25
                </span>
              </div>
            </div>

            {/* Meta Row: Period & Organizer */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[11px] font-mono text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                <Calendar size={11} className="text-purple-400" />
                Nov 28–29, 2025
              </span>
              <span className="text-[11px] font-mono text-purple-300 font-medium tracking-wide uppercase">
                CodIntern &bull; Vibranta
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-1.5 flex items-center justify-between">
              <span>HACK-ADHYAAY National Level Hackathon</span>
              <Award size={18} className="text-purple-400 shrink-0" />
            </h3>

            <p className="text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-4">
              National Finalist &bull; 24-Hour Hackathon &bull; CodIntern &amp; Vibranta
            </p>

            {/* Expanded Description & Technical Matter Block */}
            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 mb-6 flex-1 text-xs text-white/80 leading-relaxed space-y-3">
              <p className="font-medium text-white/90">
                Certificate of Appreciation for enthusiastic participation, dedication, collaborative spirit, and technical skills during the 24-Hour National Level Hackathon.
              </p>

              <div className="space-y-2 pt-1 border-t border-white/5 text-[11.5px]">
                <div className="flex items-start gap-2 text-white/80">
                  <span className="text-purple-400 font-mono font-bold mt-0.5">&bull;</span>
                  <span>
                    <strong>National Grand Finalist:</strong> Selected among top competitive engineering teams nationwide across India for the 24-hour intensive sprint organized by CodIntern &amp; Vibranta.
                  </span>
                </div>

                <div className="flex items-start gap-2 text-white/80">
                  <span className="text-purple-400 font-mono font-bold mt-0.5">&bull;</span>
                  <span>
                    <strong>Rapid Full-Stack Prototyping:</strong> Conceptualized, architected, and built a fully functional web application under strict 24-hour sprint deadlines with high-performance UI and clean architecture.
                  </span>
                </div>

                <div className="flex items-start gap-2 text-white/80">
                  <span className="text-purple-400 font-mono font-bold mt-0.5">&bull;</span>
                  <span>
                    <strong>Real-Time Problem Solving:</strong> Demonstrated rapid algorithmic debugging, resilient teamwork, agile task distribution, and technical innovation under high-pressure competitive evaluation.
                  </span>
                </div>
              </div>

              <p className="text-purple-300/90 text-[11px] font-mono pt-1">
                Recognized by the judging jury for agile execution, modular code quality, and creative technical implementation.
              </p>
            </div>

          </div>

          {/* Tech & Skill Pills */}
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {[
                'Competitive Innovation',
                'Rapid Prototyping',
                'Full-Stack Engineering',
                'Real-Time Problem Solving',
                'Agile Execution',
                'Team Leadership',
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-200 border border-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() =>
                  setSelectedImage({
                    title: 'Certificate of Appreciation — HACK-ADHYAAY',
                    description: '24-Hour National Level Hackathon organized by CodIntern & Vibranta • Nov 28–29, 2025',
                    imageUrl: '/hackadhyaay-certificate.png',
                  })
                }
                className="bg-purple-500 hover:bg-purple-400 text-white text-xs font-semibold px-4 py-2 rounded-full active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-purple-500/25"
              >
                <Award size={14} />
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        </article>

        {/* CARD 2: ATHLETICS & SPORTS EXCELLENCE */}
        <article className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/15 bg-black/40 hover:bg-black/55 backdrop-blur-xl transition-all duration-300 hover:border-white/30 flex flex-col justify-between group shadow-xl h-full">
          <div className="flex flex-col flex-1">
            
            {/* 16:9 Image Preview Frame */}
            <div 
              onClick={() =>
                setSelectedImage({
                  title: 'Athletics & Sports Excellence Portfolio',
                  description: '9 Certificates of Merit • 100m, 200m, 4x100m Relay, Long Jump • State Level',
                  imageUrl: '/athletics-excellence.jpg',
                })
              }
              className="featured-image-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-5 shrink-0 group/img flex items-center justify-center cursor-pointer"
            >
              <img
                src="/athletics-excellence.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-105 opacity-25 pointer-events-none"
              />
              <img
                src="/athletics-excellence.jpg"
                alt="Athletics & Sports Excellence — Certificates of Merit & Medals Showcase"
                loading="lazy"
                className="featured-image-contain relative z-10 w-full h-full object-contain object-center block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                <span className="text-[10px] font-mono text-amber-300 font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/30 flex items-center gap-1">
                  <Medal size={11} className="text-amber-400" />
                  9 CERTIFICATES OF MERIT
                </span>
              </div>
              <div className="absolute top-3 right-3 z-20">
                <span className="text-[10px] font-mono text-white/90 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20">
                  State Level
                </span>
              </div>
            </div>

            {/* Meta Row: Role & Discipline */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[11px] font-mono text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                <Calendar size={11} className="text-amber-400" />
                2023–24 &bull; 2024–25 &bull; 2026
              </span>
              <span className="text-[11px] font-mono text-amber-300 font-medium tracking-wide uppercase">
                Competitive Athlete
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-1.5 flex items-center justify-between">
              <span>Athletics &amp; Sports Excellence</span>
              <Flame size={18} className="text-amber-400 shrink-0" />
            </h3>

            <p className="text-xs font-mono text-amber-300/80 uppercase tracking-wider mb-4">
              Sprinting &bull; Relay &bull; Long Jump &bull; AIU Athletics
            </p>

            {/* Prominently Highlighted Distinction Banner */}
            <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-amber-500/5 border border-amber-400/40 flex items-center gap-3 shadow-lg shadow-amber-500/10">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 border border-amber-400/50">
                <Trophy size={16} className="text-amber-300" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-bold block">
                  State Level Athlete
                </span>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Best Athlete and Individual Champion in State-Level
                </span>
              </div>
            </div>

            {/* Structured Metric Highlights Block */}
            <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 mb-6 flex-1 space-y-2.5 text-xs text-white/80 leading-relaxed">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Trophy size={14} className="shrink-0 text-amber-400" />
                <span>9 Certificates of Merit &bull; Multiple 1st-Place Finishes</span>
              </div>

              <div className="flex items-center gap-2 text-white/85">
                <span className="text-emerald-400 font-mono font-bold">&bull;</span>
                <span>Events: 100m • 200m • 4×100m Relay • Long Jump</span>
              </div>

              <div className="flex items-start gap-2 text-white/75">
                <MapPin size={13} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Regional &amp; State Level — IPSGSM 2023–24 &amp; 2024–25</span>
              </div>

              <div className="flex items-start gap-2 text-white/75">
                <Landmark size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Government of Andhra Pradesh — Department of Technical Education</span>
              </div>

              <div className="flex items-start gap-2 text-white/75 pt-1 border-t border-white/5">
                <span className="text-emerald-400 font-mono font-bold">&bull;</span>
                <span>AIU Athletics Participant, LPU — Represented LPU in All India Inter-University athletics, competing at the university level (Jan 2026).</span>
              </div>

              <div className="text-[11px] font-mono text-amber-200/90 pt-1">
                Built through <strong className="text-white">discipline, consistency, competitive spirit, and resilience.</strong>
              </div>
            </div>

          </div>

          {/* Core Values & Action Buttons */}
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Discipline', 'Consistency', 'Competitive Spirit', 'Resilience', 'High Performance'].map((val) => (
                <span
                  key={val}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-200 border border-amber-500/20"
                >
                  {val}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
              <a
                href="https://www.linkedin.com/posts/harini-donthireddy-040056383_athletics-sportsachievement-studentathlete-activity-7501518140321787904-nniL?utm_source=share&utm_medium=member_android&rcm=ACoAAF6DbbABLKQT75hq9hZQjvKCbC2Bkx1pBgQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold px-5 py-2.5 rounded-full active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
              >
                <Medal size={14} className="stroke-[2.5]" />
                <span>View Showcase</span>
                <ExternalLink size={12} className="opacity-70 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </article>

      </div>

      {/* High-Resolution Fullscreen Image Viewer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass w-full max-w-4xl rounded-3xl p-5 sm:p-7 bg-zinc-950/95 border border-white/20 text-white shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  Verified Achievement
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Title */}
            <div className="mb-3 shrink-0">
              <h3
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl sm:text-3xl font-normal text-white mb-1"
              >
                {selectedImage.title}
              </h3>
              <p className="text-xs font-mono text-white/60">
                {selectedImage.description}
              </p>
            </div>

            {/* Image Frame */}
            <div className="relative flex-1 min-h-[320px] max-h-[64vh] rounded-2xl overflow-auto border border-white/15 bg-black/90 flex items-center justify-center p-2 sm:p-4">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4 shrink-0">
              <span className="text-xs font-mono text-white/50">
                Official Achievement Record
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={selectedImage.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Open Full Size</span>
                  <ExternalLink size={12} />
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono transition-all cursor-pointer shadow-md"
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
