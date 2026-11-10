import React, { useState, useRef, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  Eye, 
  Cpu, 
  Smartphone, 
  Database, 
  Code2, 
  Sparkles, 
  Play,
  Activity,
  CheckCircle2,
  Terminal,
  Layers
} from 'lucide-react';
import { FlagIcon } from './FlagIcon';
import { ScrollReveal } from './ScrollReveal';

interface ProjectCardProps {
  item: {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    longDesc: string;
    status: string;
    features: string[];
    tech: string[];
    github: string;
    demo?: string;
  };
  idx: number;
  onOpenDetails: (item: any) => void;
  onOpenLiveDemo: (item: any) => void;
  labels: {
    viewCode: string;
    liveDemo: string;
    modalDetails: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  item,
  idx,
  onOpenDetails,
  onOpenLiveDemo,
  labels,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    isHovered: false,
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Normalizing between -1 and 1
    const xOffset = (x / width - 0.5) * 2;
    const yOffset = (y / height - 0.5) * 2;

    // Subtle, elegant tilt angles: max ~9 deg for smooth responsiveness
    const maxTilt = 9;
    const rotateY = xOffset * maxTilt;
    const rotateX = -yOffset * maxTilt;

    setTilt({
      rotateX,
      rotateY,
      glowX: (x / width) * 100,
      glowY: (y / height) * 100,
      isHovered: true,
    });
  };

  const handleMouseEnter = () => {
    setTilt((prev) => ({ ...prev, isHovered: true }));
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  };

  // Custom Screenshot Placeholder Renderer for each project
  const renderScreenshotPlaceholder = () => {
    switch (item.id) {
      case 'arduino-iot-monitor':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#06121f] via-[#091a2e] to-[#050e18] p-3 flex flex-col justify-between overflow-hidden select-none">
            {/* Top Browser / Window Chrome */}
            <div className="flex items-center justify-between pb-2 border-b border-cyan-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>iot-telemetry.local/dashboard</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400">● ONLINE</span>
            </div>

            {/* Simulated UI Gauges & Metrics */}
            <div className="grid grid-cols-3 gap-2 my-1">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-teal-500/30">
                <span className="text-[9px] font-mono uppercase text-teal-400 block">Distance</span>
                <span className="text-sm font-bold font-mono text-white">24.6 <span className="text-[10px] text-teal-300">cm</span></span>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-teal-400 w-3/4 rounded-full" />
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/80 border border-sky-500/30">
                <span className="text-[9px] font-mono uppercase text-sky-400 block">Temp (DHT)</span>
                <span className="text-sm font-bold font-mono text-white">22.4 <span className="text-[10px] text-sky-300">°C</span></span>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-sky-400 w-1/2 rounded-full" />
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/80 border border-indigo-500/30">
                <span className="text-[9px] font-mono uppercase text-indigo-400 block">Humidity</span>
                <span className="text-sm font-bold font-mono text-white">48.0 <span className="text-[10px] text-indigo-300">%</span></span>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-indigo-400 w-3/5 rounded-full" />
                </div>
              </div>
            </div>

            {/* Oscilloscope Sparkline Waveform */}
            <div className="h-9 w-full bg-slate-950/70 rounded-md p-1 border border-slate-800 flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-mono text-slate-400">UART 115200</span>
              </div>
              <svg className="h-5 w-28 text-cyan-400" viewBox="0 0 100 20" fill="none">
                <path d="M0 10 Q 15 2, 30 10 T 60 10 T 90 4 L 100 10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-[10px] font-mono text-cyan-300">I2C: 0x27</span>
            </div>
          </div>
        );

      case 'flutter-campus-helper':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#07162b] via-[#091f3b] to-[#040e1b] p-3 flex flex-col justify-between overflow-hidden select-none">
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-cyan-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-cyan-400" />
                <span>campusflow.app/mobile</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-cyan-400">FLUTTER v3</span>
            </div>

            {/* Mobile Interface Mockup */}
            <div className="space-y-1.5 my-1">
              <div className="p-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase text-cyan-400 font-semibold">Active Class • Room 302</span>
                  <p className="text-xs font-bold text-white">AI &amp; Computer Engineering</p>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold">10:30 AM</span>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <div className="p-1.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-slate-300 truncate">Embedded Lab</span>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-[10px] text-slate-300 truncate">2 Tasks Due</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-1 rounded-md border border-slate-800">
              <span>Material 3 Theme</span>
              <span className="text-cyan-300">Reactive State</span>
            </div>
          </div>
        );

      case 'python-academic-analytics':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#0d1028] via-[#13173d] to-[#090b1c] p-3 flex flex-col justify-between overflow-hidden select-none">
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-indigo-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-[10px] font-mono text-indigo-300 flex items-center gap-1">
                <Database className="w-3 h-3 text-indigo-400" />
                <span>analytics.py/dashboard</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-indigo-400">N=1,240</span>
            </div>

