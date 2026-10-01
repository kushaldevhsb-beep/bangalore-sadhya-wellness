import React, { useState } from 'react';
import { Award, GraduationCap, Clock, CheckCircle2, ChevronRight, X, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/platformData';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive inline-block bg-brand-olive/10 px-3 py-1 rounded-full mb-3">
            Academic Credentials &amp; Classical Tradition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight">
            Meet the People Behind Sadhya Wellness
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base text-stone-600 leading-relaxed">
            Our founding masters and senior consultants hold advanced university degrees in yogic sciences, sports coaching, and physiotherapy, ensuring safe, anatomical, and transformative guidance.
          </p>
        </div>

        {/* 4 Premium Team Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={member.photo || member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-brand-cream font-medium">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-brand-forest group-hover:text-brand-olive transition-colors mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-brand-olive mb-3">
                    {member.role}
                  </p>

                  <div className="flex items-start gap-1.5 text-xs text-stone-600 mb-4 bg-brand-cream/60 p-2.5 rounded-lg border border-stone-200/60">
                    <GraduationCap className="w-4 h-4 text-brand-forest flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{member.credentials}</span>
                  </div>

                  {/* Focus Areas */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">Focus Areas:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.focus.slice(0, 4).map((f, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                          {f}
                        </span>
                      ))}
                      {member.focus.length > 4 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-brand-olive/10 text-brand-olive font-medium">
                          +{member.focus.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* View Profile Action */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-4">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-2.5 px-4 rounded-xl border border-stone-200 hover:border-brand-forest hover:bg-brand-forest hover:text-white text-xs font-semibold uppercase tracking-wider text-stone-700 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>View Full Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Profile Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 relative my-8 max-h-[90vh] flex flex-col sm:flex-row">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-700 flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="sm:w-5/12 h-64 sm:h-auto bg-stone-100 relative">
              <img
                src={selectedMember.photo || selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <div className="text-xs font-semibold text-brand-gold">{selectedMember.role}</div>
                <div className="text-[11px] text-stone-300">{selectedMember.experience}</div>
              </div>
            </div>

            <div className="sm:w-7/12 p-6 sm:p-8 space-y-4 overflow-y-auto max-h-[80vh]">
              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-forest">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-semibold text-brand-olive mt-0.5">
                  {selectedMember.role}
                </p>
              </div>

              <div className="text-xs space-y-1.5 text-stone-700 bg-brand-cream/60 p-3 rounded-xl border border-stone-200/70">
                <div className="font-semibold text-brand-forest flex items-start gap-1.5">
                  <GraduationCap className="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5" />
                  <span>{selectedMember.credentials}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                  Background &amp; Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {selectedMember.clinicalExperience && (
                <div className="bg-brand-forest/5 p-3.5 rounded-xl border border-brand-forest/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-forest mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand-olive" />
                    <span>Observed Practical Work</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {selectedMember.clinicalExperience}
                  </p>
                </div>
              )}

              <div className="pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1.5">
                  Specialized Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMember.focus.map((f, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-brand-olive/10 text-brand-forest border border-brand-olive/20">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
