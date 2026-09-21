import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../navigation/Navbar'
import Footer from './Footer'
import CallButton from './CallButton'
import MobileStickyCTA from './MobileStickyCTA'
import RouteMeta from './RouteMeta'
import PageTransition from '../animations/PageTransition'
import { ROUTES } from '../../lib/routes'

export default function PublicLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home

  return (
    <div className="flex min-h-svh flex-col">
      <RouteMeta />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        className={`flex-1 pb-24 md:pb-0 ${isHome ? '' : 'pt-[var(--header-height)]'}`}
      >
        <PageTransition />
      </main>
      <Footer />
      <CallButton />
      <MobileStickyCTA />
    </div>
  )
}
