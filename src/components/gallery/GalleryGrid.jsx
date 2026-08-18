import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Container from '../layout/Container'
import PageHero from '../sections/PageHero'
import GalleryLightbox from './GalleryLightbox'
import { FadeUp } from '../animations'
import { galleryCategories, galleryItems, galleryPage } from '../../data/gallery'
import { images } from '../../data/images'

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex((i) => (i > 0 ? i - 1 : i))
  const goNext = () => setLightboxIndex((i) => (i < filtered.length - 1 ? i + 1 : i))

  return (
    <>
      <PageHero
        eyebrow={galleryPage.hero.eyebrow}
        title={galleryPage.hero.title}
        description={galleryPage.hero.description}
        image={images.gallery.outdoor1}
        imageAlt={galleryPage.hero.imageAlt}
      />
      <section className="bg-warm-beige py-20 md:py-28">
        <Container>
          <div
            className="mb-10 flex flex-wrap gap-2 sm:gap-3"
            role="tablist"
            aria-label="Gallery categories"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                id={`gallery-tab-${cat.id}`}
                aria-selected={activeCategory === cat.id}
                aria-controls="gallery-panel"
                onClick={() => {
                  setActiveCategory(cat.id)
                  setLightboxIndex(null)
                }}
                className={`rounded-full px-4 py-2 font-body text-[0.8125rem] font-medium uppercase tracking-[0.1em] transition-colors sm:px-5 sm:py-2.5 ${
                  activeCategory === cat.id
                    ? 'bg-olive text-white'
                    : 'bg-warm-cream text-forest-green hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            id="gallery-panel"
            role="tabpanel"
            aria-labelledby={`gallery-tab-${activeCategory}`}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3"
          >
            {filtered.map((item, index) => (
              <FadeUp key={item.id} delay={index * 0.04} className="overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="group block w-full"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open image: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </button>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            key={filtered[lightboxIndex]?.id}
            item={filtered[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < filtered.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  )
}
