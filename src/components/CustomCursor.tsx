import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isFinePointer, setIsFinePointer] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    setIsFinePointer(query.matches)
  }, [])

  useEffect(() => {
    if (!isFinePointer) return

    document.body.classList.add('custom-cursor-active')

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let frame: number

    function handleMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', handleMove)
    frame = requestAnimationFrame(animateRing)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [isFinePointer])

  if (!isFinePointer) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 rounded-full border border-[var(--color-gold)]/60"
      />
    </>
  )
}
