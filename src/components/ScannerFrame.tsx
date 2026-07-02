import type { ReactNode } from 'react'

interface ScannerFrameProps {
  children: ReactNode
  className?: string
  active?: boolean
  cornerClassName?: string
}

export function ScannerFrame({ children, className = '', active = true, cornerClassName = '' }: ScannerFrameProps) {
  const corner = `absolute w-6 h-6 border-blue-glow ${cornerClassName}`
  return (
    <div className={`relative ${className}`}>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2 rounded-tl-xl`} style={{ borderColor: 'var(--color-blue-glow)' }} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2 rounded-tr-xl`} style={{ borderColor: 'var(--color-blue-glow)' }} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl`} style={{ borderColor: 'var(--color-blue-glow)' }} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl`} style={{ borderColor: 'var(--color-blue-glow)' }} />
      {active && (
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div
            className="absolute left-0 right-0 h-16 animate-scan-line"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(124,196,255,0.35), transparent)',
            }}
          />
        </div>
      )}
      {children}
    </div>
  )
}
