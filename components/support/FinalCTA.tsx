import type { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { SUPPORT_CONTENT } from '../../constants';
import { Button } from '../ui/Button';
import { Logo } from '../Logo';

export const FinalCTA: FC = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [state, handleSubmit] = useForm('xeoypedn');

  return (
    <footer id="final-cta" className="relative pt-24 sm:pt-32 md:pt-40 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[#7B2CBF] blur-[180px] opacity-15 pointer-events-none rounded-t-full" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <Logo className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-white mx-auto mb-8 opacity-80" />

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-4 md:mb-6 leading-tight">
            {SUPPORT_CONTENT.finalCta.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10">
            {SUPPORT_CONTENT.finalCta.subheadline}
          </p>

          {/* Email Form or Success */}
          <div className="max-w-md mx-auto">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/30">
                  <div className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse" />
                  <p className="text-white text-base">You're on the list.</p>
                </div>
                <p className="mt-4 text-xs text-[#52525B]">
                  We'll notify you when we're ready to represent you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  className={`
                    flex items-center bg-[#0a0510] border rounded-full p-1.5 sm:p-2 pl-4 sm:pl-6 transition-all duration-300
                    ${isFocused
                      ? 'border-[#7B2CBF] shadow-[0_0_30px_rgba(123,44,191,0.3)]'
                      : 'border-white/10'
                    }
                  `}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="bg-transparent w-full text-white placeholder-[#52525B] focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                  <Button
                    variant="primary"
                    className="py-2.5 sm:py-2 px-4 sm:px-6 text-xs sm:text-sm whitespace-nowrap"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? 'Sending...' : SUPPORT_CONTENT.finalCta.cta}
                  </Button>
                </div>
                <p className="mt-4 text-xs text-[#52525B]">
                  Early access for customer support delegation.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Footer copyright */}
        <div className="mt-20 sm:mt-24 md:mt-32 pt-6 sm:pt-8 border-t border-white/5 text-xs text-[#52525B]">
          <p>© 2025 Nuviya</p>
        </div>
      </div>
    </footer>
  );
};
