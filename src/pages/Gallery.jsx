import EnvironmentPageContent from '../components/pages/EnvironmentPageContent'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Gallery() {
  usePageMeta(pageSeo.gallery)
  return <EnvironmentPageContent />
}
