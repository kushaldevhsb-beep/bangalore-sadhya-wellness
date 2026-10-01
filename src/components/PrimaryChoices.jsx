import React from 'react';
import { Home, Heart, Briefcase, Users, ArrowUpRight } from 'lucide-react';
import { PRIMARY_CHOICES } from '../data/platformData';

const iconMap = {
  Home: Home,
  Heart: Heart,
  Briefcase: Briefcase,
  Users: Users
};

export default function PrimaryChoices({ onSelectChoice }) {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PRIMARY_CHOICES.map((choice) => {
          const IconComponent = iconMap[choice.icon] || Home;

          return (
            <div
              key={choice.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-stone-200 hover:border-brand-olive/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-forest/5 flex items-center justify-center text-brand-forest group-hover:bg-brand-forest group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-olive/10 text-brand-olive border border-brand-olive/20">
                    {choice.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-brand-forest group-hover:text-brand-olive transition-colors mb-1.5">
                  {choice.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-brand-olive uppercase tracking-wider mb-3">
                  {choice.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                  {choice.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={choice.actionTarget}
                onClick={(e) => {
                  if (onSelectChoice) onSelectChoice(choice);
                }}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-stone-100 text-xs font-bold text-brand-forest hover:text-brand-olive uppercase tracking-wider transition-colors"
              >
                <span>{choice.cta}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-brand-gold" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
