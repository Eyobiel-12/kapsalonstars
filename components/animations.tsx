import { motion } from "framer-motion"
import { ReactNode } from "react"

// Fade in animation
export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "" }: { 
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Slide up animation
export const SlideUp = ({ children, delay = 0, duration = 0.5, className = "" }: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Staggered children animation
export const StaggerContainer = ({ children, staggerChildren = 0.1, delayChildren = 0, className = "" }: {
  children: ReactNode
  staggerChildren?: number
  delayChildren?: number
  className?: string
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren,
          delayChildren
        }
      }
    }}
    initial="hidden"
    animate="show"
    className={className}
  >
    {children}
  </motion.div>
)

// Child item for staggered animations
export const StaggerItem = ({ children, className = "" }: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Hover scale animation
export const HoverScale = ({ children, scale = 1.05, className = "" }: {
  children: ReactNode
  scale?: number
  className?: string
}) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className={className}
  >
    {children}
  </motion.div>
) 