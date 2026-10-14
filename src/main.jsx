import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prerendered #crawl-content is for non-JS crawlers. Remove after hydrate so the
// visible React tree keeps a single <h1> (Page Clarity).
const crawlShell = document.getElementById('crawl-content')
if (crawlShell) crawlShell.remove()

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
