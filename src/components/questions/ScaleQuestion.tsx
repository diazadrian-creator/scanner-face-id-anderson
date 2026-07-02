import { QuestionShell } from './QuestionShell'
import type { QuizStep } from '../../types'

interface ScaleQuestionProps {
  step: QuizStep
  value?: number
  onAnswer: (value: number) => void
}

export function ScaleQuestion({ step, value, onAnswer }: ScaleQuestionProps) {
  return (
    <QuestionShell question={step.question} subtitle={step.subtitle}>
      <div className="flex justify-between gap-2.5">
        {[1, 2, 3, 4, 5].map((n) => {
          const selected = value === n
          return (
            <button
              key={n}
              onClick={() => onAnswer(n)}
              className="flex-1 aspect-square rounded-2xl glass flex items-center justify-center font-display font-semibold text-lg text-frost transition-all duration-200"
              style={{
                boxShadow: selected ? '0 0 22px rgba(47,155,255,0.55)' : undefined,
                borderColor: selected ? 'var(--color-blue-bright)' : undefined,
                background: selected
                  ? 'linear-gradient(160deg, rgba(47,155,255,0.35), rgba(79,224,255,0.12))'
                  : undefined,
              }}
            >
              {n}
            </button>
          )
        })}
      </div>
      {step.scaleLabels && (
        <div className="flex justify-between mt-3 text-[11px] text-mist-dim px-1">
          <span>{step.scaleLabels[0]}</span>
          <span>{step.scaleLabels[1]}</span>
        </div>
      )}
    </QuestionShell>
  )
}
