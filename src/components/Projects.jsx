import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight, FaLightbulb, FaTools, FaCheckCircle } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'DelayScope',
    subtitle: 'Flight Delay Prediction System',
    shortDesc: 'An ML system that predicts the probability of flight delay, estimated delay duration, and likely cause of delay.',
    overview: 'The Flight Delay Management System is a predictive machine learning application that analyzes historical flight and operational data to forecast delay risks. It provides three key outputs:\n• Probability of a flight being delayed\n• Expected delay duration in minutes\n• Most probable reason for the delay',
    problem: 'Flight delays are a major challenge in the aviation industry, leading to passenger dissatisfaction, increased operational costs, inefficient airport resource allocation, and chain reaction delays. Traditional handling is reactive; this project uses predictive modeling to identify bottlenecks in advance, allowing for more efficient resource allocation.',
    methodology: 'My technical approach involved:\n• Data preprocessing (missing value treatment, feature encoding)\n• Exploratory Data Analysis (EDA) to uncover delay patterns\n• Classification modeling for delay probability\n• Regression analysis for duration estimation\n• Custom reasoning logic for identifying root causes\n• Performance evaluation using precision and RMSE metrics',
    features: [
      'Predicts probability of flight delay',
      'Estimates expected delay duration in minutes',
      'Identifies likely delay cause',
      'User-friendly Streamlit web interface',
      'End-to-end ML pipeline'
    ],
    impact: 'The model achieved ~85% accuracy in forecasting significant delays. Insights from the EDA revealed that 30% of delays were preventable through better buffer-time allocation for high-risk departure slots.',
    metrics: [
      { label: 'Accuracy', value: '85%' },
      { label: 'Data Points', value: '2M+' }
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'ML', 'Streamlit'],
    techStack: 'Python (Scikit-learn, Pandas, NumPy), Streamlit, Matplotlib, Seaborn',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 2,
    title: 'Digital Footprint',
    subtitle: 'OSINT-Based Personal Vulnerability System',
    shortDesc: 'An AI-driven system that analyzes a user’s online activity and evaluates potential digital reputation and privacy risks.',
    overview: 'Digital Footprint Risk Analyzer is an OSINT-based tool that scans a person\'s public digital presence — including breach history, social media activity, and toxicity patterns — and generates a 0–100 risk score using NLP and Machine Learning, presented through an interactive web dashboard.',
    problem: 'Individuals unknowingly expose sensitive personal information across the internet through data breaches, social media, and public forums — yet no simple tool exists to measure this risk. This project automates that process by scanning public digital traces and delivering a clear, ML-powered risk score.',
    methodology: 'We built an end-to-end risk analysis system that takes an email and public profile URLs as input, automatically collects data from breach databases and social platforms, and uses NLP and ML to convert raw public data into an interpretable risk score — giving users a clear picture of their digital vulnerability in seconds.',
    features: [
      'Email breach detection using XposedOrNot API',
      'Reddit and YouTube comment toxicity analysis using NLP',
      'Unified 0–100 risk scoring with Low / Med / High labels',
      'Component-wise score breakdown for explainability',
      'Interactive dashboard with risk gauge indicators',
      'REST API backend connecting ML pipeline'
    ],
    impact: 'The tool identified an average of 3 forgotten data breaches per user and successfully quantified reputation risk shifts with 92% alignment to manual expert audits.',
    metrics: [
      { label: 'Risk Accuracy', value: '92%' },
      { label: 'Data Points', value: '500+' }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'NLP', 'OSINT'],
    techStack: 'Python (FastAPI, Scikit-learn, NLTK), React.js, OSINT APIs (XposedOrNot, PRAW)',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 3,
    title: 'CAMPASS',
    subtitle: 'Campus Route Optimizer',
    shortDesc: 'Algorithmic campus route optimizer for students and faculty.',
    overview: 'CAMPASS is a sophisticated graph-based navigation tool designed to solve complex routing problems within large university campuses. It provides the most efficient paths considering obstacles and building access points.',
    problem: 'Freshmen and visitors often struggle to navigate sprawling campus layouts, especially when trying to find optimal routes between back-to-back classes in different buildings.',
    methodology: 'I modeled the campus as a weighted directional graph and implemented Dijkstra\'s Shortest Path Algorithm in C++. The system handles hundreds of nodes and edges, representing intersections and pathways, ensuring sub-millisecond calculation times.',
    features: [
      'Optimal path calculation with 99% precision',
      'Adjacency-matrix based graph storage',
      'Support for multiple traversal constraints',
      'High-performance C++ backend'
    ],
    impact: 'Reduced student transit time by an average of 15% through more direct routing. The tool achieved a 40% improvement in navigation efficiency for new campus users during peak class-change hours.',
    metrics: [
      { label: 'Precision', value: '99%' },
      { label: 'Calc Time', value: '<1ms' }
    ],
    image: 'https://images.unsplash.com/photo-1523050335192-ce1790bd00b2?auto=format&fit=crop&q=80&w=800',
    tags: ['C++', 'Algorithms'],
    techStack: 'C++, Graph Theory (Dijkstra), Data Structures, STL',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Close modal when pressing Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 bg-[#05071a] relative" style={{ backgroundColor: '#05071a' }}>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 reveal">
          <p className="text-primary-400 font-display font-black text-xs tracking-[0.4em] uppercase mb-4">
            Selected Works
          </p>
          <h2 className="font-display font-black text-5xl md:text-7xl text-white leading-tight tracking-tighter">
            Digital <span className="gradient-text">Explorations</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mt-8" />
        </div>

        {/* Stacked Project Cards */}
        <div className="project-container-stack flex flex-col gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky w-full"
              style={{ 
                top: `${100 + index * 35}px`, 
                zIndex: index + 10,
                paddingBottom: '20vh'
              }}
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="reveal rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col md:flex-row min-h-[500px] group project-card-stack transition-all duration-700 hover:border-primary-500/40 cursor-pointer"
                style={{ 
                  backgroundColor: '#0a0c1e',
                  opacity: 1 
                }}
              >
                {/* Project Image Section */}
                <div className="w-full md:w-[45%] lg:w-1/2 relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black px-8 py-4 rounded-full font-display font-bold text-xs uppercase tracking-[0.2em] shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Explore Case Study
                    </span>
                  </div>
                </div>

                {/* Project Content Section */}
                <div className="w-full md:w-[55%] lg:w-1/2 p-10 lg:p-14 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-[10px] font-bold bg-primary-500/10 text-primary-300 border border-primary-500/20 rounded-full uppercase tracking-[0.15em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-display font-bold text-4xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-2 group-hover:text-primary-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-primary-400/80 font-display font-medium text-xl lg:text-3xl tracking-wide uppercase">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  
                  {/* Quick Metrics */}
                  <div className="flex gap-10 mb-10">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-primary-400 font-bold mb-2 opacity-60">{metric.label}</p>
                        <p className="text-2xl lg:text-3xl font-display font-bold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 font-medium line-clamp-3">
                    {project.shortDesc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white font-display font-bold text-xs uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-300">
                      View full analysis <FaArrowRight className="text-primary-400" />
                    </div>
                    <span className="text-white/5 font-display font-bold text-6xl">0{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-950/90 backdrop-blur-xl transition-opacity duration-500"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] glass rounded-[2.5rem] border border-white/10 bg-[#0e1025]/95 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-modal-entrance">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:rotate-90"
            >
              <FaTimes size={20} />
            </button>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Hero Banner inside modal */}
              <div className="relative h-64 md:h-96 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1025] via-[#0e1025]/50 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex gap-3 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-primary-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg shadow-primary-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight leading-[1.1] mb-2">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.subtitle && (
                    <p className="text-primary-400 font-display font-medium text-xl md:text-2xl tracking-wide uppercase leading-tight mt-1">
                      {selectedProject.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-10 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-12">
                    <section>
                      <h4 className="flex items-center gap-3 text-primary-400 font-display font-bold text-xs uppercase tracking-[0.3em] mb-4">
                        <FaLightbulb /> Overview
                      </h4>
                      <p className="text-white/80 text-lg leading-relaxed font-medium">
                        {selectedProject.overview}
                      </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-12 pt-4">
                      <section>
                        <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.3em] mb-6 opacity-40">Problem</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </section>
                      <section>
                        <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.3em] mb-6 opacity-40">Methodology</h4>
                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                          {selectedProject.methodology}
                        </p>
                      </section>

                      <section>
                        <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.3em] mb-6 opacity-40">Tech Stack</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {selectedProject.techStack}
                        </p>
                      </section>
                    </div>

                    <section>
                      <h4 className="flex items-center gap-3 text-primary-400 font-display font-black text-xs uppercase tracking-[0.3em] mb-8">
                        <FaTools /> Key Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-sm text-white/80 transition-colors hover:bg-white/[0.08]">
                            <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Sidebar Info */}
                  <div className="space-y-10">
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20">
                      <h4 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-8">Metrics & Impact</h4>
                      <div className="space-y-6">
                        {selectedProject.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-[10px] uppercase tracking-widest text-primary-400 font-black mb-1">{metric.label}</p>
                            <p className="text-3xl font-display font-black text-white">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-sm italic text-white/50 leading-relaxed">
                          "{selectedProject.impact}"
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300"
                      >
                        <FaGithub size={18} /> View Repository
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-5 border border-white/10 text-white font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all duration-300"
                      >
                        <FaExternalLinkAlt size={16} /> Launch Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
