import { useEffect, useCallback, useRef } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function GalleryLightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const closeButtonRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && hasPrev) onPrev()
      if (event.key === 'ArrowRight' && hasNext) onNext()
    },
    [onClose, onPrev, onNext, hasPrev, hasNext],
  )

  useEffect(() => {
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (!item) return null

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }

  const contentMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
      }

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-forest-green/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${item.title}`}
      {...motionProps}
    >
      <motion.div
        className="relative max-h-[90vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        {...contentMotionProps}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="mx-auto max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
        />
        <p className="mt-4 text-center body-sm text-warm-cream/80">{item.title}</p>
      </motion.div>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8 sm:h-12 sm:w-12"
          aria-label="Previous image"
        >
          ←
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:h-12 sm:w-12"
          aria-label="Next image"
        >
          →
        </button>
      )}
    </motion.div>
  )
}
