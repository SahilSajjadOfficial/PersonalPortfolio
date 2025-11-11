import React, { useState } from 'react'

const Contact = () => {
  const [copyText, setCopyText] = useState('Copy My Email')
  
  const handleCopy = () => {
    const email = 'sahilsajjad150@gmail.com'
    navigator.clipboard.writeText(email)
    
    setCopyText('Copied! ✅')
    
    setTimeout(() => {
      setCopyText('Copy My Email')
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Get In Touch 📬
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          My inbox is always open! Whether you have a question, a project proposal, 
          or just want to say hi, I'll get back to you as soon as possible.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          
          <button 
            onClick={handleCopy}
            className="flex-1 bg-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-purple-700 transition-all hover:scale-105"
          >
            {copyText}
          </button>
          
          <a 
            href="https://www.linkedin.com/in/sahil-sajjad-176a8730b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            LinkedIn
          </a>

          <a 
            href="https://github.com/SahilSajjadOfficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-800 transition-all hover:scale-105"
          >
            GitHub
          </a>

        </div>
      </div>

      <footer className="text-center text-gray-500 mt-24">
        <p>&copy; 2025 Sahil Sajjad. All rights reserved.</p>
      </footer>

    </section>
  )
}

export default Contact