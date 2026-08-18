import { Link } from 'react-router-dom'
import Container from './Container'
import LogoMark from '../ui/LogoMark'
import { footerNavLinks, footerProgramLinks } from '../../data/navigation'
import { contactPlaceholders, site } from '../../data/contact'
import { ROUTES } from '../../lib/routes'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-forest-green/8 bg-warm-beige py-16 md:py-20" aria-label="Site footer">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="flex max-w-xs flex-col gap-4">
            <Link to={ROUTES.home} className="inline-block transition-opacity hover:opacity-80" aria-label="Montessori Minds home">
              <LogoMark size={72} />
            </Link>
            <Link to={ROUTES.home} className="heading-md text-forest-green transition-colors hover:text-olive">
              {site.name}
            </Link>
            <p className="body-sm">{site.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="eyebrow mb-4">Navigation</h2>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="body-sm transition-colors hover:text-forest-green">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programs">
            <h2 className="eyebrow mb-4">Programs</h2>
            <ul className="flex flex-col gap-2">
              {footerProgramLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="body-sm transition-colors hover:text-forest-green">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-4">Contact</h2>
            <address className="body-sm flex flex-col gap-2 not-italic">
              <p>{contactPlaceholders.address}</p>
              <a href={`mailto:${contactPlaceholders.email}`} className="transition-colors hover:text-forest-green">{contactPlaceholders.email}</a>
              <a href={`tel:${contactPlaceholders.phone}`} className="transition-colors hover:text-forest-green">{contactPlaceholders.phone}</a>
            </address>
            <div className="mt-6 flex items-center gap-4" aria-label="Social links">
              <a href={contactPlaceholders.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-text transition-colors hover:text-forest-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={contactPlaceholders.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-text transition-colors hover:text-forest-green">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-forest-green/8 pt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="body-sm">&copy; {currentYear} {site.name}. All rights reserved.</p>
          <a href="https://onepathsolutions.com/" target="_blank" rel="noopener noreferrer" className="body-sm text-muted-text transition-colors hover:text-forest-green">
            Website by One Path Solution.
          </a>
        </div>
      </Container>
    </footer>
  )
}
