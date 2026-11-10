import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code, 
  Cpu, 
  Database, 
  Terminal, 
  Smartphone, 
  CheckCircle2, 
  Info, 
  Sliders,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const { content } = useLanguage();
  const skills = content.skills;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: skills.categories.programming },
    { id: 'webMobile', label: skills.categories.webMobile },
    { id: 'aiData', label: skills.categories.aiData },
    { id: 'embedded', label: skills.categories.embedded },
    { id: 'tools', label: skills.categories.tools },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills.skillList
    : skills.skillList.filter(s => s.category === selectedCategory);

  const getTechIconColor = (name: string) => {
    switch (name) {
      case 'Python':
        return 'text-sky-400 bg-sky-950/60 border-sky-800/60';
      case 'Dart':
        return 'text-blue-400 bg-blue-950/60 border-blue-800/60';
      case 'JavaScript':
        return 'text-yellow-400 bg-yellow-950/40 border-yellow-800/50';
      case 'HTML5 & CSS3':
        return 'text-orange-400 bg-orange-950/40 border-orange-800/50';
      case 'Flutter':
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60';
      case 'Arduino':
        return 'text-teal-400 bg-teal-950/60 border-teal-800/60';
      case 'NumPy':
        return 'text-indigo-400 bg-indigo-950/60 border-indigo-800/60';
      case 'Pandas':
        return 'text-purple-400 bg-purple-950/60 border-purple-800/60';
      case 'AI / ML Basics':
        return 'text-pink-400 bg-pink-950/60 border-pink-800/60';
      default:
        return 'text-slate-300 bg-slate-900 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#070b14]/75 backdrop-blur-[1px] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/50">
              {skills.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {skills.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {skills.subtitle}
            </p>

            {/* Academic Honesty Notice Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm text-left flex items-start gap-3 shadow-inner">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{skills.honestyNotice}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            const colorClass = getTechIconColor(skill.name);
            return (
              <ScrollReveal key={idx} delay={Math.min(idx * 40, 280)}>
                <div
                  className="group p-6 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/50 hover:bg-[#0e172c] transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transform hover:-translate-y-1 h-full"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border font-bold text-sm ${colorClass}`}>
                          {skill.name.slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400 uppercase">
                            {skills.categories[skill.category as keyof typeof skills.categories] || skill.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Level Tag / Badge */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Proficiency:
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-cyan-300 border border-cyan-800/50">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Hardware & Embedded Focus Highlight Box */}
        <ScrollReveal delay={200}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0a1628] to-slate-900 border border-cyan-900/50 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Arduino & Embedded Hardware Telemetry
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                  Hands-on experience interfacing sensors (ultrasonic distance, DHT11 temp/humidity, passive infrared) with Arduino C/C++ firmware, serial protocol logging, and circuit breadboarding at Tongmyong University.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                C / C++ Firmware
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-950 text-sky-300 border border-blue-700/60">
                GPIO & I2C
              </span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
