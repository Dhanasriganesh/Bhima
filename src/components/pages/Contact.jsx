import React, { useState } from 'react'

const HERO_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: send to API. For now we just show feedback.
    alert('Thank you! We will get back to you shortly with a quote.')
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[260px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
          <p className="font-heading text-xl text-amber-200 mt-2">Let’s plan your perfect event</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)] mb-2">
                Get a Quote
              </h2>
              <div className="section-title-line !mx-0" />
              <p className="text-[var(--color-warm-gray)] mb-8">
                Share your event details and we’ll get back with a custom menu and quote.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition"
                    placeholder="Full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Party">Party / Function</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Small">Small Gathering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={form.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Approx. Number of Guests
                  </label>
                  <input
                    type="text"
                    id="guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition"
                    placeholder="e.g. 200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition resize-none"
                    placeholder="Tell us about your event, dietary needs, venue, etc."
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)] mb-2">
                Reach Us Directly
              </h2>
              <div className="section-title-line !mx-0" />
              <p className="text-[var(--color-warm-gray)] mb-8">
                Prefer to call or email? We’re happy to discuss your event in detail.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-xl">
                    📞
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-charcoal)]">Phone</h3>
                    <a href="tel:+919876543210" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-xl">
                    ✉️
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-charcoal)]">Email</h3>
                    <a href="mailto:info@shreebhimacaterers.com" className="text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors">
                      info@shreebhimacaterers.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-xl">
                    📍
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--color-charcoal)]">Location</h3>
                    <p className="text-[var(--color-warm-gray)]">
                      We serve across the city and nearby areas. Share your venue and we’ll confirm availability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-[var(--color-cream)]">
                <p className="font-heading text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  Office Hours
                </p>
                <p className="text-[var(--color-warm-gray)] text-sm">
                  Mon – Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: By appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
