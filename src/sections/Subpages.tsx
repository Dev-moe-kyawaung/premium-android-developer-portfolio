import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import SectionHead from '../SectionHead';

type Page = { title: string; summary: string; points: string[]; tags: string[] };

const pages: Page[] = [
  { title: 'Kotlin Concurrency Deep Dive', summary: 'Structured concurrency, channels, and dispatcher mastery for production Android apps.', points: ['CoroutineScope lifecycle tied to ViewModel', 'Channel vs Flow for event streams', 'Dispatchers.IO vs Default for UI-bound work'], tags: ['Kotlin', 'Coroutines', 'Flow'] },
  { title: 'Compose Animation Lab', summary: 'Custom animations, spring physics, and choreography that feel cinematic.', points: ['AnimatedContent for screen transitions', 'Spring vs tween damping ratios', 'Animatable for gesture-driven effects'], tags: ['Compose', 'Animation', 'UX'] },
  { title: 'Clean Architecture Patterns', summary: 'Domain purity and dependency inversion for testable Android codebases.', points: ['Use cases as the only domain entry', 'Repository interfaces in domain layer', 'Mappers keep entities DTO-free'], tags: ['Architecture', 'Testing', 'SOLID'] },
  { title: 'Multi-Module Android', summary: 'Feature and core modules that cut build times and enable parallel teams.', points: ['Module boundaries via API modules', 'Compose previews per feature module', 'Gradle configuration cache wins'], tags: ['Gradle', 'Modularity', 'CI/CD'] },
  { title: 'Firebase Security Rules', summary: 'Server-enforced access control for Firestore and Storage at scale.', points: ['Least-privilege per collection', 'Request-time validation over client trust', 'Versioned rule rollouts'], tags: ['Firebase', 'Security', 'Firestore'] },
  { title: 'Room & Offline-First', summary: 'Local-first data design with sync queues and conflict resolution.', points: ['Type converters + relation caching', 'Query observation via LiveData/Flow', 'Background sync with WorkManager'], tags: ['Room', 'Offline', 'Sync'] },
  { title: 'Retrofit & Interceptors', summary: 'Resilient networking with retries, auth refresh, and telemetry.', points: ['Auth-refresh interceptor chain', 'OkHttp cache for idempotent GETs', 'Typed errors mapped to UiState'], tags: ['Retrofit', 'OkHttp', 'REST'] },
  { title: 'Material 3 Design Tokens', summary: 'Centralized color, shape, and type tokens with dynamic color support.', points: ['ColorScheme from seed color', 'DynamicColor on Android 12+', 'Theme customization per brand'], tags: ['Material 3', 'Theming', 'Design'] },
  { title: 'CI/CD with GitHub Actions', summary: 'Matrix builds, artifact publishing, and automated release promotion.', points: ['Matrix per ABI + flavor', 'Reusable workflow templates', 'Play internal track auto-deploy'], tags: ['GitHub Actions', 'CI/CD', 'Release'] },
  { title: 'Performance Profiling', summary: 'Macrobenchmark suites, frame tracing, and startup decomposition.', points: ['Macrobenchmark for startup P95', 'Frame timeline for jank hunting', 'Baseline profiles for R8'], tags: ['Performance', 'Profiling', 'R8'] },
  { title: 'Memory Leak Forensics', summary: 'LeakCanary workflows, weak-reference hygiene, and bitmap budgets.', points: ['LeakCanary in debug builds', 'Context capture anti-patterns', 'Image downsampling pipelines'], tags: ['Memory', 'Debugging', 'Images'] },
  { title: 'On-Device ML (TFLite)', summary: 'Edge inference with quantized models and smart fallbacks.', points: ['INT8 quantization for mobile', 'Delegate selection per device', 'Hybrid cloud LLM fallback'], tags: ['TFLite', 'ML', 'Edge AI'] },
  { title: 'Claude API Integration', summary: 'Streaming LLM responses into Compose with local context caching.', points: ['SSE token streaming UI', 'Prompt templates versioned', 'Cost caps + local cache'], tags: ['AI', 'LLM', 'Streaming'] },
  { title: 'KMM Architecture', summary: 'Shared domain logic across Android and other Kotlin targets.', points: ['expect/actual for platform glue', 'Shared UI state models', 'Gradle multiplatform config'], tags: ['KMM', 'Multiplatform', 'Architecture'] },
  { title: 'StateFlow vs LiveData', summary: 'Choosing reactive state containers in modern Android.', points: ['StateFlow for composable state', 'Conflation semantics explained', 'Lifecycle awareness via WithLifecycle'], tags: ['Flow', 'State', 'Compose'] },
  { title: 'Navigation Compose', summary: 'Type-safe navigation graphs, deep links, and back stacks.', points: ['NavController as composable state', 'Deep link argument parsing', 'Nested nav graphs per feature'], tags: ['Navigation', 'Compose', 'Deep links'] },
  { title: 'Paging 3', summary: 'Cursor pagination with source caching and load-state surfacing.', points: ['PagingSource keying strategies', 'RemoteKey tables in Room', 'LoadStates in the UI'], tags: ['Paging', 'Data', 'UX'] },
  { title: 'Dependency Injection (Hilt)', summary: 'Compile-time-safe DI with scoped graphs per module.', points: ['@Binds vs @Inject constructors', 'Module scoping (@Singleton etc.)', 'Testing overrides with @TestInstallIn'], tags: ['Hilt', 'DI', 'Testing'] },
  { title: 'Testing Pyramid', summary: 'Unit, integration, and UI testing with realistic budgets.', points: ['70% unit / 20% integ / 10% UI', 'Robolectric for fast integration', 'Compose test rules + Espresso'], tags: ['Testing', 'TDD', 'Quality'] },
  { title: 'ProGuard & Obfuscation', summary: 'R8 rules, keep annotations, and shrinking without breakage.', points: ['Reflection-safe keep rules', 'Consumer rules for libraries', 'DexGuard-grade renaming'], tags: ['R8', 'Security', 'Release'] },
  { title: 'Accessibility for Mobile', summary: 'WCAG-minded Android: TalkBack, contrast, and dynamic type.', points: ['contentDescription semantics', 'Min touch targets 48dp', 'DynamicTypeCompat scaling'], tags: ['Accessibility', 'WCAG', 'UX'] },
  { title: 'Internationalization (i18n)', summary: 'String resources, RTL layouts, and Burmese typography.', points: ['Plurals + gendered strings', 'RTL mirroring in Compose', 'Noto fonts for Myanmar script'], tags: ['i18n', 'RTL', 'Burmese'] },
  { title: 'Edge Computing Mobile', summary: 'Local processing strategies that save bandwidth and privacy.', points: ['On-device feature flags', 'Local inference routing', 'Delta sync protocols'], tags: ['Edge', 'Offline', 'Privacy'] },
  { title: 'Design Systems', summary: 'Component libraries with tokens, docs, and versioning.', points: ['Single source of truth tokens', 'Semver for internal libs', 'Preview-driven docs'], tags: ['Design', 'Library', 'Tokens'] },
  { title: 'Release Strategy & Fastlane', summary: 'Promoted tracks, staged rollouts, and crash-gated releases.', points: ['Fastlane lanes per track', 'Staged rollout percentages', 'Crash-rate release gates'], tags: ['Release', 'Fastlane', 'Play Store'] },
];

