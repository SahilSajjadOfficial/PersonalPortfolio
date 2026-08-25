import React from 'react'
import Reveal from './Reveal'

const roles = [
  {
    icon: '🚀',
    title: 'Campus Ambassador',
    org: 'Devsinc',
    period: '2026',
    description: 'Lead campus outreach initiatives, coordinating student technical hackathons and developer enablement sessions.',
  },
  {
    icon: '⚡',
    title: 'Supabase Peshawar Core Team Member',
    org: 'Supabase Peshawar',
    period: '2026',
    description: 'Being a core team member in the Supabase Peshawar chapter , my role involves helping the participants and making awareness about the supabase and its uses and benefits.',
  },
  {
    icon: '☁️',
    title: 'Media & Graphics Team Member',
    org: 'Cloud Native Computing Foundation (CNCF) Peshawar',
    period: '2026',
    description: 'Design digital media assets and technical branding collateral promoting cloud-native workshops and meetups.',
  },
]

const Leadership = () => {
  return (
    <section id="leadership" className="relative py-24 md:py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Community</p>
          <h2 className="font-display text-4xl font-bold text-white mb-16">
            Leadership & Community
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 100}>
              <div className="glass rounded-2xl p-8 h-full hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-2xl mb-5">
                  {role.icon}
                </div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="font-display text-xl font-bold text-white">{role.title}</h3>
                  <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                    {role.period}
                  </span>
                </div>
                <p className="text-blue-300 font-medium mb-4">{role.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
