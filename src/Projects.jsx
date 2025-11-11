import React from 'react'
import SpotifyProject from './assets/SpotifyProject.png'
import PersonalPortfolio from './assets/PersonalPortfolio.png'
const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "After learning Javascript upto some extent I started to build a Spotify Clone and here it is.",
      tech: ["Html", "CSS", "JavaScript"],
      githubLink: "https://github.com/SahilSajjadOfficial/MusicPlayer",
      liveLink: "https://music-player-tau-one-87.vercel.app/",
      image: SpotifyProject 
    },
    {
      title: "Personal Portfolio",
      description: "After learning React I planned to build my own Portfolio Website and here it is.",
      tech: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/SahilSajjadOfficial/PersonalPortfolio.git",
      liveLink: "https://sahilsajjadportfolio.netlify.app/",
      image: PersonalPortfolio
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 -mx-8 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
           Featured Projects 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-50 text-purple-600 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all">
                    GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-bold hover:bg-purple-50 transition-all">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects