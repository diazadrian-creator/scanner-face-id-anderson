export type Route = 'A' | 'B'

export type QuestionType =
  | 'single'
  | 'multiple'
  | 'cards'
  | 'scale'
  | 'scratch'
  | 'loading'

export interface Option {
  id: string
  label: string
  sub?: string
  icon?: IconName
}

export type IconName =
  | 'smartphone'
  | 'tool'
  | 'clock'
  | 'target'
  | 'cpu'
  | 'trending'
  | 'shield'
  | 'zap'
  | 'book'
  | 'alert'
  | 'lock'
  | 'unlock'
  | 'check'
  | 'play'
  | 'dollar'
  | 'calendar'
  | 'star'
  | 'heart'
  | 'user'
  | 'users'
  | 'scan'
  | 'battery'
  | 'brainCircuit'
  | 'compass'

export interface QuizStep {
  id: string
  type: QuestionType
  route?: Route
  badge?: string
  question: string
  subtitle?: string
  options?: Option[]
  multipleMax?: number
  scaleLabels?: [string, string]
  scratchTitle?: string
  scratchSubtitle?: string
  loadingMessages?: string[]
}

export interface QuizAnswerValue {
  [stepId: string]: string | string[] | number
}

export interface Diagnosis {
  route: Route | null
  title: string
  text: string
  cta: string
  badge: string
}
