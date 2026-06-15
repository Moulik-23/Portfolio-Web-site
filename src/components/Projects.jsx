import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Cell,
  LabelList,
  Tooltip,
} from 'recharts'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const projectsRef = useRef(null)
  const cardsRef = useRef([])

  const prismData = [
    { feature: 'Career Matching', score: 92 },
    { feature: 'Skills Analysis', score: 88 },
    { feature: 'AI Mentorship', score: 95 },
    { feature: 'Job Search', score: 78 },
    { feature: 'Path Tracking', score: 83 },
    { feature: 'Personalization', score: 90 },
  ]

  const churnData = [
    { metric: 'Accuracy', value: 86.25 },
    { metric: 'Precision', value: 72.52 },
    { metric: 'F1 Score', value: 58.02 },
  ]

  const networkData = [
    { metric: 'Precision', value: 98.85 },
    { metric: 'Recall', value: 99.37 },
    { metric: 'F1 Score', value: 99.11 },
  ]

  const projects = [
    {
      id: 1,
      title: 'Prism.ai',
      description:
        'AI-powered career guidance platform for Indian students — personalized career matching, skills gap analysis, and Gemini-powered mentorship across 500+ career paths.',
      tags: ['REACT', 'FASTAPI', 'GEMINI AI', 'MONGODB', 'PYTHON'],
      chartType: 'radar',
      chartData: prismData,
      url: 'https://github.com/Moulik-23/Prism.ai',
      live: 'https://prism-ai-iota.vercel.app/',
    },
    {
      id: 2,
      title: 'Customer Churn Prediction',
      description:
        'ANN (Keras/TensorFlow) model predicting bank churn on 10k records. Interactive Streamlit deployment for model inspection and prediction.',
      tags: ['PYTHON', 'TENSORFLOW', 'KERAS', 'STREAMLIT', 'SCIKIT-LEARN'],
      chartType: 'bar',
      chartData: churnData,
      url: 'https://github.com/Moulik-23/Customer-Churn-Prediction',
    },
    {
      id: 3,
      title: 'Fake Website Detection',
      description:
        'Phishing detection pipeline using URL features, modular MLOps, FastAPI deployment and MLflow tracking.',
      tags: ['PYTHON', 'SCIKIT-LEARN', 'FASTAPI', 'MLFLOW', 'MONGODB'],
      chartType: 'horizontal',
      chartData: networkData,
      url: 'https://github.com/Moulik-23/NetworkSecurity',
    },
  ]

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: projectsRef.current,
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
    <section id="projects" ref={projectsRef} className="section" style={{ padding: 'var(--section-pad-desktop)' }}>
      <div className="container">
        <div style={{ marginBottom: 'var(--space-96)', textAlign: 'center' }}>
          <p className="uppercase" style={{ marginBottom: 'var(--space-48)' }}>What I've built</p>
          <h2 style={{ fontSize: 'var(--fs-h1)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Featured Projects</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'var(--space-48)' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', transition: 'all var(--transition-standard)' }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -10, scale: 1.02, borderColor: 'var(--accent)', duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, scale: 1, borderColor: 'var(--border)', duration: 0.3 })}
            >
              <h3 style={{ fontSize: 'var(--fs-h3)', fontFamily: 'var(--font-display)', marginBottom: 'var(--space-16)', color: 'var(--text-primary)' }}>
                {project.title}
              </h3>

              <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', marginBottom: 'var(--space-24)', flex: 1 }}>{project.description}</p>

              <div style={{ marginBottom: 'var(--space-16)' }}>
                <ResponsiveContainer width="100%" height={project.chartType === 'horizontal' ? 140 : 160}>
                  {project.chartType === 'radar' ? (
                    <RadarChart data={project.chartData} cx="50%" cy="50%" outerRadius="60%">
                      <PolarGrid stroke="var(--border)" />
                      <PolarAngleAxis dataKey="feature" tick={{ fill: '#6B6B6B', fontSize: 11 }} />
                      <Radar dataKey="score" stroke="#6C63FF" fill="#6C63FF" fillOpacity={0.4} />
                    </RadarChart>
                  ) : project.chartType === 'bar' ? (
                    <BarChart data={project.chartData} margin={{ left: 0, right: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="metric" tick={{ fill: '#6B6B6B', fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tick={{ fill: '#6B6B6B', fontSize: 11 }} />
                      <ReferenceLine y={86.25} stroke="#F59E0B" strokeDasharray="3 3" label={{ value: 'Accuracy baseline', position: 'top', fill: '#F59E0B', fontSize: 11 }} />
                      <Bar dataKey="value" fill="#6C63FF" isAnimationActive={false}>
                        <LabelList dataKey="value" position="top" formatter={(v) => `${v}%`} style={{ fill: '#6B6B6B', fontSize: 11 }} />
                      </Bar>
                    </BarChart>
                  ) : (
                    <BarChart layout="vertical" data={project.chartData} margin={{ left: 24 }}>
                      <defs>
                        <linearGradient id={`grad-${project.id}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#6C63FF" stopOpacity={1} />
                          <stop offset="100%" stopColor="#E8002D" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis type="number" domain={[90, 100]} tick={{ fill: '#6B6B6B', fontSize: 11 }} />
                      <YAxis type="category" dataKey="metric" tick={{ fill: '#6B6B6B', fontSize: 11 }} />
                      <Bar dataKey="value" fill={`url(#grad-${project.id})`} isAnimationActive={false}>
                        {project.chartData.map((entry, i) => (
                          <Cell key={`cell-${i}`} />
                        ))}
                        <LabelList dataKey="value" position="right" formatter={(v) => `${v}%`} style={{ fill: '#6B6B6B', fontSize: 11 }} />
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'var(--space-16)' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 12, padding: '6px 10px', backgroundColor: 'var(--border)', color: 'var(--text-muted)', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: 'var(--fs-body)', fontWeight: 600 }}
                  onMouseEnter={(e) => { gsap.to(e.currentTarget.querySelector('svg'), { x: 6, duration: 0.2 }) }}
                  onMouseLeave={(e) => { gsap.to(e.currentTarget.querySelector('svg'), { x: 0, duration: 0.2 }) }}>
                  View project <ArrowRight size={16} />
                </a>

                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: '#6B6B6B', fontSize: 13, marginLeft: '6px' }}>
                    · Live demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-48)', textAlign: 'center' }}>
          <button
            onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector('svg'), { x: 6, duration: 0.2 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector('svg'), { x: 0, duration: 0.2 })}
            onClick={() => window.open('https://github.com/Moulik-23', '_blank')}
            style={{ padding: '12px 22px', border: '1px solid var(--accent)', background: 'transparent', color: 'var(--accent)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 600 }}
          >
            View all projects on GitHub
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
