import { Icon } from './Icon'

interface ProgressHeaderProps {
  progress: number
  stepNumber: number
  totalSteps: number
  xp: number
  levelLabel: string
  onBack?: () => void
}

export function ProgressHeader({ progress, stepNumber, totalSteps, xp, levelLabel, onBack }: ProgressHeaderProps) {
  return (
    <div className="sticky top-0 z-30 bg-ink/85 backdrop-blur-md border-b border-line">
      <div className="max-w-xl mx-auto px-4 pt-3 pb-2.5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <button
            onClick={onBack}
            disabled={!onBack}
            className="flex items-center gap-1.5 text-mist text-xs font-medium disabled:opacity-0"
            aria-label="Voltar"
          >
            <Icon name="compass" className="w-3.5 h-3.5 rotate-180" />
            Voltar
          </button>

          <div className="flex items-center gap-1.5 text-[11px] font-display tracking-wide text-blue-glow">
            <Icon name="scan" className="w-3.5 h-3.5" />
            ETAPA {stepNumber} / {totalSteps}
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-line bg-panel px-2.5 py-1">
            <Icon name="zap" className="w-3 h-3 text-blue-bright" />
            <span className="text-[11px] font-display text-frost">{xp} XP</span>
            <span className="text-[10px] text-mist-dim hidden xs:inline">· {levelLabel}</span>
          </div>
        </div>

        <div className="h-1.5 w-full rounded-full bg-panel-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${Math.max(progress * 100, 3)}%`,
              background: 'linear-gradient(90deg, var(--color-blue-deep), var(--color-blue), var(--color-cyan))',
              boxShadow: '0 0 10px rgba(47,155,255,0.7)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
