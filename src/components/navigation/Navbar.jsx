import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import Container from '../layout/Container'
import { Button } from '../ui'
import { primaryNavLinks } from '../../data/navigation'
import { ROUTES } from '../../lib/routes'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef(null)
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-forest-green/8 bg-warm-cream/92 backdrop-blur-md"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Container className="flex h-[5.5rem] items-center justify-between gap-6">
        <Link to={ROUTES.home} className="shrink-0 transition-opacity hover:opacity-80 p-1" aria-label="Montessori Minds LB home">
          <img src="/images/branding/logo.svg" alt="Montessori Minds LB logo" className="h-20 w-20 sm:h-24 sm:w-24" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          <ul className="flex items-center gap-6">
            {primaryNavLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `button-text transition-colors ${isActive ? 'text-olive' : 'text-forest-green hover:text-olive'}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to={ROUTES.bookATour} variant="primary">
            Book A Tour
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest-green transition-colors hover:bg-forest-green/6 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id={menuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-b border-forest-green/8 bg-warm-cream lg:hidden"
            aria-label="Mobile navigation"
          >
            <Container className="flex flex-col gap-8 py-8">
              <ul className="flex flex-col gap-5">
                {primaryNavLinks.map(({ label, to }, index) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `button-text text-base transition-colors ${isActive ? 'text-olive' : 'text-forest-green hover:text-olive'}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Button to={ROUTES.bookATour} variant="primary" className="self-start">
                Book A Tour
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
