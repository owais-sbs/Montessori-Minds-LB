import CreamHeroSection from '../components/sections/CreamHeroSection'
import ProgramPageTemplate from '../components/programs/ProgramPageTemplate'
import { childrensHouseProgramPage, preschoolFaqs } from '../data/programPages'
import { preschoolPageSeoIntro } from '../data/sitePages'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Preschool() {
  usePageMeta({ ...pageSeo.preschool, faqs: preschoolFaqs })

  return (
    <>
      <CreamHeroSection {...preschoolPageSeoIntro} />
      <ProgramPageTemplate content={childrensHouseProgramPage} titleAs="h2" />
    </>
  )
}
