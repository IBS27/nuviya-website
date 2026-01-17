import type { FC } from 'react';
import { motion } from 'framer-motion';
import { SUPPORT_CONTENT } from '../../constants';
import { ChevronDown } from 'lucide-react';

export const SupportHero: FC = () => {
  const scrollToContent = () => {
    const problemSection = document.getElementById('problem-maze');
    problemSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e]/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter text-white mb-6 leading-[0.95] text-balance"
        >
          {SUPPORT_CONTENT.hero.headline.split(' ').map((word, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                <span
                  style={{
                    background: 'linear-gradient(to bottom, white, rgba(255,255,255,0.4))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {word}
                </span>
              ) : (
                <>{word} </>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#A1A1AA] text-lg sm:text-xl md:text-2xl max-w-2xl font-light mb-10 leading-relaxed"
        >
          {SUPPORT_CONTENT.hero.subheadline}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30 cursor-pointer hover:text-white/50 transition-colors"
          onClick={scrollToContent}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>

      {/* The Event Horizon (Bottom Glow) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute -bottom-[20vh] left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] bg-[#7B2CBF] blur-[120px] rounded-[100%] opacity-30 pointer-events-none mix-blend-screen"
      />
    </section>
  );
};
