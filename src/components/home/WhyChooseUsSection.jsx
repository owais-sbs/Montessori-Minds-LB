import Container from '../layout/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10 text-olive" aria-hidden="true">
        <circle cx="24" cy="24" r="20" />
        <path d="M16 24l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Authentic Montessori Education',
    description: 'We uphold the highest standards of Montessori practice — ensuring consistency, integrity, and respect for the child at every stage.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10 text-olive" aria-hidden="true">
        <path d="M24 4v4M24 40v4M4 24h4M40 24h4M9 9l3 3M36 36l3 3M9 39l3-3M36 12l3-3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10" />
      </svg>
    ),
    title: 'Nature-Inspired Learning',
    description: 'Our environment connects children with nature — building awareness, calm, and a deep respect for the natural world around them.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10 text-olive" aria-hidden="true">
        <path d="M24 6c-6 0-12 4-12 12 0 6 4 10 8 14l4 6 4-6c4-4 8-8 8-14 0-8-6-12-12-12z" />
        <circle cx="24" cy="18" r="4" />
      </svg>
    ),
    title: 'We Honor Individual Growth',
    description: 'Each child is free to grow at their own pace within a carefully prepared environment that nurtures independence and confidence.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10 text-olive" aria-hidden="true">
        <path d="M12 38V22l12-12 12 12v16" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="19" y="28" width="10" height="10" rx="1" />
      </svg>
    ),
    title: 'A True Learning Community',
    description: 'We view education as a partnership with families. Children thrive when home and school work together in harmony.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-warm-beige py-20 md:py-28">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow">Why La Casa Verde</p>
          <h2 className="heading-xl mt-4">Why Families Choose Us</h2>
          <p className="body-lg mt-4">
            Choosing the right preschool is one of the most important decisions a family makes. Here&apos;s what sets La Casa Verde apart.
          </p>
        </FadeUp>
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-warm-cream p-6 sm:p-8 text-center h-full shadow-sm border border-forest-green/5">
                {feature.icon}
                <h3 className="heading-sm">{feature.title}</h3>
                <p className="body-sm">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
