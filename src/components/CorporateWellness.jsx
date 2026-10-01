import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle, Building2, Sparkles } from 'lucide-react';
import { CORPORATE_DATA, BRAND } from '../data/platformData';

export default function CorporateWellness({ onOpenCorporateModal, onEnquire }) {
  const programs = CORPORATE_DATA.programs || [];

  const handleOpenModal = (programTitle = '') => {
    if (onOpenCorporateModal) {
      onOpenCorporateModal(programTitle);
    } else if (onEnquire) {
      onEnquire(programTitle || "Corporate Wellness Proposal");
    }
  };

  return (
    <section id="corporate-wellness" className="py-24 bg-brand-forest text-brand-cream relative overflow-hidden">
      {/* Background Subtle Geometrics */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-brand-gold/40"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-brand-gold/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Building2 className="w-3.5 h-3.5 text-brand-gold" />
            <span>Bengaluru Teams &amp; Workplaces</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            {CORPORATE_DATA.title || 'Wellness for Modern Workplaces'}
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80 leading-relaxed font-normal">
            {CORPORATE_DATA.description || 'Bring practical yoga, movement and wellness into the workplace with sessions designed around professional schedules and team requirements.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            {/* Primary Request Button - Explicit text-stone-900 on brand-gold with Building2 icon */}
            <button
              onClick={() => handleOpenModal('Corporate Yoga & Ergonomics')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-gold hover:bg-[#d6af66] text-stone-900 font-bold text-sm transition-all shadow-md hover:shadow-lg active:translate-y-0"
            >
              <Building2 className="w-4 h-4 text-stone-900" />
              <span className="text-stone-900 font-bold">{CORPORATE_DATA.ctaText || 'Request Corporate Proposal'}</span>
              <ArrowRight className="w-4 h-4 text-stone-900" />
            </button>

            <a
              href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! We would like to request a corporate wellness proposal for our organization in Bengaluru.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-white font-semibold">{CORPORATE_DATA.secondaryCta || 'WhatsApp Corporate Enquiry'}</span>
            </a>
          </div>
        </div>

        {/* 8 Corporate Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <div
              key={prog.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:border-brand-gold/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-brand-gold text-stone-900 flex items-center justify-center text-xs font-bold mb-4 shadow-sm">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed font-normal">
                  {prog.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-brand-gold font-medium">
                <span className="flex items-center gap-1.5 text-brand-gold font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-gold" />
                  <span>On-site or Hybrid</span>
                </span>
                <button
                  onClick={() => handleOpenModal(prog.title)}
                  className="text-white hover:text-brand-gold transition-colors underline font-medium text-xs py-1 px-2 rounded hover:bg-white/5"
                >
                  Enquire &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
