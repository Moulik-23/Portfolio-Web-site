import React, { useRef } from 'react'
import gsap from 'gsap'

export default function Contact() {
  const contactRef = useRef(null)
  const linksRef = useRef([])

  const contactLinks = [
    { label: 'Email', href: 'mailto:moulik@example.com', icon: '✉' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/moulik-zinzala-2749752b7', target: '_blank' },
    { label: 'GitHub', href: 'https://github.com/Moulik-23', target: '_blank' },
  ]

  const handleLinkHover = (e) => {
    gsap.to(e.currentTarget, {
      x: 10,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleLinkLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <section
      id="contact"
      ref={contactRef}
      className="section"
      style={{
        padding: 'var(--section-pad-desktop)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: 'var(--fs-h1)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            marginBottom: 'var(--space-24)',
          }}
        >
          Let's build something.
        </h2>

        <p
          style={{
            fontSize: 'var(--fs-h3)',
            color: 'var(--text-muted)',
            marginBottom: 'var(--space-96)',
          }}
        >
          Open to internships, data projects, and F1 debates.
        </p>

        {/* Contact Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-32)',
            maxWidth: '600px',
            margin: '0 auto var(--space-96)',
          }}
        >
          {contactLinks.map((link, index) => (
            <a
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--space-24)',
                borderTop: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-standard)',
                cursor: 'pointer',
              }}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <span
                style={{
                  fontSize: 'var(--fs-h2)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontSize: '24px',
                  color: 'var(--accent)',
                }}
              >
                →
              </span>
            </a>
          ))}
        </div>

        {/* Footer Info */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 'var(--space-48)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-24)',
          }}
        >
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Based in India. Available globally.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Built with React + GSAP
          </p>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: 'var(--space-32)' }}>
          © 2025 Moulik. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="justify-content: space-between"] {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
