// Barcha to'y ma'lumotlari shu yerda. O'zgartirish kerak bo'lsa faqat shu faylni tahrirlang.

export const weddingConfig = {
  groom: 'Nuriddin',
  bride: 'Nodira',

  // ISO formatda sana, Countdown va kalendar shu yerdan hisoblaydi
  date: '2026-10-18T18:00:00+05:00',
  dateLabel: '18 · 10 · 2026',
  dayOfWeekLabel: 'Yakshanba',
  timeLabel: '18:00',

  hosts: {
    familyName: 'Hakimovlar',
    invitationText:
      "Hakimovlar oilasi farzandlari Nuriddin va Nodiraning nikoh to'yiga sizni va oilangizni chin dildan taklif etadi.",
  },

  venue: {
    name: "Yakkasaroy to'yxonasi",
    address: 'Yakkasaroy mahallasi, Xatirchi tumani, Navoiy viloyati',
    lat: 40.1027,
    lng: 65.3672,
    googleMapsUrl: 'https://www.google.com/maps?q=40.1027,65.3672',
    yandexNavigatorUrl: 'yandexnavi://build_route_on_map?lat_to=40.1027&lon_to=65.3672',
    yandexMapsUrl: 'https://yandex.com/maps/?pt=65.3672,40.1027&z=16&l=map',
  },

  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',

  invitationIntro: [
    "Ikki yurak bir umrga birlashadigan kun yaqinlashmoqda.",
    "Quvonchimizni siz aziz mehmonlar bilan birga nishonlashni orzu qilamiz.",
    "Yorug' va baxtli oila qurishimizga guvoh bo'lishingizni so'raymiz.",
  ],

  loveStory: [
    {
      year: '2022',
      title: 'Tanishuv',
      description: "Ikki yurak birinchi marta bir-biriga ko'zga tashlandi va shu kundan boshlab hayot boshqacha ranglarga bo'yaldi.",
      image: '/images/story-1.jpg',
    },
    {
      year: '2024',
      title: 'Unashtiruv',
      description: "Oilalar duosi bilan qalblar rasman bir-biriga va'da berdi.",
      image: '/images/story-2.jpg',
    },
    {
      year: '2026',
      title: "To'y",
      description: "Va nihoyat, ikki yurak bir umrga birlashadigan kun keldi.",
      image: '/images/story-3.jpg',
    },
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
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
  ],

  music: {
    src: '/music.mp3',
  },

  rsvp: {
    endpoint: '/api/rsvp',
  },

  seo: {
    title: 'Nuriddin & Nodira — Nikoh taklifnomasi',
    description: "18-oktabr, 2026. Nuriddin va Nodiraning to'yiga sizni taklif qilamiz.",
    ogImage: '/og-image.jpg',
    url: 'https://nuriddin-nodira.vercel.app',
  },

  footer: {
    message: 'Sizni kutib qolamiz!',
  },
} as const

export type WeddingConfig = typeof weddingConfig
