import React from 'react'
import { Link } from 'react-router-dom'

const HERO_IMG = 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80'

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', alt: 'Wedding buffet', category: 'Wedding' },
  { url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80', alt: 'Biryani', category: 'Main Course' },
  { url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80', alt: 'Desserts', category: 'Desserts' },
  { url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80', alt: 'Party platter', category: 'Party' },
  { url: 'https://images.unsplash.com/photo-1604329760661-e71dc83f2b26?w=800&q=80', alt: 'Starters', category: 'Starters' },
  { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215a3b?w=800&q=80', alt: 'Event spread', category: 'Event' },
  { url: 'https://images.unsplash.com/photo-1631452180519-c014fe442672?w=800&q=80', alt: 'Curry', category: 'Main Course' },
  { url: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80', alt: 'Sweets', category: 'Sweets' },
  { url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', alt: 'Indian cuisine', category: 'Spread' },
  { url: 'https://images.unsplash.com/photo-1562440499-64c9a0a8325f?w=800&q=80', alt: 'Cake', category: 'Desserts' },
  { url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80', alt: 'Fresh food', category: 'Fresh' },
  { url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80', alt: 'Chaat', category: 'Snacks' },
]

function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold">Gallery</h1>
          <p className="font-heading text-xl text-amber-200 mt-2">A glimpse of our food & events</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[var(--color-warm-gray)]">
            From wedding feasts to corporate setups — see the quality and presentation we bring to every event.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-4 bg-[var(--color-cream)] pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((item, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-[var(--shadow-soft)] bg-white img-zoom aspect-[4/3] group"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-sm font-medium">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-[var(--color-warm-gray)] mb-4">
              Want this at your event? Get in touch for a custom quote.
            </p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
