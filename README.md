# Nuriddin & Nodira — Nikoh taklifnomasi

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

## RSVP → Telegram integratsiyasi

RSVP formasi `api/rsvp.ts` serverless funksiyasi orqali Telegram Bot API'ga xabar yuboradi (token frontendda ochiq qolmaydi).

1. [@BotFather](https://t.me/BotFather) orqali bot yarating va tokenni oling.
2. O'zingizning `chat_id`'ingizni bilib oling (masalan, botga `/start` yozing, keyin `https://api.telegram.org/bot<TOKEN>/getUpdates` orqali `chat.id`ni ko'ring).
3. `.env.example` faylini `.env` deb nusxalab, qiymatlarni kiriting:

```bash
cp .env.example .env
```

```
BOT_TOKEN=123456:ABC-your-bot-token
CHAT_ID=your_chat_id
```

4. Vercel'ga deploy qilishda shu ikkala o'zgaruvchini Project Settings → Environment Variables bo'limiga qo'shing (yoki `vercel env add`).

## Deploy qilish (Vercel)

```bash
npm i -g vercel
vercel
vercel --prod
```

Yoki loyihani GitHub'ga push qilib, Vercel dashboard orqali import qiling — `BOT_TOKEN` va `CHAT_ID` environment variable'larini qo'shishni unutmang.

## Texnologiyalar

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion — animatsiyalar
- GSAP + ScrollTrigger — scroll effektlari (Sevgi hikoyasi chizig'i)
- Lenis — silliq scroll
- Vercel serverless function — Telegram Bot API integratsiyasi

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
    RSVP.tsx              # Forma + Telegram integratsiyasi
    MusicPlayer.tsx
    Footer.tsx
    CustomCursor.tsx
    Ornament.tsx          # Milliy naqsh SVG bezaklar
  hooks/
    useLenis.ts
    useReducedMotion.ts
api/
  rsvp.ts             # Vercel serverless function (Telegram)
```

## Performance eslatmalari

- Barcha animatsiyalar `transform`/`opacity` bilan ishlaydi.
- `prefers-reduced-motion` hurmat qilinadi (global CSS + Hero canvas animatsiyasi o'chiriladi).
- Rasmlar `loading="lazy"` bilan yuklanadi — o'z rasmlaringizni WebP formatida joylashtiring.
