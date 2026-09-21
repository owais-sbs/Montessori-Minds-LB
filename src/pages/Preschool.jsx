import CreamHeroSection from '../components/sections/CreamHeroSection'
import ProgramPageTemplate from '../components/programs/ProgramPageTemplate'
import { childrensHouseProgramPage } from '../data/programPages'
import { preschoolPageSeoIntro } from '../data/sitePages'

export default function Preschool() {
  return (
    <>
      <CreamHeroSection {...preschoolPageSeoIntro} />
      <ProgramPageTemplate content={childrensHouseProgramPage} titleAs="h2" />
    </>
  )
}
