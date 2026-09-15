import HeroSection from '../components/home/HeroSection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import PreparedEnvironmentAndProgramsSection from '../components/home/PreparedEnvironmentAndProgramsSection'
import PhilosophySection from '../components/home/PhilosophySection'
import NatureSection from '../components/home/NatureSection'
import IndependenceSection from '../components/home/IndependenceSection'
import HowToEnrollSection from '../components/home/HowToEnrollSection'
import GalleryPreviewSection from '../components/home/GalleryPreviewSection'
import HomeFinalCTASection from '../components/home/HomeFinalCTASection'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Home() {
  usePageMeta(pageSeo.home)

  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <PreparedEnvironmentAndProgramsSection />
      <PhilosophySection />
      <NatureSection />
      <IndependenceSection />
      <HowToEnrollSection />
      <GalleryPreviewSection />
      <HomeFinalCTASection />
    </>
  )
}
