import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

function getTimeLeft() {
  const target = new Date(weddingConfig.date).getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-16 w-14 overflow-hidden rounded-lg border border-[var(--color-gold)]/40 bg-[var(--color-cream)] shadow-[0_4px_20px_-6px_rgba(43,36,32,0.25)] sm:h-20 sm:w-20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={padded}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-semibold text-[var(--color-emerald)] sm:text-4xl"
          >
            {padded}
          </motion.span>
        </AnimatePresence>
        <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-[var(--color-gold)]/20" />
      </div>
      <span className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-ink)]/60 uppercase sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const weddingDate = new Date(weddingConfig.date)
  const monthDays = new Date(weddingDate.getFullYear(), weddingDate.getMonth() + 1, 0).getDate()
  const firstWeekday = (new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 1).getDay() + 6) % 7
  const weekdays = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya']

  return (
    <section className="relative flex flex-col items-center gap-10 px-6 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-3xl text-[var(--color-emerald)] sm:text-4xl"
      >
        To'yimizgacha
      </motion.h2>
      <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />

      <div className="flex gap-3 sm:gap-6">
        <FlipUnit value={time.days} label="Kun" />
        <FlipUnit value={time.hours} label="Soat" />
        <FlipUnit value={time.minutes} label="Daqiqa" />
        <FlipUnit value={time.seconds} label="Soniya" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 w-full max-w-xs rounded-2xl border border-[var(--color-gold)]/30 bg-white/40 p-5 shadow-sm backdrop-blur-sm"
      >
        <p className="mb-3 text-center font-serif text-sm tracking-[0.2em] text-[var(--color-ink)]/70 uppercase">
          {weddingDate.toLocaleDateString('uz-UZ', { month: 'long', year: 'numeric' })}
        </p>
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {weekdays.map((d) => (
            <span key={d} className="font-sans text-[10px] text-[var(--color-ink)]/40">
              {d}
            </span>
          ))}
          {Array.from({ length: firstWeekday }).map((_, i) => (
            <span key={`empty-${i}`} />
          ))}
          {Array.from({ length: monthDays }, (_, i) => i + 1).map((day) => {
            const isWeddingDay = day === weddingDate.getDate()
            return (
              <span
                key={day}
                className={`relative flex h-7 w-7 items-center justify-center justify-self-center rounded-full font-sans text-xs ${
                  isWeddingDay
                    ? 'bg-[var(--color-gold)] font-semibold text-white'
                    : 'text-[var(--color-ink)]/70'
                }`}
              >
                {isWeddingDay ? '♥' : day}
              </span>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
