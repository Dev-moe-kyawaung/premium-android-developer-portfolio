import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  { name: 'Client — Thailand Tech Agency', text: 'Moe delivered our social dashboard with pixel-perfect UI, Firebase real-time sync, and clean MVVM architecture. A true senior-level partner.', score: 5 },
  { name: 'Project Lead — Myanmar Startup', text: 'His CI/CD pipeline and modular Android architecture saved us weeks of technical debt. Highly recommended for complex mobile builds.', score: 5 },
  { name: 'Collaboration — Bangkok Dev Team', text: 'From Kotlin Coroutines to Compose animations, Moe brings both depth and speed. The app was release-ready in half the estimated time.', score: 5 },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const next = () => setI((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  return (
    <section className="py-28 bg-deep relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2" />
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl mb-12 text-center">What <span className="gradient-text">Clients</span> Say</h2>
        <div className="glass rounded-3xl p-10 md:p-14 relative min-h-[260px] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">{Array.from({ length: reviews[i].score }).map((_, k) => <Star key={k} size={18} className="text-amber fill-amber" />)}</div>
          <blockquote className="text-xl md:text-3xl text-white/90 leading-relaxed mb-6 font-light">"{reviews[i].text}"</blockquote>
          <cite className="text-cyan font-display text-lg">— {reviews[i].name}</cite>
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button onClick={prev} aria-label="Prev" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan transition-colors"><ChevronLeft size={20} /></button>
            <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-cyan transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
