import React, { useState } from 'react'
import Reveal from './Reveal'

const Contact = () => {
  const [copyText, setCopyText] = useState('Copy My Email')

  const handleCopy = () => {
    const email = 'sahilsajjad150@gmail.com'
    navigator.clipboard.writeText(email)

    setCopyText('Copied! ✅')

    setTimeout(() => {
      setCopyText('Copy My Email')
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="bg-blob w-96 h-96 bg-blue-600 bottom-0 left-1/3 animate-float-slow" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Contact</p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Let's Build Something Great 📬
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            My inbox is always open! Whether you have a question, a project proposal,
            or just want to say hi, I'll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-12">
            <a href="mailto:sahilsajjad150@gmail.com" className="hover:text-white transition-colors">✉️ sahilsajjad150@gmail.com</a>
            <a href="tel:03331757580" className="hover:text-white transition-colors">📞 0333 1757580</a>
            <span className="hover:text-white transition-colors">📍 Peshawar, Pakistan</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={handleCopy}
              className="flex-1 bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all hover:scale-105"
            >
              {copyText}
            </button>

            <a
              href="https://www.linkedin.com/in/sahil-sajjad-176a8730b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SahilSajjadOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative z-10 text-center text-gray-600 text-sm mt-24">
        <p>&copy; 2026 Sahil Sajjad. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
