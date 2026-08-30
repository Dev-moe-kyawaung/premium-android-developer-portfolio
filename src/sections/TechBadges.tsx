export default function TechBadges() {
  const badges = [
    'Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Firebase', 'REST API', 'Retrofit', 'Room', 'Coroutines', 'Flow',
    'GitHub Actions', 'Azure DevOps', 'Fastlane', 'Gradle', 'Material 3', 'TensorFlow Lite', 'Claude API', 'Python', 'Linux', 'Kali'
  ];
  return (
    <section id="tech" className="py-16 bg-deep2 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="font-display text-2xl md:text-3xl mb-6 text-center">Tech <span className="gradient-text">Heavy</span> Stack</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map(b => (
            <span key={b} className="px-4 py-2 rounded-full glass text-sm font-medium text-cyan hover:bg-cyan/10 transition-colors border border-white/10">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
