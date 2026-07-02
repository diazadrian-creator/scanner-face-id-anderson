import { Icon } from '../Icon'
import type { Option } from '../../types'

interface OptionButtonProps {
  option: Option
  selected: boolean
  onClick: () => void
  variant?: 'list' | 'card'
  multi?: boolean
}

export function OptionButton({ option, selected, onClick, variant = 'list', multi = false }: OptionButtonProps) {
  if (variant === 'card') {
    return (
      <button
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center gap-2.5 rounded-2xl p-5 text-center transition-all duration-200 glass ${
          selected ? 'ring-2 ring-blue-bright' : 'ring-1 ring-transparent'
        }`}
        style={selected ? { boxShadow: '0 0 24px rgba(47,155,255,0.45)' } : undefined}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: selected
              ? 'linear-gradient(135deg, var(--color-blue), var(--color-cyan))'
              : 'linear-gradient(135deg, rgba(47,155,255,0.2), rgba(79,224,255,0.06))',
          }}
        >
          <Icon name={option.icon ?? 'scan'} className={`w-5 h-5 ${selected ? 'text-ink' : 'text-blue-glow'}`} />
        </div>
        <span className="text-xs sm:text-sm font-medium text-frost leading-snug">{option.label}</span>
        {selected && (
          <span className="absolute top-2 right-2 w-4.5 h-4.5 rounded-full bg-blue flex items-center justify-center">
            <Icon name="check" className="w-2.5 h-2.5 text-ink" strokeWidth={3} />
          </span>
        )}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-left transition-all duration-200 glass ${
        selected ? 'ring-2 ring-blue-bright' : 'ring-1 ring-transparent'
      }`}
      style={selected ? { boxShadow: '0 0 20px rgba(47,155,255,0.4)' } : undefined}
    >
      {option.icon && (
        <div
          className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
          style={{
            background: selected
              ? 'linear-gradient(135deg, var(--color-blue), var(--color-cyan))'
              : 'rgba(47,155,255,0.12)',
          }}
        >
          <Icon name={option.icon} className={`w-4.5 h-4.5 ${selected ? 'text-ink' : 'text-blue-glow'}`} />
        </div>
      )}
      <span className="flex-1">
        <span className="block text-sm font-medium text-frost">{option.label}</span>
        {option.sub && <span className="block text-xs text-mist mt-0.5">{option.sub}</span>}
      </span>
      <span
        className={`shrink-0 w-5 h-5 flex items-center justify-center border-2 ${
          multi ? 'rounded-md' : 'rounded-full'
        }`}
        style={{ borderColor: selected ? 'var(--color-blue-bright)' : 'var(--color-line)' }}
      >
        {selected && (
          multi ? <Icon name="check" className="w-3 h-3 text-blue-bright" strokeWidth={3} /> : <span className="w-2.5 h-2.5 rounded-full bg-blue-bright" />
        )}
      </span>
    </button>
  )
}
