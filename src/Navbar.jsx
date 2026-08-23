import React, { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-white tracking-tight">
          Sahil<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white rounded transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-white rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 mx-4 rounded-2xl glass px-6 py-6 flex flex-col gap-4 text-gray-200 font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-full font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
