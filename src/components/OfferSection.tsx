import { motion } from 'framer-motion'
import { Icon } from './Icon'

const bullets = [
  'Comece do zero mesmo sem experiência',
  'Aprenda o método usado na prática',
  'Reparo Face ID passo a passo',
  'Diagnóstico técnico completo',
  'Caminho para iniciar ou aumentar faturamento',
]

interface OfferSectionProps {
  offerRef?: React.RefObject<HTMLDivElement | null>
}

export function OfferSection({ offerRef }: OfferSectionProps) {
  return (
    <motion.section
      ref={offerRef}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative px-6 py-16 grid-bg noise-overlay"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 50% 20%, rgba(47,155,255,0.2), transparent 60%)' }}
      />
      <div className="relative max-w-xl mx-auto">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 text-[11px] tracking-[0.18em] font-display text-blue-glow">
            <Icon name="unlock" className="w-3.5 h-3.5" />
            OFERTA DESBLOQUEADA
          </span>

          <h2 className="mt-5 font-display font-semibold text-2xl sm:text-3xl text-frost leading-tight">
            Método Face ID
            <br />
            Anderson Apple Repair
          </h2>

          <ul className="mt-6 flex flex-col gap-3.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, var(--color-blue), var(--color-cyan))' }}>
                  <Icon name="check" className="w-3.5 h-3.5 text-ink" strokeWidth={3} />
                </span>
                <span className="text-sm text-frost/90 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#quero-acessar"
            className="btn-glow mt-8 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-deep to-blue px-8 py-4 font-display font-semibold text-sm tracking-wide text-frost active:scale-95 transition-transform"
          >
            <Icon name="zap" className="w-4.5 h-4.5" />
            QUERO ACESSAR AGORA
          </a>

          <p className="mt-3 text-center text-[11px] text-mist-dim">Acesso imediato · Vagas limitadas por turma</p>
        </div>
      </div>
    </motion.section>
  )
}
