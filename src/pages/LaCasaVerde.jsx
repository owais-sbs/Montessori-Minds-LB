import AboutPageContent from '../components/pages/AboutPageContent'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function LaCasaVerde() {
  usePageMeta(pageSeo.laCasaVerde)
  return <AboutPageContent />
}
