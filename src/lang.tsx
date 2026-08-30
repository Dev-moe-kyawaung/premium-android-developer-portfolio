import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'mm';

const dict: Record<Lang, Record<string, string>> = {
  en: {
    badge: 'Mobile App Architect · V123',
    role: 'ANDROID SENIOR DEVELOPER',
    desc: 'Senior Mobile / Android App Architect building secure, scalable, and cinematic mobile products. Kotlin · Jetpack Compose · MVVM · Clean Architecture · Firebase · CI/CD.',
    cta1: 'View Work',
    cta2: 'App Collection',
    cta3: 'Hire Me',
    statY: 'Years',
    statA: 'Apps',
    navHero: 'Hero', navAbout: 'About', navApps: 'Apps', navCert: 'Certificates', navGh: 'GitHub', navLinks: 'Links', navContact: 'Contact',
    skillsMatrix: 'Skills Matrix', skillsSub: 'Animated proficiency graphs — measured in production delivery.',
    roadmap: 'Android Roadmap', roadmapSub: 'From Java roots to on-device AI — a decade of evolution.',
    composeGallery: 'Compose UI Gallery', composeSub: '3D floating previews of real Compose screens.',
    apps: 'My Create App Collection',
    archLab: 'Architecture Lab', archSub: 'Layer-by-layer breakdown of the senior architecture I ship.',
    benchmarks: 'Performance Benchmarks', benchSub: 'Profiling data from release builds — cold start, frames, memory.',
    cicd: 'CI/CD Pipelines', cicdSub: 'Every pull request is built, tested, scanned, and release-ready.',
    aiIntel: 'AI Project Intelligence', aiIntelSub: 'AI-driven, plain-language explanations of my projects.',
    subpages: '25 Subpages Hub', subpagesSub: 'Deep-dive chapters on advanced mobile engineering topics.',
    contact: 'Contact', faq: 'FAQ',
  },
  mm: {
    badge: 'မိုဘိုင်း အက်ပ် အာခီတက်ခ · V123',
    role: 'ဆီနီယာ အင်ဒရွိုက် ဒီဗယ်လောပါ',
    desc: 'လုံခြုံမှုရှိပြီး တည်ငြိမ်ကာ Cinematic မိုဘိုင်း ပရောဂျက်များ တည်ဆောက်နေသော ဆီနီယာ မိုဘိုင်း/အင်ဒရွိုက် အာခီတက်ခ ဖြစ်ပါသည်။ Kotlin · Jetpack Compose · MVVM · Clean Architecture · Firebase · CI/CD။',
    cta1: 'လုပ်ငန်းများ',
    cta2: 'အက်ပ် စုစည်းမှု',
    cta3: 'ငါ့ကို ချမ်းသာပါ',
    statY: 'နှစ်',
    statA: 'အက်ပ်',
    navHero: 'အိမ်', navAbout: 'အကြောင်း', navApps: 'အက်ပ်များ', navCert: 'စာလက်မှတ်', navGh: 'ဂစ်ဟတ်', navLinks: 'လင့်', navContact: 'ဆက်သွယ်',
    skillsMatrix: 'လက်ရာ ချိန်ခံမှု (Skills Matrix)', skillsSub: 'အသုံးပြုချက်များအရ တိုင်းတာထားသော နိုင်ငံရေး ဂရပ်များ။',
    roadmap: 'အင်ဒရွိုက် လမ်းကြောင်း', roadmapSub: 'Java အစအဆင့်မှ On-device AI အထိ — နှစ်တစ်လုံး၏ ဖြစ်တိုးမှု။',
    composeGallery: 'Compose UI ဂယ်လီရီ', composeSub: 'အစစ်အမှန် Compose စာမျက်နှာများ၏ 3D ပေါ်လွင်သော ပုံစံများ။',
    apps: 'တည်ဆောက်ထားသော အက်ပ်များ',
    archLab: 'အာခီတက်ခ လေ့လာခန်း', archSub: 'ငါးတင်ဆက်သော Senior Architecture ၏ အဆင့်ဆင့် ခွဲခြမ်းစိတ်ဖြာမှု။',
    benchmarks: 'ပရိုဖက်ရှင်ရယ် စံနှုန်း', benchSub: 'Release Build များမှ Profiling အချက်အလက် — Cold Start, Frames, Memory။',
    cicd: 'CI/CD ပိုင်းအချင်း', cicdSub: 'Pull Request တိုင်းကို Build, Test, Scan ပြီး Release-Ready တည်ဆောက်သည်။',
    aiIntel: 'AI ပရောဂျက် အချက်ပြ', aiIntelSub: 'AI က ကျွန်တော့် ပရောဂျက်များကို ရိုးရှင်းစွာ ရှင်းပြသည်။',
    subpages: 'အသုံးသုတ် ၂၅ စာမျက်နှာ', subpagesSub: 'အဆင့်မြင့် Mobile Engineering အကြောင်း အသေးစိတ် ခေတ်များ။',
    contact: 'ဆက်သွယ်ရန်', faq: 'မေးလေ့ရှိသော မေးခွန်း',
  },
};

const Ctx = createContext<{ lang: Lang; t: (k: string) => string; toggle: () => void }>({ lang: 'en', t: (k) => k, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (k: string) => dict[lang][k] ?? dict.en[k] ?? k;
  const toggle = () => setLang((l) => (l === 'en' ? 'mm' : 'en'));
  return <Ctx.Provider value={{ lang, t, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
