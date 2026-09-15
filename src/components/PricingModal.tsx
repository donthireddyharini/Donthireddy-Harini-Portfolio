import React from 'react';
import { X, Check, Zap, Cpu, Sparkles } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, onSelectTier }) => {
  if (!isOpen) return null;

  const tiers = [
    {
      name: 'Open Source Supporter',
      price: '$19',
      period: 'monthly sponsor',
      description: 'Support ongoing open-source development of distributed systems and developer tooling.',
      features: [
        'Access to private early repositories',
        'Direct Discord / GitHub discussions channel',
        'Name listed in project README contributors'
      ],
      icon: Sparkles,
      buttonText: 'Sponsor on GitHub'
    },
    {
      name: 'Architecture & Advisory',
      price: '$2,500',
      period: 'per sprint',
      highlight: true,
      description: 'High-leverage engineering advisory, system design reviews, and performance bottlenecks auditing.',
      features: [
        'Distributed systems & concurrency review',
        'React 19 & rendering pipeline optimization',
        'Direct async architectural consultations',
        'Production security & latency audit'
      ],
      icon: Cpu,
      buttonText: 'Schedule Technical Audit'
    },
    {
      name: 'Full-Stack Execution',
      price: 'Custom',
      period: 'project basis',
      description: 'End-to-end design, implementation, and deployment of mission-critical full-stack applications.',
      features: [
        'Cinematic UI/UX design & liquid glass aesthetics',
        'High-concurrency microservices & API gateways',
        'End-to-end cloud infrastructure & CI/CD deployment',
        '99.9% SLO performance guarantee'
      ],
      icon: Zap,
      buttonText: 'Inquire Availability'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="liquid-glass w-full max-w-5xl max-h-[92vh] rounded-3xl p-6 sm:p-8 flex flex-col text-white shadow-2xl border border-white/15 overflow-hidden"
        style={{ background: 'rgba(10, 10, 14, 0.85)' }}
      >
        <div className="flex items-start justify-between pb-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Services & Engagement Models
            </span>
            <h2 
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl sm:text-4xl font-normal text-white mt-0.5"
            >
              Transparent Pricing & Collaboration
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Pricing Modal"
            className="liquid-glass rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto py-6 grid grid-cols-1 md:grid-cols-3 gap-5 custom-scrollbar">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`liquid-glass rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                  tier.highlight
                    ? 'border-emerald-500/50 bg-emerald-950/20 shadow-emerald-900/20 shadow-xl'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="liquid-glass rounded-xl p-2.5 text-white">
                      <Icon size={20} className={tier.highlight ? 'text-emerald-400' : 'text-white/80'} />
                    </div>
                    {tier.highlight && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-2xl text-white mb-1"
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-semibold text-white tracking-tight">{tier.price}</span>
                    <span className="text-xs text-white/50 font-mono">/{tier.period}</span>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                        <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                    tier.highlight
                      ? 'bg-white text-black hover:bg-white/90 active:scale-95'
                      : 'liquid-glass text-white hover:bg-white/15 border border-white/15'
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
