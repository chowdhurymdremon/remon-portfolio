import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  User, 
  MapPin, 
  Building2, 
  Layers, 
  BookOpen, 
  Languages, 
  Compass, 
  Award, 
  Cpu, 
  Globe2 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const { content } = useLanguage();
  const about = content.about;
  const cards = about.infoCards;

  const infoGrid = [
    {
      label: cards.locationLabel,
      value: cards.locationVal,
      icon: MapPin,
      accent: 'text-cyan-400',
    },
    {
      label: cards.universityLabel,
      value: cards.universityVal,
      icon: Building2,
      accent: 'text-sky-400',
      isUniversity: true,
    },
    {
      label: cards.majorLabel,
      value: cards.majorVal,
      icon: Layers,
      accent: 'text-blue-400',
    },
    {
      label: cards.levelLabel,
      value: cards.levelVal,
      icon: BookOpen,
      accent: 'text-indigo-400',
    },
    {
      label: cards.languagesLabel,
      value: cards.languagesVal,
      icon: Languages,
      accent: 'text-teal-400',
    },
    {
      label: cards.statusLabel,
      value: cards.statusVal,
      icon: Compass,
      accent: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-[#070b14]/75 backdrop-blur-[1px] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/50">
              {about.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {about.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {about.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <ScrollReveal delay={100}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-slate-800 shadow-xl space-y-4">
                <p className="text-slate-200">
                  {about.introParagraph1}
                </p>
                <p>
                  {about.introParagraph2}
                </p>
                <p>
                  {about.introParagraph3}
                </p>
              </div>
            </ScrollReveal>

            {/* Core Values / Driving Principles */}
            <ScrollReveal delay={200}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090f1e] border border-cyan-950/80">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{about.highlights.title}</span>
                </h3>
                <div className="space-y-4">
                  {about.highlights.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <span className="text-xs font-mono font-bold">0{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Quick Facts Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoGrid.map((info, idx) => {
              const Icon = info.icon;
              return (
                <ScrollReveal key={idx} delay={120 + idx * 70}>
                  <div
                    className="p-5 rounded-2xl bg-[#0c1426] border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0f1a33] transition-all group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 group-hover:scale-105 transition-transform shrink-0 ${info.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-mono text-slate-400 font-semibold block tracking-wide">
                          {info.label}
                        </span>
                        {info.isUniversity ? (
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-5 h-5 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm border border-emerald-500/30">
                              <img
                                src="/tongmyong_logo.png"
                                alt="Tongmyong University Logo"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                              {info.value}
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base font-semibold text-white mt-1 leading-snug">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
