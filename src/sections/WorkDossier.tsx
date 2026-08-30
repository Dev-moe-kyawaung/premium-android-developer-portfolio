import { useState } from 'react';
import { ArrowUpRight, Check, Shield, Sparkles } from 'lucide-react';
import Reveal from '../Reveal';

const dossiers = [
  {
    id: 'PULSE / 001', title: 'PulseSync', category: 'REAL-TIME SYNC PLATFORM', image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp',
    problem: 'Teams needed live collaboration without making unreliable networks visible to the user.',
    approach: 'Room becomes the local source of truth. A WorkManager queue reconciles mutations with Firestore and preserves intent through reconnects.',
    result: ['Offline-first by default', 'Multi-module feature boundaries', 'Crash-free telemetry via Firebase'],
    tags: ['Kotlin', 'Room', 'Firestore', 'WorkManager'],
  },
  {
    id: 'TRANSLATE / 002', title: 'MoekyawTranslator', category: 'AI TRANSLATION SYSTEM', image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png',
    problem: 'Translation should remain useful in a low-connectivity environment and respectful of private conversations.',
    approach: 'A confidence-aware router chooses an on-device TFLite model first, then streams a cloud LLM fallback only when context requires it.',
    result: ['Private local inference', 'Streaming Compose UI', 'Burmese / English support'],
    tags: ['TFLite', 'Claude API', 'Flow', 'Burmese'],
  },
  {
    id: 'POS / 003', title: 'POS Ultimate Pro Max', category: 'OFFLINE COMMERCE ENGINE', image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp',
    problem: 'A point-of-sale terminal cannot stop being useful just because a network becomes unreliable.',
    approach: 'Transactions commit locally, sync idempotently, and surface inventory conflicts clearly. Barcode, receipt, roles, and reports stay feature-isolated.',
    result: ['Idempotent sync protocol', 'Bluetooth thermal printing', 'Release-safe multi-module build'],
    tags: ['MVVM', 'Retrofit', 'Bluetooth', 'CI/CD'],
  },
];

export default function WorkDossier() {
  const [selected, setSelected] = useState(0);
  const work = dossiers[selected];
  return (
    <section id="dossier" className="py-28 bg-deep2 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div><div className="section-code mb-4">/ WORK DOSSIER · CASE STUDIES</div><h2 className="font-display text-4xl md:text-6xl tracking-[-.04em]">Selected systems, <span className="gradient-text">fully considered.</span></h2></div>
            <p className="max-w-sm text-sm text-white/50 leading-relaxed">Three builds that show how I move from product constraint to a mobile architecture that lasts.</p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-14">
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {dossiers.map((item, i) => (
              <button key={item.id} onClick={() => setSelected(i)} className={`dossier-tab ${selected === i ? 'dossier-tab-active' : ''}`}><span>{item.id}</span><strong>{item.title}</strong><small>{item.category}</small></button>
            ))}
            <div className="hidden lg:block mt-auto pt-8 text-xs font-mono text-white/30 leading-relaxed"><Shield size={16} className="text-cyan mb-3" />SECURITY IS A PRODUCT DECISION, NOT A PATCH AT THE END.</div>
          </div>
          <Reveal key={work.id}>
            <div className="dossier-panel grid md:grid-cols-[.82fr_1.18fr] min-h-[500px]">
              <div className="relative min-h-[280px] md:min-h-full overflow-hidden"><img src={work.image} alt={work.title} className="absolute inset-0 w-full h-full object-cover grayscale-[.3]" /><div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep via-deep/25 to-transparent" /><div className="absolute bottom-6 left-6"><span className="text-xs text-cyan font-mono tracking-[.16em]">{work.id}</span><div className="font-display text-3xl mt-2">{work.title}</div></div></div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-magenta font-display tracking-[.13em] mb-8"><Sparkles size={13} /> {work.category}</div>
                <div className="space-y-6">
                  <div><div className="dossier-label">The constraint</div><p className="text-white/75 leading-relaxed">{work.problem}</p></div>
                  <div><div className="dossier-label">The architecture</div><p className="text-white/75 leading-relaxed">{work.approach}</p></div>
                  <div><div className="dossier-label">The signal</div><ul className="space-y-2">{work.result.map((result) => <li key={result} className="flex items-center gap-2 text-sm text-white/75"><Check size={14} className="text-lime" />{result}</li>)}</ul></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">{work.tags.map((tag) => <span key={tag} className="dossier-tag">{tag}</span>)}</div>
                <a href="#ai" className="inline-flex items-center gap-2 mt-8 text-xs font-display uppercase tracking-[.14em] text-cyan hover:text-white transition-colors">Ask the AI explainer <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}