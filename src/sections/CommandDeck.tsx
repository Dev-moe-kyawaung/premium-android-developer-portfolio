import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, CircleDot, Crosshair, ShieldCheck } from 'lucide-react';
import Reveal from '../Reveal';

const signals = [
  { code: '01', label: 'Current mission', value: 'AI translation / mobile edge', icon: BrainCircuit },
  { code: '02', label: 'Operating mode', value: 'Product-minded architecture', icon: Crosshair },
  { code: '03', label: 'Quality threshold', value: 'Fast, testable, release-ready', icon: ShieldCheck },
];

export default function CommandDeck() {
  return (
    <section id="briefing" className="command-deck py-24 bg-deep relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <div className="section-code mb-4">/ BRIEFING 001 · ARCHITECT PROFILE</div>
              <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[.95] tracking-[-.04em]">The visible product is only the surface. <span className="text-cyan">The system underneath is the craft.</span></h2>
            </div>
            <p className="max-w-sm text-sm md:text-base text-white/50 leading-relaxed">I design the boundary between ambition and reliability: an opinionated mobile foundation, a clear product story, and a release pipeline that does not flinch.</p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 pt-12">
          <Reveal delay={.1}>
            <div className="briefing-ledger">
              <div className="flex items-center justify-between pb-4 border-b border-white/10"><span className="font-mono text-[10px] tracking-[.2em] text-white/40">MKA / FIELD NOTES</span><span className="text-[10px] text-lime">● TRANSMITTING</span></div>
              <div className="py-7 grid grid-cols-[auto_1fr] gap-x-5 gap-y-6">
                <span className="font-mono text-xs text-cyan">A.</span><p className="text-white/75 leading-relaxed">Start with the user's friction, not the framework. Make the happy path feel inevitable.</p>
                <span className="font-mono text-xs text-cyan">B.</span><p className="text-white/75 leading-relaxed">Keep domain logic pure. Let the data layer absorb instability, latency, and vendor changes.</p>
                <span className="font-mono text-xs text-cyan">C.</span><p className="text-white/75 leading-relaxed">Treat observability and shipping as features. What cannot be measured cannot be responsibly scaled.</p>
              </div>
              <a href="#arch" className="inline-flex items-center gap-2 text-xs font-display tracking-[.12em] text-cyan uppercase hover:text-white transition-colors">Inspect architecture <ArrowUpRight size={14} /></a>
            </div>
          </Reveal>
          <div className="space-y-4">
            {signals.map((signal, i) => (
              <Reveal key={signal.code} delay={.15 + i * .1}>
                <motion.div whileHover={{ x: 8 }} className="briefing-signal">
                  <div className="flex items-center gap-4"><span className="font-mono text-xs text-white/25">{signal.code}</span><signal.icon size={18} className="text-cyan" /><span className="text-xs text-white/45 uppercase tracking-[.13em]">{signal.label}</span></div>
                  <div className="mt-3 pl-10 font-display text-lg md:text-xl">{signal.value}</div>
                  <CircleDot size={12} className="absolute right-5 top-6 text-lime" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}