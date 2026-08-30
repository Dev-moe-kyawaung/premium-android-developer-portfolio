import { ExternalLink } from 'lucide-react';

const apps = [
  { title: 'Social Dashboard', desc: 'Real-time analytics dashboard with multi-tenant auth and dark UI.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp', link: 'https://github.com/moekyawaung-tech/social-dashboard' },
  { title: 'PWA App', desc: 'Progressive Web App with offline-first service workers.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763532/MKA_11_jbijtv.webp', link: 'https://github.com/moekyawaung-tech/pwa-app' },
  { title: 'Admin Dashboard', desc: 'Admin analytics panel with role-based access control.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763532/MKA_13_i4bao3.webp', link: 'https://github.com/moekyawaung-tech/game-collection' },
  { title: 'Stock Market', desc: 'Live market data visualization with REST integration.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp', link: 'https://github.com/moekyawaung-tech/Weather-app' },
  { title: 'Game Collection', desc: 'Curated game library with Firebase real-time sync.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png', link: 'https://github.com/moekyawaung-tech/game-collection' },
  { title: 'Music Player', desc: 'Ambient music player with background playback.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747391/image_mplr5r.png', link: 'https://github.com/moekyawaung-tech/video-player' },
  { title: 'Chat App', desc: 'End-to-end encrypted messaging with push notifications.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png', link: 'https://github.com/moekyawaung-tech/social-dashboard' },
  { title: 'World Cup', desc: 'Sports tournament tracker with live scores.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747394/image-1_f6zlmk.jpg', link: 'https://github.com/moekyawaung-tech/game-collection' },
  { title: 'E-commerce', desc: 'Full store with cart, Stripe, and inventory management.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp', link: 'https://github.com/moekyawaung-tech/POS-Full-Version' },
  { title: 'Portfolio', desc: 'Creator portfolio with CMS and animated galleries.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp', link: 'https://github.com/Dev-moe-kyawaung' },
  { title: 'Money Tracker', desc: 'Budget planner with charts and cloud sync.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp', link: 'https://github.com/moekyawaung-tech/Advance-POS-Version' },
  { title: 'Weather', desc: 'Location-based forecasts with offline caching.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp', link: 'https://github.com/moekyawaung-tech/Weather-app' },
  { title: 'Crypto', desc: 'Crypto portfolio tracking with real-time prices.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png', link: 'https://github.com/moekyawaung-tech/Weather-app' },
  { title: 'Todo', desc: 'Task management with reminders and categories.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763532/MKA_11_jbijtv.webp', link: 'https://github.com/moekyawaung-tech/javascript-todo' },
  { title: 'Video Player', desc: 'Offline video player with subtitle support.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png', link: 'https://github.com/moekyawaung-tech/video-player' },
  { title: 'LEGEND!', desc: 'Flagship app — AI translation, multi-language, premium UX.', img: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1779052645/2153-fireworks-composer_gm3e0h.jpg', link: 'https://github.com/moekyawaung-tech/Advance-POS-Version' },
];

export default function Apps() {
  return (
    <section id="apps" className="py-28 bg-deep relative">
      <div className="absolute left-0 top-20 w-80 h-80 bg-magenta/10 rounded-full blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <h2 className="font-display text-4xl md:text-6xl mb-2">My Create <span className="gradient-text">App Collection</span></h2>
            <p className="text-white/60">16 premium applications — from social dashboards to AI translators.</p>
          </div>
          <a href="https://github.com/moekyawaung-tech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm hover:text-cyan transition-colors font-medium">View All on GitHub <ExternalLink size={14}/></a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((a) => (
            <a key={a.title} href={a.link} target="_blank" rel="noreferrer" className="glass-card group rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 block">
              <div className="h-48 overflow-hidden relative"><img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <div className="p-5">
                <h3 className="font-display text-lg mb-1 group-hover:text-cyan transition-colors">{a.title}</h3>
                <p className="text-sm text-white/60 leading-snug">{a.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
