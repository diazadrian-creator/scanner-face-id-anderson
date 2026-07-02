import { QuestionShell } from './QuestionShell'
import { OptionButton } from './OptionButton'
import type { QuizStep } from '../../types'

interface CardsChoiceProps {
  step: QuizStep
  value?: string
  onAnswer: (optionId: string) => void
}

export function CardsChoice({ step, value, onAnswer }: CardsChoiceProps) {
  return (
    <QuestionShell question={step.question} subtitle={step.subtitle}>
      <div className="grid grid-cols-2 gap-3.5">
        {step.options?.map((opt) => (
          <OptionButton key={opt.id} option={opt} selected={value === opt.id} onClick={() => onAnswer(opt.id)} variant="card" />
        ))}
      </div>
    </QuestionShell>
  )
}
