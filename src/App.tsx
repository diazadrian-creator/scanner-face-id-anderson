import { useRef, useState } from 'react'
import { Hero } from './components/Hero'
import { PreFrame } from './components/PreFrame'
import { QuizFlow } from './components/QuizFlow'
import { ResultScreen } from './components/ResultScreen'
import { DiagnosisUnlockModal } from './components/DiagnosisUnlockModal'
import { VSLSection } from './components/VSLSection'
import { OfferSection } from './components/OfferSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { calculateDiagnosis } from './utils/diagnosis'
import { playRewardSound } from './utils/sound'
import type { Diagnosis, QuizAnswerValue, Route } from './types'

type Screen = 'hero' | 'preframe' | 'quiz' | 'result'

function App() {
  const [screen, setScreen] = useState<Screen>('hero')
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null)
  const [offerUnlocked, setOfferUnlocked] = useState(false)
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false)
  const vslRef = useRef<HTMLDivElement>(null)
  const offerRef = useRef<HTMLDivElement>(null)

  function handleQuizFinished(route: Route | null, answers: QuizAnswerValue) {
    setDiagnosis(calculateDiagnosis(route, answers))
    setScreen('result')
    setShowDiagnosisModal(true)
    window.scrollTo({ top: 0 })
  }

  function scrollToVsl() {
    vslRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleWatchExplanation() {
    playRewardSound()
    setShowDiagnosisModal(false)
    setTimeout(scrollToVsl, 150)
  }

  function handleUnlockOffer() {
    setOfferUnlocked(true)
    setTimeout(() => offerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
  }

  if (screen === 'hero') {
    return <Hero onStart={() => setScreen('preframe')} />
  }

  if (screen === 'preframe') {
    return <PreFrame onContinue={() => setScreen('quiz')} />
  }

  if (screen === 'quiz') {
    return <QuizFlow onFinished={handleQuizFinished} />
  }

  if (screen === 'result' && diagnosis) {
    return (
      <div>
        <ResultScreen diagnosis={diagnosis} onCta={scrollToVsl} />
        <DiagnosisUnlockModal
          open={showDiagnosisModal}
          onWatchExplanation={handleWatchExplanation}
          onDismiss={() => setShowDiagnosisModal(false)}
        />
        <div ref={vslRef}>
          <VSLSection diagnosis={diagnosis} unlocked={offerUnlocked} onUnlock={handleUnlockOffer} />
        </div>
        {offerUnlocked && <OfferSection offerRef={offerRef} />}
        <FAQSection />
        <Footer />
      </div>
    )
  }

  return null
}

export default App
