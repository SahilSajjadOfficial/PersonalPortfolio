import React from 'react'
import Reveal from './Reveal'

const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'Lurniva (NIC Peshawar)',
    context: 'AI-Powered EdTech Startup — National Incubation Center Peshawar',
    period: '07/2026 – 08/2026',
    points: [
      'Engineered responsive user onboarding workflows and plan management dashboards using React.js, TypeScript, and modern APIs.',
      'Collaborated on backend database schema integration and streamlined UI components for an AI educational product.',
      'Enhanced client-side rendering efficiency, contributing to improved user flow retention across core startup modules.',
    ],
  },
  {
    role: 'System Architect',
    org: 'Transport Management System',
    context: 'Fleet Operations & Logistics Architecture',
    period: '2025 – 2026',
    points: [
      'Designed end-to-end system architecture and data models for fleet scheduling, route optimization, and admin controls.',
      'Architected modular service interfaces and structured data pipelines to support real-time operational tracking and analytics.',
    ],
  },
  {
    role: 'Software Engineer / Developer',
    org: 'FinTap',
    context: 'Fintech Application Development',
    period: '2026',
    points: [
      'Engineered secure transaction handling flows, API integrations, and intuitive ledger interfaces for fintech operations.',
    ],
  },
  {
    role: 'Technical Team Member (Software Developer)',
    org: 'GDGoC IMSciences',
    context: 'Google Developer Groups on Campus',
    period: '10/2025 – Present',
    points: [
      'Develop and maintain web applications for campus initiatives and contribute to open-source developer tooling.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Career</p>
          <h2 className="font-display text-4xl font-bold text-white mb-16">
            Work Experience & Engineering Roles
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-linear-to-b from-purple-500/60 via-blue-500/40 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <Reveal key={job.role + job.org} delay={i * 100} className="relative pl-10">
                <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-linear-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-black" />
                </span>

                <div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-xl font-bold text-white">{job.role}</h3>
                    <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-blue-300 font-medium mb-1">{job.org}</p>
                  <p className="text-gray-500 text-sm mb-4">{job.context}</p>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
