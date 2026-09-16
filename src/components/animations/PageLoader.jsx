import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { SMOOTH_EASE } from './animationDefaults'

const LOGO_SRC = '/images/branding/La casa verde logo2.png'
const MIN_VISIBLE_MS = 1200
const EXIT_MS = 650

export default function PageLoader() {
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(() => (prefersReducedMotion ? 'done' : 'show'))
  const startedRef = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase('done')
      document.body.style.overflow = ''
      return undefined
    }

    if (startedRef.current) return undefined
    startedRef.current = true

    document.body.style.overflow = 'hidden'

    const exitTimer = window.setTimeout(() => setPhase('exit'), MIN_VISIBLE_MS)
    const doneTimer = window.setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, MIN_VISIBLE_MS + EXIT_MS)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
    }
  }, [prefersReducedMotion])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-warm-cream"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: SMOOTH_EASE }}
          aria-busy={phase === 'show'}
          aria-live="polite"
          role="status"
        >
          <span className="sr-only">Loading La Casa Verde</span>

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(104,115,74,0.14) 0%, transparent 70%), linear-gradient(180deg, #f7f4ec 0%, #e9e2d3 100%)',
            }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-5 px-6 text-center"
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={
              phase === 'exit'
                ? { opacity: 0, y: -12, scale: 1.02 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.7, ease: SMOOTH_EASE }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: SMOOTH_EASE }}
            >
              <motion.span
                className="absolute -inset-4 rounded-full border border-olive/25"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: [0, 0.7, 0], scale: [0.9, 1.12, 1.2] }}
                transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity, repeatDelay: 0.15 }}
              />
              <img
                src={LOGO_SRC}
                alt=""
                className="relative h-28 w-28 object-contain sm:h-32 sm:w-32"
                draggable={false}
              />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <motion.p
                className="font-display text-2xl font-medium tracking-tight text-forest-green sm:text-3xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.55, ease: SMOOTH_EASE }}
              >
                La Casa Verde
              </motion.p>
              <motion.p
                className="eyebrow !text-soft-olive"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.5 }}
              >
                By Montessori Minds
              </motion.p>
            </div>

            <motion.div
              className="mt-2 h-[2px] w-28 overflow-hidden rounded-full bg-forest-green/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <motion.div
                className="h-full rounded-full bg-olive"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.05,
                  ease: SMOOTH_EASE,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                style={{ width: '55%' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
