import React from 'react';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function FloatingCTA({ onBookClick }) {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I visited your website and would like more information about your home yoga classes in Bengaluru.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:-translate-y-1 transition-all duration-300 group border-2 border-white/80"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
          </div>
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100 block leading-tight">Instant Chat</span>
            <span className="text-xs font-bold block leading-tight">WhatsApp Us</span>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Navigation: WhatsApp | Call | Book */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-2">
        <div className="grid grid-cols-3 gap-2">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I would like to enquire about home yoga in Bengaluru.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-900 font-bold text-[11px] active:bg-emerald-100 transition-colors border border-emerald-300 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 text-[#25D366] fill-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${BRAND.phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-100 text-stone-900 font-bold text-[11px] active:bg-stone-200 transition-colors border border-stone-300 shadow-sm"
          >
            <Phone className="w-4 h-4 mb-0.5 text-stone-800" />
            <span>Call Us</span>
          </a>

          {/* Book */}
          <button
            onClick={onBookClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-forest text-white font-bold text-[11px] active:bg-brand-forest/90 transition-colors shadow-sm"
          >
            <CalendarCheck className="w-4 h-4 mb-0.5 text-brand-gold" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </>
  );
}
