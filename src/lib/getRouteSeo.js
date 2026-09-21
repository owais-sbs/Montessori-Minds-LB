import { pageSeo } from './seoPages.js'
import { ROUTES } from './routes.js'
import { nurseryFaqs, preschoolFaqs } from '../data/programPages.js'
import { parentsPageContent } from '../data/sitePages.js'

const SEO_BY_PATH = {
  [ROUTES.home]: pageSeo.home,
  [ROUTES.laCasaVerde]: pageSeo.laCasaVerde,
  [ROUTES.preschool]: { ...pageSeo.preschool, faqs: preschoolFaqs },
  [ROUTES.nursery]: { ...pageSeo.nursery, faqs: nurseryFaqs },
  [ROUTES.ourApproach]: pageSeo.ourApproach,
  [ROUTES.programs]: pageSeo.programs,
  [ROUTES.admission]: { ...pageSeo.admission, faqs: parentsPageContent.faqs },
  [ROUTES.gallery]: pageSeo.gallery,
  [ROUTES.bookATour]: pageSeo.bookATour,
}

/** Resolve SEO config from the current URL path (trailing slash tolerant). */
export function getSeoForPathname(pathname) {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return SEO_BY_PATH[normalized] ?? pageSeo.home
}
