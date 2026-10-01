import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Building, ArrowRight, Check, Send } from 'lucide-react';
import { BRAND } from '../data/platformData';
import { leadService } from '../services/leadService';

export default function ContactSection({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Koramangala',
    service: 'Personalised Home Yoga',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const record = {
      name: formData.name,
      phone: formData.phone,
      whatsapp: formData.phone,
      email: formData.email,
      location: formData.location,
      service: formData.service,
      message: formData.message,
      source: "contact_page"
    };

    leadService.create(record);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(record);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-olive inline-block bg-brand-olive/10 px-3 py-1 rounded-full mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-forest tracking-tight">
            Let's Begin Your Wellness Journey
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base text-stone-600 leading-relaxed">
            Reach out directly to arrange doorstep consultation, corporate wellness proposals, or apartment society batches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Operations Clarity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-brand-forest">
                Direct Communication Channels
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a 
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors border border-stone-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-forest group-hover:text-brand-olive">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 block">Call Directly</span>
                    <span className="text-base font-bold text-brand-forest">{BRAND.phone}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Namaste! I visited your website and would like to enquire about Sadhya Wellness in Bengaluru.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 transition-colors border border-[#25D366]/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white shadow-sm flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 block">WhatsApp Inquiry</span>
                    <span className="text-base font-bold text-emerald-950">{BRAND.whatsapp}</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors border border-stone-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-forest group-hover:text-brand-olive">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 block">Official Email</span>
                    <span className="text-base font-bold text-brand-forest">{BRAND.email}</span>
                  </div>
                </a>
              </div>

              {/* Geographic Clarity */}
              <div className="pt-6 border-t border-stone-100 space-y-4">
                <div className="flex items-start gap-3 text-xs text-stone-600">
                  <Building className="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-forest">Head Office:</span>
                    <span>Nainital District, Uttarakhand, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-600">
                  <MapPin className="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-brand-forest">Bengaluru Delivery:</span>
                    <span>Doorstep visits across selected residential &amp; commercial zones (Indiranagar, HSR Layout, Koramangala, BTM, Ejipura, Domlur, Wilson Garden &amp; nearby)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-stone-200/80 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-brand-forest mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              Leave your contact details and our senior yoga coordinator will reach out to discuss your goals and schedule.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <div className="w-12 h-12 rounded-full bg-brand-forest text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-brand-forest">
                  Thank you for contacting Sadhya Wellness.
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                  We have received your enquiry and our team will contact you shortly to coordinate your session.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-brand-forest underline"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Bengaluru Area *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Koramangala 4th Block"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Interested Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none text-sm bg-white"
                  >
                    <option value="Personalised Home Yoga">Personalised Home Yoga (1-on-1)</option>
                    <option value="Women's Wellness">Women's Wellness &amp; Strength</option>
                    <option value="Corporate Yoga">Corporate &amp; Workplace Wellness</option>
                    <option value="Community / Society Yoga">Apartment Community Yoga</option>
                    <option value="50+ Gentle Senior Yoga">50+ Gentle Senior Yoga</option>
                    <option value="Desk Mobility & Posture">Mobility &amp; Back Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Message / Timings
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your goals, schedule preference, or team size..."
                    className="w-full p-3 rounded-xl border border-stone-300 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-forest hover:bg-brand-forest/90 text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>{loading ? "Submitting..." : "Send Enquiry to Sadhya Wellness"}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
