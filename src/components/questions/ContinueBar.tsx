import { Icon } from '../Icon'

interface ContinueBarProps {
  disabled?: boolean
  onClick: () => void
  label?: string
}

export function ContinueBar({ disabled, onClick, label = 'Continuar' }: ContinueBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 bg-gradient-to-t from-ink via-ink/95 to-transparent pt-8 pb-5 px-5">
      <button
        onClick={onClick}
        disabled={disabled}
        className="btn-glow max-w-xl mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-deep to-blue px-6 py-4 font-display font-semibold text-sm tracking-wide text-frost transition-all active:scale-95 disabled:opacity-30 disabled:shadow-none"
      >
        {label}
        <Icon name="zap" className="w-4 h-4" />
      </button>
    </div>
  )
}
