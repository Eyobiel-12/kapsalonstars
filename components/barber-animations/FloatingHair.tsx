"use client"

import { useEffect, useState, useMemo, memo } from 'react'

interface FloatingHairProps {
  count?: number
}

// Memoize individual hair strand component for better performance
const HairStrand = memo(({ style }: { style: React.CSSProperties }) => (
  <div className="hair-strand" style={style}></div>
));
HairStrand.displayName = 'HairStrand';

export default function FloatingHair({ count = 10 }: FloatingHairProps) {
  const [mounted, setMounted] = useState(false);
  
  // Generate strand styles once on component mount
  const hairStrands = useMemo(() => {
    const strands = [];
    // Use fewer strands for better performance
    const actualCount = Math.min(count, 15);
    
    for (let i = 0; i < actualCount; i++) {
      strands.push({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 12 + 5}px`,
          backgroundColor: Math.random() > 0.7 ? '#8B4513' : '#000',
          opacity: Math.random() * 0.4 + 0.1,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          // Use transform3d to enable GPU acceleration
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        },
      });
    }
    return strands;
  }, [count]);

  // Delay animation until component is mounted
  useEffect(() => {
    // Use requestAnimationFrame to ensure smooth animation
    const animationFrame = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  if (!mounted) {
    return null;
  }

  return (
    <div className="floating-hair">
      {hairStrands.map((strand) => (
        <HairStrand key={strand.id} style={strand.style} />
      ))}
    </div>
  );
} 