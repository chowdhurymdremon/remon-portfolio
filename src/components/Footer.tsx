import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart, Terminal } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const foot = content.footer;
  const nav = content.nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: nav.home },
    { href: '#about', label: nav.about },
    { href: '#education', label: nav.education },
    { href: '#skills', label: nav.skills },
    { href: '#projects', label: nav.projects },
    { href: '#interests', label: nav.interests },
    { href: '#contact', label: nav.contact },
  ];

  return (
    <footer className="bg-[#05080f] border-t border-slate-800 text-slate-400 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold font-mono text-sm">
                CR
              </div>
              <span className="text-lg font-bold text-white tracking-tight uppercase font-mono sm:font-sans">
                CHOWDHURY MD REMON
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
              {foot.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <LanguageSwitcher isCompact={false} />
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors text-xs font-semibold cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>{foot.top}</span>
            </button>
          </div>
        </div>

        {/* Middle Tier: Links */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
          <div className="flex flex-wrap gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+821098293331"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Call +82 10 9829 9331"
              title="+82 10 9829 9331"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:remonchowdhury1999@gmail.com"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/remonchowdhury"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/remonchowdhury"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Credits */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} CHOWDHURY MD REMON. {foot.copyright}
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>{foot.builtWith}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
