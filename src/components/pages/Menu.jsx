import React from 'react'
import { Link } from 'react-router-dom'

const HERO_IMG = 'https://productimages.withfloats.com/actual/60123d47a4908a00019ea0ff.jpg'

const CATEGORIES = [
  {
    title: 'Starters & Snacks',
    desc: 'Light bites to kick off the feast',
    img: 'https://vaya.in/wp-content/uploads/2021/03/10-Party-Starter-Foods-You-Can-Cook-at-Home.jpg',
    items: ['Veg & Non-Veg Pakora', 'Paneer Tikka', 'Chicken Tikka', 'Spring Rolls', 'Aloo Tikki Chaat', 'Dahi Puri', 'Papdi Chaat', 'French Fries'],
  },
  {
    title: 'Main Course – Veg',
    desc: 'Rich curries and classic favourites',
    img: 'https://img.freepik.com/premium-photo/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus_466689-6820.jpg',
    items: ['Paneer Butter Masala', 'Dal Makhani', 'Mix Veg', 'Chole', 'Jeera Rice', 'Plain Naan', 'Butter Naan', 'Roti', 'Veg Biryani'],
  },
  {
    title: 'Main Course – Non-Veg',
    desc: 'Aromatic and full of flavour',
    img: 'https://english.cdn.zeenews.com/sites/default/files/2025/06/17/1772535-msa.png',
    items: ['Chicken Biryani', 'Mutton Biryani', 'Chicken Curry', 'Kadai Chicken', 'Butter Chicken', 'Fish Fry', 'Egg Curry', 'Hyderabadi Biryani'],
  },
  {
    title: 'Desserts & Beverages',
    desc: 'Sweet endings and refreshing drinks',
    img: 'https://www.priestleys-gourmet.com.au/wp-content/uploads/Dessert-and-Beverage-Pairings-Finding-The-Perfect-Match-for-Your-Restaurant-Menu.webp',
    items: ['Gulab Jamun', 'Kheer', 'Rasmalai', 'Gajar Halwa', 'Ice Cream', 'Fresh Juice', 'Lassi', 'Soft Drinks', 'Tea & Coffee'],
  },
]

function Menu() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Fresh food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">Our Menu</h1>
          <p className="font-heading text-xl text-amber-200 mt-2">Taste the difference — customisable for your event</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--color-warm-gray)]">
            Our menus are tailored to your event size, preferences and budget. Below is a sample of what we offer. 
            Contact us for a full menu list and customisation options.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {CATEGORIES.map((cat, idx) => (
        <section
          key={idx}
          className={`py-16 px-4 ${idx % 2 === 0 ? 'bg-[var(--color-cream)]' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] img-zoom">
                  <img src={cat.img} alt={cat.title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)] mb-2">{cat.title}</h2>
                <p className="text-[var(--color-gold-dark)] font-medium mb-4">{cat.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[var(--color-charcoal)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 bg-[var(--color-burgundy)] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Want a Custom Menu?
          </h2>
          <p className="text-amber-100/90 mb-6">
            Share your preferences, dietary needs and guest count — we’ll create a menu just for you.
          </p>
          <Link to="/contact" className="btn-primary bg-amber-500 hover:bg-amber-600 border-0">Request a Quote</Link>
        </div>
      </section>
    </>
  )
}

export default Menu
