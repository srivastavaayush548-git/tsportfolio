import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "Tanu completely transformed our raw footage into something we're genuinely proud of. The colour grade alone was worth every rupee. Fast turnaround, zero revisions needed — she just got it.",
    name: 'Rohit Sharma',
    role: 'Founder, BoldBrew Studio',
    initials: 'RS'
  },
  {
    id: 2,
    text: "We hired Tanu for our brand film campaign and couldn't be happier. She understood our brand voice without lengthy briefs and delivered cinematic quality on a startup budget.",
    name: 'Meera Kapoor',
    role: 'Marketing Head, Fabrique Co.',
    initials: 'MK'
  },
  {
    id: 3,
    text: "Our wedding film made us cry happy tears. Tanu has this rare ability to capture emotion in the edit — not just the moments, but the feeling. Absolutely recommend her to any couple.",
    name: 'Priya & Aryan',
    role: 'Wedding Client, Delhi 2024',
    initials: 'PA'
  },
  {
    id: 4,
    text: "10 reels, delivered in 5 days, all performing above benchmark. Tanu knows what works on social — pacing, hooks, retention. She's our go-to for all video content now.",
    name: 'Varun Nair',
    role: 'Social Media Lead, Zomato',
    initials: 'VN'
  },
]

function TestiCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        border: '1px solid #2a2520',
        padding: '2rem',
        position: 'relative',
        background: 'var(--bg)'
      }}
    >
      {/* Big quote mark */}
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '5rem', color: 'var(--gold)',
        opacity: .15, position: 'absolute',
        top: '.5rem', left: '1.2rem', lineHeight: 1,
        pointerEvents: 'none'
      }}>"</span>

      {/* Review text */}
      <p style={{
        fontSize: '.88rem', lineHeight: 1.9,
        color: 'var(--muted)', marginBottom: '1.5rem',
        position: 'relative', zIndex: 1
      }}>{t.text}</p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem' }}>
        <div style={{
          width: '40px', height: '40px',
          background: 'var(--gold-dim)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '.75rem', fontWeight: 600,
          color: 'var(--bg)', flexShrink: 0
        }}>{t.initials}</div>
        <div>
          {/* Stars */}
          <div style={{ display: 'flex', gap: '2px', marginBottom: '.3rem' }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: 'var(--gold)', fontSize: '.7rem' }}>★</span>
            ))}
          </div>
          <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--cream)' }}>
            {t.name}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--muted)', letterSpacing: '.05em' }}>
            {t.role}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="reviews" style={{
      background: 'var(--surface)',
      padding: '6rem 3rem'
    }}>
      <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{
            fontSize: '.7rem', letterSpacing: '.35em',
            textTransform: 'uppercase', color: 'var(--gold)',
            display: 'block', marginBottom: '1rem'
          }}>Client love</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem,4vw,3.2rem)',
            color: 'var(--cream)'
          }}>What they say</h2>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {testimonials.map((t, i) => (
            <TestiCard key={t.id} t={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}