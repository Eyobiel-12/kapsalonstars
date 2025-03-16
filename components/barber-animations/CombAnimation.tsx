"use client"

interface CombAnimationProps {
  children: React.ReactNode
}

export default function CombAnimation({ children }: CombAnimationProps) {
  return (
    <span className="comb-animation">
      {children}
    </span>
  )
} 