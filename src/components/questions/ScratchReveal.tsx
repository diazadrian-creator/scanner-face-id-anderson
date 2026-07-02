import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../Icon'
import { ContinueBar } from './ContinueBar'
import type { QuizStep } from '../../types'

interface ScratchRevealProps {
  step: QuizStep
  onContinue: () => void
}

const REVEAL_THRESHOLD = 0.42

export function ScratchReveal({ step, onContinue }: ScratchRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const scratching = useRef(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function paintOverlay() {
      if (!canvas || !container || !ctx) return
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height

      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height)
      gradient.addColorStop(0, '#141b2c')
      gradient.addColorStop(1, '#0a0e18')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      ctx.strokeStyle = 'rgba(47,155,255,0.25)'
      ctx.lineWidth = 1
      for (let x = 0; x < rect.width; x += 18) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, rect.height)
        ctx.stroke()
      }
      for (let y = 0; y < rect.height; y += 18) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(rect.width, y)
        ctx.stroke()
      }

      ctx.fillStyle = 'rgba(124,196,255,0.85)'
      ctx.font = '600 13px "Chakra Petch", sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('ARRASTE PARA ESCANEAR', rect.width / 2, rect.height / 2 + 5)
    }

    paintOverlay()
    window.addEventListener('resize', paintOverlay)
    return () => window.removeEventListener('resize', paintOverlay)
  }, [])

  function scratchAt(clientX: number, clientY: number) {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 34, 0, Math.PI * 2)
    ctx.fill()

    checkRevealProgress(ctx, canvas.width, canvas.height)
  }

  function checkRevealProgress(ctx: CanvasRenderingContext2D, w: number, h: number) {
    if (revealed || w === 0 || h === 0) return
    const sampleStep = 12
    let cleared = 0
    let total = 0
    const data = ctx.getImageData(0, 0, w, h).data
    for (let y = 0; y < h; y += sampleStep) {
      for (let x = 0; x < w; x += sampleStep) {
        const idx = (y * w + x) * 4 + 3
        if (data[idx] < 40) cleared++
        total++
      }
    }
    if (total > 0 && cleared / total > REVEAL_THRESHOLD) {
      setRevealed(true)
    }
  }

  function handlePointerDown(e: React.PointerEvent) {
    scratching.current = true
    scratchAt(e.clientX, e.clientY)
  }
  function handlePointerMove(e: React.PointerEvent) {
    if (!scratching.current) return
    scratchAt(e.clientX, e.clientY)
  }
  function handlePointerUp() {
    scratching.current = false
  }

  return (
    <div className="max-w-xl mx-auto px-5 pt-8 pb-28 text-center">
      <h2 className="font-display font-semibold text-xl sm:text-2xl text-frost leading-snug">
        {step.question}
      </h2>
      <p className="mt-2 text-xs sm:text-sm text-mist">{step.scratchSubtitle}</p>

      <div
        ref={containerRef}
        className="relative mt-7 h-56 rounded-2xl overflow-hidden glass select-none"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-blue), var(--color-cyan))' }}>
            <Icon name="scan" className="w-5.5 h-5.5 text-ink" />
          </div>
          <p className="font-display font-semibold text-lg sm:text-xl text-frost text-glow">
            {step.scratchTitle}
          </p>
        </div>

        {!revealed && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full touch-none cursor-pointer"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
        )}
      </div>

      {revealed && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-[11px] tracking-wide text-blue-glow font-display"
        >
          DIAGNÓSTICO PARCIAL DESBLOQUEADO
        </motion.p>
      )}

      <ContinueBar disabled={!revealed} onClick={onContinue} label={revealed ? 'Continuar' : 'Revele para continuar'} />
    </div>
  )
}
