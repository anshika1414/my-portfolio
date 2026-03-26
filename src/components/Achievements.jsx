import { FaTrophy, FaAward } from 'react-icons/fa'

const achievements = [
  {
    title: 'Adobe Hackathon 2025',
    result: 'Advanced to Round 3',
    desc: 'Participated in a high-stakes national algorithmic challenge among 2.6L students, showcasing advanced problem-solving skills.',
    icon: <FaTrophy size={20} />,
  },
  {
    title: 'RCSCTF24 Cyber Security Hackathon',
    result: 'Top 10 Position',
    desc: 'Secured a top ranking in the Capture The Flag competition, demonstrating expertise in security protocols and vulnerability assessment.',
    icon: <FaAward size={20} />,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 sm:py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 reveal">
          <p className="text-primary-400 font-medium text-xs tracking-[0.3em] uppercase mb-4 text-center w-full">
            Milestones
          </p>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-white tracking-widest">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-col gap-6 max-w-6xl mx-auto items-center">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="reveal glass p-6 sm:py-8 sm:px-12 md:px-16 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-8 card-hover relative group overflow-hidden w-[95%] md:w-[90%] lg:w-[88%]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary-600/10 transition-colors" />
              
              {/* Icon Side */}
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-400 border border-primary-500/10 shadow-lg shadow-primary-500/5">
                {item.icon}
              </div>
              
              {/* Content Side */}
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block text-[10px] font-black text-primary-400 mb-3 uppercase tracking-[0.3em] bg-primary-400/5 px-3 py-1 rounded-full border border-primary-400/10">
                  {item.result}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
