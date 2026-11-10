import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_CONFIG } from '../data/profile';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  ChevronDown, 
  Code2, 
  Cpu, 
  Bot, 
  Smartphone,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { FlagIcon } from './FlagIcon';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { content, language } = useLanguage();
  const hero = content.hero;

  const titles = hero.animatedTitles && hero.animatedTitles.length > 0
    ? hero.animatedTitles
    : [
        'Software Developer',
        'Web Application Developer',
        'Flutter Developer',
        'AI & Computer Engineering Student',
        'Arduino & Embedded Systems Enthusiast',
      ];

  // Smooth typing animation state
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typing when language changes
  useEffect(() => {
    setDisplayedText('');
    setIsDeleting(false);
    setCurrentTitleIndex(0);
  }, [language]);

  useEffect(() => {
    const fullTitle = titles[currentTitleIndex % titles.length] || '';
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < fullTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullTitle.slice(0, displayedText.length + 1));
        }, 70);
      } else {
        // Pause at complete title before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullTitle.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid bg-radial-gradient"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Typing Subtitle, Bio, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Location & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Location display with pin and inline SVG flag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold shadow-inner">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{hero.location || 'Busan, South Korea'}</span>
                <FlagIcon country="KR" className="w-4 h-3 inline-block" />
              </div>

              {/* Status label: Open to Global Opportunities with pulsing indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{hero.openToOpportunities || 'Open to Global Opportunities'}</span>
              </div>

              {/* University academic standing */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>{hero.statusBadge}</span>
              </div>
            </div>

            {/* Greeting & Full Name in Uppercase */}
            <div>
              <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest font-semibold uppercase mb-1 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
                <span>{hero.greeting}</span>
              </p>
              
              {/* Requested Uppercase Name: CHOWDHURY MD REMON */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="text-gradient block font-mono sm:font-sans uppercase">
                  {hero.name || 'CHOWDHURY MD REMON'}
                </span>
              </h1>

              {/* Localized Script Subtitle if Bengali or Korean */}
              {hero.subName && (
                <p className="text-slate-400 text-sm sm:text-base font-medium mt-1">
                  ({hero.subName})
                </p>
              )}

              {/* Animated Typing Title with Blinking Cursor */}
              <div className="mt-3 flex items-center min-h-[2.5rem] sm:min-h-[3rem]">
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 font-mono sm:font-sans">
                  {displayedText}
                </span>
                <span
                  className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse"
                  aria-hidden="true"
                >
                  |
                </span>
              </div>
            </div>

            {/* University Tagline Banner with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm shadow-sm backdrop-blur-md">
              <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm border border-emerald-500/30">
                <img
                  src="/tongmyong_logo.png"
                  alt="Tongmyong University Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex items-center gap-1.5 flex-wrap">
                <strong className="text-white font-semibold">{hero.universityBadge}</strong>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Dept. of AI & Computer Engineering</span>
              </span>
            </div>

            {/* Bio text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {hero.bio}
            </p>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {hero.roleBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Explore Projects Button */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>{hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Download / View CV Button */}
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 text-white border border-cyan-500/40 hover:border-cyan-400 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{hero.viewCv}</span>
              </button>

              {/* Contact Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700/80 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{hero.contactMe}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional Profile Portrait & Developer Terminal */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Profile Photo Card */}
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] mx-auto mb-6">
              {/* Outer Cyan Electric Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500" />

              {/* Portrait Frame */}
              <div className="relative rounded-3xl bg-[#0b1222] border-2 border-cyan-400/50 group-hover:border-cyan-300 p-2 shadow-2xl transition-all duration-300 group-hover:scale-[1.015]">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white/5 border border-slate-800">
                  <img
                    src={PROFILE_CONFIG.photoUrl}
                    alt={PROFILE_CONFIG.photoAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  
                  {/* Subtle lower gradient overlay for badges */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

                  {/* Overlaid Badges on Portrait */}
                  <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between gap-1.5">
                    <div className="px-2.5 py-1 rounded-xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 text-[10px] sm:text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-lg">
                      <div className="w-3.5 h-3.5 rounded bg-white p-[1px] flex items-center justify-center shrink-0">
                        <img
                          src="/tongmyong_logo.png"
                          alt="Tongmyong University"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span>Tongmyong Univ</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-[10px] sm:text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Busan, South Korea</span>
                      <FlagIcon country="KR" className="w-3.5 h-2.5 inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Terminal Card beneath */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              <div className="relative bg-[#0b1222]/95 border border-cyan-500/30 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    remon@busan-station:~$
                  </span>
                  <div className="w-4" />
                </div>

                {/* Terminal Snippet */}
                <div className="p-4 font-mono text-xs space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Embedded & AI
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Student
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1 font-sans">
                    {['Python', 'Dart', 'Flutter', 'Arduino', 'NumPy', 'Pandas', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 group-hover:text-cyan-400">
              {hero.scrollDown}
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
