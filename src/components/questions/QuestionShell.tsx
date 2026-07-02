import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface QuestionShellProps {
  question: string
  subtitle?: string
  children: ReactNode
}

export function QuestionShell({ question, subtitle, children }: QuestionShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-xl mx-auto px-5 pt-8 pb-28"
    >
      <h2 className="font-display font-semibold text-xl sm:text-2xl text-frost leading-snug text-center">
        {question}
      </h2>
      {subtitle && <p className="mt-2 text-xs sm:text-sm text-mist text-center">{subtitle}</p>}
      <div className="mt-7">{children}</div>
    </motion.div>
  )
}
