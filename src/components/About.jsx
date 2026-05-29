import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import tanuPhoto from '../assets/tanu.jpeg'

const skills = [
  'Adobe Premiere Pro', 'Canva',
  'Adobe Photoshop', 'Color Grading',
  'Sound Design', 
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" style={{
      background: 'var(--surface)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 3rem'
    }}>
      <div ref={ref} style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center',
        width: '100%'
      }}>

        {/* Left — photo card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%', aspectRatio: '3/4',
            background: 'var(--surface2)',
            border: '1px solid #2a2520',
            position: 'relative', overflow: 'hidden'
          }}>
            {/* Actual photo */}
            <img
              src={tanuPhoto}
              alt="Tanu Singh"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block'
              }}
            />

            {/* Film strip overlay on top of photo */}
            
          </div>

          {/* Gold badge */}
          <div style={{
            position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
            background: 'var(--gold)', color: 'var(--bg)',
            padding: '1.2rem 1.5rem', textAlign: 'center',
            zIndex: 2
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem', fontWeight: 700, display: 'block'
            }}>2+</span>
            <span style={{
              fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase'
            }}>Years of craft</span>
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{
            fontSize: '.7rem', letterSpacing: '.35em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '1.5rem', display: 'block'
          }}>About me</span>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem,3.5vw,2.8rem)',
            lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--cream)'
          }}>
            Frames that tell<br /><em>your story</em>
          </h2>

          <p style={{
            color: 'var(--muted)', lineHeight: 1.9,
            fontSize: '.9rem', marginBottom: '1rem'
          }}>
            I'm a Delhi-based video editor with a passion for crafting stories
            that move people — whether it's a brand film, a wedding highlight,
            or a viral social reel.
          </p>
          <p style={{
            color: 'var(--muted)', lineHeight: 1.9,
            fontSize: '.9rem', marginBottom: '2rem'
          }}>
            Every cut I make is intentional. Every transition is earned. I work
            closely with clients to understand their vision and bring it to life
            with cinematic precision.
          </p>

          {/* Skills grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem'
          }}>
            {skills.map(skill => (
              <div key={skill} style={{
                display: 'flex', alignItems: 'center',
                gap: '.6rem', fontSize: '.78rem', color: 'var(--muted)'
              }}>
                <span style={{
                  width: '6px', height: '6px',
                  background: 'var(--gold)',
                  borderRadius: '50%', flexShrink: 0
                }} />
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}