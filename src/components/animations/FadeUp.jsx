import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
  DEFAULT_DELAY,
  SCROLL_DURATION,
  DEFAULT_Y_OFFSET,
  SCROLL_VIEWPORT,
  SMOOTH_EASE,
} from './animationDefaults'

export default function FadeUp({
  children,
  className,
  delay = DEFAULT_DELAY,
  duration = SCROLL_DURATION,
  y = DEFAULT_Y_OFFSET,
  x = 0,
  as = 'div',
  trigger = 'view',
  scale = 1,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    ...SCROLL_VIEWPORT,
    amount: typeof SCROLL_VIEWPORT.amount === 'number' ? SCROLL_VIEWPORT.amount : 0.12,
  })
  const [active, setActive] = useState(trigger === 'load')

  useEffect(() => {
    if (trigger === 'load' || prefersReducedMotion) return
    if (isInView) setActive(true)
  }, [isInView, trigger, prefersReducedMotion])

  const Component = motion[as] ?? motion.div

  if (prefersReducedMotion) {
    const StaticTag = as
    return (
      <StaticTag className={className} {...props}>
        {children}
      </StaticTag>
    )
  }

  const initial = { opacity: 0, y, x, scale }
  const visible = { opacity: 1, y: 0, x: 0, scale: 1 }

  const animationProps =
    trigger === 'load'
      ? { initial, animate: visible }
      : { initial, animate: active ? visible : initial }

  return (
    <Component
      ref={ref}
      className={className}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  )
}
