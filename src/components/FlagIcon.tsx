import React from 'react';

interface FlagIconProps {
  country?: string;
  code?: string;
  className?: string;
  title?: string;
}

/**
 * Inline SVG Flag component to ensure flags render cleanly across all operating systems,
 * especially Windows where Unicode flag emojis (GB, KR, etc.) render as two-letter text codes.
 */
export const FlagIcon: React.FC<FlagIconProps> = ({
  country,
  code,
  className = 'w-4 h-3',
  title,
}) => {
  const c = (country || code || '').toUpperCase();

  // Common wrapper styling
  const wrapperClass = `inline-block align-middle rounded-[2px] overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.4)] border border-slate-700/50 shrink-0 ${className}`;

  switch (c) {
    // South Korea (KR, KO)
    case 'KR':
    case 'KO':
      return (
        <svg
          viewBox="0 0 36 24"
          className={wrapperClass}
          role="img"
          aria-label={title || 'South Korea Flag'}
        >
          <rect width="36" height="24" fill="#ffffff" />
          {/* Taegeuk (Red upper, Blue lower) */}
          <path d="M18 6 A6 6 0 0 1 18 18 A6 6 0 0 1 18 6" fill="#c60c30" />
          <path d="M18 12 A3 3 0 0 1 18 18 A6 6 0 0 1 18 6 A3 3 0 0 0 18 12" fill="#003478" />
          <circle cx="18" cy="9" r="3" fill="#c60c30" />
          <circle cx="18" cy="15" r="3" fill="#003478" />
          {/* Trigrams (Geon, Ri, Gam, Gon) */}
          <g stroke="#000000" strokeWidth="1" strokeLinecap="round">
            {/* Top-left (Geon: 3 unbroken bars) */}
            <line x1="8" y1="6" x2="11" y2="8" />
            <line x1="7" y1="7.5" x2="10" y2="9.5" />
            <line x1="6" y1="9" x2="9" y2="11" />
            {/* Bottom-right (Gon: 3 broken bars) */}
            <line x1="25" y1="13" x2="26.5" y2="14" />
            <line x1="27.5" y1="14.7" x2="29" y2="15.7" />
            <line x1="26" y1="14.5" x2="27.5" y2="15.5" />
            <line x1="28.5" y1="16.2" x2="30" y2="17.2" />
            <line x1="27" y1="16" x2="28.5" y2="17" />
            <line x1="29.5" y1="17.7" x2="31" y2="18.7" />
            {/* Top-right (Gam: 2 broken, 1 unbroken) */}
            <line x1="26" y1="9" x2="27.5" y2="8" />
            <line x1="28.5" y1="7.3" x2="30" y2="6.3" />
            <line x1="27" y1="10.5" x2="31" y2="7.8" />
            <line x1="28" y1="12" x2="29.5" y2="11" />
            <line x1="30.5" y1="10.3" x2="32" y2="9.3" />
            {/* Bottom-left (Ri: 2 unbroken, 1 broken in middle) */}
            <line x1="5" y1="17" x2="9" y2="14.3" />
            <line x1="6" y1="18.5" x2="7.5" y2="17.5" />
            <line x1="8.5" y1="16.8" x2="10" y2="15.8" />
            <line x1="7" y1="20" x2="11" y2="17.3" />
          </g>
        </svg>
      );

    // United Kingdom (GB, EN)
    case 'GB':
    case 'EN':
    case 'UK':
      return (
        <svg
          viewBox="0 0 36 24"
          className={wrapperClass}
          role="img"
          aria-label={title || 'United Kingdom Flag'}
        >
          <clipPath id="gb-clip">
            <rect width="36" height="24" />
          </clipPath>
          <g clipPath="url(#gb-clip)">
            {/* Blue background */}
            <rect width="36" height="24" fill="#012169" />
            {/* White diagonal saltire */}
            <path d="M0 0 L36 24 M36 0 L0 24" stroke="#ffffff" strokeWidth="4.5" />
            {/* Red diagonal saltire */}
            <path d="M0 0 L18 12 M36 0 L18 12 M0 24 L18 12 M36 24 L18 12" stroke="#c8102e" strokeWidth="2" />
            {/* White straight cross */}
            <path d="M18 0 V24 M0 12 H36" stroke="#ffffff" strokeWidth="6" />
            {/* Red straight cross */}
            <path d="M18 0 V24 M0 12 H36" stroke="#c8102e" strokeWidth="3.6" />
          </g>
        </svg>
      );

    // Bangladesh (BD, BN)
    case 'BD':
    case 'BN':
      return (
        <svg
          viewBox="0 0 36 24"
          className={wrapperClass}
          role="img"
          aria-label={title || 'Bangladesh Flag'}
        >
          {/* Dark Green Field */}
          <rect width="36" height="24" fill="#006a4e" />
          {/* Red circle shifted slightly towards hoist */}
          <circle cx="16" cy="12" r="7" fill="#f42a41" />
        </svg>
      );

    // Japan (JP, JA)
    case 'JP':
    case 'JA':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Japan Flag">
          <rect width="36" height="24" fill="#ffffff" />
          <circle cx="18" cy="12" r="7" fill="#bc002d" />
        </svg>
      );

    // Spain (ES)
    case 'ES':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Spain Flag">
          <rect width="36" height="6" y="0" fill="#aa151b" />
          <rect width="36" height="12" y="6" fill="#f1bf00" />
          <rect width="36" height="6" y="18" fill="#aa151b" />
        </svg>
      );

    // France (FR)
    case 'FR':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="France Flag">
          <rect width="12" height="24" x="0" fill="#002654" />
          <rect width="12" height="24" x="12" fill="#ffffff" />
          <rect width="12" height="24" x="24" fill="#ed2939" />
        </svg>
      );

    // Germany (DE)
    case 'DE':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Germany Flag">
          <rect width="36" height="8" y="0" fill="#000000" />
          <rect width="36" height="8" y="8" fill="#dd0000" />
          <rect width="36" height="8" y="16" fill="#ffce00" />
        </svg>
      );

    // China (ZH, CN)
    case 'ZH':
    case 'CN':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="China Flag">
          <rect width="36" height="24" fill="#de2910" />
          <polygon points="6,3 7,6 10,6 7.5,8 8.5,11 6,9 3.5,11 4.5,8 2,6 5,6" fill="#ffde00" />
        </svg>
      );

    // Taiwan / Traditional Chinese (ZH-TW, TW)
    case 'ZH-TW':
    case 'TW':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Taiwan Flag">
          <rect width="36" height="24" fill="#fe0000" />
          <rect width="18" height="12" fill="#000095" />
          <circle cx="9" cy="6" r="3.5" fill="#ffffff" />
          <circle cx="9" cy="6" r="2.2" fill="#000095" />
          <circle cx="9" cy="6" r="1.4" fill="#ffffff" />
        </svg>
      );

    // India (HI, IN)
    case 'HI':
    case 'IN':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="India Flag">
          <rect width="36" height="8" y="0" fill="#ff9933" />
          <rect width="36" height="8" y="8" fill="#ffffff" />
          <rect width="36" height="8" y="16" fill="#128807" />
          <circle cx="18" cy="12" r="3" fill="none" stroke="#000088" strokeWidth="0.8" />
        </svg>
      );

    // Italy (IT)
    case 'IT':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Italy Flag">
          <rect width="12" height="24" x="0" fill="#009246" />
          <rect width="12" height="24" x="12" fill="#ffffff" />
          <rect width="12" height="24" x="24" fill="#ce2b37" />
        </svg>
      );

    // Russia (RU)
    case 'RU':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Russia Flag">
          <rect width="36" height="8" y="0" fill="#ffffff" />
          <rect width="36" height="8" y="8" fill="#0039a6" />
          <rect width="36" height="8" y="16" fill="#d52b1e" />
        </svg>
      );

    // Saudi Arabia / Arabic (AR, SA)
    case 'AR':
    case 'SA':
      return (
        <svg viewBox="0 0 36 24" className={wrapperClass} role="img" aria-label="Saudi Arabia Flag">
          <rect width="36" height="24" fill="#006c35" />
          <rect x="8" y="14" width="20" height="1.5" fill="#ffffff" />
          <circle cx="18" cy="9" r="3" fill="none" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );

    // Default clean global globe flag
    default:
      return (
        <svg
          viewBox="0 0 36 24"
          className={wrapperClass}
          role="img"
          aria-label={title || 'Flag'}
        >
          <rect width="36" height="24" fill="#0f172a" />
          <circle cx="18" cy="12" r="7" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
          <ellipse cx="18" cy="12" rx="3.5" ry="7" fill="none" stroke="#38bdf8" strokeWidth="1" />
          <line x1="11" y1="12" x2="25" y2="12" stroke="#38bdf8" strokeWidth="1" />
        </svg>
      );
  }
};
