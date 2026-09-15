import React, { useState } from 'react';
import { X, Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'signup' | 'login';
  onClose: () => void;
  onSwitchMode: (mode: 'signup' | 'login') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onSwitchMode,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="liquid-glass w-full max-w-md rounded-3xl p-6 sm:p-8 flex flex-col text-white shadow-2xl border border-white/15 overflow-hidden"
        style={{ background: 'rgba(12, 12, 16, 0.85)' }}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0 mb-5">
          <div>
            <h2 
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-3xl text-white font-normal"
            >
              {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-xs text-white/60 font-mono mt-0.5">
              {mode === 'signup'
                ? 'Join to follow live deployments & updates'
                : 'Access developer dashboard & telemetry'}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Authentication Modal"
            className="liquid-glass rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {success ? (
          <div className="py-8 flex flex-col items-center text-center space-y-3">
            <CheckCircle2 size={40} className="text-emerald-400 animate-bounce" />
            <p className="text-base font-medium text-white">
              {mode === 'signup' ? 'Welcome to Asme Network!' : 'Authenticated successfully!'}
            </p>
            <p className="text-xs text-white/60">Redirecting to your session...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="text-xs text-white/70 block mb-1 font-mono">Full Name</label>
                <div className="liquid-glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-white/10">
                  <User size={16} className="text-white/40" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="bg-transparent text-sm text-white placeholder-white/30 focus:outline-none flex-1 border-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs text-white/70 block mb-1 font-mono">Email Address</label>
              <div className="liquid-glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-white/10">
                <Mail size={16} className="text-white/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="bg-transparent text-sm text-white placeholder-white/30 focus:outline-none flex-1 border-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/70 block mb-1 font-mono">Password</label>
              <div className="liquid-glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-white/10">
                <Lock size={16} className="text-white/40" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="bg-transparent text-sm text-white placeholder-white/30 focus:outline-none flex-1 border-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg mt-2"
            >
              <span>{mode === 'signup' ? 'Get Started' : 'Sign In'}</span>
              <ArrowRight size={16} />
            </button>

            <div className="pt-2 text-center text-xs text-white/60">
              {mode === 'signup' ? (
                <span>
                  Already have credentials?{' '}
                  <button
                    type="button"
                    onClick={() => onSwitchMode('login')}
                    className="text-white underline hover:text-emerald-400 font-medium ml-1"
                  >
                    Log In
                  </button>
                </span>
              ) : (
                <span>
                  New to the platform?{' '}
                  <button
                    type="button"
                    onClick={() => onSwitchMode('signup')}
                    className="text-white underline hover:text-emerald-400 font-medium ml-1"
                  >
                    Sign Up
                  </button>
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
