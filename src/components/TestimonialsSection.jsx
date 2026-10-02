import React from 'react';
import { MapPin } from 'lucide-react';
import { CLIENT_REFLECTIONS } from '../data/platformData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-linen relative" id="client-reflections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
            Client Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark mt-2 tracking-tight">
            Real Bengaluru Practices &amp; Profiles
          </h2>
          <div className="w-16 h-0.5 bg-brand-green/40 mx-auto mt-3 mb-4"></div>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            Real individuals and couples across Bengaluru engaging in dedicated, doorstep personalized wellness guidance tailored to their life stage and goals.
          </p>
        </div>

        {/* 3-Card Reflections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_REFLECTIONS.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-brand-sand shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Wellness / Service Context Badge */}
                <div className="mb-4">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-brand-sand/60 text-brand-forest border border-brand-sand">
                    {c.context}
                  </span>
                </div>

                {/* Service Context Description - Neutral, no quotes */}
                <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed mb-6 font-sans">
                  {c.description}
                </p>
              </div>

              {/* Client Profile Identity */}
              <div className="pt-4 border-t border-brand-sand/60">
                <h4 className="text-base font-bold text-brand-dark font-serif">
                  {c.name}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-brand-green mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{c.age} • {c.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

