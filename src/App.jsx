import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Leadership from './Leadership'
import Education from './Education'
import Contact from './Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
