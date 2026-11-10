import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Sliders, 
  Activity, 
  Cpu, 
  Smartphone, 
  Database, 
  Code2, 
  Eye, 
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface ProjectModalProps {
  project: any;
  initialTab?: 'demo' | 'overview';
  onClose: () => void;
  labels: {
    closeModal: string;
    overviewTitle: string;
    techStackTitle: string;
    keyFeaturesTitle: string;
    viewCode: string;
    liveDemo: string;
  };
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'demo',
  onClose,
  labels,
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'overview'>(initialTab);

  // Interactive Simulator States
  // 1. Arduino Simulator: Distance sensor slider
  const [distanceVal, setDistanceVal] = useState<number>(24);
  const isAlarmTriggered = distanceVal < 15;

  // 2. Flutter Campus Flow: Day selection & task toggle
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [tasksState, setTasksState] = useState<{ [key: number]: boolean }>({ 0: true, 1: false });

  // 3. Academic Analytics: Filter threshold
  const [minStudyHours, setMinStudyHours] = useState<number>(15);

  // 4. CV Simulator: Threshold
  const [hsvThreshold, setHsvThreshold] = useState<number>(65);

  const renderInteractiveSimulator = () => {
    switch (project.id) {
      case 'arduino-iot-monitor':
        return (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-900 border border-teal-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-teal-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 animate-pulse" />
                  INTERACTIVE HC-SR04 SENSOR SIMULATOR
                </span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isAlarmTriggered ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' : 'bg-teal-950 text-teal-300'
                }`}>
                  {isAlarmTriggered ? '⚠ PROXIMITY BUZZER ACTIVE' : '● SYSTEM NORMAL'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Drag Target Obstacle:</span>
                  <span className="font-bold text-white">{distanceVal} cm</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={distanceVal}
                  onChange={(e) => setDistanceVal(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>5 cm (Trigger Alert &lt; 15cm)</span>
                  <span>100 cm (Max Range)</span>
                </div>
              </div>
            </div>

            {/* Simulated 16x2 I2C LCD Display */}
            <div className="p-4 rounded-xl bg-[#031d16] border-2 border-teal-600/70 shadow-[0_0_20px_rgba(20,184,166,0.2)] font-mono text-teal-300 text-xs sm:text-sm">
              <div className="text-[10px] text-teal-500/80 mb-1 flex justify-between">
                <span>[I2C 16x2 HD44780 LCD]</span>
                <span>Addr: 0x27</span>
              </div>
              <p className="bg-black/60 p-2.5 rounded border border-teal-800 tracking-wider">
                &gt; DIST: {distanceVal < 10 ? `0${distanceVal}` : distanceVal} cm {isAlarmTriggered ? '[WARN!]' : '[SAFE]'}<br />
                &gt; TEMP: 22.4C | HUM: 48%
              </p>
            </div>

            {/* Serial Monitor Output Stream */}
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
              <span className="text-[10px] text-slate-500 block mb-1">Serial Monitor Output @ 115200 baud:</span>
              <p className="text-teal-400">&gt; ultrasonic_read_us() =&gt; echo_time: {distanceVal * 58}us =&gt; calc: {distanceVal}cm</p>
              <p className="text-sky-400">&gt; dht11_read() =&gt; checksum OK =&gt; temp=22.4 humidity=48%</p>
              <p className={isAlarmTriggered ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                &gt; gpio_digital_write(PIN_BUZZER, {isAlarmTriggered ? 'HIGH // BUZZING' : 'LOW // IDLE'})
              </p>
            </div>
          </div>
        );

      case 'flutter-campus-helper':
        return (
          <div className="space-y-5">
            {/* Day Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedDay === day 
                      ? 'bg-cyan-500 text-slate-950 shadow-md' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Simulated Mobile Timetable Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  {selectedDay} Schedule • Tongmyong Univ
                </span>
                <span className="text-[11px] font-mono text-slate-400">Semester 2026</span>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-300">10:30 AM – 12:00 PM</span>
                    <h5 className="text-sm font-bold text-white">AI &amp; Computer Engineering Theory</h5>
                    <p className="text-xs text-slate-400">Engineering Hall 4, Room 302</p>
                  </div>
                  <span className="text-xs font-bold font-mono px-2 py-1 rounded bg-cyan-500/20 text-cyan-300">
                    Ongoing
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400">02:00 PM – 04:30 PM</span>
                    <h5 className="text-sm font-bold text-white">Microcontroller Sensor Lab</h5>
                    <p className="text-xs text-slate-400">Hardware Lab 2, Workstation #14</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Upcoming</span>
                </div>
              </div>
            </div>

            {/* Interactive Task Checklist */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase block">
                Interactive Checklist (Click to Toggle):
              </span>
              <div 
                onClick={() => setTasksState(prev => ({ ...prev, 0: !prev[0] }))}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                  tasksState[0] ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600'
                }`}>
                  {tasksState[0] && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-xs ${tasksState[0] ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                  Prepare Arduino HC-SR04 telemetry code submission
                </span>
              </div>

              <div 
                onClick={() => setTasksState(prev => ({ ...prev, 1: !prev[1] }))}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                  tasksState[1] ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600'
                }`}>
                  {tasksState[1] && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-xs ${tasksState[1] ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                  Review Python Pandas correlation matrix documentation
                </span>
              </div>
            </div>
          </div>
        );

      case 'python-academic-analytics':
        return (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  PANDAS / NUMPY DATA ANALYSIS SIMULATOR
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300">
                  N = 1,240 Students
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-400">Filter Minimum Weekly Study Hours:</span>
                  <span className="font-bold text-cyan-400">{minStudyHours} hrs/week</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  value={minStudyHours}
                  onChange={(e) => setMinStudyHours(Number(e.target.value))}
                  className="w-full accent-indigo-400 cursor-pointer"
                />
              </div>

              {/* Dynamic Analytics Output */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Filtered Cohort</span>
                  <span className="text-base font-bold font-mono text-white">
                    {Math.round(1240 * (1 - (minStudyHours - 5) / 38))}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Avg GPA</span>
                  <span className="text-base font-bold font-mono text-cyan-400">
                    {(3.1 + (minStudyHours / 35) * 0.85).toFixed(2)} / 4.5
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Correlation r</span>
                  <span className="text-base font-bold font-mono text-emerald-400">+0.784</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
              <span className="text-[10px] text-slate-500 block">Jupyter Notebook Pipeline Execution:</span>
              <p className="text-indigo-400">&gt;&gt;&gt; df_filtered = df[df['weekly_study_hrs'] &gt;= {minStudyHours}]</p>
              <p className="text-slate-300">&gt;&gt;&gt; df_filtered['gpa'].agg(['mean', 'std', 'median'])</p>
              <p className="text-emerald-400">&gt;&gt;&gt; mean: {(3.1 + (minStudyHours / 35) * 0.85).toFixed(2)} | std: 0.38 | p-value &lt; 0.001</p>
            </div>
          </div>
        );

      case 'modern-dev-portfolio':
        return (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  CURRENT ACTIVE APPLICATION PORTAL
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  ● ACTIVE BUILD
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You are currently exploring this live portfolio web app! It features a client-side trilingual dictionary engine (English, Bengali, Korean) with instant switching, responsive layout, particle constellation background, and interactive 3D tilt effects.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <span className="text-cyan-400 block font-bold">Stack:</span>
                  React 19 • TypeScript • Tailwind v4
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <span className="text-cyan-400 block font-bold">Map:</span>
                  KakaoMap Integration
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                Close Modal &amp; Continue Browsing
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  HSV COLOR TRACKING &amp; CONTOUR DETECTOR
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300">
                  30.2 FPS
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-400">Adjust HSV Hue Tracking Threshold:</span>
                  <span className="font-bold text-cyan-400">{hsvThreshold} / 255</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="180"
                  value={hsvThreshold}
                  onChange={(e) => setHsvThreshold(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>

              {/* Viewport simulation */}
              <div className="relative h-28 bg-slate-950 rounded-xl border border-purple-800/40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                <div 
                  style={{ transform: `scale(${0.8 + (hsvThreshold / 200)})` }}
                  className="w-20 h-16 border-2 border-cyan-400 rounded bg-cyan-500/15 flex flex-col items-center justify-center transition-transform duration-100"
                >
                  <span className="text-[9px] font-mono font-bold text-cyan-300">TARGET_LOCK</span>
                  <span className="text-[8px] font-mono text-emerald-400">({Math.round(hsvThreshold * 1.8)}, 120)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
              <span className="text-[10px] text-slate-500 block">OpenCV Pipeline Log:</span>
              <p className="text-purple-400">&gt; cv2.inRange(hsv, lower_bound, upper_bound) =&gt; Mask computed</p>
              <p className="text-sky-300">&gt; cv2.findContours() =&gt; 1 dominant blob detected [Area: {hsvThreshold * 14}px]</p>
              <p className="text-emerald-400">&gt; Telemetry: Centroid locked @ (X: 184, Y: 120)</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#0b1428] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/50">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={labels.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mt-4 pb-1 border-b border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{labels.liveDemo}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{labels.overviewTitle}</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-5">
          {activeTab === 'demo' ? (
            renderInteractiveSimulator()
          ) : (
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {labels.overviewTitle}
                </h4>
                <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-slate-200">
                  {project.longDesc}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {labels.keyFeaturesTitle}
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {labels.techStackTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{labels.viewCode}</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.35)]"
          >
            {labels.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
