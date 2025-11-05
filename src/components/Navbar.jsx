import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#intro"
            onClick={(e) => handleSmoothScroll(e, 'intro')}
            className="text-2xl md:text-3xl font-bold text-white hover:text-primary-400 transition-colors"
          >
            Moulik.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#intro"
              onClick={(e) => handleSmoothScroll(e, 'intro')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Intro
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#works"
              onClick={(e) => handleSmoothScroll(e, 'works')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Works
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Say Hello
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
            <a
              href="#intro"
              onClick={(e) => handleSmoothScroll(e, 'intro')}
              className="block text-gray-300 hover:text-white transition-colors font-medium"
            >
              Intro
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="block text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#works"
              onClick={(e) => handleSmoothScroll(e, 'works')}
              className="block text-gray-300 hover:text-white transition-colors font-medium"
            >
              Works
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="block text-gray-300 hover:text-white transition-colors font-medium"
            >
              Say Hello
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar

