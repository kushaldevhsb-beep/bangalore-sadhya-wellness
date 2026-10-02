import React from 'react';
import { Heart, ArrowRight, MessageCircle, Sparkles, CheckCircle2, UserCheck, Briefcase, Users } from 'lucide-react';
import { WOMENS_WELLNESS_DATA, BRAND } from '../data/platformData';

const programIcons = {
  "Personal Home Yoga & 1-on-1 Care": UserCheck,
  "Working Professionals & Posture Relief": Briefcase,
  "Homemakers & Daily Vitality": Heart,
  "40+ & 50+ Lifelong Joint Care": Sparkles
};

export default function WomensWellness({ onEnquire }) {
  const data = WOMENS_WELLNESS_DATA || {};
  const programs = data.programs || [];

  return (
    <section id="womens-wellness" className="py-20 bg-white relative overflow-hidden">
      {/* Background Soft Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout: Intro & Authentic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-brand-olive fill-brand-olive/20" />
              <span>Dedicated Women's Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest leading-tight tracking-tight">
              Women's Wellness, <br />
              <span className="italic font-normal text-brand-olive">Designed Around Real Life.</span>
            </h2>

            <p className="text-base text-stone-700 leading-relaxed font-normal max-w-2xl">
              {data.description || 'Create practical wellness programs for women who want more movement, strength, flexibility, relaxation and consistency in their everyday lives.'}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onEnquire("Women's Wellness")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg active:translate-y-0"
              >
                <span>{data.ctaText || "Explore Women's Wellness"}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>

              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I would like to enquire about Sadhya Women's Wellness sessions in Bengaluru.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#25D366]/40 text-stone-800 bg-white hover:bg-emerald-50/50 font-medium text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-brand-cream bg-stone-100 max-w-md mx-auto lg:max-w-none">
              <img
                src="/assets/images/women-wellness-main.jpg"
                alt="Women's Wellness and Home Practice - Sadhya Wellness"
                className="w-full h-[320px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="p-3.5 bg-brand-forest text-white text-xs flex items-center justify-between">
                <span>Private Doorstep Visits &amp; Small Cohorts</span>
                <span className="text-brand-gold font-bold">Bengaluru Service Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Focused Streamlined Programs Grid (Short, Crisp & Clean) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => {
            const Icon = programIcons[prog.title] || Heart;

            return (
              <div
                key={prog.title}
                className="bg-brand-cream/50 rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center group-hover:bg-brand-forest group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-olive bg-brand-olive/10 px-2 py-0.5 rounded-md">
                      {prog.tag || `0${idx + 1}`}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-serif font-bold text-brand-forest group-hover:text-brand-olive transition-colors mb-2 leading-snug">
                    {prog.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-4">
                    {prog.desc}
                  </p>
                </div>

                <button
                  onClick={() => onEnquire(`Women's Program: ${prog.title}`)}
                  className="text-xs font-bold text-brand-forest hover:text-brand-olive inline-flex items-center gap-1.5 uppercase tracking-wider pt-3 border-t border-stone-200/60 transition-colors w-full justify-between"
                >
                  <span>Select Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Streamlined Helper Strip */}
        <div className="mt-8 p-4 rounded-2xl bg-brand-forest/5 border border-brand-forest/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-brand-olive flex-shrink-0" />
            <span><strong>Prefer practicing with friends?</strong> Small private cohorts (2–4 women) in your living room or apartment clubhouse are also available.</span>
          </div>
          <button
            onClick={() => onEnquire("Small Women's Cohort")}
            className="font-bold text-brand-forest hover:text-brand-olive hover:underline whitespace-nowrap"
          >
            Enquire for Group &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
