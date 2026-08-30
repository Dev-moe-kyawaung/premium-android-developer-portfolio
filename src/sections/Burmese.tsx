export default function Burmese() {
  return (
    <section id="burmese" className="py-24 bg-deep relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-magenta to-amber" />
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl mb-6">Burmese Language <span className="gradient-text">Support</span></h2>
        <p className="text-3xl md:text-5xl burmese text-white/90 leading-relaxed mb-8 tracking-wide">
          မိုးကျော်အောင် · Moe Kyaw Aung<br />
          <span className="text-cyan text-2xl md:text-3xl">Senior Android Developer</span>
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-5 py-2 rounded-full glass text-cyan font-display">Burmese 🇲🇲</span>
          <span className="px-5 py-2 rounded-full glass text-cyan font-display">English 🌐</span>
          <span className="px-5 py-2 rounded-full glass text-amber font-display">Kotlin ☕</span>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Mobile', val: 'Kotlin · Jetpack Compose · MVVM · Clean Arch' },
            { title: 'Backend', val: 'Firebase · REST APIs · Python' },
            { title: 'Security', val: 'Ethical Hacking · Cybersecurity' },
          ].map((f) => (
            <div key={f.title} className="glass p-6 rounded-2xl">
              <h4 className="font-display text-lg text-magenta mb-2">{f.title}</h4>
              <p className="text-white/70 text-sm">{f.val}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 glass rounded-2xl max-w-3xl mx-auto">
          <h4 className="font-display text-xl text-cyan mb-2">Currently Building</h4>
          <p className="text-xl font-medium">MoekyawTranslator — AI Translation App</p>
          <h4 className="font-display text-xl text-magenta mt-4 mb-2">Certifications</h4>
          <p className="text-lg">40+ certs · Google Developers Launchpad</p>
          <h4 className="font-display text-xl text-amber mt-4 mb-2">Philosophy</h4>
          <p className="text-lg italic">Code with culture. Build with purpose.</p>
        </div>
      </div>
    </section>
  );
}
