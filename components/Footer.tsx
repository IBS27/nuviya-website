import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { Button } from './ui/Button';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [state, handleSubmit] = useForm('xeoypedn');

  return (
    <footer id="waitlist" className="relative pt-32 pb-12 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow (Orb) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-[#7B2CBF] blur-[150px] opacity-20 pointer-events-none rounded-t-full" />

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Logo className="w-16 h-16 text-white mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-6">Take back your time.</h2>
          
          <div className="max-w-md mx-auto mt-12 relative">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-white text-lg">You're on the list.</p>
                <p className="mt-2 text-xs text-[#52525B]">We'll notify you when Nuviya is ready.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={`
                  flex items-center bg-[#0a0510] border rounded-full p-2 pl-6 transition-all duration-300
                  ${isFocused
                    ? 'border-[#7B2CBF] shadow-[0_0_30px_rgba(123,44,191,0.3)]'
                    : 'border-white/10'
                  }
                `}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    aria-label="Email address for waitlist"
                    className="bg-transparent w-full text-white placeholder-[#52525B] focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                  <Button
                    variant="primary"
                    className="py-2 px-6 text-sm whitespace-nowrap"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? 'Joining...' : 'Initialize Agent'}
                  </Button>
                </div>
                <p className="mt-4 text-xs text-[#52525B]">Limited spots available for beta cohort.</p>
              </form>
            )}
          </div>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-white/5 text-xs text-[#52525B]">
           <p>© 2025 Nuviya</p>
        </div>
      </div>
    </footer>
  );
};
