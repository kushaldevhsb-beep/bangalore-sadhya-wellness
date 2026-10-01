import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function Header({ onBookClick, onAdminClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Women's Wellness", href: "#womens-wellness" },
    { label: "Corporate", href: "#corporate-wellness" },
    { label: "Community", href: "#community-yoga" },
    { label: "Our Team", href: "#team" },
    { label: "Experience", href: "#workshops" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-brand-forest text-brand-cream/90 text-xs py-2 px-4 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="font-semibold tracking-wide text-white">Sadhya Wellness • Bengaluru Doorstep Operations</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${BRAND.phone}`} 
              className="flex items-center gap-1.5 text-white hover:text-brand-gold transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BRAND.phone}</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a 
              href={`mailto:${BRAND.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-brand-cream hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BRAND.email}</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <button 
              onClick={onAdminClick}
              className="hidden md:flex items-center gap-1 text-brand-cream/70 hover:text-brand-gold transition-colors"
              title="Admin Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200' 
          : 'bg-brand-cream py-3.5 border-b border-stone-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src={BRAND.logo} 
              alt="Sadhya Wellness" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-6 text-[14px] font-medium text-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-forest transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-forest hover:after:w-full after:transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I would like to enquire about Sadhya Wellness sessions in Bengaluru.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#25D366]/40 text-stone-800 bg-white hover:bg-emerald-50 text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest text-white hover:bg-brand-forest/90 text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-stone-800" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-stone-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <a
                href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I visited your website and would like more information about your home yoga classes in Bengaluru.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onBookClick) onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-forest text-white font-bold text-sm shadow"
              >
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
