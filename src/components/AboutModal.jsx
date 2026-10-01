import React from 'react';
import { X, Sparkles, Check, Mountain, GraduationCap, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { ABOUT_FULL_STORY, TEAM_MEMBERS, BRAND } from '../data/platformData';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-brand-cream rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="bg-brand-forest text-white p-6 flex items-center justify-between border-b border-brand-gold/20 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center font-serif text-lg font-bold border border-brand-gold/40">
              ॐ
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-white">
                About Sadhya Wellness
              </h2>
              <p className="text-xs text-brand-cream/80">
                Traditional Knowledge • Practical Movement • Modern Living
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12 text-stone-900">
          
          {/* Section 1: Our Story */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest text-xs font-bold uppercase tracking-wider border border-brand-forest/15">
              <Mountain className="w-3.5 h-3.5 text-brand-olive" />
              <span>Origins &amp; Purpose</span>
            </div>

            <h3 className="text-3xl font-serif font-bold text-brand-forest tracking-tight">
              {ABOUT_FULL_STORY.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              {ABOUT_FULL_STORY.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="p-4 bg-white rounded-2xl border border-stone-200 text-center shadow-sm">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-forest uppercase font-serif">
                {ABOUT_FULL_STORY.tagline}
              </span>
            </div>
          </section>

          {/* Section 2: Our Vision */}
          <section className="space-y-4 pt-8 border-t border-stone-200">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
              Guiding Principle
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">
              {ABOUT_FULL_STORY.vision.heading}
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {ABOUT_FULL_STORY.vision.text}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
              {ABOUT_FULL_STORY.vision.focusAreas.map((area, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white border border-stone-200 text-xs font-bold text-stone-800 text-center shadow-sm">
                  {area}
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm italic text-stone-500 pt-2">
              {ABOUT_FULL_STORY.vision.closing}
            </p>
          </section>

          {/* Section 3: Our Mission */}
          <section className="space-y-3 pt-8 border-t border-stone-200">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
              Daily Commitment
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">
              {ABOUT_FULL_STORY.mission.heading}
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
              {ABOUT_FULL_STORY.mission.text}
            </p>
          </section>

          {/* Section 4: 4-Stage Approach */}
          <section className="space-y-4 pt-8 border-t border-stone-200">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
              The Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">
              How We Work With You
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ABOUT_FULL_STORY.approach.map((item) => (
                <div key={item.step} className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <span className="text-3xl font-serif font-bold text-brand-gold">{item.step}</span>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-forest">{item.name}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: What We Believe */}
          <section className="space-y-4 pt-8 border-t border-stone-200">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">
              Core Convictions
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">
              What We Believe
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ABOUT_FULL_STORY.beliefs.map((b, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-olive">{b.title}</h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Modal Bottom Action */}
        <div className="p-4 sm:p-6 bg-white border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-600 font-medium">
            Sadhya Wellness • Head Office: Nainital District, Uttarakhand
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-brand-forest text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-forest/90 transition-colors shadow-sm"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