export default function Subpages() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null);
      if (openIdx !== null && e.key === 'ArrowRight') setOpenIdx((i) => ((i ?? 0) + 1) % pages.length);
      if (openIdx !== null && e.key === 'ArrowLeft') setOpenIdx((i) => ((i ?? 0) - 1 + pages.length) % pages.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIdx]);

  const p = openIdx !== null ? pages[openIdx] : null;

  return (
    <section id="subpages" className="py-28 bg-deep2 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[130px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHead k="subpages" sub="Deep-dive chapters on advanced mobile engineering topics." subMm="အဆင့်မြင့် Mobile Engineering အကြောင်း အသေးစိတ် ခေတ်များ။" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {pages.map((pg, i) => (
            <button key={pg.title} onClick={() => setOpenIdx(i)} className="group glass rounded-2xl p-4 text-left hover:border-cyan/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-xs text-cyan/60 group-hover:text-cyan transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <BookOpen size={13} className="text-white/30 group-hover:text-cyan transition-colors" />
              </div>
              <h4 className="text-sm font-medium leading-snug group-hover:text-cyan transition-colors">{pg.title}</h4>
            </button>
          ))}
        </div>
      </div>

      {/* Subpage overlay */}
      {p && (
        <div className="fixed inset-0 z-[90] bg-deep/95 backdrop-blur-2xl flex items-center justify-center p-6">
          <div className="max-w-3xl w-full glass rounded-3xl p-8 md:p-12 relative">
            <button onClick={() => setOpenIdx(null)} aria-label="Close" className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-cyan transition-colors"><X size={18} /></button>
            <div className="font-display text-xs text-cyan/60 mb-2">SUBPAGE {String((openIdx ?? 0) + 1).padStart(2, '0')} / 25</div>
            <h3 className="font-display text-3xl md:text-4xl mb-4 gradient-text">{p.title}</h3>
            <p className="text-white/80 text-lg mb-6">{p.summary}</p>
            <div className="space-y-3 mb-6">
              {p.points.map((pt) => (
                <div key={pt} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                  <span className="text-sm text-white/70">{pt}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((t) => <span key={t} className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-medium">{t}</span>)}
            </div>
            <div className="flex items-center justify-between pt-5 border-t border-white/10">
              <button onClick={() => setOpenIdx(((openIdx ?? 0) - 1 + pages.length) % pages.length)} className="flex items-center gap-2 text-white/60 hover:text-cyan transition-colors text-sm"><ChevronLeft size={18} /> Previous</button>
              <span className="text-xs text-white/30">← → keys to navigate</span>
              <button onClick={() => setOpenIdx(((openIdx ?? 0) + 1) % pages.length)} className="flex items-center gap-2 text-white/60 hover:text-cyan transition-colors text-sm">Next <ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
