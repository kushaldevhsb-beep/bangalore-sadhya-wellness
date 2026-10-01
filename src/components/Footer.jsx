import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink, Heart } from 'lucide-react';
import { BRAND } from '../data/platformData';

export default function Footer({ onAdminClick }) {
  return (
    <footer className="bg-brand-footer text-brand-linen pt-16 pb-12 border-t border-brand-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 6-Section Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-sm">
          
          {/* SECTION 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 rounded-2xl p-3 inline-block shadow-md">
              <img
                src={BRAND.logo}
                alt="Sadhya Wellness"
                className="h-14 w-auto object-contain"
              />
            </div>
            
            <p className="font-serif italic text-lg text-white">
              "{BRAND.tagline}"
            </p>

            <p className="text-brand-linen/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Rooted in Nainital, Uttarakhand. Serving homes, workplaces and communities across Bengaluru with certified, university-credentialed yoga masters.
            </p>

            <div className="pt-2 text-xs text-brand-linen/60">
              © {new Date().getFullYear()} Sadhya Wellness. All rights reserved.
            </div>
          </div>

          {/* SECTION 2: EXPLORE */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-1 border-b border-white/10">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-brand-linen/80">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">All Services</a></li>
              <li><a href="#womens-wellness" className="hover:text-white transition-colors">Women's Wellness</a></li>
              <li><a href="#corporate-wellness" className="hover:text-white transition-colors">Corporate Teams</a></li>
              <li><a href="#community-yoga" className="hover:text-white transition-colors">Community Yoga</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#workshops" className="hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* SECTION 3: SERVICES */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-1 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-brand-linen/80">
              <li><a href="#services" className="hover:text-white transition-colors">Home Yoga</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Personal Yoga (1-on-1)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Beginner Yoga</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Yoga for Fitness</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobility &amp; Posture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Strength &amp; Core</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Family Yoga</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Kids Yoga</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">50+ Gentle Wellness</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Breathing &amp; Relaxation</a></li>
            </ul>
          </div>

          {/* SECTION 4: BUSINESS STRUCTURE */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-1 border-b border-white/10">
              Business
            </h4>
            <div className="space-y-3 text-xs text-brand-linen/80">
              <div>
                <span className="font-semibold text-white block">Sadhya Wellness Head Office</span>
                <span className="text-brand-linen/70">{BRAND.headOffice}</span>
              </div>

              <div>
                <span className="font-semibold text-white block">Bengaluru Services</span>
                <span className="text-brand-linen/70">Selected Bengaluru Areas (Home, Office &amp; Community visits)</span>
              </div>

              <div>
                <span className="font-semibold text-white block">Sadhya Tours</span>
                <span className="text-brand-linen/70">Curated retreats &amp; cultural travel</span>
              </div>
            </div>
          </div>

          {/* SECTION 5: CONTACT & SECTION 6: CONNECTED WEBSITES */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-1 border-b border-white/10 mb-3">
                Contact
              </h4>
              <div className="space-y-2 text-xs">
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-green" />
                  <span>{BRAND.phone}</span>
                </a>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-green" />
                  <span>{BRAND.email}</span>
                </a>
                <a 
                  href={`https://wa.me/${BRAND.phoneRaw}?text=Hi!%20I%20would%20like%20to%20enquire%20about%20Sadhya%20Wellness%20sessions%20in%20Bengaluru.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-300 hover:text-white transition-colors font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-1 border-b border-white/10 mb-2">
                Connected Websites
              </h4>
              <ul className="space-y-1.5 text-xs text-brand-linen/80">
                <li>
                  <a 
                    href={BRAND.uttarakhandUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between hover:text-white group"
                  >
                    <span>Sadhya Uttarakhand</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a 
                    href={BRAND.toursUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between hover:text-white group"
                  >
                    <span>Sadhya Tours</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Admin Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-linen/60">
          <div className="flex items-center gap-2">
            <span>Sadhya Wellness — Personalised Yoga &amp; Wellness, Brought to Your Space.</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onAdminClick}
              className="text-brand-linen/40 hover:text-brand-linen text-[11px] underline"
            >
              Coordinator Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
