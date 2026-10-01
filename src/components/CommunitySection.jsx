import React from 'react';
import { Users, ArrowRight, MessageCircle, Home, Calendar, Sparkles } from 'lucide-react';
import { COMMUNITY_DATA, BRAND } from '../data/platformData';

export default function CommunitySection({ onOpenCommunityModal, onEnquire }) {
  const programs = COMMUNITY_DATA.programs || [];

  const handleOpenModal = (programTitle = '') => {
    if (onOpenCommunityModal) {
      onOpenCommunityModal(programTitle);
    } else if (onEnquire) {
      onEnquire(programTitle || "Community Program");
    }
  };

  return (
    <section id="community-yoga" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Layout: Headline + Group Community Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-brand-olive" />
              <span>Apartments &amp; Residential Societies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight leading-tight">
              {COMMUNITY_DATA.title || 'Yoga Beyond the Studio'}
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              {COMMUNITY_DATA.description || 'Sadhya Wellness can conduct structured yoga and wellness programs in suitable society halls, apartment communities, clubhouses, community spaces and other agreed locations.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenModal('Society Regular Classes')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg active:translate-y-0"
              >
                <span>{COMMUNITY_DATA.ctaText || 'Start a Community Program'}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>

              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! We would like to discuss a Sadhya Community Yoga batch for our apartment society in Bengaluru.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#25D366]/40 text-stone-800 bg-white hover:bg-emerald-50/50 font-medium text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Discuss for Your Society</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Ideal for apartment associations, gated townships, senior resident forums &amp; weekend clubs</span>
            </div>
          </div>

          {/* Genuine Group / Community Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src="/assets/images/service-couple-family-yoga.png"
                alt="Community and Group Yoga in Bengaluru Residential Society - Sadhya Wellness"
                className="w-full h-[360px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Group Harmony &amp; Connection</span>
                <p className="text-sm font-serif italic text-brand-cream/90 mt-1">
                  "Practicing together builds lasting health and strong community bonds."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Community Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-olive">
                    Community Batch
                  </span>
                  <span className="text-xs font-bold text-stone-300">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-brand-forest group-hover:text-brand-olive transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-brand-olive" />
                  <span>Clubhouse / Hall</span>
                </span>
                <button
                  onClick={() => handleOpenModal(item.title)}
                  className="font-semibold text-brand-forest hover:text-brand-olive transition-colors flex items-center gap-1"
                >
                  <span>Request Cohort</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
