import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', msg: '' });
  };

  return (
    <section id="contact" className="py-28 bg-deep2 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">Let's <span className="gradient-text">Connect</span></h2>
            <p className="text-white/70 mb-8">Open to senior roles, consulting, and collaborative AI / mobile projects.</p>
            <div className="space-y-4 mb-8">
              <a href="tel:+959889000889" className="flex items-center gap-3 text-white/80 hover:text-cyan"><Phone size={18}/> +95 9 889 000 889</a>
              <a href="mailto:moekyawaung@programmer.net" className="flex items-center gap-3 text-white/80 hover:text-cyan"><Mail size={18}/> moekyawaung@programmer.net</a>
              <div className="flex items-center gap-3 text-white/60"><MapPin size={18}/> Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭</div>
            </div>
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.805851536963!2d98.215!3d20.450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzAwLjAiTiA5OMKwMTInNTQuMCJF!5e0!3m2!1sen!2smm!4v1710000000000!5m2!1sen!2smm" width="100%" height="240" style={{ border: 0, borderRadius: '1rem', filter: 'grayscale(0.8) contrast(1.1)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10">
            <h3 className="font-display text-2xl mb-6">Send a Message</h3>
            {sent && <div className="mb-4 p-3 rounded-xl bg-cyan/10 text-cyan font-medium">Message sent! I'll reply shortly.</div>}
            <div className="space-y-4">
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-card border border-white/10 text-white placeholder:text-white/40 focus:border-cyan focus:outline-none transition-colors" />
              <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-card border border-white/10 text-white placeholder:text-white/40 focus:border-cyan focus:outline-none transition-colors" />
              <textarea required rows={4} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl bg-card border border-white/10 text-white placeholder:text-white/40 focus:border-cyan focus:outline-none transition-colors resize-none" />
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan to-magenta text-white font-display font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">Send <Send size={18}/></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
