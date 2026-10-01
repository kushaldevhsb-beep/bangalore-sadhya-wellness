import React, { useState } from 'react';
import { 
  X, Building2, User, Briefcase, MapPin, Phone, Mail, 
  Users, Sparkles, Monitor, Calendar, Send, CheckCircle2, MessageSquare
} from 'lucide-react';
import { leadService } from '../services/leadService';
import { BRAND } from '../data/platformData';

export default function CorporateEnquiryModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    phone: '',
    whatsapp: '',
    email: '',
    companyLocation: '',
    numberOfEmployees: '15-30',
    program: 'Desk Mobility & Posture',
    preferredDays: 'Mon, Wed, Fri',
    preferredTime: 'Morning (8:00 AM)',
    frequency: '3x / week',
    duration: '45 mins',
    mode: 'Office On-site',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const record = {
      name: `${formData.contactPerson} (${formData.companyName})`,
      phone: formData.phone,
      whatsapp: formData.whatsapp || formData.phone,
      email: formData.email,
      location: formData.companyLocation || 'Bengaluru',
      service: `Corporate: ${formData.program}`,
      programType: `B2B • ${formData.mode} • ${formData.numberOfEmployees} Pax`,
      goal: `Desk Mobility & Team Wellness (${formData.frequency})`,
      frequency: formData.frequency,
      sessionMode: formData.mode,
      message: `Designation: ${formData.designation}. Preferred Days: ${formData.preferredDays}, Time: ${formData.preferredTime}, Duration: ${formData.duration}. Notes: ${formData.message}`,
      source: "corporate_modal"
    };

    leadService.create(record);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(record);
    }, 500);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Namaste Sadhya Wellness!*\n\n` +
      `We would like to request a Corporate Wellness Proposal for our team in Bengaluru.\n\n` +
      `*Company:* ${formData.companyName}\n` +
      `*Contact Person:* ${formData.contactPerson} (${formData.designation || 'Team Lead'})\n` +
      `*Location:* ${formData.companyLocation}, Bengaluru\n` +
      `*Team Size:* ${formData.numberOfEmployees}\n` +
      `*Program:* ${formData.program}\n` +
      `*Mode:* ${formData.mode} (${formData.frequency})\n` +
      `*Official Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `Please share proposal and pilot session details.`
    );
    return `https://wa.me/918618639113?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-fadeIn">
        
        {/* Header - Deep Forest Green with Gold Accent */}
        <div className="bg-brand-forest px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold border border-brand-gold/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                Request Corporate Wellness Proposal
              </h3>
              <p className="text-xs text-brand-cream/80">
                Customized for Bengaluru Offices, IT Teams &amp; Hybrid Workplaces
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-brand-cream/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-brand-olive/15 text-brand-olive rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-brand-forest mb-2">
                Corporate Proposal Request Received
              </h4>
              <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.contactPerson}</strong>. Our Bengaluru corporate wellness coordinator will review your requirements for <strong>{formData.companyName}</strong> and share a structured proposal within 4 hours.
              </p>
            </div>

            <div className="bg-brand-cream/60 p-4 rounded-xl border border-stone-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-stone-700">
              <p><strong>Company:</strong> {formData.companyName} ({formData.companyLocation})</p>
              <p><strong>Program:</strong> {formData.program} • {formData.numberOfEmployees} Employees</p>
              <p><strong>Format:</strong> {formData.mode} • {formData.frequency}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm"
              >
                <span>Instant WhatsApp Confirmation</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-stone-300 font-medium text-stone-700 hover:bg-stone-50 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Row 1: Company Name & Contact Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Company / Organization Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Infosys, Swiggy, Zerodha"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Contact Person Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Designation & Company Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Designation / Role
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. HR Manager / Wellness Lead"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Company Location in Bengaluru *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="companyLocation"
                    required
                    value={formData.companyLocation}
                    onChange={handleChange}
                    placeholder="e.g. Koramangala / HSR / Indiranagar"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Phone (WhatsApp) & Official Email */}
            <div grid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Phone Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Official Work Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hr@company.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Team Size & Preferred Program */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Expected Participants (Team Size)
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="numberOfEmployees"
                    value={formData.numberOfEmployees}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  >
                    <option value="Under 15">Small Team (Under 15)</option>
                    <option value="15-30">Department Batch (15–30)</option>
                    <option value="30-75">Mid-sized Team (30–75)</option>
                    <option value="75-200">Large Organization (75–200)</option>
                    <option value="200+">Enterprise Wide / Multiple Batches (200+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Preferred Program
                </label>
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  >
                    <option value="Desk Mobility & Posture">Desk Mobility &amp; Ergonomics</option>
                    <option value="Corporate Yoga">Corporate Yoga (Morning / Sunset)</option>
                    <option value="Workplace Movement">Workplace Movement Micro-breaks</option>
                    <option value="Employee Fitness">Employee Metabolic Fitness</option>
                    <option value="Breathing & Relaxation">Breathing &amp; Nervous System Reset</option>
                    <option value="Meditation & Focus">Executive Meditation &amp; Focus</option>
                    <option value="Wellness Workshops">Interactive Half-Day Workshops</option>
                    <option value="Custom Team Initiative">Custom Quarterly Initiative</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 5: Mode & Frequency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Format / Delivery Mode
                </label>
                <div className="relative">
                  <Monitor className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  >
                    <option value="Office On-site">Office On-site (Bengaluru)</option>
                    <option value="Hybrid">Hybrid (On-site + Virtual Live)</option>
                    <option value="Virtual Live">Virtual Live Interactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Preferred Frequency
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-brand-olive absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                  >
                    <option value="3x / week">3 Sessions / Week (Mon, Wed, Fri)</option>
                    <option value="2x / week">2 Sessions / Week (Tue, Thu)</option>
                    <option value="Weekly Workshop">Weekly Friday Workshop</option>
                    <option value="Daily Batches">Daily Ongoing Batches</option>
                    <option value="One-time Event">One-time Masterclass / Team Event</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Specific Team Goals or Schedule Constraints
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-brand-olive absolute left-3.5 top-3 pointer-events-none" />
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Our developers experience cervical neck stiffness. Preferred slot is 8:30 AM before standup."
                  className="w-full pl-10 pr-3.5 py-2 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-stone-500">
                Direct HR helpline: <a href="tel:+918618639113" className="font-semibold text-brand-forest hover:underline">+91 8618639113</a>
              </p>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-forest hover:bg-brand-forest/90 text-white px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg active:translate-y-0"
              >
                <Send className="w-4 h-4 text-brand-gold" />
                <span>{loading ? 'Submitting...' : 'Request Corporate Proposal'}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
