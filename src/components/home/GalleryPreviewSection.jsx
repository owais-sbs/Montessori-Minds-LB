import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import { TextLink } from '../ui'
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
          <TextLink to={homeGalleryPreview.linkTo}>{homeGalleryPreview.linkLabel}</TextLink>
        </div>
      </Container>
    </section>
  )
}
