import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALL_PAGE_SEO, absoluteUrl } from '../src/lib/seoPages.js'
import { getCrawlableBodyHtml } from '../src/lib/crawlableBody.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '../dist')
const templatePath = path.join(distDir, 'index.html')

const CRAWL_MARKER = '<!-- crawl-body -->'

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function injectPageHead(html, { title, description, path: routePath, image }) {
  const pageUrl = absoluteUrl(routePath)
  const pageTitle = escapeAttr(title)
  const pageDescription = escapeAttr(description)
  const pageImage = escapeAttr(image)

  let out = html
  out = out.replace(/<html lang="[^"]*"/, '<html lang="en"')
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`)
  out = out.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${pageDescription}"`,
  )
  out = out.replace(
    /<meta http-equiv="content-language" content="[^"]*"/,
    '<meta http-equiv="content-language" content="en"',
  )
  out = out.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${pageUrl}"`,
  )
  out = out.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${pageUrl}"`,
  )
  out = out.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${pageTitle}"`,
  )
  out = out.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${pageDescription}"`,
  )
  out = out.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${pageImage}"`,
  )
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${pageTitle}"`,
  )
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${pageDescription}"`,
  )
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${pageImage}"`,
  )
  return out
}

function injectCrawlBody(html, routePath) {
  const crawlHtml = getCrawlableBodyHtml(routePath)
  if (html.includes(CRAWL_MARKER)) {
    return html.replace(
      new RegExp(`${CRAWL_MARKER}[\\s\\S]*?${CRAWL_MARKER}`),
      `${CRAWL_MARKER}\n${crawlHtml}\n${CRAWL_MARKER}`,
    )
  }
  return html.replace('<div id="app"></div>', `<div id="app"></div>\n${crawlHtml}`)
}

if (!fs.existsSync(templatePath)) {
  console.error('Run vite build before prerender-html.mjs')
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf8')

for (const page of ALL_PAGE_SEO) {
  let html = injectPageHead(template, page)
  html = injectCrawlBody(html, page.path)
  if (page.path === '/') {
    fs.writeFileSync(templatePath, html)
    continue
  }
  const segment = page.path.replace(/^\//, '')
  const outDir = path.join(distDir, segment)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
}

console.log(`Prerendered ${ALL_PAGE_SEO.length} routes with page-specific meta and crawlable body.`)
