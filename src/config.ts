// Barcha to'y ma'lumotlari shu yerda. O'zgartirish kerak bo'lsa faqat shu faylni tahrirlang.

export const weddingConfig = {
  groom: 'Nuriddinjon',
  bride: 'Mashhuraxon',

  // ISO formatda sana, Countdown va kalendar shu yerdan hisoblaydi
  date: '2026-10-17T18:00:00+05:00',
  dateLabel: '17 · 10 · 2026',
  dayOfWeekLabel: 'Shanba',
  timeLabel: '18:00',

  hosts: {
    groomFamilyName: 'Fayziyevlar',
    brideFamilyName: 'Muhammadovlar',
    invitationText:
      "Fayziyevlar va Muhammadovlar oilalari farzandlari Nuriddinjon va Mashhuraxonning nikoh to'yiga sizni va oilangizni chin dildan taklif etadi.",
  },

  venue: {
    name: "Yangi Saroy to'yxonasi",
    address: '49V6+32F, Karmana tumani, Navoiy viloyati',
    lat: 40.142677,
    lng: 65.360061,
    googleMapsUrl: 'https://www.google.com/maps?q=40.142677,65.360061',
    yandexNavigatorUrl: 'yandexnavi://build_route_on_map?lat_to=40.142677&lon_to=65.360061',
    yandexMapsUrl: 'https://yandex.com/maps/?pt=65.360061,40.142677&z=16&l=map',
  },

  invitationIntro: [
    "Ikki yurak bir umrga birlashadigan kun yaqinlashmoqda.",
    "Quvonchimizni siz aziz mehmonlar bilan birga nishonlashni orzu qilamiz.",
    "Yorug' va baxtli oila qurishimizga guvoh bo'lishingizni so'raymiz.",
  ],

  schedule: [
    { time: '18:00', title: 'Mehmonlarni kutib olish', icon: 'welcome' },
    { time: '18:30', title: 'Nikoh marosimi', icon: 'rings' },
    { time: '19:00', title: 'Tabriklar', icon: 'gift' },
    { time: '19:30', title: 'Ziyofat va bazm', icon: 'music' },
    { time: '22:00', title: "To'y torti", icon: 'cake' },
    { time: '23:00', title: 'Yakun', icon: 'star' },
  ],

  gallery: [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
  ],

  music: {
    src: '/music.mp3',
  },

  rsvp: {
    endpoint: '/api/rsvp',
  },

  seo: {
    title: 'Nuriddinjon & Mashhuraxon — Nikoh taklifnomasi',
    description: "17-oktabr, 2026. Nuriddinjon va Mashhuraxonning to'yiga sizni taklif qilamiz.",
    ogImage: '/og-image.jpg',
    url: 'https://nuriddin-mashhura-toy.vercel.app',
  },

  footer: {
    message: 'Sizni kutib qolamiz!',
  },
} as const

export type WeddingConfig = typeof weddingConfig
