import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DEFAULT_DURATION } from './animationDefaults'

export default function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  as = 'div',
  trigger = 'view',
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

  const animationProps =
    trigger === 'load'
      ? {
          initial: 'hidden',
          animate: 'visible',
        }
      : {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once, amount: 0.15 },
        }

  return (
    <Component
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export { DEFAULT_DURATION as STAGGER_ITEM_DURATION }
