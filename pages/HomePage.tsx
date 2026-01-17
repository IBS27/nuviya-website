import { SupportHero } from '../components/support/SupportHero';
import { ProblemMaze } from '../components/support/ProblemMaze';
import { AgentBehavior } from '../components/support/AgentBehavior';
import { SupportBentoGrid } from '../components/support/SupportBentoGrid';
import { TrustControl } from '../components/support/TrustControl';
import { FinalCTA } from '../components/support/FinalCTA';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#030105] overflow-x-hidden">
      {/* 1. Hero */}
      <SupportHero />

      {/* 2. The Problem (includes insight) */}
      <ProblemMaze />

      {/* 3. The Solution (includes comparison) */}
      <AgentBehavior />

      {/* 4. Real Cases */}
      <SupportBentoGrid />

      {/* 5. You're in Control (includes audience fit) */}
      <TrustControl />

      {/* 6. CTA */}
      <FinalCTA />
    </div>
  );
}
