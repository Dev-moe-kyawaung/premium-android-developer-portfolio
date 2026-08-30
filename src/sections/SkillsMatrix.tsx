import { motion } from 'framer-motion';
import SectionHead from '../SectionHead';

const groups = [
  {
    title: 'Mobile Core',
    skills: [
      { name: 'Kotlin', v: 96, c: '#7F52FF' },
      { name: 'Jetpack Compose', v: 94, c: '#4285F4' },
      { name: 'Coroutines & Flow', v: 92, c: '#00d9ff' },
      { name: 'Room / SQLite', v: 90, c: '#3DDC84' },
    ],
  },
  {
    title: 'Architecture & Quality',
    skills: [
      { name: 'Clean Architecture', v: 95, c: '#ffc107' },
      { name: 'MVVM / MVI', v: 94, c: '#ff00aa' },
      { name: 'Unit / UI Testing', v: 88, c: '#00d9ff' },
      { name: 'Multi-module', v: 91, c: '#7F52FF' },
    ],
  },
  {
    title: 'Backend, Cloud & AI',
    skills: [
      { name: 'Firebase Suite', v: 90, c: '#FFCA28' },
      { name: 'REST / Retrofit', v: 92, c: '#48B983' },
      { name: 'TFLite / On-Device ML', v: 82, c: '#FF6F00' },
      { name: 'Claude / LLM APIs', v: 85, c: '#ff00aa' },
    ],
  },
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-28 bg-deep relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta/10 rounded-full blur-[130px] -translate-x-1/3 translate-y-1/3" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="skillsMatrix" sub="Animated proficiency graphs — measured in production delivery, not tutorials." subMm="အသုံးပြုချက်များအရ တိုင်းတာထားသော လက်ရာ ဂရပ်များ။" />
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g, gi) => (
            <div key={g.title} className="glass rounded-3xl p-7">
              <h3 className="font-display text-xl mb-6 flex items-center gap-2"><span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan to-magenta" />{g.title}</h3>
              <div className="space-y-5">
                {g.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/80">{s.name}</span>
                      <span className="font-display text-cyan">{s.v}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-card overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${s.c}88, ${s.c})`, boxShadow: `0 0 12px ${s.c}66` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: gi * 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
