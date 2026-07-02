import type { IconName } from '../types'

const paths: Record<IconName, React.ReactNode> = {
  smartphone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.4" />
      <line x1="12" y1="18.2" x2="12.01" y2="18.2" />
    </>
  ),
  tool: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <polyline points="12 7 12 12 15.5 14" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  cpu: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <line x1="9.5" y1="1.5" x2="9.5" y2="4" />
      <line x1="14.5" y1="1.5" x2="14.5" y2="4" />
      <line x1="9.5" y1="20" x2="9.5" y2="22.5" />
      <line x1="14.5" y1="20" x2="14.5" y2="22.5" />
      <line x1="20" y1="9.5" x2="22.5" y2="9.5" />
      <line x1="20" y1="14.5" x2="22.5" y2="14.5" />
      <line x1="1.5" y1="9.5" x2="4" y2="9.5" />
      <line x1="1.5" y1="14.5" x2="4" y2="14.5" />
    </>
  ),
  trending: (
    <>
      <polyline points="22 6 13.5 15 8.5 10 2 17" />
      <polyline points="16 6 22 6 22 12" />
    </>
  ),
  shield: <path d="M12 21.5s8-4 8-10.5V5l-8-3-8 3v6c0 6.5 8 10.5 8 10.5z" />,
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  book: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <line x1="12" y1="7.5" x2="12" y2="12.5" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" />
    </>
  ),
  unlock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M7.5 11V7.5a4.5 4.5 0 0 1 8.4-2.2" />
    </>
  ),
  check: (
    <>
      <path d="M21 10.8V12a9 9 0 1 1-5.3-8.2" />
      <polyline points="21 4 12 13.5 8.5 10" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <polygon points="10 8 16.5 12 10 16" />
    </>
  ),
  dollar: (
    <>
      <line x1="12" y1="1.5" x2="12" y2="22.5" />
      <path d="M16.5 5.5H10a3.3 3.3 0 0 0 0 6.6h4a3.3 3.3 0 0 1 0 6.6H6.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6.5" />
      <line x1="8" y1="2" x2="8" y2="6.5" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
  star: <polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3" />,
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21.2l7.8-7.8 1.1-1.1a5.5 5.5 0 0 0-.1-7.7z" />
  ),
  user: (
    <>
      <path d="M20 21.5v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7.5" r="4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M18 4h2a2 2 0 0 1 2 2v2" />
      <path d="M22 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M8 22H6a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="7" width="17" height="10" rx="2" />
      <line x1="22" y1="10.5" x2="22" y2="13.5" />
    </>
  ),
  brainCircuit: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 12h2.5M13.5 12H16M12 8v2.5M12 13.5V16" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <polygon points="14.8 9.2 13 13 9.2 14.8 11 11 14.8 9.2" />
    </>
  ),
}

interface IconProps {
  name: IconName
  className?: string
  strokeWidth?: number
}

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
