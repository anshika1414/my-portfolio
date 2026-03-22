import { useState, useEffect } from 'react'

const skillCategories = [
  {
    id: '01',
    title: 'Languages',
    skills: ['C++', 'Python', 'C', 'SQL', 'JavaScript'],
  },
  {
    id: '02',
    title: 'Libraries/ML',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Plotly'],
  },
  {
    id: '03',
    title: 'Tools/Platform',
    skills: ['Power BI', 'Tableau', 'Excel', 'MySQL', 'Jupyter Notebook', 'GitHub', 'DevOps'],
  },
  {
    id: '04',
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Team Player', 'Adaptability', 'Communication'],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title)
  const currentCategory = skillCategories.find(cat => cat.title === activeTab) || skillCategories[0]

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
    })

    revealElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-4 bg-[#0c0c0c] min-h-screen font-sans selection:bg-primary-500/30">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
        {/* Header Section */}
        <div className="mb-12 reveal">
          <p className="text-[rgba(255,255,255,0.4)] font-medium text-xs tracking-[0.3em] uppercase mb-4">
            WHAT I KNOW
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight text-white mb-8 tracking-widest">
            My <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-full h-[1px] bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-0 relative">
          {/* Vertical Divider Line */}
          <div className="absolute left-[260px] top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />

          {/* Sidebar: Navigation */}
          <div className="lg:pr-8 mb-12 lg:mb-0 reveal">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar gap-2 lg:gap-0 sticky top-32">
              {skillCategories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(cat.title)}
                  className={`group relative flex items-center lg:w-full py-4 px-6 lg:px-0 transition-all duration-300 whitespace-nowrap lg:whitespace-normal overflow-hidden h-16 lg:h-20 ${
                    activeTab === cat.title ? 'z-10' : ''
                  }`}
                >
                  {/* Left Accent Border for Active */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-primary-400 transition-transform duration-500 origin-top hidden lg:block ${
                    activeTab === cat.title ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                  }`} />

                  {/* Ghost Text Background */}
                  <div className={`absolute left-4 lg:left-2 top-1/2 -translate-y-1/2 lg:-translate-y-1/2 font-display font-black text-4xl lg:text-5xl tracking-tighter transition-all duration-700 pointer-events-none uppercase -z-10 ${
                    activeTab === cat.title ? 'text-white/[0.03] translate-x-4 lg:translate-x-8 scale-110' : 'text-transparent'
                  }`}>
                    {cat.title}
                  </div>

                  <div className="flex items-center gap-4 lg:pl-6">
                    <span className={`text-xs font-mono transition-colors duration-300 ${
                      activeTab === cat.title ? 'text-primary-400' : 'text-white/20'
                    }`}>
                      {cat.id}
                    </span>
                    <span className={`text-sm lg:text-base font-medium tracking-widest uppercase transition-all duration-300 ${
                      activeTab === cat.title 
                        ? 'text-white font-bold translate-x-1 lg:translate-x-2' 
                        : 'text-white/30 group-hover:text-white/50'
                    }`}>
                      {cat.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel: Skills Wall */}
          <div className="lg:pl-20 reveal min-h-[500px]">
            <div key={activeTab} className="animate-fade-in">
              {/* Category Header */}
              <div className="mb-12">
                <h3 className="text-[40px] font-display font-bold text-primary-400 leading-none mb-3">
                  {currentCategory.title}
                </h3>
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] text-white/40 uppercase mb-6">
                  {currentCategory.skills.length} SKILLS
                </p>
                <div className="w-full h-[1px] bg-white/10" />
              </div>

              {/* Skills List */}
              <div className="divide-y divide-white/[0.05]">
                {currentCategory.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group flex items-center justify-between py-6 transition-all duration-300 cursor-default px-2 -mx-2 hover:bg-white/[0.02] rounded-lg"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(167,139,250,0.4)] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                      <span className="text-xl sm:text-2xl text-white/65 group-hover:text-white transition-colors duration-300 tracking-tight">
                        {skill}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-white/20 group-hover:text-white/40 transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
