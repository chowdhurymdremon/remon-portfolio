import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Loader2, AlertCircle, X, Sparkles } from 'lucide-react';
import { FlagIcon } from './FlagIcon';

export const TranslationStatusIndicator: React.FC = () => {
  const { isTranslating, translatingLanguage, translationError, clearTranslationError } = useLanguage();

  if (!isTranslating && !translationError) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92vw] sm:w-auto px-4 pointer-events-auto transition-all animate-in fade-in slide-in-from-bottom-4 duration-200">
      {/* Loading Banner */}
      {isTranslating && (
        <div className="flex items-center gap-3.5 bg-[#080d1a]/95 border border-cyan-500/50 shadow-[0_10px_40px_rgba(6,182,212,0.3)] rounded-2xl p-4 backdrop-blur-xl text-slate-100">
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
            <span className="absolute -top-1 -right-1 flex items-center">
              <FlagIcon country={translatingLanguage?.code} className="w-4 h-3 shadow-md" />
            </span>
          </div>

          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-white tracking-wide">
                Translating to {translatingLanguage?.nativeName || translatingLanguage?.label}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Gemini 3.8 Flash
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
              Translating all sections: Navigation, Hero, About, Education, Skills, Projects, Interests & Contact...
            </p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {!isTranslating && translationError && (
        <div className="flex items-start gap-3 bg-[#130b0f]/95 border border-rose-500/50 shadow-[0_10px_35px_rgba(244,63,94,0.25)] rounded-2xl p-4 backdrop-blur-xl text-slate-100">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />

          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-semibold text-rose-200">Translation Notice</h4>
            <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{translationError}</p>
          </div>

          <button
            type="button"
            onClick={clearTranslationError}
            aria-label="Dismiss translation message"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
