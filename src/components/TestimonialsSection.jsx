import React from 'react';
import { Quote, Star, MapPin, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/platformData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-linen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
            Client Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark mt-2 tracking-tight">
            Voices from Bengaluru Homes &amp; Teams
          </h2>
          <div className="w-16 h-0.5 bg-brand-green/40 mx-auto mt-3 mb-4"></div>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            Authentic experiences shared by clients across Bengaluru neighborhoods who invited our verified masters into their personal routines.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-brand-sand shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-green/30 mb-4" />
                
                <p className="text-base font-serif italic text-brand-dark leading-relaxed mb-6">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-sand/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-brand-dark font-serif">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-brand-green">
                    <MapPin className="w-3 h-3" />
                    <span>{t.area}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-sand/60 text-brand-dark border border-brand-sand">
                    {t.service}
                  </span>
                  <div className="text-[10px] text-brand-dark/40 mt-1">
                    {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
