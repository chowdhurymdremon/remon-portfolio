import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Bot, 
  Cpu, 
  Target, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CareerInterests: React.FC = () => {
  const { content } = useLanguage();
  const interests = content.interests;

  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'software-engineering':
        return <Code className="w-6 h-6 text-cyan-400" />;
      case 'web-development':
        return <Globe className="w-6 h-6 text-sky-400" />;
      case 'mobile-app-dev':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'artificial-intelligence':
        return <Bot className="w-6 h-6 text-purple-400" />;
      case 'arduino-embedded':
        return <Cpu className="w-6 h-6 text-teal-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="interests" className="py-24 relative z-10 bg-[#070b14]/75 backdrop-blur-[1px] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/50">
              {interests.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {interests.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {interests.subtitle}
            </p>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              {interests.introNotice}
            </p>
          </div>
        </ScrollReveal>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.items.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 75}
              className={`h-full flex flex-col ${idx === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div
                className="p-7 rounded-3xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] h-full"
              >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getInterestIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    0{idx + 1} //
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-1">
                  {item.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Focus areas pills */}
                <div className="mt-5">
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider block mb-2">
                    Key Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.focusAreas.map((focus, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 font-medium"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ambition & Future Goal */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <Target className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="italic leading-relaxed text-slate-300">
                    "{item.ambition}"
                  </span>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
