import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const skillsRef = useRef(null)
  const pillsRef = useRef([])

  const skillsData = [
    { skill: 'Python', proficiency: 85 },
    { skill: 'Machine Learning', proficiency: 75 },
    { skill: 'Data Visualization', proficiency: 80 },
    { skill: 'SQL', proficiency: 70 },
    { skill: 'Statistics', proficiency: 78 },
    { skill: 'Formula 1 Data Analysis', proficiency: 95 },
  ]

  const techPills = [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Matplotlib',
    'Seaborn',
    'Plotly',
    'SQL',
    'React',
    'Git',
  ]

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Animate skill pills
      gsap.fromTo(
        pillsRef.current,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: false,
            markers: false,
          },
        }
      )
    }
  }, [])

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="section"
      style={{
        padding: 'var(--section-pad-desktop)',
      }}
    >
      <div className="container">
        {/* Section Label */}
        <div
          style={{
            marginBottom: 'var(--space-96)',
            textAlign: 'center',
          }}
        >
          <p className="uppercase" style={{ marginBottom: 'var(--space-48)' }}>
            What I work with
          </p>
          <h2
            style={{
              fontSize: 'var(--fs-h1)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
            }}
          >
            Skills & Tech Stack
          </h2>
        </div>

        {/* Radar Chart */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-64)',
            alignItems: 'center',
            marginBottom: 'var(--space-96)',
          }}
        >
          {/* Chart */}
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="skill" stroke="var(--text-muted)" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="var(--border)" />
                <Radar name="Proficiency" dataKey="proficiency" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
            {skillsData.map((item) => (
              <div key={item.skill}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.skill}</span>
                  <span style={{ color: 'var(--accent)' }}>{item.proficiency}%</span>
                </div>
                <div
                  style={{
                    height: '4px',
                    backgroundColor: 'var(--border)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${item.proficiency}%`,
                      backgroundColor: 'var(--accent)',
                      transition: 'width 0.8s ease-out',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Pills */}
        <div>
          <h3
            style={{
              fontSize: 'var(--fs-h2)',
              marginBottom: 'var(--space-48)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Technologies
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-16)',
            }}
          >
            {techPills.map((tech, index) => (
              <div
                key={tech}
                ref={(el) => (pillsRef.current[index] = el)}
                className="card"
                style={{
                  padding: 'var(--space-16) var(--space-24)',
                  cursor: 'default',
                  transition: 'all var(--transition-standard)',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.1,
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
                <span style={{ fontSize: 'var(--fs-body)', fontWeight: 500 }}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
