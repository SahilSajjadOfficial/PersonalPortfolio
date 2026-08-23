import React from 'react'
import Reveal from './Reveal'
import SpotifyProject from './assets/SpotifyProject.png'
import PersonalPortfolio from './assets/PersonalPortfolio.png'
import AutoGenCanvas from './assets/AutoGenCanvas.png'
import DigitalKhata from './assets/DigitalKhata.png'

const projects = [
  {
    title: 'Auto-Gen-Canvas',
    description:
      'A full-stack AI image generation web application with automated generation pipelines — an AI-integrated design tool that creates stunning, professional-quality graphics in seconds for designers and non-designers alike.',
    tech: ['TypeScript', 'React', 'Supabase', 'Tailwind CSS'],
    githubLink: 'https://github.com/SahilSajjadOfficial/AutoGenCanvas',
    liveLink: 'https://github.com/SahilSajjadOfficial/AutoGenCanvas',
    image: AutoGenCanvas,
    featured: true,
  },
  {
    title: 'Connect-Ustaad',
    description:
      'An on-demand digital marketplace connecting local skilled tradespersons in Peshawar directly with household clients — built as a full-stack, daily-wage labor marketplace platform.',
    tech: ['React', 'Full Stack Architecture', 'REST APIs'],
    githubLink: 'https://github.com/SahilSajjadOfficial',
    liveLink: null,
    image: null,
    featured: true,
  },
  {
    title: 'Digital Khata',
    description:
      'A modern, mobile-responsive digital ledger replacing paper notebooks. Helps shopkeepers track customer credit, automate pending balance calculations, and send instant payment reminders via WhatsApp.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'LocalStorage API'],
    githubLink: 'https://github.com/SahilSajjadOfficial/Digital-Khata',
    liveLink: 'https://digital-khata-ecru.vercel.app/',
    image: DigitalKhata,
  },
  {
    title: 'Personal Portfolio',
    description: 'My personal portfolio website, built after learning React to showcase my projects and experience.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    githubLink: 'https://github.com/SahilSajjadOfficial/PersonalPortfolio.git',
    liveLink: 'https://sahilsajjadportfolio.netlify.app/',
    image: PersonalPortfolio,
  },
  {
    title: 'Spotify Clone',
    description: 'A music player clone built after learning JavaScript to some extent — my first real front-end project.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/SahilSajjadOfficial/MusicPlayer',
    liveLink: 'https://music-player-tau-one-87.vercel.app/',
    image: SpotifyProject,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Portfolio</p>
          <h2 className="font-display text-4xl font-bold text-white mb-16">
            Featured Projects 🚀
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 100} className="h-full">
              <div className="group glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-purple-600/40 via-fuchsia-600/30 to-blue-600/40 flex items-center justify-center">
                      <span className="text-6xl">🛠️</span>
                    </div>
                  )}
                  {project.featured && (
                    <span className="absolute top-4 left-4 text-xs font-bold text-white bg-linear-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full shadow-lg">
                      Key Project
                    </span>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-5 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all"
                    >
                      GitHub
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-5 py-3 border-2 border-purple-500/40 text-purple-300 rounded-full font-bold text-sm hover:bg-purple-500/10 transition-all"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
