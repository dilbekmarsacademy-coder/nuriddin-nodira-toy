import type { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

const icons: Record<string, ReactElement> = {
  welcome: (
    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  rings: (
    <>
      <circle cx="9" cy="14" r="4" strokeWidth="1.2" />
      <circle cx="15" cy="14" r="4" strokeWidth="1.2" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" strokeWidth="1.2" />
      <path d="M4 9h16M12 9v11M12 9c-1.5-4-6-4-6-1s3 1 6 1zm0 0c1.5-4 6-4 6-1s-3 1-6 1z" strokeWidth="1.2" />
    </>
  ),
  music: (
    <path
      d="M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm11-2a3 3 0 11-6 0 3 3 0 016 0z"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cake: (
    <path
      d="M4 21v-7a2 2 0 012-2h12a2 2 0 012 2v7M4 21h16M8 12V8a2 2 0 114 0M12 8V6M12 3v1"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  star: (
    <path
      d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2-4.8-4.3 6.4-.6L12 3z"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  ),
}

export function Schedule() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-emerald)] sm:text-4xl">To'y dasturi</h2>
        <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />
      </div>

      <div className="mx-auto flex max-w-md flex-col gap-2">
        {weddingConfig.schedule.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex items-center gap-5 border-b border-[var(--color-gold)]/15 py-5 last:border-none"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/50 text-[var(--color-gold)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {icons[item.icon]}
              </svg>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="font-serif text-lg text-[var(--color-emerald)]">{item.title}</span>
            </div>
            <span className="font-sans text-sm tracking-wide text-[var(--color-gold)]">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
