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
      {/* ── Atmospheric Glow Blobs ── */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        {/* Top-center indigo glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)', filter: 'blur(120px)' }} />
        {/* Right-side purple haze */}
        <div className="absolute top-1/3 -right-40 w-[600px] h-[700px] rounded-full opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        {/* Bottom-left magenta glow */}
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[600px] rounded-full opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(110px)' }} />
        {/* Mid-left deep indigo */}
        <div className="absolute top-2/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.08) 0%, transparent 70%)', filter: 'blur(130px)' }} />
      </div>
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
