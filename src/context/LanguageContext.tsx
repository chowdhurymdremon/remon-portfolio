import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Language, LanguageConfig } from '../types/portfolio';
import { translations, TranslationDictionary } from '../data/translations';

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  // Primary Core Languages (Pre-verified)
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧', isReady: true },
  { code: 'bn', label: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', isReady: true },
  { code: 'ko', label: 'Korean', nativeName: '한국어', flag: '🇰🇷', isReady: true },

  // East & Southeast Asia
  { code: 'ja', label: 'Japanese', nativeName: '日本語', flag: '🇯🇵', isReady: true },
  { code: 'zh', label: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳', isReady: true },
  { code: 'zh-TW', label: 'Chinese (Traditional)', nativeName: '繁體中文', flag: '🇹🇼', isReady: true },
  { code: 'vi', label: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', isReady: true },
  { code: 'id', label: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', isReady: true },
  { code: 'ms', label: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾', isReady: true },
  { code: 'th', label: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', isReady: true },
  { code: 'tl', label: 'Filipino / Tagalog', nativeName: 'Tagalog', flag: '🇵🇭', isReady: true },

  // South Asia
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', isReady: true },
  { code: 'ur', label: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', isReady: true },

  // Middle East & West Asia
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', isReady: true },
  { code: 'fa', label: 'Persian (Farsi)', nativeName: 'فارسی', flag: '🇮🇷', isReady: true },
  { code: 'tr', label: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', isReady: true },
  { code: 'he', label: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', isReady: true },

  // Europe & Americas
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸', isReady: true },
  { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷', isReady: true },
  { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪', isReady: true },
  { code: 'pt', label: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', isReady: true },
  { code: 'ru', label: 'Russian', nativeName: 'Русский', flag: '🇷🇺', isReady: true },
  { code: 'it', label: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', isReady: true },
  { code: 'nl', label: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', isReady: true },
  { code: 'pl', label: 'Polish', nativeName: 'Polski', flag: '🇵🇱', isReady: true },
  { code: 'uk', label: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', isReady: true },
  { code: 'sv', label: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', isReady: true },
  { code: 'el', label: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷', isReady: true },
  { code: 'cs', label: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', isReady: true },
  { code: 'ro', label: 'Romanian', nativeName: 'Română', flag: '🇷🇴', isReady: true },
  { code: 'hu', label: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺', isReady: true },
  { code: 'da', label: 'Danish', nativeName: 'Dansk', flag: '🇩🇰', isReady: true },
  { code: 'fi', label: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮', isReady: true },
  { code: 'no', label: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴', isReady: true },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: TranslationDictionary;
  supportedLanguages: LanguageConfig[];
  currentLanguageConfig: LanguageConfig;
  isTranslating: boolean;
  translatingLanguage: LanguageConfig | null;
  translationError: string | null;
  clearTranslationError: () => void;
  requestLanguageTranslation: (targetLangCode: string) => Promise<boolean>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'remon_portfolio_language';
const DICT_CACHE_PREFIX = 'portfolio_dict_';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Client-side cache of fetched custom dictionaries
  const [customDictionaries, setCustomDictionaries] = useState<Record<string, TranslationDictionary>>(() => {
    const initial: Record<string, TranslationDictionary> = {};
    try {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        if (lang.code !== 'en' && lang.code !== 'bn' && lang.code !== 'ko') {
          const cachedStr = localStorage.getItem(`${DICT_CACHE_PREFIX}${lang.code}`);
          if (cachedStr) {
            try {
              initial[lang.code] = JSON.parse(cachedStr);
            } catch {
              // ignore corrupted entry
            }
          }
        }
      });
    } catch {
      // localStorage may fail in private mode
    }
    return initial;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        // If it's en, bn, ko or already cached in localStorage
        if (saved === 'en' || saved === 'bn' || saved === 'ko') {
          return saved;
        }
        const cached = localStorage.getItem(`${DICT_CACHE_PREFIX}${saved}`);
        if (cached) {
          return saved;
        }
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translatingLanguage, setTranslatingLanguage] = useState<LanguageConfig | null>(null);
  const [translationError, setTranslationError] = useState<string | null>(null);

  const clearTranslationError = useCallback(() => {
    setTranslationError(null);
  }, []);

  /**
   * Request dynamic translation for any target language
   */
  const requestLanguageTranslation = useCallback(
    async (targetLangCode: string): Promise<boolean> => {
      clearTranslationError();

      // Check pre-packaged translations
      if (translations[targetLangCode as keyof typeof translations]) {
        setLanguageState(targetLangCode);
        try {
          localStorage.setItem(STORAGE_KEY, targetLangCode);
        } catch {
          // ignore
        }
        return true;
      }

      // Check client-side cached dictionary
      if (customDictionaries[targetLangCode]) {
        setLanguageState(targetLangCode);
        try {
          localStorage.setItem(STORAGE_KEY, targetLangCode);
        } catch {
          // ignore
        }
        return true;
      }

      const targetConfig = SUPPORTED_LANGUAGES.find((l) => l.code === targetLangCode);
      const targetName = targetConfig ? targetConfig.label : targetLangCode;

      setIsTranslating(true);
      setTranslatingLanguage(targetConfig || {
        code: targetLangCode,
        label: targetLangCode,
        nativeName: targetLangCode,
        flag: '🌐',
        isReady: true,
      });

      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            targetLang: targetLangCode,
            targetName: targetName,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `Translation request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!data.translation) {
          throw new Error('No translation returned from server.');
        }

        const newDict = data.translation as TranslationDictionary;

        // Store into state and localStorage
        setCustomDictionaries((prev) => ({
          ...prev,
          [targetLangCode]: newDict,
        }));

        try {
          localStorage.setItem(`${DICT_CACHE_PREFIX}${targetLangCode}`, JSON.stringify(newDict));
          localStorage.setItem(STORAGE_KEY, targetLangCode);
        } catch {
          // localStorage full or restricted
        }

        setLanguageState(targetLangCode);
        return true;
      } catch (err: unknown) {
        const error = err as Error;
        console.error('Translation error:', error);
        setTranslationError(
          error.message || `Unable to translate portfolio into ${targetName}. Please try again.`
        );
        return false;
      } finally {
        setIsTranslating(false);
        setTranslatingLanguage(null);
      }
    },
    [customDictionaries, clearTranslationError]
  );

  const setLanguage = useCallback(
    (lang: Language) => {
      // If language is already ready
      if (
        translations[lang as keyof typeof translations] ||
        customDictionaries[lang]
      ) {
        setLanguageState(lang);
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch {
          // ignore
        }
      } else {
        // Trigger on-demand translation
        requestLanguageTranslation(lang);
      }
    },
    [customDictionaries, requestLanguageTranslation]
  );

  useEffect(() => {
    // Update html lang attribute and body class for font switching
    document.documentElement.lang = language;
    document.body.classList.remove('lang-en', 'lang-bn', 'lang-ko');
    document.body.classList.add(`lang-${language}`);

    // Exact browser tab title requested by user
    document.title = 'CHOWDHURY MD REMON | Developer Portfolio';
  }, [language]);

  // Guaranteed complete translation dictionary, fallback to English if ever missing
  const content = useMemo(() => {
    if (translations[language as keyof typeof translations]) {
      return translations[language as keyof typeof translations];
    }
    if (customDictionaries[language]) {
      return customDictionaries[language];
    }
    return translations.en;
  }, [language, customDictionaries]);

  const currentLanguageConfig = useMemo(() => {
    return (
      SUPPORTED_LANGUAGES.find((l) => l.code === language) || {
        code: language,
        label: language,
        nativeName: language,
        flag: '🌐',
        isReady: true,
      }
    );
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        content,
        supportedLanguages: SUPPORTED_LANGUAGES,
        currentLanguageConfig,
        isTranslating,
        translatingLanguage,
        translationError,
        clearTranslationError,
        requestLanguageTranslation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
