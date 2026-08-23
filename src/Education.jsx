import React from 'react'
import Reveal from './Reveal'

const education = [
  {
    degree: 'BS Software Engineering',
    note: '(Final Year)',
    school: 'IMSciences, Peshawar',
    period: 'Expected 2026',
  },
  {
    degree: 'FSc Computer Science (ICS)',
    note: '',
    school: 'Islamia College Peshawar',
    period: 'Completed',
  },
]

const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Academics</p>
          <h2 className="font-display text-4xl font-bold text-white mb-16 flex items-center gap-3">
            <span>🎓</span> Education
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="glass rounded-2xl p-7 h-full hover:border-white/20 transition-colors">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {edu.degree} <span className="text-gray-500 font-normal text-base">{edu.note}</span>
                </h3>
                <p className="text-blue-300 font-medium mb-3">{edu.school}</p>
                <span className="inline-block text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
