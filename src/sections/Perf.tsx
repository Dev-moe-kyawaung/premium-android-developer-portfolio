import { Zap, Gauge, ShieldCheck, Cpu } from 'lucide-react';

export default function Perf() {
  return (
    <section id="performance" className="py-24 bg-deep relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl mb-4 text-center">Performance & <span className="gradient-text">UX</span></h2>
        <p className="text-white/60 text-center mb-12">Every pixel optimized for speed, accessibility, and delight.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: 'Lazy Loading', desc: 'Sections and images load on demand. Preloader prevents layout shift.' },
            { icon: Gauge, title: 'Smooth Scroll', desc: 'CSS scroll-behavior and anchor links provide instant, jitter-free navigation.' },
            { icon: ShieldCheck, title: 'Accessibility', desc: 'Semantic HTML5, ARIA labels, keyboard navigation, and WCAG-compliant contrast.' },
            { icon: Cpu, title: 'Optimized Build', desc: 'Vite production build with code splitting, minification, and tree-shaking enabled.' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-magenta/20 flex items-center justify-center mb-4"><item.icon size={22} className="text-cyan" /></div>
              <h3 className="font-display text-xl mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
