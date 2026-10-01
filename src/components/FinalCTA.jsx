import React from 'react';
import { ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function FinalCTA({ onBookClick }) {
  return (
    <section className="py-20 bg-brand-forest text-brand-cream relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-brand-gold/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-brand-gold/20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-gold text-xs font-bold uppercase tracking-widest border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span>READY TO BEGIN?</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Personalised Wellness, Designed for Your Routine.
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-brand-cream/80 max-w-2xl mx-auto leading-relaxed">
          Whether you are looking for home sessions, corporate wellness, or community programs in Bengaluru — we are here to guide you with authentic, university-certified instruction.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-gold hover:bg-[#d6af66] text-stone-900 font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="text-stone-900 font-bold">Book a Session</span>
            <ArrowRight className="w-4 h-4 text-stone-900" />
          </button>

          <a
            href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I would like to book a personalised yoga session in Bengaluru.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold text-base transition-all shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="text-white font-semibold">WhatsApp Us</span>
          </a>
        </div>

        {/* Direct Phone Trust Line */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-cream/80">
          <span>Prefer speaking directly? Call</span>
          <a href={`tel:${BRAND.phone}`} className="font-bold text-brand-gold hover:underline">
            {BRAND.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
