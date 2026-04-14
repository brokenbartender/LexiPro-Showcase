import React from 'react';

export const LexiProLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lightning Bolt / Circuit Shape */}
    <path 
      d="M40 10 L75 10 L55 45 L85 45 L40 90 L50 55 L20 55 Z" 
      fill="white" 
      className="opacity-10"
    />
    <path 
      d="M75 45 L40 90 L50 55 L25 55 L55 10 L75 10 L55 45 Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinejoin="round"
      className="text-primary"
    />
    
    {/* Circle with L */}
    <circle cx="45" cy="45" r="18" stroke="currentColor" strokeWidth="2.5" className="text-primary" fill="var(--color-surface)" />
    <path 
      d="M40 35 V55 H52" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-primary"
    />
    
    {/* Circuitry Nodes */}
    <circle cx="70" cy="25" r="1.5" fill="currentColor" className="text-primary" />
    <circle cx="80" cy="45" r="1.5" fill="currentColor" className="text-primary" />
    <circle cx="60" cy="65" r="1.5" fill="currentColor" className="text-primary" />
    
    <path d="M55 25 H70" stroke="currentColor" strokeWidth="0.5" className="text-primary opacity-50" />
    <path d="M63 45 H80" stroke="currentColor" strokeWidth="0.5" className="text-primary opacity-50" />
    <path d="M50 65 H60" stroke="currentColor" strokeWidth="0.5" className="text-primary opacity-50" />
  </svg>
);
