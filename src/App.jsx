import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import QuoteBlock from './components/QuoteBlock'
import FormulaWall from './components/FormulaWall'
import Contact from './components/Contact'
import { useState } from 'react'

function HomePage() {
  return (
    <>
      <Hero />
      <QuoteBlock
        quote="I knew he would brake, because he has a wife and children."
        attribution="Fernando Alonso"
        race="#BahrainGP 2012"
      />
      <About />
      <Skills />
      <Projects />
      <FormulaWall />
      <QuoteBlock
        quote="To finish first, first you have to finish."
        attribution="Ayrton Senna"
        style="grid-bg"
      />
      <Contact />
    </>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Moulik | Aspiring Data Scientist</title>
        <meta
          name="description"
          content="Moulik - Data Scientist. Specializing in machine learning, data visualization, and interactive portfolio projects."
        />
        <meta name="theme-color" content="#0A0A0A" />
      </Helmet>
      <Router>
        {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
        <div
          style={{
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.5s ease',
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

