import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  const maskId = "nuviya-logo-gap-mask";

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="white" />
          {/* The "Eraser" stroke for the gap. 
              It follows the path of the FRONT diagonal (Top-Left to Bottom-Right).
              Width is thicker than the actual line to create the whitespace gap.
          */}
          <line 
            x1="20" y1="20" 
            x2="80" y2="80" 
            stroke="black" 
            strokeWidth="14" 
            strokeLinecap="butt"
          />
        </mask>
      </defs>

      {/* 1. Left Vertical */}
      <line x1="20" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      
      {/* 2. Right Vertical */}
      <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      
      {/* 3. Back Diagonal (Bottom-Left to Top-Right) 
           This one is masked so it appears "behind" the other diagonal. 
      */}
      <line 
        x1="20" y1="80" 
        x2="80" y2="20" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
        mask={`url(#${maskId})`}
      />
      
      {/* 4. Front Diagonal (Top-Left to Bottom-Right) 
           Draws on top (visually) but the gap in the back one emphasizes the depth.
      */}
      <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />

      {/* 5. Dots at vertices */}
      <circle cx="20" cy="20" r="9" fill="currentColor" />
      <circle cx="20" cy="80" r="9" fill="currentColor" />
      <circle cx="80" cy="20" r="9" fill="currentColor" />
      <circle cx="80" cy="80" r="9" fill="currentColor" />
    </svg>
  );
};