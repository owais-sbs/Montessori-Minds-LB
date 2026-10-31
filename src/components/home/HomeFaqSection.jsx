import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import { FadeUp } from '../animations'
import { homeFaqPreview } from '../../data/faq.js'
import { ROUTES } from '../../lib/routes'

/** Visible Q&A on the homepage for extractability + FAQPage schema (via RouteMeta). */
export default function HomeFaqSection() {
  const preview = homeFaqPreview

  return (
    <section className="bg-warm-beige py-14 md:py-20" aria-labelledby="home-faq-heading">
      <Container size="narrow">
        <FadeUp className="mb-10">
          <p className="eyebrow">FAQ</p>
          <h2 id="home-faq-heading" className="heading-xl mt-3">
            Questions parents ask before they visit
          </h2>
          <p className="body-md mt-4">
            Short answers about Montessori practice, ages, hours and enrollment at our Choueifat
            campus. Full list on the{' '}
            <Link to={ROUTES.faq} className="underline underline-offset-4 hover:text-accent-rose">
              FAQ page
            </Link>
            .
          </p>
        </FadeUp>

        <div className="flex flex-col gap-8">
          {preview.map((item) => (
            <FadeUp key={item.id} as="article" className="border-b border-deep-forest/10 pb-8 last:border-b-0">
              <h3 className="heading-sm">{item.title}</h3>
              <p className="body-md mt-3 leading-relaxed">{item.body}</p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
