import { Download, FileText, Award, ExternalLink } from 'lucide-react';

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 bg-deep2 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl mb-6">Download <span className="gradient-text">Portfolio</span></h2>
            <p className="text-white/70 text-lg mb-8">Complete senior-level resume, certificates index, and technical references in PDF format — ready for hiring managers.</p>
            <div className="space-y-3">
              {[
                { label: 'Senior Developer Resume (PDF)', icon: FileText },
                { label: 'Certificate Portfolio Index', icon: Award },
                { label: 'Project Technical References', icon: ExternalLink },
              ].map((item) => (
                <a key={item.label} href="#" onClick={e => { e.preventDefault(); alert('Download simulation — in production, link to /resume.pdf'); }} className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-cyan/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-magenta/20 flex items-center justify-center"><item.icon size={22} className="text-cyan" /></div>
                  <div><h4 className="font-display text-lg group-hover:text-cyan transition-colors">{item.label}</h4><span className="text-xs text-white/40">PDF · 2.4 MB</span></div>
                  <Download size={18} className="ml-auto text-white/30 group-hover:text-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <h3 className="font-display text-2xl mb-4">Featured Reference</h3>
            <h4 className="font-display text-xl text-cyan mb-3">PulseSync — Real-time Sync Platform</h4>
            <p className="text-white/70 mb-4">Advanced multi-module Android app with Firebase backend, offline-first design, full CI/CD pipeline, and modular architecture. Represents senior-level delivery.</p>
            <a href="https://github.com/Dev-moe-kyawaung/pulsesync-android" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan/20 to-magenta/20 border border-cyan/30 text-white font-medium hover:border-cyan transition-colors">View Project <ExternalLink size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
