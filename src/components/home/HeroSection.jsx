import { Link } from 'react-router-dom'
import { Button } from '../ui'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { images } from '../../data/images'
import { homeHeroBrief } from '../../data/homeBrief'

export default function HeroSection() {
  return (
    <section className="relative -mt-[var(--header-height)] h-svh max-h-svh min-h-[480px] overflow-hidden pt-[var(--header-height)]">
      <img
        src={images.hero}
        alt="Children learning together at Montessori Minds Montessori school in Choueifat"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#132019]/85 via-[#132019]/45 to-[#132019]/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full max-w-[75rem] flex-col justify-end px-[clamp(1rem,4vw,2.5rem)] pb-8 text-warm-cream sm:pb-10">
        <FadeUp delay={0.05} trigger="load" y={24} className="flex max-w-[20rem] flex-col gap-3 sm:max-w-md sm:gap-4">
          <p className="eyebrow eyebrow-on-dark">{homeHeroBrief.eyebrow}</p>
          <h1 className="font-display text-[clamp(1.85rem,8vw,3.5rem)] font-normal leading-[1.02] tracking-tight text-white">
            {homeHeroBrief.titleLine1}
            <br />
            <span className="headline-accent">{homeHeroBrief.titleAccent}</span>
          </h1>
          <p className="text-[0.9rem] font-medium leading-relaxed text-warm-cream/95 sm:text-[0.95rem]">
            {homeHeroBrief.keywordLine}
          </p>
          <p className="text-[0.9rem] leading-relaxed text-warm-cream/92 sm:text-[0.95rem]">
            {homeHeroBrief.description}
          </p>
        </FadeUp>

        <StaggerContainer className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center" delay={0.15} stagger={0.1} trigger="load">
          <StaggerItem>
            <Button to={homeHeroBrief.primaryCta.to} variant="onPhoto" className="!px-6 !py-3">
              {homeHeroBrief.primaryCta.label}
            </Button>
          </StaggerItem>
          <StaggerItem>
            <Link
              to={homeHeroBrief.secondaryCta.to}
              className="inline-flex items-center gap-1 font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-warm-cream/95 transition-colors hover:text-white sm:text-xs"
            >
              {homeHeroBrief.secondaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </StaggerItem>
        </StaggerContainer>

        <FadeUp delay={0.3} trigger="load" className="mt-6 border-t border-warm-cream/25 pt-4">
          <p className="hero-info-bar leading-relaxed">{homeHeroBrief.infoBar}</p>
        </FadeUp>
      </div>
    </section>
  )
}
