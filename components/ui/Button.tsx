import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = "",
  icon,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-[#7B2CBF] text-white shadow-[0_0_20px_rgba(123,44,191,0.5)] border border-[#9D4EDD]/50 hover:shadow-[0_0_30px_rgba(123,44,191,0.8)]",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md",
    ghost: "bg-transparent text-[#A1A1AA] hover:text-white",
    outline: "bg-transparent border border-white/20 text-white hover:border-[#9D4EDD] hover:text-[#9D4EDD]"
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      )}
    </motion.button>
  );
};
