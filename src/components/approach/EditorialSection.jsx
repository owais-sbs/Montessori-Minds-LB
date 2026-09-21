import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import { FadeUp, ImageReveal } from '../animations'

export default function EditorialSection({ section, index }) {
  const isReverse = section.reverse ?? index % 2 !== 0

  return (
    <section className={`py-14 md:py-20 ${index % 2 === 0 ? 'bg-warm-cream' : 'section-dark'}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp
            x={-22}
            className={`flex max-w-lg flex-col gap-4 ${isReverse ? 'lg:order-2' : ''}`}
          >
            {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-snug text-deep-forest">{section.title}</h2>
            <p className="body-md text-[0.95rem] leading-relaxed">{section.description}</p>
            {section.links?.length > 0 && (
              <ul className="flex flex-col gap-2 pt-1">
                {section.links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`body-sm font-medium transition-colors ${
                        index % 2 !== 0
                          ? 'text-accent-rose hover:text-warm-cream'
                          : 'text-deep-forest hover:text-accent-rose'
                      }`}
                    >
                      {label} →
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </FadeUp>
          <FadeUp
            delay={0.1}
            className={`overflow-hidden rounded-3xl ${isReverse ? 'lg:order-1' : ''}`}
          >
            <ImageReveal>
              <img
                src={section.image}
                alt={section.imageAlt || section.title}
                className="aspect-[4/3] w-full rounded-3xl object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </ImageReveal>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
