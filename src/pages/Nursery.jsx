import CreamHeroSection from '../components/sections/CreamHeroSection'
import ProgramPageTemplate from '../components/programs/ProgramPageTemplate'
import { infantProgramPage, toddlerProgramPage } from '../data/programPages'
import { nurseryPageSeoIntro } from '../data/sitePages'

export default function Nursery() {
  return (
    <>
      <CreamHeroSection {...nurseryPageSeoIntro} />
      <ProgramPageTemplate content={infantProgramPage} titleAs="h2" />
      <ProgramPageTemplate content={toddlerProgramPage} titleAs="h2" />
    </>
  )
}
