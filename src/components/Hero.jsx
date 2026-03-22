import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const roles = ['Python Developer', 'Data Analyst', 'ML Enthusiast', 'C++ Programmer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.slice(0, text.length - 1)
              : currentRole.slice(0, text.length + 1)
          )
        },
        isDeleting ? 50 : 100
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-cosmic"
    >
      <div className="ellipse-glow-left" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-12 flex-1">
        {/* Left Column - Hero Content Area */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full md:pl-[12%] lg:pl-[15%]">
          {/* Kicker Line */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in group">
            <div className="hidden md:block w-12 h-[1px] bg-white/40 group-hover:w-20 transition-all duration-500" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/60 uppercase lg:text-[12px]">
              Data Scientist
            </span>
          </div>

          {/* Name Heading Block - Left-Aligned Editorial Composition */}
          <div className="relative w-full mb-10 flex flex-col pointer-events-none">
            {/* Anshika & Tyagi - aligned to same vertical axis */}
            <h1 className="flex flex-col">
              <span className="font-display font-black text-[15vw] sm:text-[12vw] md:text-[9vw] lg:text-[10vw] text-white leading-[0.85] tracking-tighter animate-slide-up">
                Anshika
              </span>
              
              {/* Tyagi - No horizontal offset, maintained vertical overlap */}
              <span className="font-display font-black text-[15vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[10.5vw] text-stroke-purple animate-slide-up leading-[0.85] tracking-tighter transition-all -mt-[3vw] md:-mt-[1.5vw]" style={{ animationDelay: '0.1s' }}>
                Tyagi
              </span>
            </h1>
          </div>

          {/* Tagline - Aligned with the left axis */}
          <p className="max-w-xl text-sm font-normal leading-relaxed text-white/60 mb-12 animate-fade-in lg:text-base pr-4" style={{ animationDelay: '0.3s' }}>
            I find meaning in messy data and build tools that make complex things simple.
          </p>

          {/* CTA Buttons - Balanced & Left-Aligned Row */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-5 animate-fade-in w-full sm:w-auto" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              className="px-6 sm:px-10 py-5 border border-white/20 bg-transparent text-[10px] sm:text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-cosmic transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 sm:px-10 py-5 border border-white/20 bg-transparent text-[10px] sm:text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-3 hover:bg-white hover:text-cosmic transition-all duration-300"
            >
              <HiDownload size={18} className="hidden sm:block" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column - Status Pill Badge (Fixed in screen) */}
        <div className="hidden md:flex flex-col justify-center animate-fade-in pr-[4%] lg:pr-[6%]" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-center gap-4 px-8 py-5 bg-accent-green/5 border border-accent-green/10 rounded-md backdrop-blur-md">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-green shadow-[0_0_15px_rgba(52,211,153,0.4)] animate-pulse-green" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-green uppercase whitespace-nowrap">Open to Work</span>
          </div>
        </div>
      </div>

    </section>
  )
}
