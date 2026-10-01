import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Sparkles, Clock, Check } from 'lucide-react';
import { SERVICES, BRAND } from '../data/platformData';

export default function ServicesSection({ onBookService, onOpenDetail }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Home", "Women", "Corporate", "Community", "Fitness", "Therapy", "Seniors"];

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="services" className="py-24 bg-brand-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive inline-block bg-brand-olive/10 px-3 py-1 rounded-full mb-3">
            Comprehensive Bengaluru Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight">
            Explore Our Wellness Programs
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base text-stone-600 leading-relaxed">
            From focused 1-on-1 rehabilitation to energizing corporate team sessions and apartment society batches, choose the path that resonates with your daily rhythm.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-forest text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Dynamic Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-52 overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-brand-forest/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide">
                    {service.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-stone-700 px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 shadow-sm">
                    <Clock className="w-3 h-3 text-brand-olive" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-brand-forest group-hover:text-brand-olive transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Benefit highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-brand-olive flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Learn More & WhatsApp CTA */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onBookService(service)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-brand-forest hover:text-white text-stone-700 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Select &amp; Customize</span>
                  <ArrowRight className="w-3 h-3 text-brand-gold" />
                </button>

                <a
                  href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(`Namaste! I am interested in learning more about ${service.title} in Bengaluru.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-stone-200 text-[#25D366] hover:bg-emerald-50 transition-colors"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
