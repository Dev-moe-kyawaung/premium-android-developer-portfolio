import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Timer, MonitorPlay, MemoryStick, Package, ShieldAlert, Activity } from 'lucide-react';
import SectionHead from '../SectionHead';

function Metric({ icon: Icon, label, value, suffix, note, good = true }: { icon: any; label: string; value: number; suffix: string; note: string; delay?: number; good?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(value / 90));
    const t = setInterval(() => {
      start += step;
      if (start >= value) { setV(value); clearInterval(t); } else setV(start);
    }, 16);
    return () => clearInterval(t);
  }, [inView, value]);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/20 to-magenta/20 flex items-center justify-center"><Icon size={20} className={good ? 'text-cyan' : 'text-magenta'} /></div>
        <span className="text-xs text-white/40">{note}</span>
      </div>
      <div className="font-display text-4xl gradient-text mb-1">{v}{suffix}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

export default function Benchmarks() {
  return (
    <section id="benchmarks" className="py-28 bg-deep relative">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="benchmarks" sub="Profiling data from release builds — cold start, frames, memory, stability." subMm="Release Build များမှ Profiling အချက်အလက် — Cold Start, Frames, Memory, Stability။" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Metric icon={Timer} label="Cold Start (P95)" value={850} suffix=" ms" note="Pixel 6a · release" delay={0} />
          <Metric icon={MonitorPlay} label="Stable Frame Rate" value={60} suffix=" fps" note="120Hz devices capped" delay={0.1} />
          <Metric icon={MemoryStick} label="Heap Memory" value={42} suffix=" MB" note="Under 150MB budget" delay={0.2} />
          <Metric icon={Package} label="APK Base Size" value={18} suffix=" MB" note="Split configs + R8" delay={0.3} />
          <Metric icon={ShieldAlert} label="ANR Rate" value={0} suffix="% " note="30-day rolling" delay={0.4} />
          <Metric icon={Activity} label="Crash-Free Sessions" value={99} suffix=".9%" note="Firebase Crashlytics" delay={0.5} />
        </div>
        <div className="glass rounded-3xl p-8">
          <h3 className="font-display text-xl mb-6">Startup Trace — Frame Budget (16.6ms)</h3>
          {[
            { seg: 'Process init', w: 22, c: 'from-cyan/80 to-cyan' },
            { seg: 'Compose composition', w: 48, c: 'from-cyan to-magenta' },
            { seg: 'Data prefetch (Room)', w: 71, c: 'from-magenta to-amber' },
            { seg: 'First frame', w: 100, c: 'from-amber to-cyan' },
          ].map((b, i) => (
            <div key={b.seg} className="mb-4">
              <div className="flex justify-between text-xs text-white/60 mb-1"><span>{b.seg}</span><span>{b.w}%</span></div>
              <div className="h-3 rounded-full bg-card overflow-hidden">
                <motion.div className={`h-full rounded-full bg-gradient-to-r ${b.c}`} initial={{ width: 0 }} whileInView={{ width: `${b.w}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.15, ease: 'easeOut' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
