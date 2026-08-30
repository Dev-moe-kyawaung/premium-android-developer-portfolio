import { useState, useEffect } from 'react';
import { LangProvider } from './lang';
import Reveal from './Reveal';
import Preloader from './sections/Preloader';
import Header from './sections/Header';
import Hero from './sections/Hero';
import CommandDeck from './sections/CommandDeck';
import About from './sections/About';
import SkillsMatrix from './sections/SkillsMatrix';
import ProgressRings from './sections/ProgressRings';
import Roadmap from './sections/Roadmap';
import ComposeGallery from './sections/ComposeGallery';
import Apps from './sections/Apps';
import WorkDossier from './sections/WorkDossier';
import ArchLab from './sections/ArchLab';
import Benchmarks from './sections/Benchmarks';
import Pipeline from './sections/Pipeline';
import AIExplainer from './sections/AIExplainer';
import Certificates from './sections/Certificates';
import GitHubCol from './sections/GitHubCol';
import Links from './sections/Links';
import Perf from './sections/Perf';
import TechBadges from './sections/TechBadges';
import Testimonials from './sections/Testimonials';
import Downloads from './sections/Downloads';
import Burmese from './sections/Burmese';
import Subpages from './sections/Subpages';
import Contact from './sections/Contact';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

/* Image / video lightbox gallery */
function Lightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const items = [
    'https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png',
    'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png',
    'https://res.cloudinary.com/dye5qpwii/image/upload/v1779031816/Content_65_oayzj3.jpg',
    'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4',
  ];
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-deep/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={onClose} role="dialog" aria-modal="true">
      <button onClick={onClose} aria-label="Close" className="absolute top-6 right-6 text-white text-3xl hover:text-cyan">×</button>
      <div className="max-w-5xl w-full text-center" onClick={(e) => e.stopPropagation()}>
        {items[idx].endsWith('.mp4') ? (
          <video src={items[idx]} controls autoPlay muted loop className="mx-auto max-h-[70vh] rounded-2xl shadow-[0_0_60px_rgba(0,217,255,0.25)] border border-white/10" />
        ) : (
          <img src={items[idx]} alt="Gallery" className="mx-auto max-h-[70vh] rounded-2xl shadow-[0_0_60px_rgba(0,217,255,0.25)] border border-white/10" />
        )}
        <div className="flex justify-center gap-3 mt-6">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Item ${i + 1}`} className={`h-3 rounded-full transition-all ${i === idx ? 'w-8 bg-cyan' : 'w-3 bg-white/30'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lbOpen, setLbOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLbOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <LangProvider>
      <div className="min-h-screen bg-deep text-white font-body selection:bg-cyan/30">
        <Preloader />
        <Header />
        <CustomCursor />

        <main>
          <Hero />
          <CommandDeck />
          <About />
          <Reveal><SkillsMatrix /></Reveal>
          <ProgressRings />
          <Reveal><Roadmap /></Reveal>
          <Reveal><ComposeGallery /></Reveal>
          <Apps />
          <WorkDossier />
          <Reveal><ArchLab /></Reveal>
          <Reveal><Benchmarks /></Reveal>
          <Reveal><Pipeline /></Reveal>
          <Reveal><AIExplainer /></Reveal>
          <Certificates />
          <GitHubCol />
          <Links />
          <Perf />
          <TechBadges />
          <Testimonials />
          <Downloads />
          <Burmese />

          {/* Gallery */}
          <section className="py-24 bg-deep relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-display text-4xl md:text-5xl mb-8 text-center">Gallery & <span className="gradient-text">Visuals</span></h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp',
                  'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp',
                  'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png',
                ].map((src) => (
                  <button key={src} onClick={() => setLbOpen(true)} className="relative group rounded-2xl overflow-hidden h-64 border border-white/10 hover:border-cyan/40 transition-all">
                    <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"><span className="text-sm font-display text-cyan">View Full Gallery</span></div>
                  </button>
                ))}
              </div>
              <div className="text-center mt-6"><button onClick={() => setLbOpen(true)} className="px-6 py-2.5 rounded-full glass text-sm hover:text-cyan transition-colors">Open Lightbox Gallery</button></div>
            </div>
          </section>

          <Reveal><Subpages /></Reveal>
          <Contact />
          <FAQ />
        </main>

        <Footer />
        <Lightbox open={lbOpen} onClose={() => setLbOpen(false)} />

        {/* Sticky CTA */}
        <a href="#contact" className="fixed bottom-6 left-6 z-40 px-5 py-3 rounded-full glass sticky-cta text-white font-display text-sm hover:text-cyan transition-colors backdrop-blur-xl">Hire Me</a>
      </div>
    </LangProvider>
  );
}

/* Neon ring + dot custom cursor (desktop only) */
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div className="pointer-events-none fixed z-[9999] hidden md:block" style={{ left: pos.x - 10, top: pos.y - 10 }}>
      <div className="w-5 h-5 rounded-full border border-cyan/60 shadow-[0_0_10px_rgba(0,217,255,0.4)] mix-blend-difference" />
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-cyan/80" />
    </div>
  );
}
