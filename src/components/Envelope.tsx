import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { weddingConfig } from '../config'

type EnvelopeProps = {
  onOpen: () => void
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [sealBroken, setSealBroken] = useState(false)

  function handleOpen() {
    if (isOpening) return
    setSealBroken(true)
    setIsOpening(true)
    window.setTimeout(() => {
      onOpen()
    }, 1600)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-cream)] px-6"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-gold) 0, transparent 40%)",
        }} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 font-serif text-sm tracking-[0.35em] text-[var(--color-gold)] uppercase"
        >
          Taklifnoma
        </motion.p>

        <div className="relative" style={{ perspective: 1200 }}>
          {/* Envelope body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: isOpening ? -40 : 0,
            }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative h-[220px] w-[300px] sm:h-[260px] sm:w-[360px]"
          >
            {/* back panel */}
            <div className="absolute inset-0 rounded-sm border border-[var(--color-gold)]/50 bg-gradient-to-b from-[#fffdf9] to-[#f3ead8] shadow-[0_20px_60px_-15px_rgba(43,36,32,0.35)]" />

            {/* card peeking out */}
            <motion.div
              className="absolute left-1/2 top-2 h-[150px] w-[260px] -translate-x-1/2 rounded-sm border border-[var(--color-gold)]/40 bg-[var(--color-cream)] shadow-lg sm:w-[300px]"
              animate={{ y: isOpening ? -120 : 0, opacity: isOpening ? 1 : 1 }}
              transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 px-4 text-center">
                <span className="font-script text-3xl text-[var(--color-emerald)] sm:text-4xl">
                  {weddingConfig.groom} &amp; {weddingConfig.bride}
                </span>
                <span className="font-serif text-xs tracking-[0.3em] text-[var(--color-gold)] uppercase">
                  {weddingConfig.dateLabel}
                </span>
              </div>
            </motion.div>

            {/* bottom triangle flap (stays static, behind card) */}
            <div
              className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#efe4cc] to-transparent"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 40%)',
              }}
            />

            {/* top flap that opens */}
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 origin-top bg-gradient-to-b from-[#f6ecd8] to-[#ecdfc3]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateX: isOpening ? 180 : 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 border-t border-[var(--color-gold)]/40" />
            </motion.div>

            {/* wax seal */}
            <AnimatePresence>
              {!sealBroken && (
                <motion.button
                  type="button"
                  onClick={handleOpen}
                  aria-label="Taklifnomani ochish"
                  exit={{ scale: 0, rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold-light)] via-[var(--color-gold)] to-[#a3854a] shadow-[0_4px_12px_rgba(0,0,0,0.3)] sm:h-16 sm:w-16"
                >
                  <span className="font-script text-xl text-[var(--color-cream)] sm:text-2xl">N&amp;N</span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {!sealBroken && (
            <motion.button
              type="button"
              onClick={handleOpen}
              exit={{ opacity: 0, y: 10 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 font-sans text-xs tracking-[0.3em] text-[var(--color-ink)]/70 uppercase"
            >
              Ochish uchun bosing
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
