import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DEFAULT_DURATION, SCROLL_VIEWPORT, SCROLL_STAGGER } from './animationDefaults'

export default function StaggerContainer({
  children,
  className,
  stagger = SCROLL_STAGGER,
  delay = 0,
  as = 'div',
  trigger = 'view',
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, SCROLL_VIEWPORT)
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

  const animationProps =
    trigger === 'load'
      ? { initial: 'hidden', animate: 'visible' }
      : { initial: 'hidden', animate: active ? 'visible' : 'hidden' }

  return (
    <Component
      ref={ref}
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
