"use client"

import { useEffect, useRef } from 'react'

interface DynamicGradientBackgroundProps {
  className?: string;
}

export default function DynamicGradientBackground({ className = '' }: DynamicGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    // Barber shop color palette (adjust these to match your brand colors)
    const colors = [
      { r: 30, g: 30, b: 40 },     // Dark blue-black
      { r: 180, g: 50, b: 50 },    // Deep red
      { r: 50, g: 50, b: 70 },     // Navy blue
      { r: 30, g: 30, b: 30 }      // Almost black
    ];
    
    let gradientPositions = Array(colors.length).fill(0).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1
    }));
    
    // Create and animate the gradient
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Move gradient positions
      gradientPositions = gradientPositions.map(pos => {
        // Move position
        pos.x += pos.vx;
        pos.y += pos.vy;
        
        // Bounce off walls
        if (pos.x < 0 || pos.x > canvas.width) pos.vx *= -1;
        if (pos.y < 0 || pos.y > canvas.height) pos.vy *= -1;
        
        return pos;
      });
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        gradientPositions[0].x, gradientPositions[0].y, 0,
        gradientPositions[1].x, gradientPositions[1].y, canvas.width * 0.8
      );
      
      // Add color stops
      colors.forEach((color, i) => {
        const stop = i / (colors.length - 1);
        gradient.addColorStop(stop, `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`);
      });
      
      // Apply gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full -z-10 ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
} 