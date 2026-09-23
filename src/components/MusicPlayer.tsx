import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { weddingConfig } from '../config'

type MusicPlayerProps = {
  autoPlay: boolean
}

export function MusicPlayer({ autoPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }, [autoPlay])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().catch(() => {})
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.src} loop preload="none" />
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? 'Musiqani to\'xtatish' : 'Musiqani yoqish'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-cream)]/90 shadow-lg backdrop-blur-sm sm:h-14 sm:w-14"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ repeat: isPlaying ? Infinity : 0, duration: 4, ease: 'linear' }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-emerald)] sm:h-9 sm:w-9"
        >
          <div className="h-2 w-2 rounded-full bg-[var(--color-cream)]" />
        </motion.div>
      </motion.button>
    </>
  )
}
