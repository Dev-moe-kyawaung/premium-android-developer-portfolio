import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What is your expertise with Jetpack Compose?', a: 'I have built production-grade Compose UIs with custom themes, animations, accessibility support, and multi-module architecture. I understand state management with ViewModel, Flow, and snapshot state.' },
  { q: 'How do you handle security in mobile apps?', a: 'I use ProGuard/R8 obfuscation, encrypted SharedPreferences/DataStore, biometric auth, SSL pinning, and Firebase Security Rules for server-side enforcement.' },
  { q: 'Can you work remotely / hybrid?', a: 'Yes. I have delivered projects remotely for international clients and maintain clear communication via async updates, GitHub PRs, and CI pipelines.' },
  { q: 'Do you offer consulting for AI / ML integration?', a: 'Yes. I integrate on-device ML with TFLite, use REST APIs for cloud AI (Claude, OpenAI), and design efficient data pipelines for mobile use cases.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-deep relative">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left font-display text-lg hover:text-cyan transition-colors">
                <span>{f.q}</span>
                {open === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className={`px-6 transition-all duration-300 ${open === i ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-white/70 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
