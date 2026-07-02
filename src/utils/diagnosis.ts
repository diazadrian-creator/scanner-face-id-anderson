import type { Diagnosis, QuizAnswerValue, Route } from '../types'

/**
 * Route is already derived from the first quiz answer (see useQuizState).
 * `answers` is accepted so future refinements can factor in marked patterns
 * (e.g. scale intensity) without changing the call signature.
 */
export function calculateDiagnosis(route: Route | null, _answers: QuizAnswerValue): Diagnosis {
  if (route === 'A') {
    return {
      route: 'A',
      badge: 'Perfil Iniciante com Alto Potencial',
      title: 'Seu perfil é: Iniciante com Alto Potencial',
      text: 'Seu problema não é falta de inteligência. O que falta é um caminho simples para começar do zero, sem precisar de loja, faculdade ou experiência.',
      cta: 'Assistir explicação do método',
    }
  }

  if (route === 'B') {
    return {
      route: 'B',
      badge: 'Perfil Técnico com Bloqueio em Face ID',
      title: 'Seu perfil é: Técnico com Bloqueio em Face ID',
      text: 'Você já tem base. O que está limitando seu faturamento é não dominar reparos avançados de Face ID com um método claro.',
      cta: 'Assistir explicação do método',
    }
  }

  return {
    route: null,
    badge: 'Perfil em Descoberta',
    title: 'Seu perfil está em fase de descoberta',
    text: 'O método pode te guiar do zero até o avançado, no seu próprio ritmo.',
    cta: 'Assistir explicação do método',
  }
}

export function xpForStep(): number {
  return 10
}

export function levelForXp(xp: number): { level: number; label: string } {
  if (xp < 40) return { level: 1, label: 'Novato' }
  if (xp < 80) return { level: 2, label: 'Aprendiz' }
  if (xp < 120) return { level: 3, label: 'Analista' }
  if (xp < 160) return { level: 4, label: 'Especialista' }
  return { level: 5, label: 'Scanner Master' }
}
