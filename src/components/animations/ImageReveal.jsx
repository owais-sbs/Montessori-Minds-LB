import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { SCROLL_DURATION, SCROLL_VIEWPORT, SMOOTH_EASE } from './animationDefaults'

export default function ImageReveal({
  children,
  className = '',
  delay = 0,
  duration = SCROLL_DURATION,
  trigger = 'view',
}) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, SCROLL_VIEWPORT)
  const [active, setActive] = useState(trigger === 'load')

  useEffect(() => {
    if (trigger === 'load' || prefersReducedMotion) return
    if (isInView) setActive(true)
  }, [isInView, trigger, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const initial = { opacity: 0, scale: 1.05, y: 10 }
  const visible = { opacity: 1, scale: 1, y: 0 }

  const animationProps =
    trigger === 'load'
      ? { initial, animate: visible }
      : { initial, animate: active ? visible : initial }

  return (
    <motion.div
      ref={ref}
      className={className}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      {...animationProps}
    >
      {children}
    </motion.div>
  )
}
