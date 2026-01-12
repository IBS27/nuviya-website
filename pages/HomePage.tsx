import { Logo } from '../components/Logo';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#030105] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient to match /mail theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(123, 44, 191, 0.3), transparent)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Logo className="w-40 h-40 text-white mb-10" />
        <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-4 tracking-tight">
          Coming Soon
        </h1>
      </div>
    </div>
  );
}
