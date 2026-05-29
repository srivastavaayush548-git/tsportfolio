import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      padding: '1.5rem 3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid #1e1c18' : '1px solid transparent',
      transition: 'all 0.4s ease'
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.3rem', color: 'var(--gold)', letterSpacing: '.05em'
      }}>TS</div>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['About', 'Work', 'Reviews', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '.8rem', letterSpacing: '.15em', textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}