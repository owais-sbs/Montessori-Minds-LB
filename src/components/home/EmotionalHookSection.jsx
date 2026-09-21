import Container from '../layout/Container'
import { TextLink } from '../ui'
import MontessoriQuote from '../ui/MontessoriQuote'
import { FadeUp } from '../animations'
import { emotionalHook } from '../../data/homeBrief'

export default function EmotionalHookSection() {
  return (
    <section id={emotionalHook.id} className="scroll-mt-[var(--header-height)] bg-warm-cream py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-xl md:max-w-2xl">
          <FadeUp x={-28} className="flex flex-col gap-4 text-left md:gap-5">
            <p className="eyebrow">{emotionalHook.eyebrow}</p>
            <h2 className="font-display text-[clamp(1.65rem,5vw,2.35rem)] font-normal leading-[1.15] text-deep-forest">
              {emotionalHook.title}
            </h2>
            <p className="font-display text-[clamp(1.35rem,4.5vw,1.85rem)] font-normal leading-snug text-deep-forest">
              <span className="headline-accent">{emotionalHook.titleAccent}</span>
            </p>
          </FadeUp>

          <FadeUp x={-24} delay={0.12} className="mt-6 max-w-lg">
            <p className="body-md text-[0.95rem] leading-relaxed md:text-base">{emotionalHook.body}</p>
          </FadeUp>

          <FadeUp x={-20} delay={0.2} className="mt-8">
            <p className="quote-serif text-[clamp(1.25rem,4vw,1.55rem)] text-deep-forest">
              &ldquo;{emotionalHook.callout}&rdquo;
            </p>
          </FadeUp>

          <FadeUp x={-16} delay={0.28} className="mt-8">
            <TextLink to={emotionalHook.cta.to}>{emotionalHook.cta.label}</TextLink>
          </FadeUp>
        </div>

        <MontessoriQuote
          className="mx-auto mt-14 max-w-xl border-t border-deep-forest/10 pt-10 text-left md:text-center"
          text={emotionalHook.quote.text}
          source={emotionalHook.quote.source}
        />
      </Container>
    </section>
  )
}
