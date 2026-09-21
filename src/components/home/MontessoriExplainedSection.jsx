import Container from '../layout/Container'
import { Button } from '../ui'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { montessoriExplained } from '../../data/homeBrief'

export default function MontessoriExplainedSection() {
  return (
    <section className="bg-warm-cream py-14 md:py-24">
      <Container size="narrow">
        <FadeUp x={-24} className="max-w-lg text-left">
          <p className="eyebrow">{montessoriExplained.eyebrow}</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,4.5vw,2.1rem)] font-normal leading-snug text-deep-forest">
            {montessoriExplained.title}
            <br />
            <span className="headline-accent">{montessoriExplained.titleAccent}</span>
          </h2>
        </FadeUp>

        <FadeUp x={-20} delay={0.1} className="mt-6 max-w-lg">
          <p className="body-md text-[0.95rem] leading-relaxed">{montessoriExplained.description}</p>
        </FadeUp>

        <FadeUp delay={0.18} className="mt-8">
          <Button to={montessoriExplained.cta.to} variant="primary">
            {montessoriExplained.cta.label}
          </Button>
        </FadeUp>

        <StaggerContainer className="numbered-list-panel mt-10 overflow-hidden bg-white/60" stagger={0.12}>
          {montessoriExplained.steps.map((step, index) => (
            <StaggerItem key={step.label}>
              <div className="flex items-center justify-between gap-4 border-b border-deep-forest/8 px-4 py-4 last:border-b-0 sm:px-5 sm:py-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-body text-[0.65rem] font-medium uppercase tracking-[0.16em] text-accent-rose">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl text-deep-forest sm:text-2xl">{step.label}</h3>
                </div>
                <span className="max-w-[9rem] text-right font-body text-xs leading-snug text-muted-text sm:max-w-none sm:text-sm">
                  {step.prompt}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MontessoriQuote
          className="mt-12 max-w-xl text-left"
          text={montessoriExplained.quote.text}
          source={montessoriExplained.quote.source}
        />
      </Container>
    </section>
  )
}
