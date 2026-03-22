import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    revealElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen selection:bg-primary-500/30 selection:text-primary-200">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
