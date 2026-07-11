import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-[500px] py-16 flex items-center">

      <div className='max-w-3xl w-full'>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>🎓</span> Educational Background
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            My journey started with an FSc in Computer Science from the prestigious <span className="font-semibold text-purple-700">Islamia College Peshawar</span>.
            Currently, I am pursuing my Bachelor's in <span className="font-semibold text-gray-900">Software Engineering</span> at the <span className="font-semibold text-purple-700">Institute of Management Sciences (IMSciences)</span>, where I am in my 7th semester.
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>💻</span> Tech Background
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am actively expanding my expertise as a <span className="font-semibold text-blue-600">Front End Developer</span>, incorporating technologies like Next.js and modern styling frameworks.
            Beyond my studies, I am proud to serve as a <span className="font-semibold text-gray-900">Core Technical Team Member</span> for the <span className="font-semibold text-green-600">GDGoC</span> at IMSciences.
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span>🛠️</span> My Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm">React.js</span>
            {/* <span className="px-4 py-2 bg-black text-white rounded-full font-medium text-sm">Next.js</span> */}
            {/* <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium text-sm">Node.js</span>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full font-medium text-sm">Express.js</span>
            <span className="px-4 py-2 bg-green-200 text-green-900 rounded-full font-medium text-sm">MongoDB</span>
            <span className="px-4 py-2 bg-blue-200 text-blue-900 rounded-full font-medium text-sm">SQL</span> */}
            <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium text-sm">Tailwind CSS</span>
            {/* <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm">TypeScript</span> */}
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium text-sm">JavaScript (ES6+)</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">Git & GitHub</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About