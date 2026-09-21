import { useEffect } from 'react'
import { absoluteUrl, defaultSeo, getWebPageJsonLd } from '../lib/seo'

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

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function usePageMeta({ title, description, path, image } = {}) {
  useEffect(() => {
    const pageTitle = title || defaultSeo.title
    const pageDescription = description || defaultSeo.description
    const pageUrl = absoluteUrl(path || '/')
    const pageImage = image || defaultSeo.image

    document.title = pageTitle

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
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

    if (path) {
      upsertJsonLd(
        'page-jsonld',
        getWebPageJsonLd({ title: pageTitle, description: pageDescription, path }),
      )
    }
  }, [title, description, path, image])
}
