import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-[#0a0510]/60 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-4xl shadow-2xl">
        <div className="flex items-center gap-3">
          <Logo className="w-6 h-6 text-white" />
          <span className="font-display font-medium text-lg tracking-tight text-white hidden sm:block">Nuviya</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#agents" className="hover:text-white transition-colors">Agents</a>
          <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
        </div>

        <Button variant="primary" className="px-5 py-2 text-sm" onClick={() => scrollTo('waitlist')}>
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};
