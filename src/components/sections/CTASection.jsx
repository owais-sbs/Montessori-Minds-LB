import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp } from '../animations'

export default function CTASection({
  eyebrow,
  title,
  titleAccent,
  description,
  buttonLabel,
  buttonTo,
  variant = 'beige',
  className = '',
  dark = false,
}) {
  const bgClass = dark ? 'section-dark' : variant === 'beige' ? 'bg-warm-beige' : 'bg-warm-cream'

  return (
    <section className={`py-14 md:py-20 ${bgClass} ${className}`}>
      <Container>
        <FadeUp className="mx-auto flex max-w-xl flex-col items-start gap-5 text-left md:max-w-2xl md:items-center md:text-center">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-snug">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="headline-accent">{titleAccent}</span>
              </>
            )}
          </h2>
          {description && <p className="body-md text-[0.95rem]">{description}</p>}
          {buttonLabel && buttonTo && (
            <Button to={buttonTo} variant={dark ? 'onPhoto' : 'primary'}>
              {buttonLabel}
            </Button>
          )}
        </FadeUp>
      </Container>
    </section>
  )
}
