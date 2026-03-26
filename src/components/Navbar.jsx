import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'CV', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].name)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmic/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            <span className="bg-gradient-to-r from-purple-light to-pink-hot bg-clip-text text-fill-transparent">&lt;Portfolio /&gt;</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] md:text-[11px] lg:text-[12px] font-light uppercase tracking-[0.2em] transition-all duration-300 ${
                  active === link.name
                    ? 'text-white opacity-100'
                    : 'text-white opacity-40 hover:opacity-80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white opacity-60 hover:opacity-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-cosmic/95 backdrop-blur-xl ${
          isOpen ? 'max-h-96 opacity-100 border-b border-white/5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[10px] font-light uppercase tracking-[0.3em] transition-all duration-300 ${
                active === link.name
                  ? 'text-white'
                  : 'text-white opacity-40 hover:opacity-100'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
