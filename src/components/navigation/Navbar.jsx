import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import { Button } from '../ui'
import { primaryNavLinks } from '../../data/navigation'
import { ROUTES } from '../../lib/routes'
import { LOGO_SRC } from '../../data/branding'
import { site } from '../../data/contact'
import { useEffect, useId, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-deep-forest">
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

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap font-body text-[0.625rem] font-medium uppercase tracking-[0.1em] transition-colors xl:text-[0.6875rem] xl:tracking-[0.12em] ${
      isActive ? 'text-accent-rose' : 'text-deep-forest hover:text-accent-rose'
    }`

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-deep-forest/8 bg-white/96 text-deep-forest shadow-sm backdrop-blur-xl"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-3 lg:gap-4">
        <Link
          to={ROUTES.home}
          className="shrink-0 py-1 transition-opacity hover:opacity-85"
          aria-label={`${site.name} by ${site.subtitle} — home`}
        >
          <img
            src={LOGO_SRC}
            alt=""
            className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-[3.75rem] lg:w-[3.75rem]"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex xl:gap-4"
          aria-label="Primary navigation"
        >
          <ul className="flex max-w-full flex-nowrap items-center gap-x-2.5 xl:gap-x-3.5">
            {primaryNavLinks.map(({ label, to }) => (
              <li key={to} className="shrink-0">
                <NavLink to={to} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button
            to={ROUTES.bookATour}
            variant="primary"
            className="!px-4 !py-2.5 !text-[0.65rem] xl:!px-5 xl:!text-[0.7rem]"
            showArrow={false}
          >
            Book a visit
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-deep-forest transition-colors hover:bg-deep-forest/6 lg:hidden"
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
            className="overflow-hidden border-b border-deep-forest/8 bg-white lg:hidden"
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
                        `button-text text-base transition-colors ${isActive ? 'text-accent-rose' : 'text-deep-forest hover:text-accent-rose'}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Button to={ROUTES.bookATour} variant="primary" className="self-start">
                Book a visit
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
