import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 text-blue-glow">
          <Icon name="scan" className="w-4 h-4" />
          <span className="font-display font-semibold text-sm text-frost">Anderson Apple Repair</span>
        </div>
        <p className="text-[11px] text-mist-dim max-w-sm leading-relaxed">
          Scanner de Perfil Face ID — diagnóstico gratuito para identificar seu caminho no
          mercado de reparos avançados de iPhone.
        </p>
        <p className="text-[10px] text-mist-dim">
          © {new Date().getFullYear()} Anderson Apple Repair. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
