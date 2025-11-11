import React from 'react'
import sahilPic from './assets/Sahil.jpg'

const Home = () => {
    return (
        <section id="home" className="min-h-[600px] flex flex-col-reverse md:flex-row items-center justify-between py-12 gap-8">

            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">Sahil Sajjad</span> <span className="animate-wave inline-block">👋</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Welcome to my personal portfolio! Based in <span className="font-semibold text-gray-900">Peshawar, Pakistan</span> 🇵🇰, 
                    I am a 5th-semester <span className="font-semibold text-purple-700">Software Engineering</span> student at <span className="font-semibold text-purple-700">IMSciences</span>. 
                    Currently, I am deeply engaged in learning the art of <span className="font-semibold text-blue-600">Front-end Web Development</span>.
                </p>
                
                <div className="flex gap-4 justify-center md:justify-start">
                    <a href="#contact" className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-purple-700 transition-all hover:scale-105 active:scale-95">
                        Let's Talk
                    </a>
                    <a href="#projects" className="px-8 py-4 rounded-full font-bold text-purple-600 border-2 border-purple-100 hover:bg-purple-50 transition-all">
                        View Work
                    </a>
                </div>
            </div>

            <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out border-4 border-white shrink-0">
                <img
                    src={sahilPic}
                    alt="Sahil Sajjad"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>
        </section>
    )
}

export default Home