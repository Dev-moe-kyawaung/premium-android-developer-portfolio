import { Mail, Link2, Star } from 'lucide-react';

const lovable = [
  'https://happy-cv-creator.lovable.app', 'https://lovable.dev/invite/ZVLZ2S5', 'https://moekyawaung.lovable.app',
  'https://happy-cv-creator.lovable.app', 'https://moekyawaungmybio.lovable.app/', 'https://the-cv-palette.lovable.app',
  'https://moekyaw-url.lovable.app', 'https://moekyawaung-dev.lovable.app', 'https://moe-kyaw-aung.lovable.app',
  'https://moekyawaungmka.lovable.app', 'https://moekyaw.lovable.app', 'https://m-moekyaw.lovable.app',
  'https://dev-moekyawaung.lovable.app', 'https://dev-moekyaw.lovable.app', 'https://moe-kyaw-aung.lovable.app',
  'https://moekyawaungmka.lovable.app', 'https://moekyaw-url.lovable.app', 'https://cv-beacon.lovable.app/',
  'https://preview--moekyawaungmkamka.lovable.app/', 'https://moekyawaungmkamka.lovable.app',
  'https://pixel-perfect-snap-39.lovable.app', 'https://devmoekyaw.lovable.app',
  'https://moekyawaung.lovable.app/', 'https://profile-persuasion-hub.lovable.app',
  'https://friendly-haven-io.lovable.app', 'https://moekyawaung-github.lovable.app',
  'https://moekyawgithub.lovable.app', 'https://joy-codify-life.lovable.app/',
  'https://mmoekyaw.lovable.app', 'https://color-code-chronicles.lovable.app',
  'https://moekyawaung-free.lovable.app', 'https://app-skill-gallery.lovable.app',
  'https://moekyawaung-github.lovable.app', 'https://spark-coach-create.lovable.app',
  'https://moekyaw-mk.lovable.app', 'https://moekyawaung-myanmar.lovable.app',
  'https://moekyawaungmybio.lovable.app/', 'https://mmoe.lovable.app', 'https://moekyaw-dev.lovable.app',
  'https://joy-codify-life.lovable.app/', 'https://moekyawaung-github.lovable.app',
  'https://moekyawaung-dev.lovable.app', 'https://m-moekyaw.lovable.app',
  'https://the-cv-palette.lovable.app',
];

const emails = [
  'moekyawaung@programmer.net', 'moekyawaung@collector.org', 'moekyawaung@technologist.com',
  'moekyawaung@techie.com', 'moekyawaung@graphic-designer.com', 'moekyawaung@cybergal.com',
  'moekyawaung@webname.com', 'moekyawaung@hackermail.com', 'moekyawaung@graduate.org',
  'moekyawaung@engineer.com', 'moekyawaung@asia.com', 'moekyawaung@contractor.net',
  'moekyawaung@linuxmail.org', 'moekyawaung@usa.com', 'moekyawaung@europe.com',
  'moekyawaung@mail.com', 'moekyawaung@iname.com', 'moekyawaung@socialogist.com',
  'moekyawaung@secretary.net', 'moekyawaung@publicist.com',
];

const socials = [
  { label: 'Tumblr', url: 'https://www.tumblr.com/moekyawaung' },
  { label: 'Flickr', url: 'https://www.flickr.com/people/204037451@N06' },
  { label: 'Gravatar', url: 'https://gravatar.com/moekyawaung13721' },
  { label: 'Bluesky', url: 'https://bsky.app/profile/moekyawaung96.bsky.social' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1' },
  { label: 'YouTube', url: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG' },
  { label: 'Vimeo', url: 'https://vimeo.com/user252414232' },
  { label: 'Slack', url: 'https://moekyawaung.slack.com/' },
  { label: 'PayPal', url: 'https://www.paypal.com/paypalme/my/profile' },
  { label: 'Strikingly', url: 'http://moekyawaung2026.strikingly.com' },
];

export default function Links() {
  return (
    <section id="links" className="py-28 bg-deep2 relative">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-6xl mb-4">Collection <span className="gradient-text">Links</span></h2>
        <p className="text-white/60 mb-12">Lovable WPAs · Email directories · Social media accounts · GitHub profiles.</p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4"><Star size={20} className="text-amber"/><h3 className="font-display text-xl">Lovable WPA</h3></div>
            <div className="flex flex-wrap gap-2">
              {lovable.map((l) => (
                <a key={l} href={l} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-card text-xs text-cyan hover:text-white hover:bg-cyan/10 transition-colors border border-white/5 truncate max-w-[200px]">{new URL(l).hostname.replace('.lovable.app','')}</a>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4"><Mail size={20} className="text-cyan"/><h3 className="font-display text-xl">Email Collection</h3></div>
            <div className="flex flex-wrap gap-2">
              {emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="px-2.5 py-1 rounded-md bg-card text-xs text-white/80 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/5 truncate">{e}</a>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4"><Link2 size={20} className="text-magenta"/><h3 className="font-display text-xl">Social Accounts</h3></div>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-card text-xs text-white/80 hover:text-magenta hover:bg-magenta/10 transition-colors border border-white/5">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6 md:p-10 text-center">
          <h3 className="font-display text-2xl mb-4">Gravatar Profile</h3>
          <a href="https://gravatar.com/moekyawaung13721" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan/20 to-magenta/20 border border-cyan/30 text-white hover:border-cyan transition-all">
            <img src="https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Fres.cloudinary.com%2Fdye5qpwii%2Fimage%2Fupload%2Fv1778763535%2FMKA_25_lbx6fb.webp&size=100" alt="Gravatar" className="w-10 h-10 rounded-full border-2 border-cyan/40" />
            <span>moekyawaung13721 on Gravatar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
