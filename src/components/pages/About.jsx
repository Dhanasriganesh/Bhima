import React from 'react'
import { Link } from 'react-router-dom'

const HERO_IMG = 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80'
const STORY_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
const VALUES = [
  { icon: '❤️', title: 'Passion', desc: 'We love what we do. Every dish is made with heart and respect for tradition.' },
  { icon: '🌿', title: 'Quality', desc: 'Fresh ingredients, clean kitchens, and no shortcuts — only the best for your guests.' },
  { icon: '🤝', title: 'Trust', desc: 'We keep our word. On-time delivery, agreed menus, and transparent pricing.' },
  { icon: '✨', title: 'Excellence', desc: 'From plating to service, we aim to exceed expectations every time.' },
]
const STATS = [
  { number: '500+', label: 'Events Catered' },
  { number: '50K+', label: 'Happy Guests' },
  { number: '12+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
]

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Restaurant kitchen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">About Us</h1>
          <p className="font-heading text-xl text-amber-200 mt-2">The people behind your perfect feast</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] img-zoom">
              <img src={STORY_IMG} alt="Our kitchen" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mb-4">Our Story</h2>
              <div className="section-title-line !mx-0" />
              <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
                Shree Bhima Caterers started with a simple belief: great food brings people together. 
                What began as a small family venture has grown into a trusted name for weddings, 
                parties, corporate events and every celebration in between.
              </p>
              <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
                We blend traditional recipes with consistent quality and professional service. 
                Whether you need a lavish wedding spread or an intimate dinner, we treat every 
                order with the same care and attention.
              </p>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                Our team of experienced chefs and staff work behind the scenes so you can enjoy 
                your day stress-free. Your happiness and your guests’ smiles are what drive us.
              </p>
              <Link to="/contact" className="btn-primary inline-block mt-6">Work With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">What We Stand For</h2>
            <div className="section-title-line" />
            <p className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Our values guide every decision we make — from the kitchen to your venue.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow text-center">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-warm-gray)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-[var(--color-burgundy)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((item, i) => (
              <div key={i}>
                <p className="font-heading text-4xl sm:text-5xl font-bold text-amber-300">{item.number}</p>
                <p className="text-amber-100/90 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)] mb-3">
            Let’s Create Something Special Together
          </h2>
          <p className="text-[var(--color-warm-gray)] mb-6">
            Tell us about your event — we’d love to be part of your story.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}

export default About
