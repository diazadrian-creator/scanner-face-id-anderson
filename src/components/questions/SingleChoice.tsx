import { QuestionShell } from './QuestionShell'
import { OptionButton } from './OptionButton'
import type { QuizStep } from '../../types'

interface SingleChoiceProps {
  step: QuizStep
  value?: string
  onAnswer: (optionId: string) => void
}

export function SingleChoice({ step, value, onAnswer }: SingleChoiceProps) {
  return (
    <QuestionShell question={step.question} subtitle={step.subtitle}>
      <div className="flex flex-col gap-3">
        {step.options?.map((opt) => (
          <OptionButton key={opt.id} option={opt} selected={value === opt.id} onClick={() => onAnswer(opt.id)} />
        ))}
      </div>
    </QuestionShell>
  )
}
