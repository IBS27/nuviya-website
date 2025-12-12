import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Ambience - Subtle overlay to enhance center focus */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e]/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Animated Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 sm:mb-10 md:mb-12 relative group"
        >
          <div className="absolute inset-0 bg-[#7B2CBF] blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-full" />
          <Logo className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter text-white mb-6 leading-[0.9]"
        >
          Your Inbox, <span
            style={{
              background: 'linear-gradient(to bottom, white, rgba(255,255,255,0.4))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >Handled.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed"
        >
          {CONTENT.hero.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center"
        >
          <Button variant="primary" className="text-lg px-8 py-4" onClick={() => scrollTo('waitlist')}>
            {CONTENT.hero.cta}
          </Button>
          <Button variant="ghost" className="text-sm px-6" icon={<ArrowRight size={16} />} onClick={() => scrollTo('manifesto')}>
            Read the Manifesto
          </Button>
        </motion.div>
      </div>

      {/* The Event Horizon (Bottom Glow) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute -bottom-[20vh] left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] bg-[#7B2CBF] blur-[120px] rounded-[100%] opacity-40 pointer-events-none mix-blend-screen"
      />
    </section>
  );
};