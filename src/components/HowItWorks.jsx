import React from 'react';
import { HOW_IT_WORKS } from '../data/platformData';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-sand/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
            Seamless Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark mt-2 tracking-tight">
            How It Works
          </h2>
          <div className="w-16 h-0.5 bg-brand-green/40 mx-auto mt-3 mb-4"></div>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            From your first message to consistent daily vitality, our five-step path ensures comfort, safety, and precise instructor matching.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-brand-sand shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-serif font-bold text-brand-green/30 group-hover:text-brand-emerald transition-colors mb-3">
                  {item.step}
                </div>

                <h3 className="text-lg font-serif font-bold text-brand-dark mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-sand/50 text-[11px] font-semibold text-brand-green uppercase tracking-wider">
                Step {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
