import Container from '../layout/Container'
import { Button } from '../ui'
import { FadeUp } from '../animations'

export default function CTASection({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonTo,
  variant = 'beige',
  className = '',
}) {
  const bgClass = variant === 'beige' ? 'bg-warm-beige' : 'bg-warm-cream'

  return (
    <section className={`py-20 md:py-28 ${bgClass} ${className}`}>
      <Container>
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="heading-xl">{title}</h2>
          {description && <p className="body-lg">{description}</p>}
          {buttonLabel && buttonTo && (
            <Button to={buttonTo} variant="primary">
              {buttonLabel}
            </Button>
          )}
        </FadeUp>
      </Container>
    </section>
  )
}
