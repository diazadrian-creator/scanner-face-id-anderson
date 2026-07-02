import { motion } from 'framer-motion'
import { Icon } from './Icon'
import { ScannerFrame } from './ScannerFrame'

interface HeroProps {
  onStart: () => void
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden grid-bg noise-overlay">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 8%, rgba(47,155,255,0.22), transparent 60%), radial-gradient(40% 40% at 85% 90%, rgba(79,224,255,0.12), transparent 60%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 mb-8 text-[11px] tracking-[0.18em] font-display text-blue-glow"
        >
          <Icon name="scan" className="w-3.5 h-3.5" />
          ANDERSON APPLE REPAIR
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 mb-9"
        >
          <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(47,155,255,0.35), transparent 70%)' }} />
          <div className="absolute inset-3 rounded-full border border-blue/30" />
          <div className="absolute inset-7 rounded-full border border-blue-glow/40" />
          <div className="absolute inset-10">
            <ScannerFrame active className="w-full h-full rounded-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-2xl glass flex items-center justify-center">
                <Icon name="smartphone" className="w-9 h-9 text-blue-glow" strokeWidth={1.4} />
              </div>
            </ScannerFrame>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-semibold text-3xl sm:text-4xl leading-[1.12] text-frost text-glow"
        >
          Descubra seu Perfil no
          <br />
          Mercado de <span className="text-blue-bright">Face ID</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-5 text-sm sm:text-base text-mist leading-relaxed max-w-md"
        >
          Responda o Scanner de Perfil Face ID e descubra qual caminho você deve seguir para
          aprender, evoluir ou faturar com reparos avançados de iPhone.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          onClick={onStart}
          className="btn-glow mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-deep to-blue px-8 py-4 font-display font-semibold text-sm tracking-wide text-frost active:scale-95 transition-transform"
        >
          <Icon name="scan" className="w-4.5 h-4.5" />
          INICIAR SCANNER FACE ID
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-4 text-[11px] text-mist-dim"
        >
          Leva menos de 2 minutos · 100% gratuito
        </motion.p>
      </div>
    </section>
  )
}
