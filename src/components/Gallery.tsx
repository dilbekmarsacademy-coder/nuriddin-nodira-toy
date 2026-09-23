import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-emerald)] sm:text-4xl">Galereya</h2>
        <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {weddingConfig.gallery.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className={`overflow-hidden rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/10 ${
              i % 5 === 0 ? 'col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-square' : 'aspect-square'
            }`}
          >
            <img
              src={src}
              alt={`Rasm ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.opacity = '0'
              }}
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={weddingConfig.gallery[activeIndex]}
              alt="Kattalashtirilgan rasm"
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
