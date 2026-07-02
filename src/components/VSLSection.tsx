import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon'
import type { Diagnosis } from '../types'

interface VSLSectionProps {
  diagnosis: Diagnosis
  unlocked: boolean
  onUnlock: () => void
}

export function VSLSection({ diagnosis, unlocked, onUnlock }: VSLSectionProps) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [watched, setWatched] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  function handlePlay() {
    if (playing || watched) return
    setPlaying(true)
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + 4
        if (next >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setPlaying(false)
          setWatched(true)
          return 100
        }
        return next
      })
    }, 140)
  }

  const vslTitle =
    diagnosis.route === 'A'
      ? 'A explicação para sair do zero e começar em Face ID'
      : diagnosis.route === 'B'
        ? 'A explicação para destravar seu faturamento em Face ID'
        : 'A explicação do método completo'

  return (
    <section className="relative px-6 py-16 grid-bg noise-overlay">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 text-[11px] tracking-[0.18em] font-display text-blue-glow">
            <Icon name="play" className="w-3.5 h-3.5" />
            EXPLICAÇÃO PERSONALIZADA
          </span>
          <h2 className="mt-5 font-display font-semibold text-xl sm:text-2xl text-frost leading-snug">
            {vslTitle}
          </h2>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden glass">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 40%, rgba(47,155,255,0.22), transparent 70%), linear-gradient(160deg, #0d1119, #070910)',
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-40" />

          {!watched && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 group"
            >
              <span className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-deep to-blue btn-glow transition-transform group-active:scale-90">
                <Icon name="play" className="w-7 h-7 text-frost" strokeWidth={1.6} />
              </span>
              <span className="font-display text-xs tracking-widest text-blue-glow">
                {playing ? 'REPRODUZINDO...' : diagnosis.cta.toUpperCase()}
              </span>
            </button>
          )}

          {watched && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2.5"
            >
              <span className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-deep to-blue">
                <Icon name="check" className="w-6 h-6 text-frost" strokeWidth={2} />
              </span>
              <span className="font-display text-xs tracking-widest text-blue-glow">EXPLICAÇÃO CONCLUÍDA</span>
            </motion.div>
          )}

          {playing && (
            <div className="absolute bottom-0 inset-x-0 h-1 bg-line">
              <div
                className="h-full bg-gradient-to-r from-blue-deep to-cyan transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          {!unlocked && (
            <>
              <p className="text-xs sm:text-sm text-mist max-w-sm mx-auto">
                Seu plano personalizado será liberado após assistir a explicação completa.
              </p>
              <button
                onClick={onUnlock}
                disabled={!watched}
                className="btn-glow mt-5 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-deep to-blue px-8 py-4 font-display font-semibold text-sm tracking-wide text-frost active:scale-95 transition-transform disabled:opacity-30 disabled:shadow-none"
              >
                <Icon name={watched ? 'unlock' : 'lock'} className="w-4.5 h-4.5" />
                DESBLOQUEAR MEU PLANO PERSONALIZADO
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
