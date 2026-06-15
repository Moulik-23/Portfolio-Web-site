import { useState, useEffect } from 'react'

const Loading = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => onLoadingComplete?.(), 500)
    }, 1600)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  const containerStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-primary)',
    transition: 'opacity 0.5s ease',
  }

  // Simple F1 car SVG animation
  const f1Svg = (
    <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect x="0" y="48" width="220" height="8" fill="rgba(255,255,255,0.03)" />
        <g id="car" transform="translate(0,0)">
          <rect x="20" y="28" width="120" height="18" rx="6" fill="var(--accent)" />
          <rect x="130" y="34" width="30" height="12" rx="4" fill="var(--surface)" />
          <circle cx="40" cy="54" r="8" fill="var(--surface)" />
          <circle cx="120" cy="54" r="8" fill="var(--surface)" />
          <circle cx="160" cy="54" r="8" fill="var(--surface)" />
        </g>
      </g>
      <style>{`\n        @keyframes drive { 0% { transform: translateX(-20px);} 50% { transform: translateX(8px);} 100% { transform: translateX(-20px);} }\n        #car { animation: drive 0.9s ease-in-out infinite; transform-origin: center; }\n      `}</style>
    </svg>
  )

  return (
    <div style={{ ...containerStyle, opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}>
      <div style={{ textAlign: 'center' }}>
        {f1Svg}
        <p style={{ marginTop: '18px', color: 'var(--text-muted)', fontSize: '16px' }}>Starting engines…</p>
      </div>
    </div>
  )
}

export default Loading

