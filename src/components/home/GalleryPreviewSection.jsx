import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { FadeUp, StaggerContainer, StaggerItem } from '../animations'
import { galleryPreviewItems } from '../../data/gallery'
import { homeGalleryPreview } from '../../data/home'

export default function GalleryPreviewSection() {
  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={homeGalleryPreview.eyebrow}
          title={homeGalleryPreview.title}
          description={homeGalleryPreview.description}
          className="mb-12 md:mb-16"
        />
        <StaggerContainer
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-4"
          stagger={0.06}
        >
          {galleryPreviewItems.map((item) => (
            <StaggerItem
              key={item.id}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105 motion-reduce:transform-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-10 text-center">
          <Link
            to={homeGalleryPreview.linkTo}
            className="inline-flex items-center gap-2 font-body text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-forest-green transition-colors hover:text-olive"
          >
            {homeGalleryPreview.linkLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
