import React from 'react'
import Reveal from './Reveal'

const skillGroups = [
  {
    title: 'Languages',
    color: 'from-purple-500/20 to-purple-500/5 text-purple-300 border-purple-500/20',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks',
    color: 'from-blue-500/20 to-blue-500/5 text-blue-300 border-blue-500/20',
    skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'FastAPI'],
  },
  {
    title: 'Databases & Tools',
    color: 'from-emerald-500/20 to-emerald-500/5 text-emerald-300 border-emerald-500/20',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'Git', 'GitHub', 'REST APIs', 'Postman', 'Vercel'],
  },
  {
    title: 'Core Competencies',
    color: 'from-fuchsia-500/20 to-fuchsia-500/5 text-fuchsia-300 border-fuchsia-500/20',
    skills: ['Full-Stack Web Development', 'API Design', 'UI/UX Implementation'],
  },
]

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">About Me</p>
          <h2 className="font-display text-4xl font-bold text-white mb-8">
            Turning ideas into reliable software
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-16">
            Results-driven <span className="text-white font-medium">Full Stack Software Engineer</span> currently
            completing a BS in Software Engineering at IMSciences. Solid background in building high-performance
            web applications, architecting robust data-driven modules, and delivering seamless user interfaces.
            Experienced working in fast-paced AI startup environments, fintech platforms, and community leadership
            roles, utilizing modern engineering best practices.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span>🛠️</span> Technical Skills
          </h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={150 + i * 80}>
              <div className="glass rounded-2xl p-6 h-full hover:border-white/20 transition-colors">
                <h4 className="font-display font-bold text-white mb-4">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-1.5 rounded-full text-sm font-medium border bg-linear-to-r ${group.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
