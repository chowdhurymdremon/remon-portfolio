import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar, MapPin, CheckCircle, BookOpen, School, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  const { content } = useLanguage();
  const edu = content.education;

  return (
    <section id="education" className="py-24 relative z-10 bg-[#090f1e]/75 backdrop-blur-[1px] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/50">
              {edu.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {edu.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {edu.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Big Main Educational Journey Card */}
        <ScrollReveal delay={100}>
          <div className="relative p-6 sm:p-10 rounded-3xl bg-[#0b1428] border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Banner with University Identity */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg shadow-emerald-950/50 border-2 border-emerald-500/40 shrink-0">
                <img
                  src="/tongmyong_logo.png"
                  alt="Tongmyong University Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase font-mono tracking-wider text-cyan-400">
                  {edu.currentStanding}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  {edu.degreeTitle}
                </h3>
                <p className="text-base sm:text-lg font-medium text-slate-300 mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-cyan-300 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-white p-0.5 inline-flex items-center justify-center shadow-xs border border-emerald-500/30 shrink-0">
                      <img
                        src="/tongmyong_logo.png"
                        alt="Tongmyong University Logo"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span>{edu.university}</span>
                  </span>
                  <span className="text-slate-500">•</span>
                  <span>{edu.department}</span>
                </p>
              </div>
            </div>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-semibold">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{edu.period}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-semibold">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          {/* Academic Overview Text */}
          <div className="py-6">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              {edu.academicSummary}
            </p>
          </div>

          {/* Grid: Coursework & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* Left: Coursework List */}
            <div className="lg:col-span-7 bg-[#080d1c] p-6 sm:p-7 rounded-2xl border border-slate-800/80">
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{edu.focusAreasTitle}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {edu.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Academic Environment & Campus Experience */}
            <div className="lg:col-span-5 bg-[#080d1c] p-6 sm:p-7 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>{edu.keyAchievementsTitle}</span>
                </h4>
                <div className="space-y-3.5">
                  {edu.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campus Note Pill */}
              <div className="mt-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300 leading-relaxed">
                💡 <span className="font-semibold">Busan Campus Context:</span> Tongmyong University provides specialized laboratory equipment for embedded programming, sensor data acquisition, and artificial intelligence practical labs.
              </div>
            </div>

          </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
