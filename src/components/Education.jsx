import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    title: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    date: '2023 - 2027',
    desc: 'Focusing on Computer Science and Engineering. Currently maintaining a CGPA of 8.25.',
  },
  {
    title: 'Senior Secondary (XII)',
    institution: 'Shri S.N. Sidheshwar Public School',
    date: '2021 - 2023',
    desc: 'Completed Intermediate education with a percentage of 86%.',
  },
  {
    title: 'Secondary (X)',
    institution: 'Lord Jesus Public School',
    date: '2020',
    desc: 'Completed Matriculation with a high percentage of 93.2%.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Section Heading */}
        <div className="text-center mb-10 reveal">
          <p className="text-primary-400 font-medium text-xs tracking-[0.3em] uppercase mb-4 text-center w-full">
            Academic Journey
          </p>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-white tracking-widest">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal"
              >
                {/* Mobile icon (always left) */}
                <div className="flex md:hidden absolute left-5 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-primary-500 z-10 items-center justify-center text-primary-400">
                  <FaGraduationCap size={18} />
                </div>

                {/* Desktop icon (center) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-950 border-2 border-primary-500 z-10 items-center justify-center text-primary-400 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                  <FaGraduationCap size={20} />
                </div>

                {/* Content card */}
                <div className="w-full md:w-[45%] ml-12 md:ml-0 glass p-6 rounded-2xl border border-white/5 card-hover">
                  <span className="text-xs font-bold text-primary-400 mb-2 block uppercase tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary-300/80 text-sm font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
