import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '../Icon'

interface LoadingDiagnosisProps {
  messages: string[]
  onComplete: () => void
}

export function LoadingDiagnosis({ messages, onComplete }: LoadingDiagnosisProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= messages.length - 1) {
      const finalTimer = setTimeout(onComplete, 1100)
      return () => clearTimeout(finalTimer)
    }
    const timer = setTimeout(() => setIndex((i) => i + 1), 950)
    return () => clearTimeout(timer)
  }, [index, messages.length, onComplete])

  const progress = ((index + 1) / messages.length) * 100

  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center px-6 grid-bg noise-overlay relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(50% 45% at 50% 45%, rgba(47,155,255,0.2), transparent 65%)' }}
      />
      <div className="relative w-32 h-32 mb-9">
        <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(47,155,255,0.4), transparent 70%)' }} />
        <div className="absolute inset-2 rounded-full border-2 border-blue/40" />
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(47,155,255,0.15)" strokeWidth="3" />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#loadGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 46}
            strokeDashoffset={2 * Math.PI * 46 * (1 - progress / 100)}
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
          <defs>
            <linearGradient id="loadGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2f9bff" />
              <stop offset="100%" stopColor="#4fe0ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="scan" className="w-9 h-9 text-blue-glow" strokeWidth={1.4} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="font-display font-medium text-sm sm:text-base text-frost tracking-wide"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>

      <div className="mt-6 flex gap-1.5">
        {messages.map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
            style={{ background: i <= index ? 'var(--color-blue-bright)' : 'var(--color-line)' }}
          />
        ))}
      </div>
    </div>
  )
}