            {/* Visual Analytics Chart & Stat Bars */}
            <div className="flex items-end justify-between gap-1.5 h-16 px-3 bg-slate-950/70 rounded-lg p-2 border border-slate-800">
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-full bg-indigo-500/30 rounded-t h-6 hover:bg-cyan-400 transition-colors" />
                <span className="text-[8px] font-mono text-slate-500">Q1</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-full bg-indigo-500/50 rounded-t h-9 hover:bg-cyan-400 transition-colors" />
                <span className="text-[8px] font-mono text-slate-500">Q2</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-full bg-indigo-500/70 rounded-t h-12 hover:bg-cyan-400 transition-colors" />
                <span className="text-[8px] font-mono text-slate-500">Q3</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-full bg-cyan-400 rounded-t h-14" />
                <span className="text-[8px] font-mono text-cyan-300 font-bold">GPA</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-full bg-indigo-500/60 rounded-t h-10 hover:bg-cyan-400 transition-colors" />
                <span className="text-[8px] font-mono text-slate-500">Q5</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-1 rounded-md border border-slate-800">
              <span className="text-indigo-300 font-semibold">r = 0.784 (Study vs GPA)</span>
              <span>Clean nulls = 0</span>
            </div>
          </div>
        );

      case 'modern-dev-portfolio':
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#06192e] via-[#092644] to-[#041221] p-3 flex flex-col justify-between overflow-hidden select-none">
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-cyan-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                <Code2 className="w-3 h-3 text-cyan-400" />
                <span>remon-portfolio.dev</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400">● LIVE</span>
            </div>

            {/* Mini Portfolio Preview Mockup */}
            <div className="p-2 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full rounded-full bg-[#070b14] flex items-center justify-center text-cyan-300 font-bold text-xs">
                  CR
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">CHOWDHURY MD REMON</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <FlagIcon country="GB" className="w-3.5 h-2.5 inline-block" />
                  <FlagIcon country="BD" className="w-3.5 h-2.5 inline-block" />
                  <FlagIcon country="KR" className="w-3.5 h-2.5 inline-block" />
                  <span className="text-[9px] font-mono text-cyan-300">Global i18n</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-1 rounded-md border border-slate-800">
              <span className="text-cyan-300">React 19 + TypeScript</span>
              <span>KakaoMap API</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-48 bg-gradient-to-br from-[#120e24] via-[#1a1438] to-[#0a0718] p-3 flex flex-col justify-between overflow-hidden select-none">
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-purple-900/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-800/50 text-[10px] font-mono text-purple-300 flex items-center gap-1">
                <Eye className="w-3 h-3 text-purple-400" />
                <span>vision-tracker.local:8080</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-purple-400">30.2 FPS</span>
            </div>

            {/* Target Reticle Viewport */}
            <div className="relative h-18 bg-slate-950/80 rounded-lg border border-purple-500/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
              <div className="w-16 h-12 border-2 border-dashed border-cyan-400 rounded flex flex-col items-center justify-between p-1 bg-cyan-500/10">
                <span className="text-[8px] font-mono font-bold text-cyan-300 bg-slate-950 px-1 rounded">HSV_LOCK</span>
                <span className="text-[8px] font-mono text-emerald-400">98.4%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-950/70 px-2 py-1 rounded-md border border-slate-800">
              <span className="text-purple-300">OpenCV + NumPy</span>
              <span>Real-time Telemetry</span>
            </div>
          </div>
        );
    }
  };

  return (
    <ScrollReveal delay={idx * 80} className="h-full">
      <div 
        className="[perspective:1000px] h-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          style={{
            transform: prefersReducedMotion || !tilt.isHovered
              ? 'none'
              : `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: tilt.isHovered 
              ? 'transform 0.12s ease-out' 
              : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease',
            transformStyle: 'preserve-3d',
          }}
          className={`relative group rounded-2xl bg-[#0c1426] border overflow-hidden flex flex-col justify-between h-full transition-all duration-300 select-none ${
            tilt.isHovered
              ? 'border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.32),0_15px_35px_-10px_rgba(0,0,0,0.7)]'
              : 'border-slate-800 hover:border-cyan-500/50 shadow-xl'
          }`}
        >
          {/* Dynamic Cyan Radial Glow Overlay tracking cursor */}
          {tilt.isHovered && !prefersReducedMotion && (
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-200 z-30"
              style={{
                background: `radial-gradient(450px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 242, 254, 0.22), rgba(6, 182, 212, 0.08) 40%, transparent 80%)`,
              }}
            />
          )}

          {/* Top Screenshot Placeholder Area */}
          <div 
            onClick={() => onOpenLiveDemo(item)}
            className="relative border-b border-slate-800 cursor-pointer overflow-hidden group/thumb"
            title="Click to open Interactive Live Demo"
          >
            {renderScreenshotPlaceholder()}

            {/* Hover preview CTA badge overlay */}
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)] transform translate-y-1 group-hover/thumb:translate-y-0 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{labels.liveDemo}</span>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 flex flex-col flex-grow justify-between relative z-20">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {item.status}
                </span>
              </div>

              {/* Title */}
              <h3 
                onClick={() => onOpenDetails(item)}
                className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
              >
                {item.title}
              </h3>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                {item.shortDesc}
              </p>
            </div>

            {/* Bottom Meta & Action Buttons */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-4">
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tech.slice(0, 4).map((t, idx2) => (
                  <span
                    key={idx2}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/60 font-medium group-hover:border-cyan-500/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
                {item.tech.length > 4 && (
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-cyan-400 border border-slate-800 font-mono">
                    +{item.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Primary Action Buttons: GitHub & Live Demo */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 transition-all cursor-pointer group/btn"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white transition-colors" />
                  <span>{labels.viewCode}</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenLiveDemo(item)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500 hover:to-blue-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/50 hover:border-transparent shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer group/demo"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover/demo:text-slate-950 transition-colors" />
                  <span>{labels.liveDemo}</span>
                </button>
              </div>

              {/* Quick Details Trigger Link */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => onOpenDetails(item)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-3 h-3 text-cyan-400" />
                  <span>{labels.modalDetails}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
