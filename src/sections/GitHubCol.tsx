

const accounts = [
  { url: 'https://moekyawaung-china.github.io/', label: 'moekyawaung-china' },
  { url: 'https://moekyawaung-developer.github.io/', label: 'moekyawaung-developer' },
  { url: 'https://moekyawaungvivov30pro-design.github.io/', label: 'vivov30pro-design' },
  { url: 'https://moekyaw-aung-mm.github.io/', label: 'moekyaw-aung-mm' },
  { url: 'https://moekyawaung-mk.github.io/', label: 'moekyawaung-mk' },
  { url: 'https://moekyawaung-microsoft.github.io/', label: 'microsoft' },
  { url: 'https://moekyawaung-cyber.github.io/', label: 'cyber' },
  { url: 'https://moekyawaung-bangkok.github.io/', label: 'bangkok' },
  { url: 'https://moekyawaung-micro.github.io/', label: 'micro' },
  { url: 'https://moekyawaungmka2032-boop.github.io/', label: 'mka2032-boop' },
  { url: 'https://moekyawaung-dev-mm.github.io/', label: 'dev-mm' },
  { url: 'https://moekyawaungmka2032-boop.github.io/', label: 'mka2032-boop-2' },
  { url: 'https://moekyaw-developer.github.io/', label: 'moekyaw-developer' },
  { url: 'https://moekyawaungmka2032-boop.github.io/', label: 'mka2032-boop-3' },
  { url: 'https://moekyawaung.github.io/', label: 'moekyawaung' },
  { url: 'https://Moekyawaung-mm.github.io/', label: 'Moekyawaung-mm' },
  { url: 'https://moekyawaung-tech.github.io/', label: 'tech' },
  { url: 'https://moekyawaung-hack.github.io/', label: 'hack' },
  { url: 'https://moekyawaung-graduate.github.io/', label: 'graduate' },
  { url: 'https://Moekyawaung-Linux.github.io/', label: 'Linux' },
  { url: 'https://Moekyawaung-coder.github.io/', label: 'coder' },
  { url: 'https://moekyawaung-bangkok.github.io/', label: 'bangkok-2' },
  { url: 'https://moekyawaung-designer.github.io/', label: 'designer' },
  { url: 'https://Moekyawaung2026.github.io/', label: '2026' },
  { url: 'https://moekyawaungmka2034-coder.github.io/', label: 'mka2034-coder' },
  { url: 'https://Moekyawaung-mk.github.io/', label: 'Moekyawaung-mk' },
  { url: 'https://Moekyawaung-cyber.github.io/', label: 'Moekyawaung-cyber' },
  { url: 'https://moekyawaung-web.github.io/', label: 'web' },
  { url: 'https://moekyawaung-micro.github.io/', label: 'micro-2' },
  { url: 'https://moekyawaungvivov30pro-design.github.io/', label: 'vivov30pro-2' },
  { url: 'https://Moekyawaung-dev.github.io/', label: 'dev' },
  { url: 'https://Moekyawaung-cyber.github.io/', label: 'cyber-2' },
  { url: 'https://moekyawaung-china.github.io/', label: 'china-2' },
  { url: 'https://moekyawaungmka2032-boop.github.io/', label: 'mka2032-4' },
  { url: 'https://MoeKyawAung-code.github.io/', label: 'MoeKyawAung-code' },
  { url: 'https://moekyawaung-creator.github.io/', label: 'creator' },
  { url: 'https://moekyawaung-webdeveloper.github.io/', label: 'webdeveloper' },
  { url: 'https://Moekyawaung-co.github.io/', label: 'co' },
  { url: 'https://moekyawaung-edu.github.io/', label: 'edu' },
  { url: 'https://moekyawaung-senior.github.io/', label: 'senior' },
  { url: 'https://Moekyawaung-Development.github.io/', label: 'Development' },
  { url: 'https://moekyawaung-google.github.io/', label: 'google' },
  { url: 'https://Moe-KyawAung.github.io/', label: 'Moe-KyawAung' },
];

export default function GitHubCol() {
  return (
    <section id="github" className="py-28 bg-deep overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-6xl mb-4">GitHub Account <span className="gradient-text">Collections</span></h2>
        <p className="text-white/60 mb-10">43 verified GitHub accounts spanning developer portals, design systems, and regional projects.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {accounts.map((a) => (
            <a key={a.url} href={a.url} target="_blank" rel="noreferrer" className="glass p-5 rounded-2xl flex items-center gap-4 hover:border-cyan/30 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan/30 to-magenta/30 flex items-center justify-center shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
              <div className="min-w-0"><div className="text-sm font-medium truncate group-hover:text-cyan transition-colors">{a.label}</div><div className="text-xs text-white/40 truncate">github.io</div></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
