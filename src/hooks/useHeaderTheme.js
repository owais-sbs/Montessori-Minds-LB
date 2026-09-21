import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../lib/routes'

export function useHeaderTheme() {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home
  const [solid, setSolid] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      setSolid(true)
      return undefined
    }

    const update = () => {
      setSolid(window.scrollY > 56)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [isHome])

  return { isHome, solid, glass: isHome && !solid }
}
