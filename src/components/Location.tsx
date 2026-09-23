import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

export function Location() {
  const { venue } = weddingConfig
  const mapSrc = `https://www.google.com/maps?q=${venue.lat},${venue.lng}&z=15&output=embed`

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-emerald)] sm:text-4xl">Manzil</h2>
        <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
      >
        <h3 className="font-serif text-2xl text-[var(--color-ink)]">{venue.name}</h3>
        <p className="max-w-sm font-sans text-sm text-[var(--color-ink)]/70">{venue.address}</p>

        <div className="w-full overflow-hidden rounded-2xl border-2 border-[var(--color-gold)]/40 shadow-lg">
          <iframe
            title="Xarita"
            src={mapSrc}
            className="h-72 w-full grayscale contrast-125 sm:h-96"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--color-gold)] px-6 py-3 font-sans text-xs tracking-wide text-[var(--color-emerald)] uppercase transition hover:bg-[var(--color-gold)] hover:text-white"
          >
            Google Maps
          </a>
          <a
            href={venue.yandexNavigatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--color-gold)] px-6 py-3 font-sans text-xs tracking-wide text-[var(--color-emerald)] uppercase transition hover:bg-[var(--color-gold)] hover:text-white"
          >
            Yandex Navigator
          </a>
        </div>
      </motion.div>
    </section>
  )
}
