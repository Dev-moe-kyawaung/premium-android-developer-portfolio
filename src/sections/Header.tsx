import { useEffect, useState } from 'react';
import { Command, Languages, Menu, Moon, Radio, Sun, X, ChevronUp } from 'lucide-react';
import { useLang } from '../lang';

const navKeys = [
  { key: 'navHero', href: '#hero', code: '00' },
  { key: 'navApps', href: '#apps', code: '01' },
  { key: 'archLab', href: '#arch', code: '02' },
  { key: 'benchmarks', href: '#benchmarks', code: '03' },
  { key: 'aiIntel', href: '#ai', code: '04' },
  { key: 'navContact', href: '#contact', code: '05' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [top, setTop] = useState(false);
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
      setTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;
      document.documentElement.dataset.theme = next ? 'dark' : 'light';
      return next;
    });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-deep/75 backdrop-blur-2xl border-b border-white/10' : 'py-5'}`}>
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 flex items-center justify-between gap-8">
          <a href="#hero" className="group flex items-center gap-3 shrink-0" aria-label="Moe Kyaw Aung home">
            <span className="brand-mark"><span /></span>
            <span className="font-display text-sm tracking-[.18em] text-white/90">MKA<span className="text-cyan">/</span>ARCH</span>
          </a>
          <nav className="hidden xl:flex items-center gap-7" aria-label="Primary navigation">
            {navKeys.map((item) => (
              <a key={item.href} href={item.href} className="nav-rail-link">
                <span className="nav-index">{item.code}</span>
                <span className={lang === 'mm' ? 'burmese' : ''}>{t(item.key)}</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[.17em] font-mono text-white/45 mr-2"><Radio size={12} className="text-cyan animate-pulse" /> LIVE / 2026</div>
            <button onClick={toggle} aria-label="Toggle language" className="header-control"><Languages size={14} /><span>{lang === 'en' ? 'မြန်မာ' : 'EN'}</span></button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="header-control header-icon">{dark ? <Moon size={15} /> : <Sun size={15} />}</button>
            <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="header-control xl:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
            <a href="#contact" className="hidden md:flex header-command"><Command size={14} /> Start a build</a>
          </div>
        </div>
      </header>

      <div className={`mobile-menu fixed inset-0 z-40 xl:hidden ${open ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
        <div className="max-w-[1440px] mx-auto px-7 pt-32 pb-10 h-full flex flex-col justify-between">
          <nav className="space-y-5">
            {navKeys.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={`flex items-end gap-4 font-display text-3xl text-white/90 hover:text-cyan transition-colors ${lang === 'mm' ? 'burmese' : ''}`}><span className="text-xs text-cyan/60 mb-1">/{item.code}</span>{t(item.key)}</a>
            ))}
          </nav>
          <div className="text-xs font-mono text-white/40">MKA/ARCHITECTURE SYSTEMS · TACHILEIK ↔ BANGKOK</div>
        </div>
      </div>

      <a href="#hero" className={`back-top fixed bottom-6 right-6 z-40 ${top ? 'back-top-visible' : ''}`} aria-label="Back to top"><ChevronUp size={19} /></a>
    </>
  );
}