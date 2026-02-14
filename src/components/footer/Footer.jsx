import React from 'react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold text-white">Shree Bhima </span>
              <span className="font-heading text-xl font-semibold text-[var(--color-gold)]">Caterers</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium catering for weddings, parties, corporate events & all occasions. 
              Delicious food, flawless service, unforgettable moments.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Wedding Catering</li>
              <li>Party & Functions</li>
              <li>Corporate Events</li>
              <li>Small Gatherings</li>
              <li>Custom Menus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-gold)]">📞</span>
                <a href="tel:+919876543210" className="hover:text-[var(--color-gold)] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-gold)]">✉️</span>
                <a href="mailto:info@shreebhimacaterers.com" className="hover:text-[var(--color-gold)] transition-colors">
                  info@shreebhimacaterers.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-gold)]">📍</span>
                <span>Your City, State — We serve everywhere</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shree Bhima Caterers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact</Link>
            <Link to="/menu" className="hover:text-[var(--color-gold)] transition-colors">Menu</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
