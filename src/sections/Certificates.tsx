import { useState } from 'react';
import { Award, ChevronRight } from 'lucide-react';

const categories = [
  { key: 'Programming Languages', count: 13 },
  { key: 'Web Development', count: 13 },
  { key: 'Mobile & App Dev', count: 7 },
  { key: 'Databases', count: 6 },
  { key: 'AI & Data Science', count: 11 },
  { key: 'Security & DevOps', count: 10 },
  { key: 'Blockchain', count: 4 },
  { key: 'Software Engineering', count: 7 },
  { key: 'Marketing & Business', count: 11 },
];

const certs = [
  { name: 'C Programming', cat: 'Programming Languages', date: 'Jul 4, 2024', id: '1720080366600', link: 'https://www.programminghub.io/certificate?id=1720080366600' },
  { name: 'Python Fundamentals', cat: 'Programming Languages', date: 'Aug 12, 2024', id: '1723456789012', link: '#' },
  { name: 'React & Next.js', cat: 'Web Development', date: 'Sep 20, 2024', id: '1729876543210', link: '#' },
  { name: 'Android Jetpack', cat: 'Mobile & App Dev', date: 'Oct 5, 2024', id: '1730123456789', link: '#' },
  { name: 'Firebase Mastery', cat: 'Mobile & App Dev', date: 'Nov 10, 2024', id: '1731456789012', link: '#' },
  { name: 'SQL & PostgreSQL', cat: 'Databases', date: 'Dec 1, 2024', id: '1732456789012', link: '#' },
  { name: 'TensorFlow Lite', cat: 'AI & Data Science', date: 'Jan 15, 2025', id: '1735647890123', link: '#' },
  { name: 'Cybersecurity Basics', cat: 'Security & DevOps', date: 'Feb 20, 2025', id: '1736738901234', link: '#' },
  { name: 'GitHub Actions', cat: 'Security & DevOps', date: 'Mar 10, 2025', id: '1737849012345', link: '#' },
  { name: 'Blockchain Concepts', cat: 'Blockchain', date: 'Apr 5, 2025', id: '1738920123456', link: '#' },
];

export default function Certificates() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? certs : certs.filter((c) => c.cat === filter);
  return (
    <section id="certificates" className="py-28 bg-deep2 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-4xl md:text-6xl mb-2">Credentials & <span className="gradient-text">Certificates</span></h2>
            <p className="text-white/60">82+ technical certificates from Programming Hub across 9 categories.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-cyan"><Award size={18}/> Verified by Programming Hub</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setFilter('All')} className={`px-4 py-2 rounded-full text-sm border transition-all ${filter === 'All' ? 'bg-cyan/20 border-cyan text-cyan' : 'glass border-white/10 text-white/70 hover:border-cyan/40'}`}>All ({certs.length})</button>
          {categories.map((cat) => (
            <button key={cat.key} onClick={() => setFilter(cat.key)} className={`px-4 py-2 rounded-full text-sm border transition-all ${filter === cat.key ? 'bg-cyan/20 border-cyan text-cyan' : 'glass border-white/10 text-white/70 hover:border-cyan/40'}`}>{cat.key} ({cat.count})</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <a key={c.id} href={c.link} target="_blank" rel="noreferrer" className="glass-card p-6 rounded-2xl hover:border-cyan/30 transition-all group flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg group-hover:text-cyan transition-colors">{c.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-card border border-white/10 text-white/60">{c.cat}</span>
              </div>
              <div className="text-sm text-white/50 mb-3">📅 {c.date}</div>
              <div className="text-xs text-white/30 font-mono mb-3">ID: {c.id}</div>
              <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-1 text-cyan text-sm font-medium">Verify Certificate <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
