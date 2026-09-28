import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { FloralDivider } from './Flowers'

export function BismillahIntro() {
  return (
    <section className="relative flex flex-col items-center gap-10 px-6 py-28 text-center sm:py-36">
      <FloralDivider className="h-8 w-44" />

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
