import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-burgundy)]">
            Shree Bhima
          </span>
          <span className="font-heading text-xl sm:text-2xl font-semibold text-[var(--color-gold)]">
            Caterers
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-medium transition-colors ${
                location.pathname === to
                  ? 'text-[var(--color-gold-dark)]'
                  : 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-sm py-2 px-5 hidden lg:inline-block"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[var(--color-charcoal)] hover:bg-black/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`py-3 px-4 rounded-lg font-medium ${
                  location.pathname === to ? 'bg-amber-50 text-[var(--color-gold-dark)]' : 'hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-center mt-2 py-3">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
