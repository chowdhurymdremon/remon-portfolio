import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { content } = useLanguage();
  const proj = content.projects;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalState, setModalState] = useState<{
    project: any;
    initialTab: 'demo' | 'overview';
  } | null>(null);

  const categories = [
    { id: 'all', label: proj.filterAll || 'All Projects' },
    { id: 'Hardware & IoT', label: 'Hardware & IoT' },
    { id: 'Mobile Development', label: 'Mobile' },
    { id: 'AI & Data Science', label: 'AI & Data Science' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'Artificial Intelligence', label: 'Computer Vision' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? proj.items
    : proj.items.filter(item => 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        selectedCategory.toLowerCase().includes(item.category.toLowerCase())
      );

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#090f1e]/75 backdrop-blur-[1px] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/50">
              {proj.sectionTag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              {proj.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {proj.subtitle}
            </p>

            <p className="text-xs text-slate-500 mt-3 font-mono">
              {proj.statusNotice}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal delay={50}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] font-bold'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Responsive Project Cards Grid with 3D Tilt & Cyan Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredItems.map((item, idx) => (
            <ProjectCard
              key={item.id}
              item={item}
              idx={idx}
              onOpenDetails={(p) => setModalState({ project: p, initialTab: 'overview' })}
              onOpenLiveDemo={(p) => setModalState({ project: p, initialTab: 'demo' })}
              labels={{
                viewCode: proj.viewCode || 'GitHub',
                liveDemo: proj.liveDemo || 'Live Demo',
                modalDetails: proj.modalDetails || 'View Details',
              }}
            />
          ))}
        </div>

        {/* Deep Dive & Interactive Live Demo Modal */}
        {modalState && (
          <ProjectModal
            project={modalState.project}
            initialTab={modalState.initialTab}
            onClose={() => setModalState(null)}
            labels={{
              closeModal: proj.closeModal || 'Close',
              overviewTitle: proj.overviewTitle || 'Overview',
              techStackTitle: proj.techStackTitle || 'Technologies Used',
              keyFeaturesTitle: proj.keyFeaturesTitle || 'Key Features & Architecture',
              viewCode: proj.viewCode || 'View Code',
              liveDemo: proj.liveDemo || 'Live Demo',
            }}
          />
        )}

      </div>
    </section>
  );
};
