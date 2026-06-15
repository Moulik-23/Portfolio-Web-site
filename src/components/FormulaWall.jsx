import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import KaTeX from 'katex'

gsap.registerPlugin(ScrollTrigger)

export default function FormulaWall() {
  const formulasRef = useRef(null)
  const cardsRef = useRef([])

  const formulas = [
    {
      latex: "P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}",
      name: "Bayes' Theorem",
      explanation: 'How to update your beliefs when new evidence arrives.',
    },
    {
      latex: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
      name: 'Normal Distribution',
      explanation: 'Why most things in nature cluster around an average.',
    },
    {
      latex: "\\theta := \\theta - \\alpha \\nabla J(\\theta)",
      name: 'Gradient Descent',
      explanation: 'How machines learn — one small step at a time.',
    },
    {
      latex: "H = -\\sum p(x) \\log_2(p(x))",
      name: 'Shannon Entropy',
      explanation: 'The mathematical measure of surprise.',
    },
    {
      latex: "\\Delta t = t_{driver} - t_{fastest}",
      name: 'Lap Time Delta',
      explanation: 'The only formula that matters on qualifying Saturday.',
    },
  ]

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formulasRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: false,
            markers: false,
          },
        }
      )
    }
  }, [])

  // Render KaTeX formula
  const renderFormula = (latex) => {
    try {
      const html = KaTeX.renderToString(latex, { throwOnError: false })
      return <div dangerouslySetInnerHTML={{ __html: html }} />
    } catch (e) {
      return <span>{latex}</span>
    }
  }

  return (
    <section
      id="formulas"
      ref={formulasRef}
      className="section"
      style={{
        padding: 'var(--section-pad-desktop)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            marginBottom: 'var(--space-96)',
            textAlign: 'center',
          }}
        >
          <p className="uppercase" style={{ marginBottom: 'var(--space-48)' }}>
            Formulas I love
          </p>
          <h2
            style={{
              fontSize: 'var(--fs-h1)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
            }}
          >
            The Math Behind It All
          </h2>
        </div>

        {/* Formulas Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-48)',
          }}
        >
          {formulas.map((formula, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-24)',
                transition: 'all var(--transition-standard)',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  borderColor: 'var(--accent)',
                  duration: 0.3,
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  borderColor: 'var(--border)',
                  duration: 0.3,
                })
              }}
            >
              {/* Formula */}
              <div
                style={{
                  fontSize: '18px',
                  padding: 'var(--space-24)',
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '80px',
                  color: 'var(--accent)',
                  overflow: 'auto',
                }}
              >
                {renderFormula(formula.latex)}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: 'var(--fs-h3)',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                {formula.name}
              </h3>

              {/* Explanation */}
              <p
                style={{
                  fontSize: 'var(--fs-body)',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}
              >
                "{formula.explanation}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat"] {
            grid-template-columns: 1fr;
          }
        }
        .katex {
          font-size: 1.2em;
        }
      `}</style>
    </section>
  )
}
