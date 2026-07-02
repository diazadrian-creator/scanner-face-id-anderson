type ScratchNodes = {
  source: AudioBufferSourceNode
  gain: GainNode
}

let ctx: AudioContext | null = null
let noiseBuffer: AudioBuffer | null = null
let scratchNodes: ScratchNodes | null = null
let lastRewardAt = 0

const REWARD_DEBOUNCE_MS = 40

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return null
  if (!ctx) ctx = new AudioContextClass()
  if (ctx.state === 'suspended') ctx.resume().catch(() => {})
  return ctx
}

function getNoiseBuffer(audioCtx: AudioContext): AudioBuffer {
  if (noiseBuffer) return noiseBuffer
  const duration = 0.6
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * duration, audioCtx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  noiseBuffer = buffer
  return buffer
}

/** Short two-note premium "unlock/reward" chime. Debounced so simultaneous triggers don't stack. */
export function playRewardSound() {
  const audioCtx = getContext()
  if (!audioCtx) return

  const nowMs = performance.now()
  if (nowMs - lastRewardAt < REWARD_DEBOUNCE_MS) return
  lastRewardAt = nowMs

  const now = audioCtx.currentTime
  const notes = [
    { freq: 880, start: 0, dur: 0.1 },
    { freq: 1318.5, start: 0.06, dur: 0.16 },
  ]

  for (const { freq, start, dur } of notes) {
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = 'triangle'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0, now + start)
    gain.gain.linearRampToValueAtTime(0.15, now + start + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + dur)
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.start(now + start)
    osc.stop(now + start + dur + 0.02)
  }
}

/** Starts a soft, filtered noise loop simulating a scratch-card texture. Idempotent while already playing. */
export function startScratchSound() {
  const audioCtx = getContext()
  if (!audioCtx || scratchNodes) return

  const source = audioCtx.createBufferSource()
  source.buffer = getNoiseBuffer(audioCtx)
  source.loop = true

  const filter = audioCtx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 1800
  filter.Q.value = 0.7

  const gain = audioCtx.createGain()
  gain.gain.setValueAtTime(0, audioCtx.currentTime)
  gain.gain.linearRampToValueAtTime(0.045, audioCtx.currentTime + 0.05)

  source.connect(filter)
  filter.connect(gain)
  gain.connect(audioCtx.destination)
  source.start()

  scratchNodes = { source, gain }
}

/** Fades out and stops the scratch loop. Safe to call even if not currently playing. */
export function stopScratchSound() {
  if (!ctx || !scratchNodes) return
  const { source, gain } = scratchNodes
  scratchNodes = null

  const now = ctx.currentTime
  gain.gain.cancelScheduledValues(now)
  gain.gain.setValueAtTime(gain.gain.value, now)
  gain.gain.linearRampToValueAtTime(0, now + 0.05)

  setTimeout(() => {
    try {
      source.stop()
      source.disconnect()
      gain.disconnect()
    } catch {
      /* source already stopped */
    }
  }, 70)
}
