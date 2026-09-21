import { useState } from 'react'
import { FadeUp } from '../animations'

export default function Accordion({ items, className = '', dark = false }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className={`numbered-list-panel ${dark ? 'numbered-list-panel-dark' : ''} ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <FadeUp key={item.id} className="border-b border-current/10 last:border-b-0">
            <button
              type="button"
              className={`flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5 ${
                dark ? 'text-warm-cream' : 'text-deep-forest'
              }`}
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-display text-lg leading-snug sm:text-xl">{item.title}</span>
              <span className="shrink-0 font-body text-xl leading-none opacity-60" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className={`px-4 pb-4 sm:px-5 sm:pb-5 ${dark ? 'body-sm !text-warm-cream/85' : 'body-sm'}`}>
                {item.body}
              </div>
            )}
          </FadeUp>
        )
      })}
    </div>
  )
}
