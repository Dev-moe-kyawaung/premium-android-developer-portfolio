import { useEffect, useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';
import SectionHead from '../SectionHead';

const projects = [
  {
    name: 'PulseSync',
    tag: 'Multi-module · Firebase',
    text: 'PulseSync is an advanced multi-module Android application demonstrating senior-level architecture. I split it into feature, data, and core modules with a strict dependency rule. The Firebase backend uses Cloud Firestore for real-time sync, Cloud Functions for offline mutations, and Crashlytics for stability. Offline-first design means Room is the source of truth, Firestore is the cache of record, and a background WorkManager queue reconciles on reconnect. The full CI/CD pipeline runs on GitHub Actions with automated UI tests before every release.',
  },
  {
    name: 'Social Dashboard',
    tag: 'Compose · Material 3',
    text: 'Social Dashboard is a real-time analytics platform with multi-tenant authentication and a dark Material 3 UI built entirely in Jetpack Compose. State flows down through StateFlow collected with collectAsStateWithLifecycle, so the UI is always a pure function of state. Charts are drawn with a custom Canvas composable for 60fps performance, and pagination uses Paging 3 with an in-memory cache layer. Theme tokens are centralized, making dark/light and brand switching a one-line change.',
  },
  {
    name: 'POS Ultimate Pro Max',
    tag: 'Commerce · Offline',
    text: 'POS Ultimate Pro Max is a point-of-sale system built for offline-first reliability. Transactions are written to Room first, then synced through an idempotent API layer that survives flaky networks. I implemented a local-first cart, thermal receipt printing via Bluetooth, role-based access, and a nightly sales report generator. The multi-module structure keeps the barcode scanner, payments, and inventory features independently testable and reusable.',
  },
  {
    name: 'MoekyawTranslator',
    tag: 'AI · On-device ML',
    text: 'MoekyawTranslator is my flagship AI translation app, currently in development. It pairs an on-device TFLite model for instant offline translation with a cloud LLM fallback (Claude API) for long-form, context-aware results. I designed a streaming UI that shows tokens as they arrive, with a local Room history and offline queue. The architecture is a clean MVVM setup with a Repository that transparently switches between local and remote engines based on confidence and connectivity.',
  },
  {
    name: 'Video Player',
    tag: 'Media · Offline',
    text: 'The Video Player app demonstrates robust media handling: ExoPlayer under the hood with a custom Compose controls layer, subtitle synchronization, background playback via MediaSession, and an offline download manager with resume support. I built a content-addressed cache so episodes survive app updates, and the watch-state syncs to Firebase so progress follows the user across devices.',
  },
];

export default function AIExplainer() {
  const [sel, setSel] = useState(0);
  const [typed, setTyped] = useState('');
  useEffect(() => {
    setTyped('');
    let i = 0;
    const full = projects[sel].text;
    const t = setInterval(() => {
      i += 2;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 18);
    return () => clearInterval(t);
  }, [sel]);

  return (
    <section id="ai" className="py-28 bg-deep relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta/10 rounded-full blur-[130px] translate-x-1/3 translate-y-1/3" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="aiIntel" sub="AI-driven, plain-language explanations of my projects — tap any project." subMm="AI က ကျွန်တော့် ပရောဂျက်များကို ရိုးရှင်းစွာ ရှင်းပြသည် — ပရောဂျက် မည်သည့်အရာကိုမဆို နှိပ်ပါ။" />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {projects.map((p, i) => (
              <button key={p.name} onClick={() => setSel(i)} className={`w-full text-left p-5 rounded-2xl glass transition-all ${sel === i ? 'border-cyan/50 bg-cyan/10 translate-x-2' : 'hover:border-cyan/30'}`}>
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${sel === i ? 'bg-cyan animate-pulse' : 'bg-white/20'}`} />
                  <div>
                    <h4 className={`font-display ${sel === i ? 'text-cyan' : ''}`}>{p.name}</h4>
                    <span className="text-xs text-white/40">{p.tag}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-3 glass rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-magenta flex items-center justify-center"><Bot size={20} className="text-white" /></div>
              <div><div className="font-display">Project Intelligence</div><div className="text-xs text-cyan flex items-center gap-1"><Sparkles size={12} /> Analyzing: {projects[sel].name}</div></div>
            </div>
            <p className="text-white/80 leading-relaxed min-h-[300px]">{typed}<span className="inline-block w-2.5 h-5 bg-cyan align-middle ml-0.5 blink" /></p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Architecture', 'Performance', 'Security', 'Testing'].map((x) => <span key={x} className="px-3 py-1 rounded-full bg-card border border-white/10 text-xs text-white/60">{x}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
