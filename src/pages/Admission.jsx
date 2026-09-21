import ParentsPageContent from '../components/pages/ParentsPageContent'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'
import { parentsPageContent } from '../data/sitePages'

export default function Admission() {
  usePageMeta({ ...pageSeo.admission, faqs: parentsPageContent.faqs })
  return <ParentsPageContent />
}
