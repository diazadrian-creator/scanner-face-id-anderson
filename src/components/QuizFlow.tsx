import { AnimatePresence } from 'framer-motion'
import { useQuizState } from '../hooks/useQuizState'
import { ProgressHeader } from './ProgressHeader'
import { SingleChoice } from './questions/SingleChoice'
import { MultipleChoice } from './questions/MultipleChoice'
import { CardsChoice } from './questions/CardsChoice'
import { ScaleQuestion } from './questions/ScaleQuestion'
import { ScratchReveal } from './questions/ScratchReveal'
import { LoadingDiagnosis } from './questions/LoadingDiagnosis'
import { TOTAL_STEPS } from '../data/quizSteps'
import type { Route, QuizAnswerValue } from '../types'

interface QuizFlowProps {
  onFinished: (route: Route | null, answers: QuizAnswerValue) => void
}

export function QuizFlow({ onFinished }: QuizFlowProps) {
  const { route, answers, currentIndex, currentStep, progress, xp, level, answer, toggleMultiple, goNext, goBack } =
    useQuizState()

  if (!currentStep) return null

  function handleSingleAnswer(value: string) {
    answer(currentStep.id, value)
    setTimeout(goNext, 380)
  }

  function handleScaleAnswer(value: number) {
    answer(currentStep.id, value)
    setTimeout(goNext, 380)
  }

  function handleToggle(optionId: string) {
    toggleMultiple(currentStep.id, optionId, currentStep.multipleMax ?? currentStep.options?.length ?? 99)
  }

  if (currentStep.type === 'loading') {
    return (
      <LoadingDiagnosis
        messages={currentStep.loadingMessages ?? []}
        onComplete={() => onFinished(route, answers)}
      />
    )
  }

  return (
    <div className="min-h-[100svh]">
      <ProgressHeader
        progress={progress}
        stepNumber={currentIndex + 1}
        totalSteps={TOTAL_STEPS}
        xp={xp}
        levelLabel={level.label}
        onBack={currentIndex > 0 ? goBack : undefined}
      />

      <AnimatePresence mode="wait">
        {currentStep.type === 'single' && (
          <SingleChoice
            key={currentStep.id}
            step={currentStep}
            value={answers[currentStep.id] as string | undefined}
            onAnswer={handleSingleAnswer}
          />
        )}
        {currentStep.type === 'cards' && (
          <CardsChoice
            key={currentStep.id}
            step={currentStep}
            value={answers[currentStep.id] as string | undefined}
            onAnswer={handleSingleAnswer}
          />
        )}
        {currentStep.type === 'scale' && (
          <ScaleQuestion
            key={currentStep.id}
            step={currentStep}
            value={answers[currentStep.id] as number | undefined}
            onAnswer={handleScaleAnswer}
          />
        )}
        {currentStep.type === 'multiple' && (
          <MultipleChoice
            key={currentStep.id}
            step={currentStep}
            value={(answers[currentStep.id] as string[]) ?? []}
            onToggle={handleToggle}
            onContinue={goNext}
          />
        )}
        {currentStep.type === 'scratch' && (
          <ScratchReveal key={currentStep.id} step={currentStep} onContinue={goNext} />
        )}
      </AnimatePresence>
    </div>
  )
}
