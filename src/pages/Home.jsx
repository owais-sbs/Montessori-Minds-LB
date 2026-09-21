import HeroSection from '../components/home/HeroSection'
import EmotionalHookSection from '../components/home/EmotionalHookSection'
import WhatYoullSeeGrowSection from '../components/home/WhatYoullSeeGrowSection'
import MontessoriExplainedSection from '../components/home/MontessoriExplainedSection'
import DayInTheirWorldSection from '../components/home/DayInTheirWorldSection'
import HomeProgramsSection from '../components/home/HomeProgramsSection'
import LanguagesSection from '../components/home/LanguagesSection'
import EnvironmentSection from '../components/home/EnvironmentSection'
import OurPeopleSection from '../components/home/OurPeopleSection'
import SocialProofSection from '../components/home/SocialProofSection'
import FinalConversionSection from '../components/home/FinalConversionSection'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Home() {
  usePageMeta(pageSeo.home)

  return (
    <>
      <HeroSection />
      <EmotionalHookSection />
      <WhatYoullSeeGrowSection />
      <MontessoriExplainedSection />
      <DayInTheirWorldSection />
      <HomeProgramsSection />
      <LanguagesSection />
      <EnvironmentSection />
      <OurPeopleSection />
      <SocialProofSection />
      <FinalConversionSection />
    </>
  )
}
