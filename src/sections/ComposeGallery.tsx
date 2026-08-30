import { useEffect, useRef, useState } from 'react';
import SectionHead from '../SectionHead';

const screens = [
  { img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795115579_acfm5j.png', name: 'Social Dashboard', chip: 'Material 3' },
  { img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794781671_kytvkc.png', name: 'POS Ultimate', chip: 'Paging 3' },
  { img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794430377_n7xlmz.png', name: 'Music Player', chip: 'Custom Anim' },
  { img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795859/copilot_image_1778795000722_eo96gj.png', name: 'Chat App', chip: 'Flow State' },
  { img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778794626112_ega7kk.png', name: 'Translator', chip: 'On-device AI' },
];

function Phone({ img, name, chip, delay, i }: { img: string; name: string; chip: string; delay: number; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [r, setR] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setR({ x: ((e.clientY - rect.top) / rect.height - 0.5) * -14, y: ((e.clientX - rect.left) / rect.width - 0.5) * 14 });
    };
    const leave = () => setR({ x: 0, y: 0 });
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, []);
  return (
    <div className="animate-float" style={{ animationDelay: `${delay}s`, animationDuration: `${5 + i * 0.6}s` }}>
      <div ref={ref} style={{ transform: `perspective(900px) rotateX(${r.x}deg) rotateY(${r.y}deg)`, transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}>
        <div className="w-44 md:w-52 mx-auto rounded-[2.6rem] border-[6px] border-white/15 bg-card2 shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_45px_rgba(0,217,255,0.12)] overflow-hidden relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-deep z-10" />
          <img src={img} alt={name} className="w-full h-[420px] md:h-[480px] object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-deep/95 to-transparent">
            <div className="font-display text-sm text-white">{name}</div>
            <div className="text-[10px] text-cyan font-medium tracking-wide">{chip}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComposeGallery() {
  return (
    <section id="compose" className="py-28 bg-deep relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-[130px] translate-x-1/3" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="composeGallery" sub="3D floating previews of real Compose screens — hover to tilt in 3D space." subMm="အစစ်အမှန် Compose စာမျက်နှာများ၏ 3D ပေါ်လွင်သော ပုံစံများ — 3D တွင် tilt ဖြစ်စေရန် hover တွေ့ပါ။" />
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap items-start">
          {screens.map((s, i) => (
            <Phone key={s.name} {...s} delay={i * 0.7} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
