import { Button } from '../ui'
import { FadeUp, ImageReveal, StaggerContainer, StaggerItem } from '../animations'
import { images } from '../../data/images'
import { homeHero } from '../../data/home'

export default function HeroSection() {
  return (
    <section className="relative bg-warm-cream overflow-hidden">
      <div className="mx-auto max-w-[75rem] px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="grid min-h-[calc(100svh-6.5rem)] items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ── Left content ── */}
          <div className="flex flex-col gap-6 py-12 sm:py-16 lg:py-20">

            {/* Eyebrow */}
            <FadeUp delay={0.05} trigger="load">
              <p className="eyebrow">{homeHero.eyebrow}</p>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={0.15} trigger="load">
              <h1 className="display-xl">
                {homeHero.title}
                <br />
                {homeHero.titleLine2}
              </h1>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.28} trigger="load">
              <p className="body-lg max-w-md text-muted-text">
                {homeHero.description}
              </p>
            </FadeUp>

            {/* CTA buttons */}
            <StaggerContainer
              className="flex flex-wrap gap-3 sm:gap-4 pt-2"
              delay={0.4}
              stagger={0.1}
              trigger="load"
            >
              <StaggerItem>
                <Button to={homeHero.primaryButton.to} variant="primary">
                  {homeHero.primaryButton.label}
                </Button>
              </StaggerItem>
              <StaggerItem>
                <Button to={homeHero.secondaryButton.to} variant="outline">
                  {homeHero.secondaryButton.label}
                </Button>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* ── Right image ── */}
          <div className="relative overflow-hidden rounded-3xl lg:rounded-bl-[3rem] lg:self-stretch">
            <ImageReveal
              className="h-full w-full"
              delay={0.25}
              duration={1}
              trigger="load"
            >
              <img
                src={images.hero}
                alt={homeHero.imageAlt}
                className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </ImageReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
