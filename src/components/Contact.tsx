import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_CONFIG } from '../data/profile';
import { 
  Mail, 
  MapPin, 
  Building2, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  Phone,
  PhoneCall,
  ExternalLink,
  AlertCircle,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { FlagIcon } from './FlagIcon';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const { content } = useLanguage();
  const contact = content.contact;
  const formLang = contact.form;

  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contact.emailVal);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const copyPhoneToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneVal || PROFILE_CONFIG.phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    // Responsive client simulated dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#090f1e]/75 backdrop-blur-[1px] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/50">
              {contact.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {contact.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {contact.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info, Phone, Location & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card with Clickable tel: link & Copy button */}
            <ScrollReveal delay={50}>
              <div className="p-6 rounded-2xl bg-[#0c1426] border border-cyan-500/30 shadow-xl">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider block mb-1">
                {contact.phoneLabel}
              </span>
              <a
                href={contact.phoneTelLink || PROFILE_CONFIG.phoneTelLink}
                className="text-xl sm:text-2xl font-mono font-bold text-white hover:text-cyan-300 transition-colors block"
              >
                {contact.phoneVal || PROFILE_CONFIG.phone}
              </a>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={copyPhoneToClipboard}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors cursor-pointer"
                >
                  {phoneCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{contact.phoneCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>{contact.copyPhone}</span>
                    </>
                  )}
                </button>

                <a
                  href={contact.phoneTelLink || PROFILE_CONFIG.phoneTelLink}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{contact.callPhone}</span>
                </a>
              </div>
            </div>
            </ScrollReveal>

            {/* Email Card with Copy Button */}
            <ScrollReveal delay={100}>
              <div className="p-6 rounded-2xl bg-[#0c1426] border border-slate-800 hover:border-cyan-500/30 shadow-xl transition-all">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider block mb-1">
                  {contact.emailLabel}
                </span>
                <a
                  href={`mailto:${contact.emailVal}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {contact.emailVal}
                </a>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">{contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-cyan-400" />
                        <span>{contact.copyEmail}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contact.emailVal}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Client</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* KakaoMap Location Card */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl bg-[#0c1426] border border-cyan-500/30 overflow-hidden shadow-xl transition-all">
              {/* Card Header with KakaoMap Logo and Location */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#FEE500] flex items-center justify-center shrink-0 shadow-sm">
                    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 6C10.477 6 6 9.582 6 14c0 2.827 1.882 5.312 4.752 6.664l-1.21 4.469c-.109.403.346.732.677.502l5.28-3.52c.164.02.332.032.501.032 5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        fill="#191919"
                      />
                      <circle cx="16" cy="14" r="2.2" fill="#FEE500" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold font-mono text-white uppercase tracking-wider">
                        {contact.locationLabel}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FEE500]/15 text-[#FEE500] border border-[#FEE500]/30 font-mono">
                        {contact.kakaoMapBadge || '카카오맵 KakaoMap'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 font-medium">
                      {contact.locationVal}
                    </span>
                  </div>
                </div>

                <a
                  href={PROFILE_CONFIG.kakaoMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FEE500] hover:bg-[#ffe812] text-[#191919] shadow-sm transition-all"
                >
                  <span>{contact.viewOnKakaoMap}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#191919]" />
                </a>
              </div>

              {/* Interactive Visual Neighborhood Representation */}
              <div className="relative p-5 bg-gradient-to-br from-[#07111e] via-[#091628] to-[#07111e] border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                <div className="absolute -right-8 -top-8 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-3.5">
                  {/* Neighborhood Pin & Coordinates */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                        <MapPin className="w-5 h-5 text-cyan-300 animate-bounce" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Busan, South Korea
                        </span>
                        <span className="text-[11px] font-mono text-cyan-400">
                          대한민국 부산광역시 • 35.1335° N, 129.0805° E
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800 hidden sm:inline-flex items-center gap-1.5">
                      <span>Busan, South Korea</span>
                      <FlagIcon country="KR" className="w-3.5 h-2.5 inline-block" />
                    </span>
                  </div>

                  {/* Transit & Key Landmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
                      <Navigation className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Busan Metro Line 2</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Tongmyong University Vicinity</span>
                    </div>
                  </div>

                  {/* Clickable View on KakaoMap CTA Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <a
                      href={PROFILE_CONFIG.kakaoMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#FEE500] hover:bg-[#ffe812] text-[#191919] shadow-[0_0_20px_rgba(254,229,0,0.25)] hover:shadow-[0_0_25px_rgba(254,229,0,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <svg viewBox="0 0 32 32" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 6C10.477 6 6 9.582 6 14c0 2.827 1.882 5.312 4.752 6.664l-1.21 4.469c-.109.403.346.732.677.502l5.28-3.52c.164.02.332.032.501.032 5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                          fill="#191919"
                        />
                        <circle cx="16" cy="14" r="2.2" fill="#FEE500" />
                      </svg>
                      <span>{contact.viewOnKakaoMap}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#191919]" />
                    </a>

                    <span className="text-[11px] text-slate-400 font-mono text-center sm:text-right">
                      Direct search • No API key needed
                    </span>
                  </div>
                </div>
              </div>

              {/* Privacy and neighborhood guarantee notice */}
              <div className="p-3 bg-slate-900/90 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{contact.neighborhoodNotice}</span>
              </div>
            </div>
            </ScrollReveal>

            {/* University & Professional Profiles */}
            <ScrollReveal delay={200}>
              <div className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Building2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">
                      {contact.universityLabel}
                    </span>
                    <p className="text-xs font-semibold text-white">
                      {contact.universityVal}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={PROFILE_CONFIG.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-white group-hover:text-cyan-300">
                        GitHub
                      </span>
                    </div>
                    <span className="text-xs text-cyan-400 font-mono">↗</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-bold text-white group-hover:text-sky-300">
                        LinkedIn
                      </span>
                    </div>
                    <span className="text-xs text-sky-400 font-mono">↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Send Note / Message Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1426] border border-slate-800 shadow-2xl relative">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Send className="w-5 h-5 text-cyan-400" />
                  <span>{contact.sendNoteTitle}</span>
                </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Directly dispatch a structured inquiry to CHOWDHURY MD REMON.
              </p>

              {/* Status alerts */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-700/70 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{formLang.successMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-700/70 text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{formLang.errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      {formLang.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder={formLang.namePlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      {formLang.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder={formLang.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                    {formLang.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder={formLang.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                    {formLang.message} *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder={formLang.messagePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? formLang.sending : formLang.sendButton}</span>
                </button>
              </form>
            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
