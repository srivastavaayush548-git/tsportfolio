import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1, featured: true,
    category: 'Brand Film',
    title: 'Nykaa — Beauty Beyond Labels',
    desc: '2-min brand film · Color grading · Sound design',
    bg: 'linear-gradient(135deg,#1a0a0a,#3d1515)'
  },
  {
    id: 2,
    category: 'Documentary',
    title: 'Voices of Varanasi',
    desc: '30-min short doc · Full edit',
    bg: 'linear-gradient(135deg,#0a0f1a,#152040)'
  },
  {
    id: 3,
    category: 'Wedding Film',
    title: 'Priya & Arjun',
    desc: 'Cinematic highlight reel',
    bg: 'linear-gradient(135deg,#0a1a0f,#152a1a)'
  },
  {
    id: 4,
    category: 'Social Content',
    title: 'Zomato — Reel Series',
    desc: '10-piece Instagram series',
    bg: 'linear-gradient(135deg,#1a150a,#3a2c10)'
  },
  {
    id: 5,
    category: 'Music Video',
    title: 'Aarav Shah — "Kal"',
    desc: "Indie music video · Director's cut",
    bg: 'linear-gradient(135deg,#150a1a,#2a1535)'
  },
]

function PortfolioCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        aspectRatio: project.featured ? '16/9' : '16/10',
        gridColumn: project.featured ? 'span 2' : 'span 1',
        background: project.bg, cursor: 'pointer'
      }}
    >
      {/* Play icon for featured */}
      {project.featured && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity=".2">
            <circle cx="40" cy="40" r="38" stroke="#C9A96E" strokeWidth="1" />
            <polygon points="32,26 32,54 58,40" fill="#C9A96E" />
          </svg>
        </div>
      )}

      {project.featured && (
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem',
          fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)', background: 'rgba(0,0,0,0.4)',
          padding: '.3rem .6rem'
        }}>Featured</span>
      )}

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5,4,3,0.95) 0%, rgba(5,4,3,0.3) 60%, transparent 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: '1.5rem'
      }}>
        <span style={{
          fontSize: '.65rem', letterSpacing: '.3em',
          textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.4rem'
        }}>{project.category}</span>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.2rem', color: 'var(--cream)'
        }}>{project.title}</p>
        <p style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '.3rem' }}>
          {project.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="work" style={{ background: 'var(--bg)', padding: '6rem 3rem' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span style={{
          fontSize: '.7rem', letterSpacing: '.35em',
          textTransform: 'uppercase', color: 'var(--gold)',
          display: 'block', marginBottom: '1rem'
        }}>Selected work</span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--cream)'
        }}>The Reel</h2>
      </motion.div>

      {/* Grid */}
      <div ref={ref} style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px', background: '#1a1710'
      }}>
        {projects.map((project, i) => (
          <PortfolioCard key={project.id} project={project} index={i} />
        ))}
      </div>

    </section>
  )
}