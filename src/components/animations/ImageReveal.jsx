import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { SMOOTH_EASE } from './animationDefaults'

export default function ImageReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.9,
  trigger = 'view',
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const animationProps =
    trigger === 'load'
      ? {
          initial: { opacity: 0, scale: 1.05, y: 10 },
          animate: { opacity: 1, scale: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, scale: 1.05, y: 10 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once, amount: 0.1 },
        }

  return (
    <motion.div
      className={className}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      {...animationProps}
    >
      {children}
    </motion.div>
  )
}
