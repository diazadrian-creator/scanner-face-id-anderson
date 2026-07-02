import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Icon'
import { playRewardSound } from '../utils/sound'

interface DiagnosisUnlockModalProps {
  open: boolean
  onWatchExplanation: () => void
  onDismiss: () => void
}

export function DiagnosisUnlockModal({ open, onWatchExplanation, onDismiss }: DiagnosisUnlockModalProps) {
  useEffect(() => {
    if (open) playRewardSound()
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onDismiss}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="diagnosis-unlock-title"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative w-full max-w-sm rounded-3xl p-6 sm:p-7 text-center"
            style={{
              borderColor: 'rgba(47,155,255,0.35)',
              boxShadow: '0 0 0 1px rgba(47,155,255,0.18), 0 24px 60px -12px rgba(0,0,0,0.6), 0 0 40px -8px rgba(47,155,255,0.35)',
            }}
          >
            <div className="relative w-16 h-16 mx-auto mb-5">
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, rgba(47,155,255,0.45), transparent 70%)' }}
              />
              <div
                className="relative w-full h-full rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--color-blue), var(--color-cyan))' }}
              >
                <Icon name="unlock" className="w-7 h-7 text-ink" strokeWidth={1.8} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/60 px-3 py-1 text-[10px] tracking-[0.14em] font-display text-blue-glow">
                <Icon name="scan" className="w-3 h-3" />
                PERFIL ANALISADO
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/60 px-3 py-1 text-[10px] tracking-[0.14em] font-display text-cyan">
                <Icon name="zap" className="w-3 h-3" />
                +25 XP
              </span>
            </div>

            <h2 id="diagnosis-unlock-title" className="font-display font-semibold text-xl text-frost leading-snug text-glow">
              Diagnóstico Face ID desbloqueado
            </h2>

            <p className="mt-3 text-sm text-mist leading-relaxed">
              Com base nas suas respostas, identificamos seu perfil técnico e liberamos a próxima
              etapa da sua análise.
            </p>

            <p className="mt-2 text-xs text-mist-dim leading-relaxed">
              Assista à explicação personalizada para entender o caminho recomendado para você.
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onWatchExplanation}
              className="btn-glow mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-deep to-blue px-6 py-4 font-display font-semibold text-sm tracking-wide text-frost transition-transform"
            >
              <Icon name="play" className="w-4.5 h-4.5" />
              VER MINHA EXPLICAÇÃO PERSONALIZADA
            </motion.button>

            <button
              onClick={onDismiss}
              className="mt-4 text-xs text-mist-dim underline underline-offset-2 decoration-line hover:text-mist transition-colors"
            >
              Continuar depois
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
