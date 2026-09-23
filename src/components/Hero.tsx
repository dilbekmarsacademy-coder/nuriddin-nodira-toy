import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { Ornament } from './Ornament'
import { useReducedMotion } from '../hooks/useReducedMotion'

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.6, ease: 'easeOut' as const },
  }),
}

function AnimatedName({ text, delayOffset }: { text: string; delayOffset: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i + delayOffset}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const particles = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.15,
      drift: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    let mouseX = 0
    let frame: number

    function handleResize() {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    function handleMouse(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y += p.speed
        p.x += p.drift + mouseX * 0.15
        if (p.y > height) {
          p.y = -5
          p.x = Math.random() * width
        }
        if (p.x > width) p.x = 0
        if (p.x < 0) p.x = width

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 169, 97, ${p.opacity})`
        ctx.fill()
      }
      frame = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouse)
    frame = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouse)
      cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-6 rounded-[2rem] border border-[var(--color-gold)]/25 sm:inset-10"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mb-4 font-serif text-sm tracking-[0.4em] text-[var(--color-gold)] uppercase sm:text-base"
      >
        Nikoh to'yi
      </motion.p>

      <h1 className="font-script text-6xl leading-tight text-[var(--color-emerald)] sm:text-8xl md:text-9xl">
        <AnimatedName text={weddingConfig.groom} delayOffset={0} />
      </h1>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="my-2 font-script text-4xl text-[var(--color-gold)] sm:text-6xl"
      >
        &amp;
      </motion.div>

      <h1 className="font-script text-6xl leading-tight text-[var(--color-emerald)] sm:text-8xl md:text-9xl">
        <AnimatedName text={weddingConfig.bride} delayOffset={weddingConfig.groom.length + 4} />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        <Ornament variant="divider" className="h-4 w-40 text-[var(--color-gold)] sm:w-56" />
        <p className="font-serif text-2xl tracking-[0.15em] text-[var(--color-ink)] sm:text-3xl">
          {weddingConfig.dateLabel}
        </p>
        <p className="font-sans text-xs tracking-[0.25em] text-[var(--color-ink)]/60 uppercase">
          {weddingConfig.dayOfWeekLabel} · soat {weddingConfig.timeLabel}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2.2, duration: 0.8 }, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[var(--color-gold)]"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Pastga suring</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 1V23M8 23L2 17M8 23L14 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </section>
  )
}
