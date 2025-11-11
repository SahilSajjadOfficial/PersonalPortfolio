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
            Currently, I am pursuing my Bachelor's in <span className="font-semibold text-gray-900">Software Engineering</span> at the <span className="font-semibold text-purple-700">Institute of Management Sciences (IMSciences)</span>, where I am in my 5th semester.
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span>💻</span> Tech Background
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am actively focused on mastering <span className="font-semibold text-blue-600">Front-end Web Development</span>, specializing in modern technologies. 
            Beyond my studies, I am proud to be a member of the <span className="font-semibold text-gray-900">Technical Team</span> at the <span className="font-semibold text-green-600">Google Developer Group (GDG)</span> on campus at IMSciences.
          </p>
        </div>

        <hr className="border-gray-200 my-8" />

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span>🛠️</span> My Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm">React.js</span>
            <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium text-sm">Tailwind CSS</span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium text-sm">JavaScript (ES6+)</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium text-sm">HTML5</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm">CSS3</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">Git & GitHub</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium text-sm">VS Code</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About