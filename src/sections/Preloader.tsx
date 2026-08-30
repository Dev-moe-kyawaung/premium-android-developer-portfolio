import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[9999] bg-deep flex flex-col items-center justify-center gap-6">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full animate-[spin-slow_3s_linear_infinite]" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#00d9ff"/><stop offset="100%" stopColor="#ff00aa"/></linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#grad)" strokeWidth="3" strokeDasharray="220 30" opacity="0.9" />
        </svg>
        <div className="absolute inset-8 rounded-full border-2 border-cyan/20 animate-pulse" />
      </div>
      <div className="flex items-center gap-3 text-cyan text-xl font-display tracking-widest">
        <Sparkles className="w-5 h-5 animate-bounce" />
        <span>LOADING PORTFOLIO V123</span>
      </div>
      <div className="w-64 h-1 bg-card rounded-full overflow-hidden"><div className="h-full w-2/3 bg-gradient-to-r from-cyan to-magenta rounded-full animate-[shimmer_1.5s_ease_infinite]" /></div>
    </div>
  );
}
