import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xbdzvpvd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setStatusMessage({ type: 'error', text: data.errors.map(error => error.message).join(', ') });
        } else {
          setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
        }
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 reveal">
          <p className="text-primary-400 font-medium text-xs tracking-[0.3em] uppercase mb-4 text-center w-full">
            Get In Touch
          </p>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-white tracking-widest">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 reveal">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-dark-400 leading-relaxed mb-6 text-sm">
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
              onSubmit={handleSubmit}
              className="glass p-8 rounded-3xl border border-white/5 space-y-6"
            >
              {statusMessage && (
                <div className={`p-4 rounded-xl text-sm font-medium ${statusMessage.type === 'success'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                  {statusMessage.text}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-dark-300">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-dark-300">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-dark-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-dark-300">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message here..."
                  required
                  className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaPaperPlane size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
