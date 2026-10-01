import React, { useState } from 'react';
import { X, Users, MapPin, Calendar, Clock, CheckCircle2, Send, Building } from 'lucide-react';
import { leadService } from '../services/leadService';

export default function CommunityEnquiryModal({ isOpen, onClose, preselectedProgram = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    communityName: '',
    area: '',
    approxParticipants: '15-30',
    ageGroup: 'Mixed Families',
    preferredDays: 'Weekend Mornings',
    programType: preselectedProgram || 'Society Wellness Regular Classes',
    spaceAvailable: 'Clubhouse / Multipurpose Hall',
    frequency: 'Weekly (2-3 sessions)',
    notes: ''
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

    try {
      const newLead = leadService.createLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        source: 'community-enquiry-modal',
        program: formData.programType,
        service: 'Community / Society Yoga',
        area: formData.area,
        notes: `Society: ${formData.communityName} | Participants: ${formData.approxParticipants} | Age: ${formData.ageGroup} | Timings: ${formData.preferredDays} | Space: ${formData.spaceAvailable} | Freq: ${formData.frequency} | Notes: ${formData.notes}`,
        status: 'new'
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting community enquiry:', err);
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Namaste Sadhya Wellness!*\n\n` +
      `I would like to request a Community / Society Yoga Program for our residential community in Bengaluru.\n\n` +
      `*Representative:* ${formData.name}\n` +
      `*Society/Community:* ${formData.communityName}\n` +
      `*Location:* ${formData.area}, Bengaluru\n` +
      `*Expected Participants:* ${formData.approxParticipants}\n` +
      `*Age Group:* ${formData.ageGroup}\n` +
      `*Preferred Schedule:* ${formData.preferredDays}\n` +
      `*Facility Space:* ${formData.spaceAvailable}\n` +
      `*Program:* ${formData.programType}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `Please share proposal and pilot session details.`
    );
    return `https://wa.me/918618639113?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-brand-forest px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Request Community / Society Program</h3>
              <p className="text-xs text-brand-cream/70">Doorstep sessions for apartment clubhouses & gated societies across Bengaluru</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-brand-cream/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-brand-olive/10 text-brand-olive rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-brand-forest mb-2">Community Proposal Request Received</h4>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our Bengaluru community coordinator will review your society's requirements for <strong>{formData.communityName}</strong> and connect within 4 hours.
              </p>
            </div>

            <div className="bg-brand-cream/50 p-4 rounded-xl border border-stone-200/60 max-w-md mx-auto text-left text-xs space-y-1.5 text-stone-700">
              <p><strong>Community:</strong> {formData.communityName} ({formData.area})</p>
              <p><strong>Group Size:</strong> {formData.approxParticipants} ({formData.ageGroup})</p>
              <p><strong>Schedule:</strong> {formData.preferredDays} • {formData.frequency}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <span>Instant WhatsApp Confirmation</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-stone-300 font-medium text-stone-700 hover:bg-stone-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Representative Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma (Association Member)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="priya@society.org"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Society / Apartment Name *
                </label>
                <input
                  type="text"
                  name="communityName"
                  required
                  value={formData.communityName}
                  onChange={handleChange}
                  placeholder="e.g. Prestige Greenwoods / Palm Meadows"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Location / Area in Bengaluru *
                </label>
                <input
                  type="text"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Koramangala, HSR Layout, Whitefield"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Expected Participants
                </label>
                <select
                  name="approxParticipants"
                  value={formData.approxParticipants}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                >
                  <option value="5-15">Small group (5–15 residents)</option>
                  <option value="15-30">Medium group (15–30 residents)</option>
                  <option value="30-60">Large society batch (30–60 residents)</option>
                  <option value="60+">Mega event / Society wellness day (60+)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Participant Group Focus
                </label>
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                >
                  <option value="Mixed Families">Mixed Adults & Families</option>
                  <option value="Senior Citizens (50+)">Senior Citizens & 50+ Gentle Mobility</option>
                  <option value="Women Only">Women's Society Group</option>
                  <option value="Kids & Teens">Kids Yoga & Posture Foundation</option>
                  <option value="Working Professionals">Early Morning Professionals</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Program Type
                </label>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                >
                  <option value="Society Regular Classes">Society Regular Yoga Classes</option>
                  <option value="Weekend Community Batch">Weekend Sunrise Batch</option>
                  <option value="50+ Active Mobility Circle">50+ Active Mobility Circle</option>
                  <option value="Kids Summer / Weekend Camp">Kids Yoga & Posture Camp</option>
                  <option value="International Yoga Day / Festival Event">Special Event / Festival Workshop</option>
                  <option value="Sound Healing & Breath Circle">Sound Immersion & Breathwork Evening</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Available Facility Space
                </label>
                <select
                  name="spaceAvailable"
                  value={formData.spaceAvailable}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                >
                  <option value="Clubhouse / Multipurpose Hall">Clubhouse / Multipurpose Hall (Indoor)</option>
                  <option value="Rooftop Deck / Gazebo">Rooftop Deck / Gazebo</option>
                  <option value="Central Lawn / Amphitheatre">Central Lawn / Amphitheatre (Outdoor)</option>
                  <option value="Badminton / Squash Court">Badminton / Indoor Court Space</option>
                  <option value="Other / Need Guidance">Other / Need Site Inspection</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Preferred Frequency
                </label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
                >
                  <option value="Weekly (2-3 sessions)">Regular 2–3 Days / Week</option>
                  <option value="Weekend Only (Sat & Sun)">Weekend Only (Sat & Sun)</option>
                  <option value="Monthly Wellness Workshop">Monthly Saturday Workshop</option>
                  <option value="One-time Pilot / Demo">One-time Trial / Demonstration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Preferred Timings & Additional Notes
              </label>
              <textarea
                name="notes"
                rows="2"
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g. Prefer 6:30 AM to 7:30 AM batches. We have about 20 residents interested. Please arrange a demo session."
                className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-200">
              <p className="text-xs text-stone-500">
                Direct phone: <a href="tel:+918618639113" className="font-semibold text-brand-forest underline">+91 8618639113</a>
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-forest/90 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Submitting...' : 'Request Community Program'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
