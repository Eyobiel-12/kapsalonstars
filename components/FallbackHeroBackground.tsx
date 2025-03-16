import React from 'react';

export default function FallbackHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('/salon-interior.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      
      {/* Animated subtle gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-x"></div>
    </div>
  );
} 