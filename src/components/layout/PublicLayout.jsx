import { Outlet } from 'react-router-dom'
import Navbar from '../navigation/Navbar'
import Footer from './Footer'
import PageTransition from '../animations/PageTransition'

export default function PublicLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition />
      </main>
      <Footer />
    </div>
  )
}
