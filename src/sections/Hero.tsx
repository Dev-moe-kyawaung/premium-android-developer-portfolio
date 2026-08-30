import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, CircleCheck } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLang } from '../lang';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 100, damping: 20 });
  const y = useSpring(my, { stiffness: 100, damping: 20 });
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w; canvas.height = h;
    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 80; i++) dots.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8, r: Math.random() * 2 + 1 });
    let anim = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,217,255,${0.5 + Math.sin(anim * 0.05 + i) * 0.3})`;
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,0,170,${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      anim++;
      requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h; };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
    rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 14);
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
  };

  return (
    <section id="hero" onPointerMove={onPointerMove} onPointerLeave={() => { mx.set(0); my.set(0); rotateX.set(0); rotateY.set(0); }} className="relative min-h-screen flex items-center overflow-hidden bg-deep bg-grid hero-stage">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="hero-scanline absolute inset-0 z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_72%_38%,rgba(0,217,255,0.12),transparent_28%),linear-gradient(180deg,rgba(11,11,26,0.22),#0b0b1a)] z-10 pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-40 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] gap-12 xl:gap-24 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-kicker mb-7">
              <span className="hero-kicker-line" />
              <span>{t('badge')}</span>
              <span className="hero-kicker-status"><span /> AVAILABLE FOR SELECT BUILDS</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08 }} className="font-display text-[clamp(3.2rem,8vw,8.5rem)] leading-[.87] tracking-[-0.08em] mb-8">
              <span className="block text-white">MOE KYAW</span>
              <span className="block hero-outline-word">AUNG</span>
              <span className={`block text-white/55 text-[clamp(1.4rem,3vw,3rem)] tracking-[-0.04em] leading-none mt-5 ${lang === 'mm' ? 'burmese' : ''}`}>{t('role')}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .3 }} className={`max-w-2xl mx-auto lg:mx-0 text-white/62 text-base md:text-lg leading-relaxed mb-9 ${lang === 'mm' ? 'burmese' : ''}`}>{t('desc')}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }} className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <a href="#apps" className="hero-primary-cta">{t('cta1')} <ArrowUpRight size={17} /></a>
              <a href="#contact" className="hero-text-cta">{t('cta3')} <span>↗</span></a>
            </motion.div>
          </div>

          <motion.div ref={tiltRef} style={{ rotateX, rotateY, x, y, transformPerspective: 1100 }} className="architect-orbit relative mx-auto w-full max-w-[520px] aspect-square">
            <div className="orbit-ring orbit-ring-a" /><div className="orbit-ring orbit-ring-b" /><div className="orbit-node orbit-node-a" /><div className="orbit-node orbit-node-b" />
            <div className="architect-portrait absolute inset-[12%] overflow-hidden rounded-[42%_58%_48%_52%/46%_42%_58%_54%]">
              <img src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp" alt="Moe Kyaw Aung, Senior Android Developer" className="w-full h-full object-cover grayscale-[.15] contrast-125" />
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,217,255,.2),transparent_40%,rgba(255,0,170,.16))] mix-blend-screen" />
            </div>
            <div className="architect-console absolute bottom-[8%] left-[-2%] md:left-[-8%] w-[75%] glass p-4 md:p-5 text-left">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3"><span className="text-[10px] text-cyan tracking-[.2em] font-display">SYSTEM / MKA-ARCH</span><span className="text-[10px] text-white/40">ONLINE</span></div>
              <div className="font-mono text-[11px] md:text-xs text-white/65 space-y-1"><div><span className="text-magenta">$</span> mission --status</div><div className="text-cyan">&gt; MOBILE SYSTEMS / READY</div><div><span className="text-magenta">$</span> stack --primary</div><div className="text-white/90">Kotlin / Compose / Firebase / AI</div></div>
            </div>
            <div className="architect-signal absolute top-[13%] right-[-2%] glass px-4 py-3 text-left"><div className="text-[10px] tracking-[.18em] text-white/40 mb-1">CORE SIGNAL</div><div className="flex items-center gap-2 text-sm text-cyan"><CircleCheck size={14} /> 99.9% STABLE</div></div>
          </motion.div>
        </div>

        <div className="hero-bottomline mt-20 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/35 font-mono">
          <div className="flex items-center gap-5"><span>YANGON / BANGKOK</span><span className="text-cyan">20°27'N 99°53'E</span></div>
          <div className="flex items-center gap-4"><span>ARCHITECTURE</span><span className="text-white/15">/</span><span>PERFORMANCE</span><span className="text-white/15">/</span><span>AI SYSTEMS</span></div>
          <a href="#about" className="flex items-center gap-2 hover:text-cyan transition-colors">EXPLORE SYSTEM <ArrowDown size={14} /></a>
        </div>
      </div>
    </section>
  );
}
