"use client"

interface ShineEffectProps {
  children: React.ReactNode
}

export default function ShineEffect({ children }: ShineEffectProps) {
  return (
    <div className="shine-container">
      {children}
      <div className="shine-effect"></div>
    </div>
  )
} 