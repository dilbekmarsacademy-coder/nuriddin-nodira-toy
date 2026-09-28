import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { FloralCorner, FloralDivider } from './Flowers'

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-20 text-center">
      <FloralCorner className="pointer-events-none absolute bottom-0 left-0 w-28 -scale-y-100 opacity-80 sm:w-40" />
      <FloralCorner className="pointer-events-none absolute right-0 bottom-0 w-28 -scale-100 opacity-80 sm:w-40" />

      <FloralDivider className="h-10 w-52" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-4xl text-[var(--color-rose)] sm:text-5xl"
      >
        {weddingConfig.footer.message}
      </motion.p>

      <p className="font-serif text-lg text-[var(--color-wine)]">
        {weddingConfig.groom} &amp; {weddingConfig.bride}
      </p>

      <p className="font-sans text-xs tracking-[0.25em] text-[var(--color-ink)]/50 uppercase">
        {weddingConfig.hosts.groomFamilyName} &amp; {weddingConfig.hosts.brideFamilyName} oilalari
      </p>

      <FloralDivider className="mt-4 h-8 w-44 opacity-70" />
    </footer>
  )
}
