import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { GlassCard } from './ui/GlassCard';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 overflow-hidden relative">
      <div className="text-center mb-10 md:mb-16 px-4">
         <h3 className="text-xs sm:text-sm font-medium tracking-widest text-[#9D4EDD] uppercase mb-2">Trusted by builders</h3>
         <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-display">Join the high-bandwidth frequency.</h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex relative w-full overflow-hidden mask-gradient-x">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate list for infinite loop */}
          {[...CONTENT.testimonials, ...CONTENT.testimonials, ...CONTENT.testimonials].map((item, idx) => (
            <div key={idx} className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0">
              <GlassCard className="p-5 sm:p-6 md:p-8 h-full flex flex-col justify-center" hoverEffect={true}>
                <p className="text-base sm:text-lg text-[#A1A1AA] font-light mb-4 sm:mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
                  <span className="text-sm text-white font-medium">{item.author}</span>
                </div>
              </GlassCard>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
