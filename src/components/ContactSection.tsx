import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, ExternalLink, Phone, Loader2, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.mobile);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Dispatches message directly to donthireddyharini@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/ab18c9efd074de4e73d9a53f2f810525', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Portfolio Review',
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'box',
        }),
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Unable to submit message');
      }
    } catch (err: any) {
      console.warn('Direct submission error, presenting fallback:', err);
      setSubmissionError('Automatic sending was prevented by your network or ad-blocker. You can dispatch this message directly via Gmail Web or your Mail app below:');
    } finally {
      setIsSubmitting(false);
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.email}&su=${encodeURIComponent(
    'Portfolio Review'
  )}`;

  return (
    <section id="contact-section" className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/15 text-xs text-white/80 mb-4 backdrop-blur-xl">
          <span className="font-mono uppercase tracking-wider text-[11px] text-emerald-300">
            Get In Touch
          </span>
        </div>

        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-3"
        >
          Contact &amp; Connect
        </h2>
        <p className="text-white/80 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Feel free to reach out for software engineering roles, project inquiries, or collaborations. Messages are delivered directly to my inbox.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Side: Contact Information & Direct Links */}
        <div className="md:col-span-2 space-y-4">
          <div className="black-glass rounded-3xl p-6 sm:p-7 border border-white/20 bg-black/85 backdrop-blur-2xl shadow-2xl">
            <h3 className="text-xl font-medium text-white mb-2">Direct Contact</h3>
            <p className="text-sm text-zinc-200 mb-5 leading-relaxed font-normal">
              Available via direct email and phone.
            </p>

            {/* Email Card */}
            <div className="p-3.5 rounded-2xl bg-[#090b10]/90 border border-white/15 mb-3 flex items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                  {PORTFOLIO_DATA.email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Mobile Card */}
            <div className="p-3.5 rounded-2xl bg-[#090b10]/90 border border-white/15 mb-4 flex items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                  {PORTFOLIO_DATA.mobile}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Direct Gmail Compose Action */}
            <div className="pt-1">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white text-black text-xs sm:text-sm font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
                title="Open directly in Gmail Web"
              >
                <Mail size={16} className="text-[#EA4335]" />
                <span>Compose in Gmail</span>
                <ExternalLink size={13} className="opacity-60" />
              </a>
            </div>
          </div>

          <div className="black-glass rounded-3xl p-6 border border-white/20 bg-black/85 backdrop-blur-2xl shadow-2xl">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-4">
              Social Profiles &amp; Repositories
            </h3>
            <div className="space-y-2">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#090b10]/90 hover:bg-white/10 border border-white/15 transition-all text-xs sm:text-sm text-white cursor-pointer shadow-inner"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={16} className="text-white" />
                  <span className="font-medium">GitHub</span>
                </div>
                <ExternalLink size={12} className="text-white/60" />
              </a>

              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#090b10]/90 hover:bg-white/10 border border-white/15 transition-all text-xs text-white cursor-pointer shadow-inner"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin size={16} className="text-[#0A66C2]" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <ExternalLink size={12} className="text-white/60" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="md:col-span-3">
          <div className="black-glass rounded-3xl p-6 sm:p-8 border border-white/20 bg-black/85 backdrop-blur-2xl shadow-2xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">Send a Message</h3>
              <p className="text-sm text-zinc-200 mb-6 font-normal">
                Fill in your details below and your message will be delivered directly to <span className="text-white font-mono font-medium">{PORTFOLIO_DATA.email}</span>.
              </p>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3 my-4 animate-fade-in shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check size={22} className="stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Message Delivered to Harini!</h4>
                  <p className="text-sm text-zinc-100 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you for reaching out. Your note has been sent directly to <strong className="text-emerald-300 font-mono">donthireddyharini@gmail.com</strong>. I will get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 text-xs sm:text-sm font-mono text-emerald-400 underline hover:text-white cursor-pointer font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submissionError && (
                    <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-500/50 text-xs sm:text-sm text-amber-200 space-y-2.5 animate-fade-in">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                        <p>{submissionError}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.email}&su=${encodeURIComponent(
                            `Portfolio Message from ${formData.name}`
                          )}&body=${encodeURIComponent(
                            `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow"
                        >
                          <Mail size={14} className="text-[#EA4335]" />
                          <span>Send via Gmail</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-xs sm:text-sm font-mono uppercase text-zinc-300 block mb-1.5 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Carter"
                      disabled={isSubmitting}
                      className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors disabled:opacity-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-mono uppercase text-zinc-300 block mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      disabled={isSubmitting}
                      className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors disabled:opacity-50 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-mono uppercase text-zinc-300 block mb-1.5 font-semibold">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Harini, I'd like to connect regarding..."
                      disabled={isSubmitting}
                      className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors resize-none disabled:opacity-50 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-black" />
                        <span>Sending message to Harini...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-white/60 font-mono">
              <span>{PORTFOLIO_DATA.name}</span>
              <span>Available for Software Engineering Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
