import React from 'react';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Subtle ambient glow - minimal, not decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7B2CBF] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-8 bg-white/10" />
            <span className="text-xs font-medium tracking-widest text-[#52525B] uppercase">Manifesto</span>
            <div className="h-px w-8 bg-white/10" />
          </div>

          {/* Main statement - Inter Tight, light weight */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-12 leading-[1.15] tracking-tight">
            Email was designed for a world before intelligence.
          </h2>

          {/* Body copy */}
          <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              For decades, we've been the middleware — sorting, filtering, responding to an endless stream that machines could handle better than we ever could.
            </p>

            <p>
              We built Nuviya because your inbox should work <span className="text-white">for</span> you, not the other way around. Every email that doesn't need your attention is a decision you shouldn't have to make.
            </p>

            <p>
              This isn't about hiding notifications. It's about building a system that <span className="text-white">understands</span> — one that knows the difference between a client emergency and a newsletter, between a genuine request and a polite FYI.
            </p>
          </div>

          {/* Closing statement - emphasized */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-xl mx-auto">
            <p className="text-xl md:text-2xl font-display font-light text-white leading-relaxed">
              The future of email isn't a better filter.<br />
              <span className="text-[#A1A1AA]">It's a thoughtful agent.</span>
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
