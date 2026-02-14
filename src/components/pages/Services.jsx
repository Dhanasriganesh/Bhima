import React from 'react'
import { Link } from 'react-router-dom'

const HERO_IMG = 'https://content.jdmagicbox.com/comp/def_content_category/food-and-catering-services/institutes-for-catering-6-institutes-for-catering-5-fjv7i-food-and-catering-services-4-ud7fc.jpg'

const EVENT_SERVICES = [
  {
    title: 'Wedding Catering',
    desc: 'From engagement to reception — full-service wedding feasts. Custom menus, elegant setup, and seamless service so you can enjoy your big day.',
    img: 'https://kasikannucateringworld.in/img/blog/what-are-the-benefits-of-hiring-a-professional-wedding-catering-company.webp',
  },
  {
    title: 'Party & Functions',
    desc: 'Birthdays, anniversaries, kitty parties and more. We bring the flavour and fun while you host with confidence.',
    img: 'https://cdn0.weddingwire.in/vendor/5590/3_2/640/png/set-up20221105-222135-15-435590-167314845787642_15_435590-168899683161615.jpeg',
  },
  {
    title: 'Corporate Events',
    desc: 'Seminars, conferences, office parties and client meets. Professional catering that impresses and satisfies.',
    img: 'https://divinecaterers.in/wp-content/uploads/2024/04/image4-2.webp',
  },
  {
    title: 'Small Gatherings',
    desc: 'Intimate dinners, family get-togethers and small celebrations. Same quality and care, scaled to your guest list.',
    img: 'https://www.culinaryproductionsbr.com/wp-content/uploads/2020/08/Catering-Display-for-Birthday-Party-Baton-Rouge.jpg',
  },
]

const PROCESS = [
  { step: 1, title: 'Tell Us Your Needs', desc: 'Share your event date, guest count, type of function and any dietary preferences.' },
  { step: 2, title: 'Menu & Quote', desc: 'We’ll suggest a menu and send a transparent quote. Customisation is always possible.' },
  { step: 3, title: 'Confirm & Plan', desc: 'Once you confirm, we lock the menu and logistics. You can focus on the rest of your planning.' },
  { step: 4, title: 'We Deliver', desc: 'On the day, we arrive on time, set up, serve and clean — so you only enjoy the moment.' },
]

function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Event catering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">Our Services</h1>
          <p className="font-heading text-xl text-amber-200 mt-2">Full-service catering for every occasion</p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">What We Offer</h2>
            <div className="section-title-line" />
            <p className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Whether it’s a grand wedding or a cosy dinner — we’ve got you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {EVENT_SERVICES.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-[var(--color-cream)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="grid sm:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] sm:aspect-auto img-zoom">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="font-heading text-xl font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-warm-gray)] text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)]">How It Works</h2>
            <div className="section-title-line" />
            <p className="text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              From first call to last bite — simple and stress-free.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-gold)] text-white font-heading text-xl font-bold mb-4">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg font-semibold text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-warm-gray)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Full Service */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)] mb-6">
            More Than Just Food
          </h2>
          <p className="text-[var(--color-warm-gray)] mb-8">
            We handle setup, serving and cleanup. You get delicious food and peace of mind — no hidden charges, 
            no last-minute surprises. Our pricing is clear and based on your menu and guest count.
          </p>
          <Link to="/contact" className="btn-primary">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  )
}

export default Services
