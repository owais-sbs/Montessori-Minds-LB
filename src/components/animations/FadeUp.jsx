import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_VIEWPORT_AMOUNT,
  DEFAULT_Y_OFFSET,
  SMOOTH_EASE,
} from './animationDefaults'

export default function FadeUp({
  children,
  className,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  once = true,
  y = DEFAULT_Y_OFFSET,
  as = 'div',
  trigger = 'view',
  scale = 1,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (prefersReducedMotion) {
    const StaticTag = as
    return (
      <StaticTag className={className} {...props}>
        {children}
      </StaticTag>
    )
  }

  const initial = { opacity: 0, y, scale }
  const visible = { opacity: 1, y: 0, scale: 1 }

  const animationProps =
    trigger === 'load'
      ? { initial, animate: visible }
      : {
          initial,
          whileInView: visible,
          viewport: { once, amount: DEFAULT_VIEWPORT_AMOUNT },
        }

  return (
    <Component
      className={className}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  )
}
