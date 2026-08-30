import { motion } from 'framer-motion';
import SectionHead from '../SectionHead';

const phases = [
  { year: '2014', title: 'Java Android', tag: 'Roots', desc: 'First native apps, Android SDK fundamentals, UI development with XML.' },
  { year: '2017', title: 'Kotlin Migration', tag: 'Language', desc: 'Full Kotlin adoption, null-safety, extensions, operator overloading.' },
  { year: '2019', title: 'Jetpack Era', tag: 'Modern', desc: 'ViewModel, Room, Navigation, Lifecycle — modern Android stack.' },
  { year: '2020', title: 'Coroutines & Flow', tag: 'Async', desc: 'Reactive data streams, structured concurrency, cancellation.' },
  { year: '2022', title: 'Compose Native', tag: 'UI', desc: 'Declarative UI, custom animations, Material 3, state hoisting.' },
  { year: '2024', title: 'KMM & Cloud', tag: 'Scale', desc: 'Kotlin Multiplatform, Firebase backends, CI/CD pipelines.' },
  { year: '2026', title: 'On-Device AI', tag: 'Future', desc: 'TFLite, LLM edge inference, AI-first mobile experiences.' },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 bg-deep2 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="roadmap" sub="From Java roots to on-device AI — a decade of evolution." subMm="Java အစအဆင့်မှ On-device AI အထိ — နှစ်တစ်လုံး၏ ဖြစ်တိုးမှု။" />
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [scrollbar-width:thin]">
          {phases.map((p, i) => (
            <motion.div
              key={p.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
              className="snap-start shrink-0 w-72 glass rounded-3xl p-7 relative group hover:border-cyan/40 transition-colors"
            >
              <div className="absolute top-6 right-6 font-display text-4xl text-white/10 group-hover:text-cyan/20 transition-colors">{p.year}</div>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-display mb-4">{p.tag}</span>
              <h3 className="font-display text-xl mb-2 mt-8">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-5 h-1 rounded-full bg-card overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan to-magenta" style={{ width: `${((i + 1) / phases.length) * 100}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-white/30 text-center mt-2">← Drag / scroll to travel the timeline →</p>
      </div>
    </section>
  );
}
