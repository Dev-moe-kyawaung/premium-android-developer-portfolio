import { motion } from 'framer-motion';
import { ArrowDown, Layers, Database, Brain, Monitor } from 'lucide-react';
import SectionHead from '../SectionHead';

const layers = [
  { icon: Monitor, name: 'UI Layer', items: 'Jetpack Compose · Material 3 · Navigation Compose · Animations', c: '#00d9ff' },
  { icon: Brain, name: 'Presentation', items: 'ViewModel · StateFlow · UiState · CollectAsStateWithLifecycle', c: '#4285F4' },
  { icon: Layers, name: 'Domain', items: 'Use Cases · Repository Interfaces · Business Rules — zero Android deps', c: '#7F52FF' },
  { icon: Database, name: 'Data', items: 'Room · Retrofit · Firebase · DataStore · Mappers · Cache Strategies', c: '#ff00aa' },
];

const patterns = [
  { name: 'MVVM', note: 'Default for most screens' },
  { name: 'MVI', note: 'Complex single-screen flows' },
  { name: 'Clean Arch', note: 'Every new module' },
  { name: 'Multi-module', note: 'Feature + core modules' },
];

export default function ArchLab() {
  return (
    <section id="arch" className="py-28 bg-deep2 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber/5 rounded-full blur-[130px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="archLab" sub="Layer-by-layer breakdown of the senior architecture I ship." subMm="ငါ တင်ဆက်သော Senior Architecture ၏ အဆင့်ဆင့် ခွဲခြမ်းစိတ်ဖြာမှု။" />
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 flex flex-col items-center">
            {layers.map((l, i) => (
              <motion.div key={l.name} initial={{ opacity: 0, x: i % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}>
                <div className="w-full max-w-xl glass rounded-2xl p-5 flex items-center gap-4 hover:border-cyan/40 transition-all" style={{ borderLeft: `4px solid ${l.c}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${l.c}22` }}><l.icon size={22} style={{ color: l.c }} /></div>
                  <div><h4 className="font-display text-lg">{l.name}</h4><p className="text-xs text-white/60 mt-0.5">{l.items}</p></div>
                </div>
                {i < layers.length - 1 && <div className="flex justify-center py-1"><ArrowDown size={18} className="text-white/30 animate-pulse" /></div>}
              </motion.div>
            ))}
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-2xl mb-2">Patterns in Rotation</h3>
            {patterns.map((p) => (
              <div key={p.name} className="glass rounded-2xl p-5 flex items-center justify-between group hover:border-magenta/40 transition-colors">
                <span className="font-display text-lg group-hover:text-magenta transition-colors">{p.name}</span>
                <span className="text-sm text-white/50">{p.note}</span>
              </div>
            ))}
            <div className="glass rounded-2xl p-5 bg-gradient-to-br from-cyan/10 to-magenta/10">
              <h4 className="font-display text-lg text-cyan mb-1">Dependency Rule</h4>
              <p className="text-sm text-white/70">Sources point inward. UI never touches data directly — use cases are the only bridge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
