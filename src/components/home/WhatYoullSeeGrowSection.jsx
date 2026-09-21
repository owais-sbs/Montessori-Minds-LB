import Container from '../layout/Container'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { whatYoullSeeGrow } from '../../data/homeBrief'

export default function WhatYoullSeeGrowSection() {
  return (
    <section className="section-dark py-14 md:py-24">
      <Container>
        <FadeUp className="mb-8 max-w-xl text-left md:mx-auto md:mb-10 md:max-w-2xl md:text-center">
          <p className="eyebrow">{whatYoullSeeGrow.eyebrow}</p>
          <h2 className="heading-xl mt-3 text-[clamp(1.5rem,4.5vw,2.35rem)]">
            {whatYoullSeeGrow.title}
            <br />
            <span className="headline-accent">{whatYoullSeeGrow.titleAccent}</span>
          </h2>
        </FadeUp>

        <StaggerContainer
          className="overflow-hidden rounded-2xl border border-warm-cream/15 bg-[#1a3228]/80"
          stagger={0.16}
        >
          {whatYoullSeeGrow.rows.map((row, index) => (
            <StaggerItem key={row.quality}>
              <article
                className={`px-5 py-6 sm:px-6 sm:py-7 ${
                  index < whatYoullSeeGrow.rows.length - 1 ? 'border-b border-warm-cream/12' : ''
                }`}
              >
                <h3 className="font-display text-base italic text-accent-rose sm:text-lg">{row.quality}</h3>
                <p className="mt-2 font-display text-[clamp(1.35rem,4vw,1.65rem)] leading-snug text-white">
                  &ldquo;{row.childVoice}&rdquo;
                </p>
                <p className="body-sm mt-3 !text-warm-cream/72 leading-relaxed">{row.parentBenefit}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MontessoriQuote
          dark
          className="mx-auto mt-12 max-w-xl text-left md:text-center"
          text={whatYoullSeeGrow.quote.text}
          source={whatYoullSeeGrow.quote.source}
        />
      </Container>
    </section>
  )
}
