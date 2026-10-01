import React from 'react';
import { UserCheck, Sparkles, Award, Repeat } from 'lucide-react';
import { WHY_SADHYA } from '../data/platformData';

const pillarIcons = [UserCheck, Sparkles, Award, Repeat];

export default function WhySadhya() {
  const { heading, subheading, pillars } = WHY_SADHYA;

  return (
    <section id="why-sadhya" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive inline-block bg-brand-olive/10 px-3 py-1 rounded-full mb-3">
            {subheading || 'Four Foundational Pillars'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight">
            {heading || 'Wellness, Made Personal.'}
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base text-stone-600 leading-relaxed">
            True wellness cannot be mass-produced. When instruction adapts to your body's daily state, consistency flourishes and long-term health takes root naturally.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];

            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent top border hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-forest via-brand-olive to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-forest/5 text-brand-forest flex items-center justify-center mb-6 group-hover:bg-brand-forest group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold tracking-widest text-brand-gold uppercase block mb-1">
                    0{idx + 1} • PILLAR
                  </span>

                  <h3 className="text-xl font-serif font-bold text-brand-forest tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-brand-olive mb-3">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-medium text-stone-500 group-hover:text-brand-forest transition-colors">
                  <span>Authentic & Adaptable</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
