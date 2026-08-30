import { useLang } from './lang';

/* Bilingual section heading — uses the active language from LangProvider */
export default function SectionHead({ k, sub, subMm, center = false }: { k: string; sub: string; subMm?: string; center?: boolean }) {
  const { lang, t } = useLang();
  const isMm = lang === 'mm';
  return (
    <div className={center ? 'text-center mb-12' : 'mb-12'}>
      <h2 className={`font-display text-4xl md:text-6xl mb-3 ${isMm ? 'burmese' : ''}`}>{t(k)}</h2>
      <p className={`text-white/60 max-w-2xl ${center ? 'mx-auto' : ''} ${isMm ? 'burmese' : ''}`}>{isMm ? (subMm ?? sub) : sub}</p>
    </div>
  );
}
