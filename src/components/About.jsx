import { FaCode, FaLaptopCode, FaGraduationCap, FaRocket } from 'react-icons/fa'
import aboutImg from '../assets/about.jpg'

const highlights = [
  { icon: FaCode, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: FaLaptopCode, title: 'Responsive', desc: 'Mobile-first, pixel-perfect designs' },
  { icon: FaGraduationCap, title: 'Learner', desc: 'Always exploring new technologies' },
  { icon: FaRocket, title: 'Fast', desc: 'Optimized for speed & performance' },
]

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 reveal">
          <p className="text-primary-400 font-medium text-xs tracking-[0.3em] uppercase mb-4 text-center w-full">
            Get to know me
          </p>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-white tracking-widest">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile image area */}
          <div className="reveal flex justify-center">
            <div className="relative group">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-gradient-to-br from-primary-600/20 to-purple-600/20 border border-primary-500/20 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={aboutImg} 
                  alt="Anshika" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent opacity-60" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border border-primary-500/10 -z-10" />
              <div className="absolute -inset-6 rounded-2xl border border-primary-500/5 -z-10" />
            </div>
          </div>

          {/* Text content */}
          <div className="reveal">
            <h3 className="font-display font-semibold text-xl text-white mb-4">
              Building intelligent solutions with code 🚀
            </h3>
            <p className="text-dark-400 leading-relaxed mb-4">
              I am a Data Science and Analytics enthusiast passionate about turning raw data into meaningful insights and practical intelligent solutions. I enjoy building machine learning applications, analytical tools, and data-driven dashboards that solve real-world problems.
            </p>
            <p className="text-dark-400 leading-relaxed mb-6">
              With hands-on experience in Python, predictive modeling, and data visualization, I focus on simplifying complex information and designing efficient, impactful workflows. Currently, I am strengthening my skills in machine learning engineering and seeking opportunities to learn, contribute, and grow as a data professional.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '3', label: 'Projects' },
                { number: '20+', label: 'Skills' },
                { number: '4+', label: 'Certifications' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-3 rounded-xl bg-dark-900/50 border border-dark-800"
                >
                  <p className="font-display font-bold text-2xl gradient-text">{s.number}</p>
                  <p className="text-dark-400 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal glass rounded-xl p-5 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center mx-auto mb-3">
                <Icon className="text-primary-400 text-xl" />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
              <p className="text-dark-400 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
