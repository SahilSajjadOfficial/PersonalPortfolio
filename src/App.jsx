import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      

      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-xl p-8">
        
        <Navbar />
        
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

      </div>
    </div>
  )
}

export default App