export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 md:h-16 border-t border-white/5 bg-[#05071a]/95 backdrop-blur-md overflow-hidden flex items-center z-50">
      <div className="animate-ticker flex whitespace-nowrap items-center">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.4em] text-white/30">
            <span>Data Analysis</span> <span className="text-purple-light/40">✦</span>
            <span>Machine Learning</span> <span className="text-purple-light/40">✦</span>
            <span>SQL</span> <span className="text-purple-light/40">✦</span>
            <span>Visualization</span> <span className="text-purple-light/40">✦</span>
            <span>Problem Solving</span> <span className="text-purple-light/40">✦</span>
            <span>Python</span>
          </div>
        ))}
      </div>
    </footer>
  )
}
