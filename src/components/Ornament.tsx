type OrnamentProps = {
  className?: string
  variant?: 'divider' | 'corner' | 'frame'
}

// Yupqa oltin chiziqli o'zbek milliy naqsh (islimiy uslubida) bezaklar
export function Ornament({ className = '', variant = 'divider' }: OrnamentProps) {
  if (variant === 'corner') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M4 60C4 28 28 4 60 4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M20 60C20 37 37 20 60 20"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle cx="4" cy="60" r="2.5" fill="currentColor" />
        <circle cx="60" cy="4" r="2.5" fill="currentColor" />
        <path
          d="M40 12C44 20 52 24 60 20"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    )
  }

  if (variant === 'frame') {
    return (
      <svg viewBox="0 0 200 60" fill="none" className={className} aria-hidden="true">
        <path
          d="M0 30C30 10 70 10 100 30C130 50 170 50 200 30"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="100" cy="30" r="3" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 240 24" fill="none" className={className} aria-hidden="true">
      <path d="M0 12H90" stroke="currentColor" strokeWidth="1" />
      <path
        d="M90 12C96 4 104 4 110 12C116 20 124 20 130 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="120" cy="12" r="3" fill="currentColor" />
      <path d="M150 12H240" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
