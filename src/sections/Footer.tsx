

export default function Footer() {
  return (
    <footer className="bg-deep2 border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <a href="#hero" className="font-display text-3xl tracking-tight"><span className="gradient-text">MKE</span> <span className="text-white/90">V123</span></a>
            <p className="text-white/50 mt-4 text-sm leading-relaxed">Senior Android Developer with 12 years of experience building secure, scalable mobile applications with Kotlin, Jetpack Compose, and Firebase.</p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {['Hero','About','Apps','Certificates','GitHub','Links','Contact'].map(s => <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-cyan transition-colors">{s}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Social</h4>
            <div className="flex gap-3 mb-4">
              {[
                { label: 'GH', url: 'https://github.com/Dev-moe-kyawaung' },
                { label: 'LI', url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1' },
                { label: 'YT', url: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG' },
                { label: 'IG', url: '#' },
                { label: 'EM', url: 'mailto:moekyawaung@programmer.net' },
              ].map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-display text-white/70 hover:text-cyan hover:border-cyan/40 transition-all">{s.label}</a>
              ))}
            </div>
            <p className="text-xs text-white/40">Gravatar, Play Store, Slack, Vimeo, Bluesky, TikTok, Pinterest, WordPress, GitHub — all linked from <a href="https://gravatar.com/moekyawaung13721" target="_blank" rel="noreferrer" className="text-cyan">Gravatar</a>.</p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Newsletter</h4>
            <form onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }} className="flex gap-2">
              <input type="email" placeholder="Email address" required className="flex-1 px-3 py-2 rounded-lg bg-card border border-white/10 text-sm text-white placeholder:text-white/40 focus:border-cyan focus:outline-none" />
              <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan to-magenta text-white font-display text-sm hover:brightness-110 transition-all">Join</button>
            </form>
          </div>
        </div>
        <div className="glass-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Moe Kyaw Aung — Portfolio V123. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan">Privacy</a>
            <a href="#" className="hover:text-cyan">Terms</a>
            <a href="#" className="hover:text-cyan">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
