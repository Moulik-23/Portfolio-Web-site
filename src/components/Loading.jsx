import { useState, useEffect } from 'react'

const Loading = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => {
        onLoadingComplete()
      }, 500) // Fade out delay
    }, 2000) // Minimum loading time

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  if (!loading) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="loading-content">
          <div className="atom-spinner">
            <div className="atom-spinner-inner">
              <div className="atom-spinner-core"></div>
              <div className="atom-spinner-orbit orbit-1"></div>
              <div className="atom-spinner-orbit orbit-2"></div>
              <div className="atom-spinner-orbit orbit-3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
      <div className="loading-content">
        <div className="atom-spinner">
          <div className="atom-spinner-inner">
            <div className="atom-spinner-core"></div>
            <div className="atom-spinner-orbit orbit-1"></div>
            <div className="atom-spinner-orbit orbit-2"></div>
            <div className="atom-spinner-orbit orbit-3"></div>
          </div>
        </div>
        <p className="text-gray-400 mt-8 text-lg animate-pulse">Loading Portfolio...</p>
      </div>
    </div>
  )
}

export default Loading

