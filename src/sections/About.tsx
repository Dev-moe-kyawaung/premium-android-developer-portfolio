import { useEffect, useState } from 'react';
import { Code2, Award } from 'lucide-react';

function Counter({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return (
    <div className="text-center p-6 rounded-2xl glass-card hover:border-cyan/30 transition-all">
      <div className="font-display text-4xl md:text-6xl gradient-text mb-2">{val}{suffix}</div>
      <div className="text-white/60 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-deep overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Developer by <span className="gradient-text">passion</span>,<br />learner by <span className="gradient-text">nature</span>.
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>Android Developer with nearly <strong className="text-cyan">12 years</strong> of hands-on experience building secure, scalable, and user-friendly mobile applications.</p>
              <p>Strong in Kotlin and modern Jetpack development (Compose, ViewModel, Room), Firebase integration, and REST API consumption. Focus on clean architecture, maintainable code, and practical security.</p>
              <p>Comfortable delivering features end-to-end — from UI to networking, local caching, testing, and release-ready builds.</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://gravatar.com/moekyawaung13721" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm hover:text-cyan transition-colors"><Award size={16}/> Gravatar</a>
              <a href="https://github.com/Dev-moe-kyawaung" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm hover:text-cyan transition-colors"><Code2 size={16}/> GitHub</a>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-10">
            <h3 className="font-display text-2xl mb-8">Achievement Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <Counter target={12} label="Years Experience" suffix="+" />
              <Counter target={3000} label="Apps Built" suffix="+" />
              <Counter target={122} label="GitHub Repos" suffix="" />
              <Counter target={100} label="Satisfaction" suffix="%" />
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="font-display text-lg mb-4">Location & Focus</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-card border border-white/10">Tachileik, Myanmar 🇲🇲</span>
                <span className="px-3 py-1 rounded-full bg-card border border-white/10">Bangkok, Thailand 🇹🇭</span>
                <span className="px-3 py-1 rounded-full bg-card border border-cyan/30 text-cyan">Mobile → Kotlin · Compose</span>
                <span className="px-3 py-1 rounded-full bg-card border border-magenta/30 text-magenta">Backend → Firebase · REST</span>
                <span className="px-3 py-1 rounded-full bg-card border border-amber/30 text-amber">Security → Ethical Hacking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-display text-3xl mb-10 text-center">Career Timeline</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-magenta to-transparent md:-translate-x-px" />
            {[
              { year: '2013', title: 'Started Android Development', desc: 'First Android app shipped. Began learning Kotlin and Firebase.' },
              { year: '2017', title: 'Senior Engineer Role', desc: 'Promoted to Senior Android Engineer. Led Jetpack Compose migration.' },
              { year: '2020', title: 'Clean Architecture Focus', desc: 'Adopted MVVM, modular architecture, and CI/CD pipelines.' },
              { year: '2023', title: 'AI / ML Integration', desc: 'Built on-device ML features with TensorFlow Lite and Claude APIs.' },
              { year: '2025', title: 'Portfolio V123', desc: 'Launch of 12-year portfolio with 3K+ apps, 122 repos, 40+ certs.' },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-8 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-display text-xl text-cyan">{item.title}</h4>
                  <p className="text-white/70">{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan to-magenta border-4 border-deep shadow-[0_0_15px_rgba(0,217,255,0.5)] z-10" />
                <div className="pl-10 md:pl-0 md:w-1/2 md:px-8">
                  <span className="font-display text-3xl text-white/10">{item.year}</span>
                  <div className="md:hidden"><h4 className="font-display text-xl text-cyan">{item.title}</h4><p className="text-white/70">{item.desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
