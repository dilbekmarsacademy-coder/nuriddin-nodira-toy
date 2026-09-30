# Nuriddinjon & Mashhuraxon — Nikoh taklifnomasi

Onlayn to'y taklifnomasi sayti. Vite + React + TypeScript + Tailwind CSS, Framer Motion, GSAP ScrollTrigger va Lenis silliq scroll bilan qurilgan.

## Barcha matn va sanalarni o'zgartirish

Hamma narsa **`src/config.ts`** faylida: ismlar, sana, manzil, koordinatalar, to'y dasturi, sevgi hikoyasi, galereya rasmlari va h.k. Faqat shu faylni tahrirlang — boshqa joyga tegishning hojati yo'q.

## Rasm va musiqa

- `public/images/` — galereya va sevgi hikoyasi rasmlari (hozircha placeholder). O'z rasmlaringiz bilan almashtiring, xuddi shu fayl nomlari bilan (yoki `config.ts`'dagi yo'llarni yangilang). WebP formatini tavsiya qilamiz.
- `public/music.mp3` — fon musiqasi fayli. Bu faylni o'zingiz qo'shishingiz kerak (hozircha mavjud emas).
- `public/og-image.jpg` — Telegram/ijtimoiy tarmoqlarda preview uchun (1200x630).
- `public/favicon.svg` — N&N monogramma.

## Lokal ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` ochiladi.

## Deploy qilish (Vercel)

```bash
npm i -g vercel
vercel
vercel --prod
```

Yoki loyihani GitHub'ga push qilib, Vercel dashboard orqali import qiling.

## Texnologiyalar

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion — animatsiyalar
- GSAP + ScrollTrigger — scroll effektlari (Sevgi hikoyasi chizig'i)
- Lenis — silliq scroll

## Komponentlar tuzilishi

```
src/
  config.ts          # Barcha matn/sana/manzil ma'lumotlari
  App.tsx
  components/
    Envelope.tsx      # Kirish ekrani (3D konvert)
    Hero.tsx           # Ism animatsiyasi + zarrachalar
    BismillahIntro.tsx
    Countdown.tsx      # Flip-card countdown + kalendar
    LoveStory.tsx      # Scroll timeline (GSAP)
    Schedule.tsx        # To'y dasturi
    Location.tsx        # Xarita + yo'nalish tugmalari
    Gallery.tsx          # Masonry + lightbox
    MusicPlayer.tsx
    Footer.tsx
    CustomCursor.tsx
    Ornament.tsx          # Milliy naqsh SVG bezaklar
  hooks/
    useLenis.ts
    useReducedMotion.ts
```

## Performance eslatmalari

- Barcha animatsiyalar `transform`/`opacity` bilan ishlaydi.
- `prefers-reduced-motion` hurmat qilinadi (global CSS + Hero canvas animatsiyasi o'chiriladi).
- Rasmlar `loading="lazy"` bilan yuklanadi — o'z rasmlaringizni WebP formatida joylashtiring.
