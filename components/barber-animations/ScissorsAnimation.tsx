"use client"

interface ScissorsAnimationProps {
  children: React.ReactNode
}

export default function ScissorsAnimation({ children }: ScissorsAnimationProps) {
  return (
    <span className="scissors-animation">
      {children}
    </span>
  )
} 