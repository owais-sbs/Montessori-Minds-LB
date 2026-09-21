import OurApproachPageContent from '../components/pages/OurApproachPageContent'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function OurApproach() {
  usePageMeta(pageSeo.ourApproach)
  return <OurApproachPageContent />
}
