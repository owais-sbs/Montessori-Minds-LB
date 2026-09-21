import CreamHeroSection from '../components/sections/CreamHeroSection'
import ProgramPageTemplate from '../components/programs/ProgramPageTemplate'
import { infantProgramPage, toddlerProgramPage, nurseryFaqs } from '../data/programPages'
import { nurseryPageSeoIntro } from '../data/sitePages'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Nursery() {
  usePageMeta({ ...pageSeo.nursery, faqs: nurseryFaqs })

  return (
    <>
      <CreamHeroSection {...nurseryPageSeoIntro} />
      <ProgramPageTemplate content={infantProgramPage} titleAs="h2" />
      <ProgramPageTemplate content={toddlerProgramPage} titleAs="h2" />
    </>
  )
}
