import React from 'react'
import { Link } from 'react-router-dom'

const HERO_IMG = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80'
const FEATURED = [
  { title: 'Biryani & Rice', desc: 'Aromatic, perfectly spiced biryani that keeps guests coming back.', img: 'https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'North Indian Curries', desc: 'Rich gravies, tender paneer & authentic flavours.', img: 'https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min-750x750.jpg' },
  { title: 'Desserts & Sweets', desc: 'Gulab jamun, kheer, cakes & more to sweeten every event.', img: 'https://www.swiftindi.com/cdn/shop/collections/Sweets_Icon_f78478c6-62f0-44c6-babf-9736c0d8cf86.png?v=1744970678' },
  { title: 'Starters & Snacks', desc: 'Crispy pakoras, tikkas & chaat that disappear in minutes.', img: 'https://thebruisedfrypan.wordpress.com/wp-content/uploads/2021/04/4-1.jpg' },
]
const EVENTS = [
  { title: 'Weddings', desc: 'Grand wedding feasts & reception spreads', icon: '💒', img: 'https://thumbs.dreamstime.com/b/catering-food-wedding-event-table-84491977.jpg' },
  { title: 'Parties & Functions', desc: 'Birthdays, anniversaries & celebrations', icon: '🎉', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80' },
  { title: 'Corporate Events', desc: 'Seminars, conferences & office parties', icon: '🏢', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
  { title: 'Small Gatherings', desc: 'Intimate dinners & family get-togethers', icon: '👨‍👩‍👧‍👦', img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80' },
]
const TESTIMONIALS = [
  { name: 'Priya & Raj', event: 'Wedding', text: 'Shree Bhima made our wedding feast unforgettable. Every dish was perfect, and the service was flawless. Highly recommend!', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80' },
  { name: 'Amit Sharma', event: 'Corporate Event', text: 'We have been using them for our annual events. Consistent quality, on-time delivery, and everyone loves the food.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80' },
  { name: 'Neha Gupta', event: 'Birthday Party', text: 'From starters to desserts, everything was delicious. The team was professional and the setup was beautiful.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80' },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Elegant catering spread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="font-heading text-lg sm:text-xl text-amber-200 tracking-widest uppercase mb-2">Premium Catering</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Memorable Food for Every Occasion
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Weddings, parties, corporate events & more — we bring flavour, warmth and flawless service to your special day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="btn-primary text-white">View Menu</Link>
            <Link to="/contact" className="btn-outline border-amber-400 text-amber-200 hover:bg-amber-500 hover:border-amber-500 hover:text-white">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">Why Shree Bhima Caterers?</h2>
            <div className="section-title-line" />
            <p className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              We don’t just serve food — we create experiences that your guests remember.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🍽️', title: 'Fresh & Tasty', desc: 'Only the finest ingredients, prepared with care and traditional recipes.' },
              { icon: '✨', title: 'Elegant Presentation', desc: 'Beautiful plating and setup that matches the importance of your event.' },
              { icon: '👨‍🍳', title: 'Expert Team', desc: 'Experienced chefs and staff who understand timing and hospitality.' },
              { icon: '📅', title: 'Any Scale', desc: 'From intimate dinners to large weddings — we adapt to your needs.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[var(--color-cream)] hover:shadow-[var(--shadow-card)] transition-shadow">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-warm-gray)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">Featured Delicacies</h2>
            <div className="section-title-line" />
            <p className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              A glimpse of what we bring to your table — taste and tradition in every bite.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED.map((item, i) => (
              <Link key={i} to="/menu" className="group block rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] bg-white hover:shadow-[var(--shadow-card)] transition-shadow img-zoom">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-gold-dark)] transition-colors">{item.title}</h3>
                  <p className="text-[var(--color-warm-gray)] text-sm mt-1">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary">Explore Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">We Cater Every Occasion</h2>
            <div className="section-title-line" />
            <p className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              From grand weddings to cosy family dinners — tell us the occasion, we’ll handle the rest.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS.map((item, i) => (
              <Link key={i} to="/services" className="group block rounded-2xl overflow-hidden bg-[var(--color-cream)] hover:shadow-[var(--shadow-card)] transition-all img-zoom">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <div>
                      <span className="text-3xl mb-1 block">{item.icon}</span>
                      <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[var(--color-burgundy)] text-white relative grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
            <div className="section-title-line !bg-amber-400" />
            <p className="text-amber-100/90 max-w-2xl mx-auto">
              Real stories from weddings, parties and events we’ve been part of.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-amber-200/90 text-sm">{t.event}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-[var(--color-warm-gray)] mb-8">
            Share your date, guest count and preferences — we’ll get back with a custom quote and menu ideas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <a href="tel:+919849339891" className="btn-outline">Call Now</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
