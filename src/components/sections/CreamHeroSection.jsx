import Container from '../layout/Container'
import { FadeUp } from '../animations'

export default function CreamHeroSection({ eyebrow, title, titleAccent, description, className = '' }) {
  return (
    <section className={`bg-warm-cream py-12 md:py-16 ${className}`}>
      <Container>
        <FadeUp x={-24} className="max-w-xl text-left md:max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-normal leading-[1.1] text-deep-forest">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="headline-accent">{titleAccent}</span>
              </>
            )}
          </h1>
          {description && <p className="body-md mt-5 max-w-lg text-[0.95rem] leading-relaxed">{description}</p>}
        </FadeUp>
      </Container>
    </section>
  )
}
