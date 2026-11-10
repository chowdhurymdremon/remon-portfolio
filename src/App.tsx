/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CareerInterests } from './components/CareerInterests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TranslationStatusIndicator } from './components/TranslationStatusIndicator';
import { ParticleBackground } from './components/ParticleBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';

function PortfolioApp() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200 relative">
      {/* Thin cyan scroll progress bar */}
      <ScrollProgressBar />

      {/* Animated subtle cyan particle constellation background */}
      <ParticleBackground />

      {/* Navigation bar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CareerInterests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Global Translation Status & Error Toast */}
      <TranslationStatusIndicator />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
