import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const services = [
  'Brand Film',
  'Social Media Reels',
  'Wedding / Event Film',
  'Documentary',
  'Music Video',
  'Other'
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', service: '', message: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  const inputStyle = {
    background: 'var(--surface)',
    border: '1px solid #2a2520',
    color: 'var(--text)',
    padding: '.85rem 1rem',
    fontFamily: "'Syne', sans-serif",
    fontSize: '.85rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s'
  }

  const labelStyle = {
    fontSize: '.7rem', letterSpacing: '.2em',
    textTransform: 'uppercase', color: 'var(--muted)',
    display: 'block', marginBottom: '.4rem'
  }

  return (
    <section id="contact" style={{
      background: 'var(--bg)',
      padding: '6rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div ref={ref} style={{ maxWidth: '700px', width: '100%', textAlign: 'center' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span style={{
            fontSize: '.7rem', letterSpacing: '.35em',
            textTransform: 'uppercase', color: 'var(--gold)',
            display: 'block', marginBottom: '1rem'
          }}>Get in touch</span>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem,4vw,3rem)',
            color: 'var(--cream)', marginBottom: '1rem'
          }}>
            Let's make<br /><em>something great</em>
          </h2>

          <p style={{
            color: 'var(--muted)', fontSize: '.88rem',
            lineHeight: 1.8, marginBottom: '2.5rem'
          }}>
            Have a project in mind? I'd love to hear about it. Tell me what
            you're working on and let's create something unforgettable together.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'left' }}
        >
          {/* Name + Email row */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1rem', marginBottom: '1rem'
          }}>
            <div>
              <label style={labelStyle}>Your name</label>
              <input
                style={inputStyle}
                type="text"
                name="name"
                placeholder="Rahul Mehta"
                value={form.name}
                onChange={handleChange}
                onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                onBlur={e => e.target.style.borderColor = '#2a2520'}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="rahul@company.com"
                value={form.email}
                onChange={handleChange}
                onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                onBlur={e => e.target.style.borderColor = '#2a2520'}
              />
            </div>
          </div>

          {/* Service */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Project type</label>
            <select
              style={{ ...inputStyle, cursor: 'pointer' }}
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Select a service...</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Tell me about your project</label>
            <textarea
              style={{ ...inputStyle, height: '120px', resize: 'none' }}
              name="message"
              placeholder="A brief description of what you need..."
              value={form.message}
              onChange={handleChange}
              onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
              onBlur={e => e.target.style.borderColor = '#2a2520'}
            />
          </div>

          {/* Submit button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: '1rem 3rem',
                background: submitted ? '#4a7c59' : 'var(--gold)',
                color: 'var(--bg)', border: 'none',
                fontFamily: "'Syne', sans-serif",
                fontSize: '.8rem', letterSpacing: '.25em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontWeight: 600, transition: 'all 0.3s'
              }}
              onMouseEnter={e => { if (!submitted) e.target.style.background = 'var(--cream)' }}
              onMouseLeave={e => { if (!submitted) e.target.style.background = 'var(--gold)' }}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: '1.5rem', margin: '2.5rem 0'
        }}>
          <div style={{ flex: 1, height: '1px', background: '#2a2520' }} />
          <span style={{ color: 'var(--muted)', fontSize: '.75rem', letterSpacing: '.1em' }}>
            or reach me directly
          </span>
          <div style={{ flex: 1, height: '1px', background: '#2a2520' }} />
        </div>

        {/* Direct links */}
<div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
  <a href="mailto:tanu@tanusinghedits.com" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '.78rem', letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid transparent', transition: 'all 0.3s', paddingBottom: '2px' }}
    onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderBottomColor = 'var(--gold)' }}
    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
    Email
  </a>
  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '.78rem', letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid transparent', transition: 'all 0.3s', paddingBottom: '2px' }}
    onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderBottomColor = 'var(--gold)' }}
    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
    Instagram
  </a>
  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '.78rem', letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid transparent', transition: 'all 0.3s', paddingBottom: '2px' }}
    onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderBottomColor = 'var(--gold)' }}
    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
    LinkedIn
  </a>
  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '.78rem', letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid transparent', transition: 'all 0.3s', paddingBottom: '2px' }}
    onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderBottomColor = 'var(--gold)' }}
    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
    YouTube
  </a>
</div>

      </div>
    </section>
  )
}