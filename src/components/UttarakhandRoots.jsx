import React from 'react';
import { Mountain, ExternalLink, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function UttarakhandRoots() {
  return (
    <section className="py-20 bg-brand-cream/60 relative overflow-hidden border-t border-stone-200">
      {/* Subtle Himalayan Background Visual Silhouette */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-end">
        <svg className="w-full h-44 text-brand-forest" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L150,90 L300,20 L450,85 L600,10 L750,95 L900,30 L1050,70 L1200,10 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 text-brand-forest text-xs font-bold uppercase tracking-wider border border-brand-forest/20">
              <Mountain className="w-3.5 h-3.5 text-brand-olive" />
              <span>Organisational Heritage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-forest tracking-tight">
              Rooted in Nainital, Uttarakhand
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              Sadhya Wellness has its organisational roots and head office in Nainital District, Uttarakhand. Our connection with yoga began through traditional roots, family values, education and years of practice. Today, that journey continues through our dedicated Bengaluru wellness services.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={BRAND.uttarakhandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white text-xs font-bold uppercase tracking-wider transition-all shadow hover:shadow-md group"
            >
              <span>Explore Sadhya Wellness Uttarakhand</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
