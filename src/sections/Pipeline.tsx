import { Hammer, TestTube2, ShieldCheck, Package, Rocket, CheckCircle2 } from 'lucide-react';
import SectionHead from '../SectionHead';

const stages = [
  { icon: Hammer, name: 'Build', detail: 'Gradle + R8' },
  { icon: TestTube2, name: 'Test', detail: 'JUnit · Espresso' },
  { icon: ShieldCheck, name: 'Scan', detail: 'Snyk · Lint' },
  { icon: Package, name: 'Package', detail: 'Fastlane · AAB' },
  { icon: Rocket, name: 'Deploy', detail: 'Play Internal' },
  { icon: CheckCircle2, name: 'Release', detail: 'Production' },
];

export default function Pipeline() {
  return (
    <section id="cicd" className="py-28 bg-deep2 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="cicd" sub="Every pull request is built, tested, scanned, and release-ready." subMm="Pull Request တိုင်းကို Build, Test, Scan ပြီး Release-Ready တည်ဆောက်သည်။" />
        <div className="glass rounded-3xl p-8 md:p-12 mb-8">
          <div className="hidden md:flex items-center justify-between mb-8">
            {stages.map((s, i) => (
              <div key={s.name} className="flex items-center flex-1 last:flex-none">
                <div className="animate-stage text-center" style={{ animationDelay: `${i * 0.45}s` }}>
                  <div className="w-14 h-14 mx-auto rounded-2xl glass flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(0,217,255,0.15)]"><s.icon size={22} className="text-cyan" /></div>
                  <div className="font-display text-sm">{s.name}</div>
                  <div className="text-[10px] text-white/40">{s.detail}</div>
                </div>
                {i < stages.length - 1 && <div className="flex-1 h-px mx-2 bg-gradient-to-r from-cyan/60 to-magenta/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{ animation: 'marquee 2.2s linear infinite' }} />
                </div>}
              </div>
            ))}
          </div>
          {/* Mobile vertical */}
          <div className="md:hidden space-y-3">
            {stages.map((s, i) => (
              <div key={s.name} className="animate-stage flex items-center gap-4 glass rounded-2xl p-4" style={{ animationDelay: `${i * 0.4}s` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,217,255,0.12)' }}><s.icon size={19} className="text-cyan" /></div>
                <div><div className="font-display">{s.name}</div><div className="text-xs text-white/40">{s.detail}</div></div>
                <span className="ml-auto font-display text-white/30">{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 text-sm">
          {[
            { t: 'GitHub Actions', d: 'Triggered on every PR and push — parallel matrix jobs per ABI and flavor.' },
            { t: 'Azure DevOps', d: 'Nightly release builds with automated signing and artifact publishing.' },
            { t: 'Fastlane', d: 'Lane-based beta → production promotion with store metadata and screenshots.' },
          ].map((x) => (
            <div key={x.t} className="glass rounded-2xl p-6"><h4 className="font-display text-lg text-cyan mb-1">{x.t}</h4><p className="text-white/60 text-sm">{x.d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
