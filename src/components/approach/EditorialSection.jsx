import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import { FadeUp, ImageReveal } from '../animations'

export default function EditorialSection({ section, index }) {
  const isReverse = section.reverse ?? index % 2 !== 0

  return (
    <section className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-warm-cream' : 'bg-warm-beige'}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp
            className={`flex flex-col gap-5 ${isReverse ? 'lg:order-2' : ''}`}
          >
            {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
            <h2 className="heading-xl">{section.title}</h2>
            <p className="body-lg">{section.description}</p>
            {section.links?.length > 0 && (
              <ul className="flex flex-col gap-2 pt-1">
                {section.links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="body-sm font-medium text-olive transition-colors hover:text-forest-green"
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
