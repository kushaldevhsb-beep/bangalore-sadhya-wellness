import React from 'react';
import { Calendar, Users, ArrowRight, MessageCircle, Clock } from 'lucide-react';
import { WORKSHOPS, BRAND } from '../data/platformData';

export default function WorkshopsSection({ onEnquireWorkshop }) {
  return (
    <section id="workshops" className="py-24 bg-brand-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive inline-block bg-brand-olive/10 px-3 py-1 rounded-full mb-3">
            Deep Immersions &amp; Learning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight">
            Workshops &amp; Experiences
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base text-stone-600 leading-relaxed">
            Specialized intensives covering desk ergonomics, therapeutic breathwork, and posture mechanics conducted for corporate campuses and residential societies.
          </p>
        </div>

        {/* Dynamic Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKSHOPS.map((ws) => (
            <div
              key={ws.title}
              className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest border border-brand-forest/15">
                    {ws.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-olive" />
                    <span>{ws.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-brand-forest mb-2">
                  {ws.title}
                </h3>

                <p className="text-xs font-semibold text-brand-olive uppercase tracking-wider mb-3">
                  Target: {ws.audience}
                </p>

                <p className="text-sm text-stone-600 leading-relaxed font-normal mb-6">
                  {ws.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                <button
                  onClick={() => onEnquireWorkshop(ws.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-olive transition-colors"
                >
                  <span>Request for Your Group</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </button>

                <a
                  href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(`Hi! We are interested in hosting the workshop: ${ws.title} in Bengaluru.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-stone-200 text-[#25D366] hover:bg-emerald-50 transition-colors"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
