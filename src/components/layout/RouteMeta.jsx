import { useLocation } from 'react-router-dom'
import usePageMeta from '../../hooks/usePageMeta'
import { getSeoForPathname } from '../../lib/getRouteSeo'

/** Single source of truth: updates document head on every route change. */
export default function RouteMeta() {
  const { pathname } = useLocation()
  const seo = getSeoForPathname(pathname)
  usePageMeta(seo)
  return null
}
