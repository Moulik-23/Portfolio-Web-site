import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const nameRef = useRef(null)
  const subtitleRef = useRef(null)
  const cyclingTextRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollHintRef = useRef(null)
  const [currentText, setCurrentText] = useState(0)

  const cyclingTexts = [
    'Python',
    'Machine Learning',
    'Data Visualization',
    'Formula 1 Analytics',
  ]

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    // Hero name animation - staggered letters
    const nameElement = nameRef.current
    if (nameElement) {
      const letters = nameElement.querySelectorAll('span')
      gsap.fromTo(
        letters,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power2.out',
        }
      )
    }

    // Subtitle animation - fade in after name
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8,
          ease: 'power2.out',
        }
      )
    }

    // CTA button animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 1,
          ease: 'power2.out',
        }
      )
    }

    // Scroll hint animation - subtle bounce
    if (scrollHintRef.current) {
      gsap.fromTo(
        scrollHintRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          delay: 1.2,
          ease: 'power2.out',
        }
      )

      gsap.to(scrollHintRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [])

  // Cycling text animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (cyclingTextRef.current && window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
        gsap.to(cyclingTextRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            setCurrentText((prev) => (prev + 1) % cyclingTexts.length)
            gsap.fromTo(
              cyclingTextRef.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.3 }
            )
          },
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [cyclingTexts.length])

  // Handle CTA button hover
  const handleCtaHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleCtaHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px var(--space-32) 60px',
        backgroundColor: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Hero Name */}
        <h1
          ref={nameRef}
          style={{
            fontSize: 'var(--fs-display)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '-3px',
            marginBottom: '24px',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
          }}
        >
          {'MOULIK'.split('').map((letter, i) => (
            <span key={i} style={{ display: 'inline-block' }}>
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: 'var(--fs-h3)',
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            marginBottom: '48px',
            fontWeight: 500,
          }}
        >
          Aspiring Data Scientist. F1 Obsessed.
        </p>

        {/* Cycling text */}
        <div
          style={{
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '64px',
          }}
        >
          <span
            ref={cyclingTextRef}
            style={{
              fontSize: 'var(--fs-h2)',
              fontFamily: 'var(--font-display)',
              color: 'var(--accent)',
              fontWeight: 600,
              minWidth: '300px',
              display: 'inline-block',
            }}
          >
            {cyclingTexts[currentText]}
          </span>
        </div>

        {/* CTA Button */}
        <button
          ref={ctaRef}
          onMouseEnter={handleCtaHover}
          onMouseLeave={handleCtaHoverEnd}
          onClick={() => {
            const aboutSection = document.getElementById('about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn"
          style={{
            fontSize: 'var(--fs-body)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          View my work
        </button>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
          Scroll to explore
        </p>
        <ChevronDown size={20} color="var(--accent)" />
      </div>

      {/* Responsive adjustment */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px var(--space-16) 60px;
          }
          h1 {
            font-size: clamp(48px, 10vw, 72px);
            letter-spacing: -2px;
          }
          p {
            font-size: clamp(20px, 4vw, 32px);
          }
          [role="button"] {
            font-size: 14px;
            padding: var(--space-16) var(--space-24);
          }
          div[style*="bottom: 40px"] {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

