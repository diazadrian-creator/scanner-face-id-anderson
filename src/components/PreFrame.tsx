import { motion } from 'framer-motion'
import { Icon } from './Icon'
import type { IconName } from '../types'

interface PreFrameProps {
  onContinue: () => void
}

const profiles: { icon: IconName; title: string; text: string }[] = [
  { icon: 'compass', title: 'Iniciante do zero', text: 'Nunca mexeu em um iPhone, mas quer aprender um caminho real.' },
  { icon: 'tool', title: 'Técnico da área', text: 'Já trabalha com manutenção, mas trava nos reparos de Face ID.' },
  { icon: 'brainCircuit', title: 'Perfil indefinido', text: 'Está em transição e ainda descobrindo qual caminho seguir.' },
]

export function PreFrame({ onContinue }: PreFrameProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 py-16 grid-bg noise-overlay">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(50% 40% at 50% 0%, rgba(47,155,255,0.14), transparent 60%)' }}
      />
      <div className="relative max-w-xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 mb-6 text-[11px] tracking-[0.18em] font-display text-blue-glow"
        >
          <Icon name="target" className="w-3.5 h-3.5" />
          ANTES DE COMEÇAR
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold text-2xl sm:text-3xl text-frost leading-tight"
        >
          Este scanner identifica exatamente
          <br className="hidden sm:block" /> onde você está agora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-4 text-sm sm:text-base text-mist max-w-md mx-auto"
        >
          Com base nas suas respostas, o diagnóstico aponta em qual dos três caminhos você se
          encaixa hoje:
        </motion.p>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-2xl p-5 text-left"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg, rgba(47,155,255,0.25), rgba(79,224,255,0.08))' }}>
                <Icon name={p.icon} className="w-5 h-5 text-blue-glow" />
              </div>
              <h3 className="font-display font-semibold text-sm text-frost mb-1.5">{p.title}</h3>
              <p className="text-xs text-mist leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={onContinue}
          className="btn-glow mt-10 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-deep to-blue px-8 py-4 font-display font-semibold text-sm tracking-wide text-frost active:scale-95 transition-transform"
        >
          <Icon name="zap" className="w-4.5 h-4.5" />
          COMEÇAR DIAGNÓSTICO
        </motion.button>
      </div>
    </section>
  )
}
