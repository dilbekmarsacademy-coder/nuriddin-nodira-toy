import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-6 px-6 py-20 text-center">
      <Ornament variant="corner" className="h-16 w-16 rotate-45 text-[var(--color-gold)]/60" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-4xl text-[var(--color-gold)] sm:text-5xl"
      >
        {weddingConfig.footer.message}
      </motion.p>

      <p className="font-serif text-lg text-[var(--color-emerald)]">
        {weddingConfig.groom} &amp; {weddingConfig.bride}
      </p>

      <p className="font-sans text-xs tracking-[0.25em] text-[var(--color-ink)]/50 uppercase">
        {weddingConfig.hosts.familyName} oilasi
      </p>

      <Ornament variant="divider" className="mt-4 h-4 w-40 text-[var(--color-gold)]/50" />
    </footer>
  )
}
