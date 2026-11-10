import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Printer, Mail, MapPin, GraduationCap, CheckCircle2, ExternalLink, Phone } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { content } = useLanguage();
  const res = content.resumeModal;
  const edu = content.education;
  const skills = content.skills;
  const interests = content.interests;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b1222] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {res.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>{res.downloadPrint}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label={res.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-200" id="printable-resume">
          {/* Header */}
          <div className="border-b border-slate-700/60 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-mono sm:font-sans">
                CHOWDHURY MD REMON
              </h1>
              <p className="text-cyan-400 font-medium text-base mt-1">
                {content.hero.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
                {content.hero.bio}
              </p>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+821098293331" className="hover:text-cyan-300 underline underline-offset-2">
                  +82 10 9829 9331
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:remonchowdhury1999@gmail.com" className="hover:text-cyan-300 underline underline-offset-2">
                  remonchowdhury1999@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Busan, South Korea</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Tongmyong University</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-l-2 border-cyan-400 pl-3">
              {res.educationTitle}
            </h2>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-semibold text-white text-base">
                  {edu.degreeTitle}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit mt-1 sm:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-cyan-400/90 mt-0.5">{edu.university} • {edu.location}</p>
              <p className="text-xs text-slate-400 mt-1">{edu.department} • {edu.currentStanding}</p>
              
              <div className="mt-3 pt-3 border-t border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {edu.focusAreasTitle}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-l-2 border-cyan-400 pl-3">
              {res.skillsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {skills.categories.programming}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Python, Dart, JavaScript, HTML5, CSS3, C/C++ (Arduino)
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {skills.categories.webMobile}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Flutter, React, Responsive UI, REST API Integration
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {skills.categories.aiData}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  NumPy, Pandas, AI / Machine Learning Foundations, Data Preprocessing
                </p>
              </div>

              <div className="p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  {skills.categories.embedded}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Arduino Uno/Nano, Microcontrollers, Ultrasonic/Temp Sensors, I2C LCD, Breadboard Circuits
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-l-2 border-cyan-400 pl-3">
              {res.projectsTitle}
            </h2>
            <div className="space-y-3">
              {content.projects.items.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-semibold text-white text-sm sm:text-base">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 w-fit">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {proj.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-l-2 border-cyan-400 pl-3">
              {res.languagesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800 text-xs">
                <span className="font-bold text-white block">English</span>
                <span className="text-slate-400">Professional Working Proficiency</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800 text-xs">
                <span className="font-bold text-white block">Bengali (বাংলা)</span>
                <span className="text-slate-400">Native Speaker</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800 text-xs">
                <span className="font-bold text-white block">Korean (한국어)</span>
                <span className="text-slate-400">Conversational & Academic Life in Busan</span>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
            {res.disclaimer}
          </div>
        </div>

        {/* Modal bottom actions */}
        <div className="px-6 py-3.5 bg-slate-900/90 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {res.close}
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{res.downloadPrint}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
