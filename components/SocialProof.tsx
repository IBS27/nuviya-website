import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { GlassCard } from './ui/GlassCard';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="text-center mb-16 px-4">
         <h3 className="text-sm font-medium tracking-widest text-[#9D4EDD] uppercase mb-2">Trusted by builders</h3>
         <h2 className="text-3xl text-white font-display">Join the high-bandwidth frequency.</h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex relative w-full overflow-hidden mask-gradient-x">
        <motion.div 
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate list for infinite loop */}
          {[...CONTENT.testimonials, ...CONTENT.testimonials, ...CONTENT.testimonials].map((item, idx) => (
            <div key={idx} className="w-[400px] flex-shrink-0">
              <GlassCard className="p-8 h-full flex flex-col justify-center" hoverEffect={true}>
                <p className="text-lg text-[#A1A1AA] font-light mb-6">"{item.quote}"</p>
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
