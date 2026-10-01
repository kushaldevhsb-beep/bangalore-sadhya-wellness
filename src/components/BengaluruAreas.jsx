import React, { useState } from 'react';
import { MapPin, CheckCircle, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';
import { BENGALURU_AREAS, BRAND } from '../data/platformData';

export default function BengaluruAreas({ onCheckArea }) {
  const [activeArea, setActiveArea] = useState(BENGALURU_AREAS[0]);

  return (
    <section id="areas" className="py-24 bg-brand-cream/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/5 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-brand-olive" />
            <span>Local Doorstep Service Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight">
            Serving Selected Bengaluru Neighbourhoods
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-3 mb-4 rounded-full"></div>
          
          {/* Important Business Clarity Notice */}
          <div className="inline-block bg-white border border-stone-200 rounded-2xl px-5 py-3 text-xs sm:text-sm text-stone-700 max-w-2xl mx-auto shadow-sm">
            <span className="font-bold text-brand-forest">Doorstep Delivery Model:</span> We do not operate a commercial walk-in studio in Bengaluru. Our certified instructors conduct dedicated <strong>Home Visits</strong>, <strong>Workplace Sessions</strong>, and <strong>Community Hall Programs</strong> across the locations below.
          </div>
        </div>

        {/* Interactive Map Visual & Area Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-lg">
          
          {/* Left: Neighborhood Badges Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-base font-serif font-bold text-brand-forest mb-4">
              Select Your Locality:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BENGALURU_AREAS.map((area) => (
                <button
                  key={area.name}
                  onClick={() => setActiveArea(area)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                    activeArea.name === area.name
                      ? 'border-brand-olive bg-brand-olive/10 text-brand-forest shadow-sm ring-1 ring-brand-olive'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <MapPin className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    activeArea.name === area.name ? 'text-brand-olive' : 'text-stone-400'
                  }`} />
                  <div>
                    <span className="text-xs sm:text-sm font-bold block text-stone-900">{area.name}</span>
                    <span className="text-[10px] text-stone-500 block leading-tight">{area.type}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <CheckCircle className="w-4 h-4 text-brand-olive" />
                <span>Need sessions in another nearby area? Ask our coordinator.</span>
              </div>

              <button
                onClick={() => onCheckArea(activeArea.name)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white text-xs font-bold uppercase tracking-wider transition-all shadow"
              >
                <span>Check Availability in {activeArea.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
              </button>
            </div>
          </div>

          {/* Right: Map-Style Visual Preview Card */}
          <div className="lg:col-span-5 bg-brand-cream rounded-2xl p-6 border border-stone-200 relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
            {/* Map Background Grid Artwork */}
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(#16281e 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }} />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest text-white text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>Active Service Hub</span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-brand-forest">
                {activeArea.name}
              </h4>

              <p className="text-xs font-bold text-brand-olive uppercase tracking-wide">
                {activeArea.type}
              </p>

              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {activeArea.desc} Regular verified doorstep visits for 1-on-1 yoga, posture restoration, women's cohorts, and senior wellness.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-200/80 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-olive" />
                  <span>Morning Slots: 6:00 AM – 10:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-olive" />
                  <span>Evening Slots: 4:30 PM – 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-olive" />
                  <span>Weekend Society Batches Available</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(`Hi! I would like to check trainer availability for doorstep yoga in ${activeArea.name}, Bengaluru.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider text-center block shadow transition-colors"
              >
                Inquire via WhatsApp for {activeArea.name}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
