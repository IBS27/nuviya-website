import React from 'react';
import { motion } from 'framer-motion';
import { GlassCardProps } from '../../types';

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <motion.div 
      className={`
        relative overflow-hidden rounded-2xl border border-white/10 
        bg-white/5 backdrop-blur-xl shadow-xl
        ${className}
      `}
      whileHover={hoverEffect ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glossy sheen effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};