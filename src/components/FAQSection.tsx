import { useState } from 'react'
import { Icon } from './Icon'

const faqs = [
  { q: 'Serve para iniciantes?', a: 'Sim. O método foi desenhado para levar quem nunca abriu um iPhone do zero até os primeiros reparos com segurança.' },
  { q: 'Serve para quem já trabalha na área?', a: 'Sim. Técnicos que já atuam com manutenção usam o método para dominar Face ID e aumentar o ticket médio dos serviços.' },
  { q: 'Preciso de ferramentas caras?', a: 'Não. Você aprende o passo a passo com o equipamento essencial, sem depender de uma loja física ou maquinário caro.' },
  { q: 'Tenho acesso imediato?', a: 'Sim. Assim que a oferta é liberada, o acesso ao conteúdo é imediato.' },
  { q: 'Funciona no celular?', a: 'Sim. Todo o conteúdo é otimizado para você estudar direto do celular, no seu tempo.' },
  { q: 'Tem suporte?', a: 'Sim. Você conta com suporte para tirar dúvidas durante toda a jornada dentro do método.' },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative px-6 py-16 grid-bg">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 text-[11px] tracking-[0.18em] font-display text-blue-glow">
            <Icon name="alert" className="w-3.5 h-3.5" />
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="mt-5 font-display font-semibold text-2xl text-frost">Dúvidas rápidas</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-frost">{item.q}</span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-line transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    <Icon name="zap" className="w-3.5 h-3.5 text-blue-glow" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-xs sm:text-sm text-mist leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
