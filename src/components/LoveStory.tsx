import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'

gsap.registerPlugin(ScrollTrigger)

export function LoveStory() {
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 py-24 sm:py-32">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-emerald)] sm:text-4xl">Sevgi hikoyasi</h2>
        <Ornament variant="divider" className="h-4 w-32 text-[var(--color-gold)]" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--color-gold)]/15" />
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top bg-[var(--color-gold)]"
        />

        <div className="flex flex-col gap-16">
          {weddingConfig.loveStory.map((step, i) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className={`relative flex flex-col items-center gap-4 sm:flex-row sm:gap-10 ${
                i % 2 === 1 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-1/2 top-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-cream)] sm:top-1/2 sm:-translate-y-1/2" />

              <div className="aspect-[4/3] w-full max-w-[220px] overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 shadow-md">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                <span className="font-script text-3xl text-[var(--color-gold)]">{step.year}</span>
                <h3 className="font-serif text-xl text-[var(--color-emerald)]">{step.title}</h3>
                <p className="max-w-xs font-sans text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
