import React from 'react';
import { Compass, ExternalLink } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function SadhyaToursPreview() {
  return (
    <section className="py-16 bg-brand-cream/80 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-forest">
              <Compass className="w-4 h-4 text-brand-olive" />
              <span>Sadhya Tours Ecosystem</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">
              Travel With Purpose
            </h2>

            <p className="text-xs font-semibold text-brand-olive uppercase tracking-wider">
              Yoga • Nature • Culture • Uttarakhand
            </p>

            <p className="text-sm text-stone-600 leading-relaxed font-normal max-w-xl">
              Discover Uttarakhand through yoga retreats, nature experiences, Char Dham journeys, Neem Karoli Baba journeys and other curated travel experiences.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={BRAND.toursUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-forest/40 hover:border-brand-forest bg-white hover:bg-brand-forest hover:text-white text-brand-forest text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Explore Sadhya Tours</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
