import { useState } from 'react'
import { Envelope } from './components/Envelope'
import { Hero } from './components/Hero'
import { BismillahIntro } from './components/BismillahIntro'
import { Countdown } from './components/Countdown'
import { LoveStory } from './components/LoveStory'
import { Schedule } from './components/Schedule'
import { Location } from './components/Location'
import { Gallery } from './components/Gallery'
import { RSVP } from './components/RSVP'
import { Footer } from './components/Footer'
import { MusicPlayer } from './components/MusicPlayer'
import { CustomCursor } from './components/CustomCursor'
import { useLenis } from './hooks/useLenis'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  useLenis(isOpened)

  return (
    <>
      <div className="grain-overlay" />
      <CustomCursor />

      {!isOpened && <Envelope onOpen={() => setIsOpened(true)} />}

      <main className={isOpened ? 'opacity-100' : 'pointer-events-none opacity-0'}>
        <Hero />
        <BismillahIntro />
        <Countdown />
        <LoveStory />
        <Schedule />
        <Location />
        <Gallery />
        <RSVP />
        <Footer />
      </main>

      {isOpened && <MusicPlayer autoPlay={isOpened} />}
    </>
  )
}

export default App
