import { useLayoutEffect } from 'react'
import {
  absoluteUrl,
  defaultSeo,
  getBreadcrumbJsonLd,
  getFaqPageJsonLd,
  getOrganizationJsonLd,
  getWebPageJsonLd,
} from '../lib/seo.js'

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertAlternateLink({ type, href, title }) {
  const selector = `link[rel="alternate"][type="${type}"][href="${href}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('type', type)
    el.setAttribute('href', href)
    if (title) el.setAttribute('title', title)
    document.head.appendChild(el)
  }
}

function upsertDiscoveryHeadLinks() {
  upsertAlternateLink({ type: 'text/plain', href: '/llms.txt', title: 'LLMs.txt' })
  upsertAlternateLink({
    type: 'application/rss+xml',
    href: '/feed.xml',
    title: 'Montessori Minds campus updates',
  })

  if (!document.head.querySelector('link[rel="manifest"]')) {
    const manifest = document.createElement('link')
    manifest.setAttribute('rel', 'manifest')
    manifest.setAttribute('href', '/manifest.json')
    document.head.appendChild(manifest)
  }

  if (!document.head.querySelector('link[rel="icon"][type="image/svg+xml"]')) {
    const icon = document.createElement('link')
    icon.setAttribute('rel', 'icon')
    icon.setAttribute('type', 'image/svg+xml')
    icon.setAttribute('href', '/favicon.svg')
    document.head.insertBefore(icon, document.head.firstChild)
  }

  if (!document.head.querySelector('link[rel="author"][href="/humans.txt"]')) {
    const humans = document.createElement('link')
    humans.setAttribute('rel', 'author')
    humans.setAttribute('type', 'text/plain')
    humans.setAttribute('href', '/humans.txt')
    document.head.appendChild(humans)
  }
}

function upsertJsonLd(id, data) {
  if (!data) {
    const existing = document.getElementById(id)
    if (existing) existing.remove()
    return
  }
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function usePageMeta({
  title,
  description,
  path,
  image,
  breadcrumb,
  faqs,
} = {}) {
  useLayoutEffect(() => {
    const pageTitle = title || defaultSeo.title
    const pageDescription = description || defaultSeo.description
    const pagePath = path ?? '/'
    const pageUrl = absoluteUrl(pagePath)
    const pageImage = image || defaultSeo.image

    document.title = pageTitle

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Montessori Minds',
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_US',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: pageTitle,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: pageDescription,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: pageUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: pageImage,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: pageTitle,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageDescription,
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: pageImage,
    })
    upsertLink('canonical', pageUrl)
    upsertDiscoveryHeadLinks()

    upsertJsonLd('org-jsonld', getOrganizationJsonLd())
    upsertJsonLd(
      'page-jsonld',
      getWebPageJsonLd({ title: pageTitle, description: pageDescription, path: pagePath }),
    )
    upsertJsonLd('breadcrumb-jsonld', getBreadcrumbJsonLd({ path: pagePath, breadcrumb }))
    upsertJsonLd('faq-jsonld', getFaqPageJsonLd(faqs))
  }, [title, description, path, image, breadcrumb, faqs])
}
