import React from 'react';
import { Mountain, ArrowRight, Sparkles } from 'lucide-react';
import { ABOUT_FULL_STORY } from '../data/platformData';

export default function OurStoryShort({ onOpenStory }) {
  return (
    <section id="about" className="py-20 bg-brand-cream/60 border-y border-stone-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
          <Mountain className="w-3.5 h-3.5 text-brand-olive" />
          <span>Origins &amp; Vision</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest leading-snug">
          Yoga Rooted in Heritage, Refined for Modern Living
        </h2>

        <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-2xl mx-auto">
          Sadhya Wellness grew from a shared connection with yoga, fitness and holistic wellbeing. Rooted in Uttarakhand and shaped through university education, practical coaching and continuous practice, our vision is to make wellness practical, personal and relevant to modern everyday life.
        </p>

        <div className="p-4 bg-white/80 rounded-2xl border border-stone-200/80 max-w-xl mx-auto shadow-sm">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-forest uppercase font-serif block">
            {ABOUT_FULL_STORY.tagline || 'ROOTED IN UTTARAKHAND. BUILT WITH PURPOSE. GUIDED BY YOGA.'}
          </span>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenStory}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-brand-forest/30 hover:border-brand-forest bg-brand-forest hover:bg-brand-forest/90 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:translate-y-0"
          >
            <span>Read Our Full Story &amp; Vision</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </button>
        </div>

      </div>
    </section>
  );
}
