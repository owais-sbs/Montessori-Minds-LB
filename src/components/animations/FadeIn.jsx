import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_VIEWPORT_AMOUNT,
} from './animationDefaults'

export default function FadeIn({
  children,
  className,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  once = true,
  as = 'div',
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

  return (
    <Component
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount: DEFAULT_VIEWPORT_AMOUNT }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}
