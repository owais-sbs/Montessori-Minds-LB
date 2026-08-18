import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DEFAULT_DURATION, DEFAULT_Y_OFFSET, SMOOTH_EASE } from './animationDefaults'

export default function StaggerItem({
  children,
  className,
  duration = DEFAULT_DURATION,
  y = DEFAULT_Y_OFFSET,
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
      variants={{
        hidden: { opacity: 0, y, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration, ease: SMOOTH_EASE },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
