import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

type Answer = 'yes' | 'maybe' | 'no'

const options: { value: Answer; label: string }[] = [
  { value: 'yes', label: "Albatta, kelaman!" },
  { value: 'maybe', label: 'Harakat qilaman' },
  { value: 'no', label: "Uzr, kelolmayman" },
]

function ConfettiBurst() {
  const pieces = Array.from({ length: 28 }, (_, i) => i)
  const colors = ['#C9A961', '#E4D4A8', '#1F3D34', '#FBF7F0']

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((i) => {
        const angle = (i / pieces.length) * Math.PI * 2
        const distance = 80 + Math.random() * 120
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance
        return (
          <motion.span
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ opacity: 0, x, y: y - 40, scale: 0 }}
            transition={{ duration: 1.2 + Math.random() * 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 6,
              height: 6,
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              background: colors[i % colors.length],
            }}
          />
        )
      })}
    </div>
  )
}

export function RSVP() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState(1)
  const [answer, setAnswer] = useState<Answer | null>(null)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !answer) return

    setStatus('sending')
    try {
      const res = await fetch(weddingConfig.rsvp.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, guests, answer, message }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-emerald)] sm:text-4xl">Ishtirokingizni tasdiqlang</h2>
        <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />
      </div>

      <div className="relative mx-auto max-w-md">
        <AnimatePresence mode="wait">
          {status === 'sent' ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-gold)]/30 bg-white/50 px-8 py-16 text-center backdrop-blur-sm"
            >
              <ConfettiBurst />
              <span className="font-script text-4xl text-[var(--color-gold)]">Rahmat!</span>
              <p className="font-sans text-sm text-[var(--color-ink)]/70">
                Javobingiz qabul qilindi. Sizni kutib qolamiz!
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-[var(--color-gold)]/30 bg-white/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-[0.2em] text-[var(--color-ink)]/60 uppercase">
                  Ismingiz
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-cream)] px-4 py-3 font-sans text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
                  placeholder="F.I.Sh"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-[0.2em] text-[var(--color-ink)]/60 uppercase">
                  Mehmonlar soni
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-cream)] px-4 py-3 font-sans text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-sans text-xs tracking-[0.2em] text-[var(--color-ink)]/60 uppercase">
                  Keladimi?
                </span>
                <div className="flex flex-col gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setAnswer(opt.value)}
                      className={`rounded-lg border px-4 py-3 text-left font-sans text-sm transition ${
                        answer === opt.value
                          ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-emerald)]'
                          : 'border-[var(--color-gold)]/25 text-[var(--color-ink)]/70 hover:border-[var(--color-gold)]/60'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs tracking-[0.2em] text-[var(--color-ink)]/60 uppercase">
                  Tabrik xabari (ixtiyoriy)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="resize-none rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-cream)] px-4 py-3 font-sans text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
                  placeholder="Yosh oilaga tilaklaringiz..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || !answer}
                className="mt-2 rounded-full bg-[var(--color-gold)] px-6 py-3 font-sans text-sm tracking-[0.15em] text-white uppercase transition hover:bg-[var(--color-emerald)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'sending' ? 'Yuborilmoqda...' : 'Yuborish'}
              </button>

              {status === 'error' && (
                <p className="text-center font-sans text-xs text-red-600">
                  Xatolik yuz berdi, qayta urinib ko'ring.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
