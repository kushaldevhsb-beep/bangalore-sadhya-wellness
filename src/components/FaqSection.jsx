import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS, BRAND } from '../data/platformData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-sand/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
            Clarity for Your Practice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-brand-green/40 mx-auto mt-3 mb-4"></div>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            Everything you need to know about our doorstep in-home yoga sessions, trainer safety, timings, and custom therapy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-sand/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-brand-sand/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-brand-dark">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-brand-sand/60 text-brand-dark flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-emerald text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-dark/80 leading-relaxed border-t border-brand-sand/40 font-normal animate-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-brand-sand shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-serif font-bold text-brand-dark">
              Have a specific question about your locality or schedule?
            </h4>
            <p className="text-xs text-brand-dark/60 mt-0.5">
              Speak directly with our senior coordinator via WhatsApp for instant clarity.
            </p>
          </div>

          <a
            href={`https://wa.me/${BRAND.phoneRaw}?text=Hi!%20I%20have%20a%20question%20about%20Sadhya%20Wellness%20in%20Bengaluru.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
