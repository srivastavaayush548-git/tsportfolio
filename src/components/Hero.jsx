import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animId

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    function initParticles() {
      particles = Array.from({ length: 130 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.6 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5
      )
      grad.addColorStop(0, 'rgba(20,14,8,0.85)')
      grad.addColorStop(0.6, 'rgba(10,8,5,0.95)')
      grad.addColorStop(1, 'rgba(5,3,2,1)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -2) { p.y = canvas.height + 2; p.x = Math.random() * canvas.width }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,169,110,${p.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.3, duration: 0.8 } })
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        display: 'block'
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem' }}>
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '.7rem', letterSpacing: '.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
          Freelance Video Editor
        </motion.p>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 1,
            color: 'var(--cream)', marginBottom: '.5rem'
          }}>
          Tanu<br /><em style={{ color: 'var(--gold)' }}>Singh</em>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: 'clamp(.85rem,1.5vw,1.05rem)', color: 'var(--muted)', letterSpacing: '.08em', marginBottom: '3rem' }}>
          Cinematic storytelling · Brand films · Social content · Documentary
        </motion.p>

        <motion.a custom={3} variants={fadeUp} initial="hidden" animate="visible"
          href="#work" style={{
            display: 'inline-flex', alignItems: 'center', gap: '.75rem',
            padding: '.9rem 2.5rem', border: '1px solid var(--gold-dim)',
            color: 'var(--gold)', textDecoration: 'none',
            fontSize: '.8rem', letterSpacing: '.2em', textTransform: 'uppercase',
            transition: 'all 0.4s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--bg)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
        >
          View My Work ↓
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', opacity: .5
      }}>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'scrollPulse 2s infinite'
        }} />
        <span style={{ fontSize: '.65rem', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll</span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0 } 50% { opacity: 1 }
        }
      `}</style>
    </section>
  )
}