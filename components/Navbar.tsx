import React, { useState } from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = "Nuviya" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname);
  };

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#agents', label: 'Agents' },
    { href: '#memory', label: 'Memory' },
    { href: '#manifesto', label: 'Manifesto' },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#7B2CBF] focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 md:py-3 bg-[#0a0510]/60 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-4xl shadow-2xl">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030105] rounded"
            aria-label="Scroll to top"
          >
            <Logo className="w-6 h-6 text-white" aria-hidden="true" />
            <span className="font-display font-medium text-lg tracking-tight text-white hidden sm:block">{title}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030105] rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030105] rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop CTA Button */}
            <Button variant="primary" className="hidden sm:flex px-5 py-2 text-sm" onClick={() => scrollTo('waitlist')}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-[#0a0510]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#A1A1AA] hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] rounded"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button variant="primary" className="w-full py-3 text-base" onClick={() => scrollTo('waitlist')}>
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
