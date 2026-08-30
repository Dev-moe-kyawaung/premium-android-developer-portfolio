export default function ProgressRings() {
  const rings = [
    { label: 'Kotlin', value: 95, icon: '☕', color: '#7F52FF' },
    { label: 'Jetpack Compose', value: 92, icon: '🎨', color: '#4285F4' },
    { label: 'Firebase', value: 88, icon: '🔥', color: '#FFCA28' },
    { label: 'CI / CD', value: 85, icon: '⚡', color: '#00d9ff' },
  ];
  return (
    <section className="relative py-24 bg-deep2 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl mb-3">Skill <span className="gradient-text">Proficiency</span></h2>
          <p className="text-white/60">Measured in real-world delivery — not just tutorials.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rings.map((r) => (
            <div key={r.label} className="glass rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="relative w-40 h-40 mb-5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1a1a2e" strokeWidth="8" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke={r.color} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(r.value / 100) * 301.59} 301.59`} style={{ filter: `drop-shadow(0 0 8px ${r.color}66)` }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-display text-white">{r.value}%</span>
                  <span className="text-xs text-white/40">{r.icon}</span>
                </div>
              </div>
              <h3 className="font-display text-xl mb-1">{r.label}</h3>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan/60 to-magenta/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
