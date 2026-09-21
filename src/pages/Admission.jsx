import ParentsPageContent from '../components/pages/ParentsPageContent'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Admission() {
  usePageMeta(pageSeo.admission)
  return <ParentsPageContent />
}
