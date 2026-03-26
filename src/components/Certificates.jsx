import { useState, useEffect } from 'react'
import { FaCertificate, FaExternalLinkAlt, FaTimes, FaEye } from 'react-icons/fa'

const certificates = [
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1-BNBlP1kusEv0sdO4M_E93SYRBx-Gvf6/preview',
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    date: '2024',
    link: 'https://drive.google.com/file/d/1MwqEUIQak6BPSeloaULsxpL6sBbYFjvc/preview',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    link: 'https://drive.google.com/file/d/1xrqoUDIA9LCSwXhUD9NniiullTs9044l/preview',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte via Forage',
    date: '2024',
    link: 'https://drive.google.com/file/d/1ap_2S5mp0lrjB22oIlP3Puehd6JrvPfB/preview',
  },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Body scroll lock and ESC key handler
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])
  return (
    <section id="certificates" className="py-14 sm:py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 reveal">
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-white tracking-widest">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="reveal glass p-6 rounded-2xl flex flex-col items-center text-center card-hover border border-white/5 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-400 mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <FaCertificate size={28} />
              </div>
              <h3 className="font-display font-bold text-white mb-3 text-lg leading-snug">
                {cert.title}
              </h3>
              <p className="text-primary-400 text-sm font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-dark-400 text-xs mb-5">
                {cert.date}
              </p>
              
              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-auto flex items-center gap-2 text-[10px] font-bold text-white/70 hover:text-primary-400 transition-all uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full border border-white/10"
              >
                View Certificate <FaEye size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-950/90 backdrop-blur-xl transition-opacity duration-500"
            onClick={() => setSelectedCert(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] glass rounded-[2rem] border border-white/10 bg-[#0e1025]/95 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-modal-entrance">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:rotate-90"
            >
              <FaTimes size={20} />
            </button>

            {/* Header Info */}
            <div className="p-8 border-b border-white/5">
              <h2 className="font-display font-bold text-2xl text-white mb-1">
                {selectedCert.title}
              </h2>
              <p className="text-primary-400 text-sm font-medium">
                Issued by {selectedCert.issuer} • {selectedCert.date}
              </p>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-black/20">
              <iframe
                src={selectedCert.link}
                className="w-full h-full border-none"
                title={selectedCert.title}
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
