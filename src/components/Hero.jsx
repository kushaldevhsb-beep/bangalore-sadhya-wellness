import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function Hero({ onBookClick }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-24 bg-brand-cream">
      {/* Subtle 3D Himalayan Contour & Wellness Depth Orb Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        {/* Soft breathing wellness ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-brand-olive/15 via-brand-gold/10 to-transparent blur-3xl animate-breathe" />
        
        {/* Delicate topographic contour curves */}
        <svg className="absolute bottom-0 w-full h-48 text-brand-olive/10" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
          <path d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,208C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bengaluru Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/20 text-brand-forest text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>SADHYA WELLNESS • BENGALURU</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-forest leading-[1.12] tracking-tight font-bold">
              Personalised Yoga &amp; Wellness, <br />
              <span className="italic font-normal text-brand-olive">Brought to Your Space.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Personalised yoga, fitness and wellness sessions for individuals, women, families, workplaces and communities across Bengaluru. Guided by certified instructors rooted in authentic practice.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-medium text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I would like to enquire about personalised yoga sessions in Bengaluru.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-[#25D366]/40 text-stone-800 bg-white hover:bg-emerald-50/50 font-medium text-base transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Small Trust Line */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-medium text-stone-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-olive" />
                <span>Home</span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-olive" />
                <span>Women</span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-olive" />
                <span>Corporate</span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-olive" />
                <span>Community</span>
              </div>
            </div>

            {/* Direct Phone & Doorstep info */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-stone-600">
              <a 
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-1.5 font-semibold text-brand-forest hover:text-brand-olive transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>Call Directly: {BRAND.phone}</span>
              </a>
              <span className="hidden sm:inline text-stone-300">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-olive" />
                <span>Doorstep visits across Koramangala, HSR, Indiranagar &amp; Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Visual Imagery with Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-beige">
                <img
                  src="/assets/images/hero-yoga-class.jpeg"
                  alt="Personalised Yoga Session in Bengaluru - Sadhya Wellness"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Doorstep Personalised Wellness</span>
                  <p className="text-sm sm:text-base font-serif italic text-brand-cream/95 mt-1">
                    "Consistent practice in your living room, clubhouse or workspace."
                  </p>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-200/80 max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest font-serif font-bold text-lg">
                    ॐ
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-forest leading-tight">University Qualified</h4>
                    <p className="text-[11px] text-stone-500">M.A. Yoga &amp; Certified Masters</p>
                  </div>
                </div>
              </div>

              {/* Floating Doorstep Service Pill */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-brand-forest text-white px-4 py-2.5 rounded-2xl shadow-lg border border-white/20 text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
                <span>Bengaluru Doorstep Visits</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
