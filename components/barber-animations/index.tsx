import React from 'react';
import BarberPole from './BarberPole';
import FloatingHair from './FloatingHair';

// Create ScissorsAnimation component
const ScissorsAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="scissors-animation">
      {children}
    </div>
  );
};

// Create CombAnimation component
const CombAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="comb-animation">
      {children}
    </div>
  );
};

// Create ShineEffect component
const ShineEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shine-effect">
      {children}
    </div>
  );
};

// Create RazorAnimation component
const RazorAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="razor-animation">
      {children}
    </div>
  );
};

// Create HairdryerAnimation component
const HairdryerAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hairdryer-animation">
      {children}
    </div>
  );
};

// Create PulsingGlow component
const PulsingGlow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pulsing-glow">
      {children}
    </div>
  );
};

export { 
  BarberPole, 
  FloatingHair, 
  ScissorsAnimation, 
  CombAnimation, 
  ShineEffect,
  RazorAnimation,
  HairdryerAnimation,
  PulsingGlow
}; 