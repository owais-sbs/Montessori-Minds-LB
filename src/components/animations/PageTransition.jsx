import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { SMOOTH_EASE } from './animationDefaults'

export default function PageTransition() {
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <Outlet />
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.42, ease: SMOOTH_EASE }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
