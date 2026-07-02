import { QuestionShell } from './QuestionShell'
import { OptionButton } from './OptionButton'
import { ContinueBar } from './ContinueBar'
import type { QuizStep } from '../../types'

interface MultipleChoiceProps {
  step: QuizStep
  value: string[]
  onToggle: (optionId: string) => void
  onContinue: () => void
}

export function MultipleChoice({ step, value, onToggle, onContinue }: MultipleChoiceProps) {
  const max = step.multipleMax ?? step.options?.length ?? 99
  return (
    <>
      <QuestionShell question={step.question} subtitle={step.subtitle}>
        <div className="flex flex-col gap-3">
          {step.options?.map((opt) => {
            const selected = value.includes(opt.id)
            const blocked = !selected && value.length >= max
            return (
              <OptionButton
                key={opt.id}
                option={opt}
                selected={selected}
                multi
                onClick={() => !blocked && onToggle(opt.id)}
              />
            )
          })}
        </div>
        <p className="text-center text-[11px] text-mist-dim mt-4">
          {value.length}/{max} selecionadas
        </p>
      </QuestionShell>
      <ContinueBar disabled={value.length === 0} onClick={onContinue} />
    </>
  )
}
