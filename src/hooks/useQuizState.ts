import { useMemo, useState } from 'react'
import { branchStep, getRouteSteps, loadingStep, TOTAL_STEPS } from '../data/quizSteps'
import { levelForXp, xpForStep } from '../utils/diagnosis'
import { playRewardSound } from '../utils/sound'
import type { QuizAnswerValue, Route } from '../types'

export function useQuizState() {
  const [route, setRoute] = useState<Route | null>(null)
  const [answers, setAnswers] = useState<QuizAnswerValue>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [xp, setXp] = useState(0)

  const steps = useMemo(() => {
    if (!route) return [branchStep]
    return [branchStep, ...getRouteSteps(route), loadingStep]
  }, [route])

  const currentStep = steps[currentIndex]
  const isLastAnswerable = currentIndex === steps.length - 2
  const progress = Math.min(currentIndex / (TOTAL_STEPS - 1), 1)
  const level = levelForXp(xp)

  function answer(stepId: string, value: string | string[] | number) {
    setAnswers((prev) => ({ ...prev, [stepId]: value }))
    if (stepId === branchStep.id) {
      setRoute(value === 'zero' ? 'A' : 'B')
    }
  }

  function toggleMultiple(stepId: string, optionId: string, max: number) {
    setAnswers((prev) => {
      const current = (prev[stepId] as string[]) ?? []
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : current.length < max
          ? [...current, optionId]
          : current
      return { ...prev, [stepId]: next }
    })
  }

  function goNext() {
    playRewardSound()
    setXp((v) => v + xpForStep())
    setCurrentIndex((i) => Math.min(i + 1, TOTAL_STEPS - 1))
  }

  function goBack() {
    setCurrentIndex((i) => Math.max(i - 1, 0))
  }

  function reset() {
    setRoute(null)
    setAnswers({})
    setCurrentIndex(0)
    setXp(0)
  }

  return {
    route,
    answers,
    steps,
    currentIndex,
    currentStep,
    isLastAnswerable,
    progress,
    xp,
    level,
    answer,
    toggleMultiple,
    goNext,
    goBack,
    reset,
  }
}
