import { motion } from 'framer-motion'
import { Icon } from './Icon'
import { ScannerFrame } from './ScannerFrame'
import type { Diagnosis } from '../types'

interface ResultScreenProps {
  diagnosis: Diagnosis
  onCta: () => void
}

export function ResultScreen({ diagnosis, onCta }: ResultScreenProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-16 grid-bg noise-overlay overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 50% 15%, rgba(47,155,255,0.22), transparent 60%)' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-24 h-24 mb-6"
      >
        <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(47,155,255,0.4), transparent 70%)' }} />
        <div className="absolute inset-2">
          <ScannerFrame active className="w-full h-full rounded-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-2xl glass flex items-center justify-center">
              <Icon name="check" className="w-8 h-8 text-blue-glow" strokeWidth={1.6} />
            </div>
          </ScannerFrame>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 mb-5 text-[11px] tracking-[0.18em] font-display text-blue-glow"
      >
        <Icon name="scan" className="w-3.5 h-3.5" />
        DIAGNÓSTICO CONCLUÍDO
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        className="font-display font-semibold text-2xl sm:text-3xl text-center text-frost text-glow max-w-md leading-tight"
      >
        {diagnosis.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35 }}
        className="mt-4 text-sm sm:text-base text-mist text-center max-w-md leading-relaxed"
      >
        {diagnosis.text}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.48 }}
        onClick={onCta}
        className="btn-glow mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-deep to-blue px-8 py-4 font-display font-semibold text-sm tracking-wide text-frost active:scale-95 transition-transform"
      >
        <Icon name="play" className="w-4.5 h-4.5" />
        {diagnosis.cta.toUpperCase()}
      </motion.button>
    </section>
  )
}
