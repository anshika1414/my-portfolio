import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 reveal">
          <p className="text-primary-400 font-medium text-xs tracking-[0.3em] uppercase mb-4 text-center w-full">
            Get In Touch
          </p>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.5rem)] leading-tight text-white tracking-widest">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary-600 rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-dark-400 leading-relaxed mb-8">
                Don't like forms? Send me an email or find me on my social media handles. 
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: FaEnvelope, title: 'Email', value: 'anshikatyagi02005@gmail.com', href: 'mailto:anshikatyagi02005@gmail.com' },
                { icon: FaLinkedin, title: 'LinkedIn', value: 'anshika-tyagi14', href: 'https://www.linkedin.com/in/anshika-tyagi14/' },
                { icon: FaMapMarkerAlt, title: 'Location', value: 'Gurugram, India' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs font-bold uppercase tracking-wider">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal">
            <form 
              className="glass p-8 rounded-3xl border border-white/5 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-dark-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-dark-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-dark-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-dark-300">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaPaperPlane size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
