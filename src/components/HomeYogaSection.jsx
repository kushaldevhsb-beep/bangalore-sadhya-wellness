import React from 'react';
import { Home, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { HOME_YOGA_DATA, BRAND } from '../data/platformData';

export default function HomeYogaSection({ onBookClick }) {
  return (
    <section id="home-yoga-section" className="py-24 bg-brand-cream relative overflow-hidden border-t border-stone-200/80">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-olive/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Art & Key Badges */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 relative group">
              <img
                src="/assets/images/service-holistic-yoga-assessment.png"
                alt="Personalised Home Yoga in Bengaluru - Sadhya Wellness"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Doorstep Sanctuary Practice
                </span>
                <p className="text-lg font-serif italic text-brand-cream mt-1">
                  "No traffic, no crowded studios — disciplined yoga in the sanctuary of your home."
                </p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 max-w-[220px]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-forest">100% Personalised</h4>
                  <p className="text-[11px] text-stone-500">Adapted to Your Space</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Adaptation Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-brand-olive" />
              <span>Bengaluru Doorstep Yoga</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest leading-tight tracking-tight">
              {HOME_YOGA_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              {HOME_YOGA_DATA.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-olive">
                Sessions Adapted Around:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HOME_YOGA_DATA.adaptationPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 bg-white p-3 rounded-xl border border-stone-200/80 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg active:translate-y-0"
              >
                <span>{HOME_YOGA_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>

              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I am interested in booking a personalised home yoga session in Bengaluru.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-[#25D366]/40 text-stone-800 bg-white hover:bg-emerald-50/50 font-medium text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Home Enquiry</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
