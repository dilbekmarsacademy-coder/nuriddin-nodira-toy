// Nafis atirgul va barglardan iborat gul bezaklari (SVG)

const PETAL_LIGHT = '#f7dcdd'
const PETAL = '#eeb7bd'
const PETAL_DEEP = '#d98a96'
const HEART = '#b85a6a'
const LEAF = '#9db596'
const LEAF_DARK = '#7d9676'
const GOLD = '#c9a961'

type RoseProps = { x: number; y: number; size?: number; rotate?: number }

function Rose({ x, y, size = 1, rotate = 0 }: RoseProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${size})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-11" rx="11" ry="13" transform={`rotate(${a})`} fill={PETAL_LIGHT} stroke={PETAL} strokeWidth="0.6" />
      ))}
      {[36, 108, 180, 252, 324].map((a) => (
        <ellipse key={a} cx="0" cy="-7" rx="8" ry="9" transform={`rotate(${a})`} fill={PETAL} />
      ))}
      <circle r="7.5" fill={PETAL_DEEP} />
      <path
        d="M0 -5C4 -5 6 -1 4 2.5C2 6 -3.5 6 -5 2.5C-6.5 -1.5 -3 -6.5 1.5 -6.5M-1.5 -1.5C0 -3 2.5 -1.5 1.5 0.5C0.5 2 -2 2 -2 0"
        stroke={HEART}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  )
}

function Bud({ x, y, size = 1, rotate = 0 }: RoseProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${size})`}>
      <path d="M0 8C-6 2 -5 -7 0 -10C5 -7 6 2 0 8Z" fill={PETAL} />
      <path d="M0 8C-3 3 -2 -4 0 -7" stroke={PETAL_DEEP} strokeWidth="0.8" fill="none" />
      <path d="M0 8C-5 7 -8 3 -6 -1C-3 3 -1 5 0 8ZM0 8C5 7 8 3 6 -1C3 3 1 5 0 8Z" fill={LEAF} />
    </g>
  )
}

function Leaf({ x, y, size = 1, rotate = 0 }: RoseProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${size})`}>
      <path d="M0 0C8 -7 22 -7 30 0C22 7 8 7 0 0Z" fill={LEAF} />
      <path d="M1 0H27" stroke={LEAF_DARK} strokeWidth="0.7" strokeLinecap="round" />
    </g>
  )
}

type FloralProps = { className?: string }

// Burchak uchun gul dastasi — chap-yuqori burchakka mo'ljallangan,
// boshqa burchaklar uchun CSS scale(-1) bilan aylantiriladi
export function FloralCorner({ className = '' }: FloralProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path d="M0 150C30 120 50 90 60 60C70 30 100 12 150 0" stroke={LEAF_DARK} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M0 60C25 70 40 90 48 118" stroke={LEAF_DARK} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Leaf x={62} y={58} rotate={-40} size={1.2} />
      <Leaf x={58} y={62} rotate={110} size={1.1} />
      <Leaf x={100} y={22} rotate={-10} size={1} />
      <Leaf x={112} y={16} rotate={150} size={0.9} />
      <Leaf x={20} y={130} rotate={60} size={0.9} />
      <Leaf x={36} y={104} rotate={-120} size={0.9} />
      <Leaf x={140} y={4} rotate={20} size={0.8} />
      <Rose x={52} y={52} size={1.5} rotate={10} />
      <Rose x={104} y={30} size={0.95} rotate={-20} />
      <Rose x={28} y={104} size={0.9} rotate={30} />
      <Bud x={150} y={10} size={0.9} rotate={70} />
      <Bud x={10} y={148} size={0.9} rotate={-160} />
      <Bud x={45} y={120} size={0.7} rotate={-150} />
      <circle cx="84" cy="70" r="2" fill={GOLD} />
      <circle cx="72" cy="86" r="1.4" fill={GOLD} />
      <circle cx="128" cy="36" r="1.4" fill={GOLD} />
      <circle cx="40" cy="138" r="1.4" fill={GOLD} />
    </svg>
  )
}

// Bo'limlar orasidagi gulli ajratkich
export function FloralDivider({ className = '' }: FloralProps) {
  return (
    <svg viewBox="0 0 240 40" fill="none" className={className} aria-hidden="true">
      <path d="M0 20H78" stroke={GOLD} strokeWidth="0.8" />
      <path d="M162 20H240" stroke={GOLD} strokeWidth="0.8" />
      <Leaf x={100} y={21} rotate={200} size={0.8} />
      <Leaf x={140} y={21} rotate={-20} size={0.8} />
      <Bud x={92} y={18} size={0.6} rotate={-100} />
      <Bud x={148} y={18} size={0.6} rotate={100} />
      <Rose x={120} y={20} size={0.8} />
      <circle cx="78" cy="20" r="2" fill={GOLD} />
      <circle cx="162" cy="20" r="2" fill={GOLD} />
    </svg>
  )
}

// Ekranning to'rt burchagiga gullar joylashtiradi
export function FloralFrame({ className = 'w-32 sm:w-44 md:w-52' }: FloralProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <FloralCorner className={`absolute top-0 left-0 ${className}`} />
      <FloralCorner className={`absolute top-0 right-0 -scale-x-100 ${className}`} />
      <FloralCorner className={`absolute bottom-0 left-0 -scale-y-100 ${className}`} />
      <FloralCorner className={`absolute right-0 bottom-0 -scale-100 ${className}`} />
    </div>
  )
}
