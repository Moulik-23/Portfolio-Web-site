import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * QuoteBlock Component
 * Displays a cinematic F1 quote with scroll-triggered word illumination
 * 
 * @param {Object} props
 * @param {string} props.quote - The quote text
 * @param {string} props.attribution - Quote author
 * @param {string} props.race - Optional race info (e.g., "#BahrainGP 2012")
 * @param {string} props.style - Optional style variant ('default' or 'grid-bg')
 */
export default function QuoteBlock({ quote, attribution, race, style = 'default' }) {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)
  const wordSpansRef = useRef([])
  const attributionRef = useRef(null)
  const raceRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Split quote into words and create spans
      const words = quote.split(' ')
      const container = quoteRef.current

      // Clear previous content
      container.innerHTML = ''
      wordSpansRef.current = []

      // Create spans for each word
      words.forEach((word, index) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.color = 'var(--text-muted)'
        span.style.transition = 'color 0.3s ease'
        span.style.display = 'inline'
        span.style.marginRight = '0.4em'
        span.className = 'quote-word'
        container.appendChild(span)
        wordSpansRef.current.push(span)

        // Add space
        if (index < words.length - 1) {
          container.appendChild(document.createTextNode(' '))
        }
      })

      // GSAP ScrollTrigger animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      })

      // Animate each word's color from muted to primary
      wordSpansRef.current.forEach((span, index) => {
        timeline.to(
          span,
          {
            color: 'var(--text-primary)',
            duration: 0.5,
          },
          index * 0.05 // Stagger animation
        )
      })

      // Fade in attribution after words are done
      if (attributionRef.current) {
        timeline.to(
          attributionRef.current,
          {
            opacity: 1,
            color: style === 'grid-bg' ? 'var(--accent)' : 'var(--text-primary)',
            duration: 0.5,
          },
          wordSpansRef.current.length * 0.05 + 0.2
        )
      }

      // Fade in race info
      if (raceRef.current) {
        timeline.to(
          raceRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          wordSpansRef.current.length * 0.05 + 0.5
        )
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [quote, style])

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden"
      style={{
        backgroundImage:
          style === 'grid-bg'
            ? 'radial-gradient(2px 2px at 20px 30px, rgba(107, 107, 107, 0.15), rgba(107, 107, 107, 0)),\
              radial-gradient(2px 2px at 60px 70px, rgba(107, 107, 107, 0.1), rgba(107, 107, 107, 0))'
            : 'none',
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0, 25px 25px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Left accent line (only for default style) */}
          {style === 'default' && (
            <div
              style={{
                width: '2px',
                height: '60%',
                backgroundColor: 'var(--f1-red)',
                flexShrink: 0,
              }}
            />
          )}

          {/* Quote content */}
          <div style={{ flex: 1 }}>
            <h1
              ref={quoteRef}
              style={{
                fontSize: 'var(--fs-display)',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            />

            <div
              style={{
                marginTop: '32px',
              }}
            >
              <p
                ref={attributionRef}
                style={{
                  fontSize: 'var(--fs-body-lg)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  opacity: 0,
                  marginBottom: '12px',
                }}
              >
                — {attribution}
              </p>

              {race && (
                <p
                  ref={raceRef}
                  className="mono text-amber"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    opacity: 0,
                    color: 'var(--amber)',
                  }}
                >
                  {race}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
