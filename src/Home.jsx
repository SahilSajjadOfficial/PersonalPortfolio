import React from 'react'
import sahilPic from './assets/Sahil.jpg'

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="bg-blob w-96 h-96 bg-purple-600 -top-20 -left-20 animate-float-slow" />
      <div className="bg-blob w-96 h-96 bg-blue-600 top-1/3 -right-10 animate-float" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-purple-300 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            Available for new opportunities
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-400 to-blue-400 animate-gradient-x">
              Sahil Sajjad
            </span>{' '}
            <span className="animate-wave inline-block">👋</span>
          </h1>

          <p className="font-display text-xl md:text-2xl font-semibold text-gray-200 mb-6">
            Full Stack Software Engineer
          </p>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            I build high-performance web applications and data-driven products &mdash;
            from AI-powered platforms to fintech tools &mdash; while finishing my BS in
            Software Engineering at <span className="text-gray-200 font-medium">IMSciences</span>.
            Based in <span className="text-gray-200 font-medium">Peshawar, Pakistan</span> 🇵🇰.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all hover:scale-105 active:scale-95"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-white glass hover:bg-white/10 transition-all hover:scale-105"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-5 justify-center md:justify-start mt-10 text-sm text-gray-400">
            <a href="tel:03331757580" className="hover:text-white transition-colors">📞 0333 1757580</a>
            <span className="w-px h-4 bg-white/20" />
            <a href="mailto:sahilsajjad150@gmail.com" className="hover:text-white transition-colors">✉️ sahilsajjad150@gmail.com</a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-[2rem] blur-2xl opacity-40 animate-pulse-slow" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out border-4 border-white/10">
            <img
              src={sahilPic}
              alt="Sahil Sajjad"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500 text-xs font-medium animate-bounce-slow"
      >
        Scroll
        <span className="text-lg">↓</span>
      </a>
    </section>
  )
}

export default Home
