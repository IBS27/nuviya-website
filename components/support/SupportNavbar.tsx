import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../Logo';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const SupportNavbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`
          flex items-center justify-between px-4 sm:px-6 py-3
          mx-auto max-w-5xl rounded-full transition-all duration-300
          ${scrolled
            ? 'bg-[#0a0510]/80 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-transparent border border-transparent'
          }
        `}
      >
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] rounded"
          aria-label="Scroll to top"
        >
          <Logo className="w-6 h-6 text-white" aria-hidden="true" />
          <span className="font-display font-medium text-lg tracking-tight text-white">
            Nuviya
          </span>
        </button>

        {/* CTA Button */}
        <Button
          variant="primary"
          className="px-4 sm:px-5 py-2 text-sm"
          onClick={scrollToBottom}
          icon={<ArrowRight size={16} />}
        >
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">Start</span>
        </Button>
      </div>
    </motion.nav>
  );
};
