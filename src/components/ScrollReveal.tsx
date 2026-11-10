import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'header';
}

/**
 * ScrollReveal wrapper component that fades in and slides up elements when they enter the viewport.
 * Automatically respects `prefers-reduced-motion` and unobserves after revealing for maximum performance.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 650,
  distance = 24,
  className = '',
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check user accessibility preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // If reduced motion is preferred, render with no transition or transform
  if (prefersReducedMotion) {
    return (
      <Component className={className}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={elementRef as any}
      className={`transform transition-all will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : `opacity-0 translate-y-[${distance}px] scale-[0.985]`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isVisible ? 'none' : `translateY(${distance}px) scale(0.985)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </Component>
  );
};
