import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Check, Globe, Search, X, Loader2, Sparkles } from 'lucide-react';
import { LanguageConfig } from '../types/portfolio';
import { FlagIcon } from './FlagIcon';

interface LanguageSwitcherProps {
  className?: string;
  isCompact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  isCompact = false,
}) => {
  const {
    language,
    setLanguage,
    supportedLanguages,
    currentLanguageConfig,
    isTranslating,
    translatingLanguage,
  } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Filter languages by query (matches label, nativeName, or code)
  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return supportedLanguages;
    const q = searchQuery.toLowerCase().trim();
    return supportedLanguages.filter(
      (lang) =>
        lang.label.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [supportedLanguages, searchQuery]);

  const handleSelect = (lang: LanguageConfig) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={isTranslating}
        aria-label="Select website language"
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
          isOpen
            ? 'bg-slate-900 text-cyan-300 border border-cyan-400/60 shadow-[0_0_18px_rgba(6,182,212,0.3)]'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50'
        } backdrop-blur-md disabled:opacity-75 disabled:cursor-wait`}
      >
        {isTranslating ? (
          <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
        ) : (
          <FlagIcon country={currentLanguageConfig.code} className="w-4 h-3 shrink-0" />
        )}

        <span className={`tracking-wide ${isCompact ? 'hidden sm:inline' : 'inline'}`}>
          {isTranslating && translatingLanguage
            ? `Translating...`
            : currentLanguageConfig.nativeName}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-cyan-400' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Popover */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select Language"
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-[#090e1a]/98 border border-cyan-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="px-2.5 py-2 border-b border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-cyan-400" />
              Global Translation / 언어
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              {supportedLanguages.length} Languages
            </span>
          </div>

          {/* Search Input Box */}
          <div className="p-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language / 언어 검색 / ভাষা..."
                className="w-full pl-8 pr-8 py-2 text-xs bg-slate-950/90 text-white placeholder-slate-500 rounded-lg border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Language Options List */}
          <div className="max-h-64 overflow-y-auto px-1 py-1 space-y-1 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-slate-900">
            {filteredLanguages.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400 space-y-2">
                <p>No language found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-cyan-400 hover:underline text-[11px] font-medium"
                >
                  Clear search filter
                </button>
              </div>
            ) : (
              filteredLanguages.map((langConfig) => {
                const isSelected = language === langConfig.code;
                const isTargetTranslating =
                  isTranslating && translatingLanguage?.code === langConfig.code;
                const isNativeVerified =
                  langConfig.code === 'en' ||
                  langConfig.code === 'bn' ||
                  langConfig.code === 'ko';

                return (
                  <button
                    key={langConfig.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(langConfig)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FlagIcon country={langConfig.code} className="w-4 h-3 shrink-0" />
                      <div className="flex flex-col text-left truncate">
                        <span className="font-semibold text-white leading-tight truncate">
                          {langConfig.nativeName}
                        </span>
                        <span className="text-[10px] text-slate-400 leading-tight truncate">
                          {langConfig.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {isNativeVerified && (
                        <span className="text-[9px] px-1 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                          Instant
                        </span>
                      )}
                      {isTargetTranslating ? (
                        <Loader2 className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                      ) : isSelected ? (
                        <Check className="w-4 h-4 text-cyan-400" />
                      ) : null}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div className="pt-2 mt-1 border-t border-slate-800/80 px-2 py-1 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400/90 font-mono">
              <Sparkles className="w-3 h-3" />
              Dynamic Multilingual Engine
            </span>
            <span className="text-slate-500 font-mono">Gemini AI</span>
          </div>
        </div>
      )}
    </div>
  );
};
