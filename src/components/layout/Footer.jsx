import { Link } from 'react-router-dom'
import Container from './Container'
import { contactPlaceholders, site } from '../../data/contact'
import { ROUTES } from '../../lib/routes'
import { LOGO_SRC } from '../../data/branding'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-footer-green py-16 text-warm-cream md:py-20" aria-label="Site footer">
      <Container>
        <div className="flex max-w-md flex-col gap-4 border-b border-warm-cream/12 pb-10">
          <Link to={ROUTES.home} className="inline-flex items-center gap-3 transition-opacity hover:opacity-85" aria-label={`${site.name} home`}>
            <img src={LOGO_SRC} alt="" className="h-14 w-14 object-contain" />
            <div>
              <p className="font-display text-xl">{site.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-warm-cream/65">{site.subtitle}</p>
            </div>
          </Link>
          <p className="body-sm !text-warm-cream/75">{site.tagline}</p>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="eyebrow eyebrow-on-dark mb-4">Visit us</h2>
            <address className="body-md flex flex-col gap-3 not-italic !text-warm-cream/85">
              <p>{contactPlaceholders.address}</p>
              <p>{contactPlaceholders.hours}</p>
            </address>
          </div>

          <div>
            <h2 className="eyebrow eyebrow-on-dark mb-4">Talk to us</h2>
            <div className="body-md flex flex-col gap-3 !text-warm-cream/85">
              <a href={`tel:${contactPlaceholders.phoneRaw}`} className="transition-opacity hover:opacity-100 hover:text-white">
                {contactPlaceholders.phone}
              </a>
              <a href={`mailto:${contactPlaceholders.email}`} className="break-all transition-opacity hover:opacity-100 hover:text-white">
                {contactPlaceholders.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-warm-cream/12 pt-8 sm:flex-row sm:items-center">
          <p className="body-sm !text-warm-cream/60">&copy; {currentYear} {site.name}. All rights reserved.</p>
          <a
            href="https://onepathsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="body-sm !text-warm-cream/50 transition-colors hover:text-warm-cream"
          >
            Website by One Path Solution.
          </a>
        </div>
      </Container>
    </footer>
  )
}
