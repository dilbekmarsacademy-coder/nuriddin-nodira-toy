import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

export function BismillahIntro() {
  return (
    <section className="relative flex flex-col items-center gap-10 px-6 py-28 text-center sm:py-36">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="text-3xl text-[var(--color-gold)] sm:text-4xl"
        dir="rtl"
        lang="ar"
      >
        {weddingConfig.bismillah}
      </motion.p>

      <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />

      <div className="flex max-w-xl flex-col gap-5">
        {weddingConfig.invitationIntro.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="font-serif text-xl leading-relaxed text-[var(--color-ink)]/90 sm:text-2xl"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-4 max-w-md font-sans text-sm leading-relaxed tracking-wide text-[var(--color-ink)]/70"
      >
        {weddingConfig.hosts.invitationText}
      </motion.p>
    </section>
  )
}
