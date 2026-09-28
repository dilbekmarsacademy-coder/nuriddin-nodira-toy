import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../config'
import { FloralDivider, FloralFrame } from './Flowers'
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

    // Yog'ayotgan atirgul gulbarglari
    const petalColors = ['242, 201, 204', '217, 138, 150', '247, 220, 221', '201, 169, 97']
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 4,
      speed: Math.random() * 0.5 + 0.3,
      drift: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.4 + 0.45,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.03,
      sway: Math.random() * Math.PI * 2,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
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
        p.sway += 0.02
        p.angle += p.spin
        p.x += p.drift + Math.sin(p.sway) * 0.4 + mouseX * 0.15
        if (p.y > height + 10) {
          p.y = -10
          p.x = Math.random() * width
        }
        if (p.x > width) p.x = 0
        if (p.x < 0) p.x = width

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.beginPath()
        ctx.moveTo(0, -p.r)
        ctx.bezierCurveTo(p.r * 0.9, -p.r * 0.6, p.r * 0.7, p.r * 0.7, 0, p.r)
        ctx.bezierCurveTo(-p.r * 0.7, p.r * 0.7, -p.r * 0.9, -p.r * 0.6, 0, -p.r)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.fill()
        ctx.restore()
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
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
        <FloralFrame />
      </motion.div>
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

      <h1 className="font-script text-5xl leading-tight text-[var(--color-wine)] break-words sm:text-7xl md:text-8xl">
        <AnimatedName text={weddingConfig.groom} delayOffset={0} />
      </h1>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="my-2 font-script text-4xl text-[var(--color-rose)] sm:text-6xl"
      >
        &amp;
      </motion.div>

      <h1 className="font-script text-5xl leading-tight text-[var(--color-wine)] break-words sm:text-7xl md:text-8xl">
        <AnimatedName text={weddingConfig.bride} delayOffset={weddingConfig.groom.length + 4} />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        <FloralDivider className="h-8 w-48 sm:h-10 sm:w-64" />
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
        className="mt-12 flex flex-col items-center gap-2 text-[var(--color-gold)]"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Pastga suring</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 1V23M8 23L2 17M8 23L14 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </section>
  )
}
