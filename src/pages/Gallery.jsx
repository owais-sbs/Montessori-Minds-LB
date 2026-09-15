import GalleryGrid from '../components/gallery/GalleryGrid'
import usePageMeta from '../hooks/usePageMeta'
import { pageSeo } from '../lib/seo'

export default function Gallery() {
  usePageMeta(pageSeo.gallery)

  return <GalleryGrid />
}
