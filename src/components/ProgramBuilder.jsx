import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageCircle, Check, MapPin, Phone, Mail, User } from 'lucide-react';
import { leadService } from '../services/leadService';
import { BRAND } from '../data/platformData';

export default function ProgramBuilder({ onSuccess }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    who: "Individual",
    lookingFor: "Personalised Yoga",
    where: "Home",
    frequency: "3x/week",
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    location: "Koramangala",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const whoOptions = [
    "Individual", "Couple", "Family", "Women Group", "Children", "50+ Senior", "Corporate Team", "Community Group"
  ];

  const lookingForOptions = [
    "Personalised Yoga", "Beginner Yoga", "Fitness & Stamina", "Mobility & Posture", "Strength & Core", 
    "Breathing & Stress Relief", "General Wellness", "Custom Program"
  ];

  const whereOptions = [
    "Home", "Office / Workplace", "Society Clubhouse", "Community Hall", "Online Session", "Other"
  ];

  const frequencyOptions = [
    "One-time Assessment", "2x / week", "3x / week", "5x / week (Daily)", "Custom Schedule"
  ];

  const bengaluruLocations = [
    "Ejipura", "Koramangala", "BTM Layout", "HSR Layout", "Viveknagar", 
    "Adugodi", "Jakkasandra", "Indiranagar", "Domlur", "Wilson Garden", 
    "Whitefield", "Sarjapur Road", "Other Bengaluru Area"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const enquiryRecord = {
      name: formData.name,
      phone: formData.phone,
      whatsapp: formData.whatsapp || formData.phone,
      email: formData.email,
      location: formData.location,
      ageGroup: formData.who,
      service: formData.lookingFor,
      programType: `${formData.who} • ${formData.where}`,
      goal: formData.lookingFor,
      frequency: formData.frequency,
      sessionMode: formData.where,
      message: formData.message,
      source: "program_builder"
    };

    leadService.create(enquiryRecord);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(enquiryRecord);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Sadhya Wellness! I built a program requirement on your website:
• For: ${formData.who}
• Goal: ${formData.lookingFor}
• Location: ${formData.location} (Bengaluru)
• Session Mode: ${formData.where}
• Frequency: ${formData.frequency}
• Name: ${formData.name || 'Visitor'}
Please let me know availability and trainer matching.`;

    window.open(`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="builder" className="py-24 bg-gradient-to-b from-[#f5f1eb] to-brand-linen relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sand border border-brand-green/30 text-brand-dark text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Interactive Customizer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark tracking-tight">
            Build Your Wellness Program
          </h2>
          <div className="w-16 h-0.5 bg-brand-green/40 mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-brand-dark/75 leading-relaxed">
            Tailor your exact requirement in 60 seconds. Our masters will review your parameters and recommend a structured path.
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-brand-sand overflow-hidden">
          
          {/* Step Progress Bar */}
          <div className="bg-brand-dark p-4 sm:p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-emerald flex items-center justify-center font-bold text-sm">
                0{step}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold leading-tight">
                  {step === 1 && "Step 1: Who is this program for?"}
                  {step === 2 && "Step 2: What are you looking to achieve?"}
                  {step === 3 && "Step 3: Where should sessions take place?"}
                  {step === 4 && "Step 4: Preferred weekly frequency?"}
                  {step === 5 && "Step 5: Share contact details for consultation"}
                </h3>
                <p className="text-xs text-brand-linen/70 hidden sm:block">
                  Step {step} of 5 • Tailored for Bengaluru service zones
                </p>
              </div>
            </div>

            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-6 sm:w-8 h-1.5 rounded-full transition-all ${
                    s <= step ? 'bg-brand-emerald' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark">
                  Thank you for contacting Sadhya Wellness.
                </h3>
                <p className="text-brand-dark/80 max-w-md mx-auto text-sm leading-relaxed">
                  We have received your enquiry and our senior yoga consultant will contact you shortly to confirm your Bengaluru doorstep session slot.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm shadow hover:bg-emerald-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Directly</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-3 rounded-full border border-brand-sand text-brand-dark text-sm font-semibold hover:bg-brand-sand/50"
                  >
                    Build Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Step 1: Who */}
                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-sm text-brand-dark/70">Select the recipient of the program:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {whoOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, who: opt })}
                          className={`p-4 rounded-xl border text-sm font-semibold transition-all text-left flex flex-col justify-between h-24 ${
                            formData.who === opt
                              ? 'border-brand-emerald bg-emerald-50/60 text-emerald-950 shadow-sm ring-2 ring-brand-emerald/20'
                              : 'border-brand-sand hover:bg-brand-sand/30 text-brand-dark'
                          }`}
                        >
                          <span>{opt}</span>
                          {formData.who === opt && <Check className="w-4 h-4 text-brand-emerald self-end" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: What */}
                {step === 2 && (
                  <div className="space-y-6">
                    <p className="text-sm text-brand-dark/70">Select your primary wellness focus:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {lookingForOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, lookingFor: opt })}
                          className={`p-4 rounded-xl border text-sm font-semibold transition-all text-left flex flex-col justify-between h-24 ${
                            formData.lookingFor === opt
                              ? 'border-brand-emerald bg-emerald-50/60 text-emerald-950 shadow-sm ring-2 ring-brand-emerald/20'
                              : 'border-brand-sand hover:bg-brand-sand/30 text-brand-dark'
                          }`}
                        >
                          <span>{opt}</span>
                          {formData.lookingFor === opt && <Check className="w-4 h-4 text-brand-emerald self-end" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Where */}
                {step === 3 && (
                  <div className="space-y-6">
                    <p className="text-sm text-brand-dark/70">Select the desired venue/format:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {whereOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, where: opt })}
                          className={`p-4 rounded-xl border text-sm font-semibold transition-all text-left flex flex-col justify-between h-24 ${
                            formData.where === opt
                              ? 'border-brand-emerald bg-emerald-50/60 text-emerald-950 shadow-sm ring-2 ring-brand-emerald/20'
                              : 'border-brand-sand hover:bg-brand-sand/30 text-brand-dark'
                          }`}
                        >
                          <span>{opt}</span>
                          {formData.where === opt && <Check className="w-4 h-4 text-brand-emerald self-end" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Frequency */}
                {step === 4 && (
                  <div className="space-y-6">
                    <p className="text-sm text-brand-dark/70">How often would you like to practice?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {frequencyOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, frequency: opt })}
                          className={`p-4 rounded-xl border text-sm font-semibold transition-all text-left flex flex-col justify-between h-24 ${
                            formData.frequency === opt
                              ? 'border-brand-emerald bg-emerald-50/60 text-emerald-950 shadow-sm ring-2 ring-brand-emerald/20'
                              : 'border-brand-sand hover:bg-brand-sand/30 text-brand-dark'
                          }`}
                        >
                          <span>{opt}</span>
                          {formData.frequency === opt && <Check className="w-4 h-4 text-brand-emerald self-end" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Details */}
                {step === 5 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-brand-dark/40 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Priya Sharma"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-sand focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-brand-dark/40 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value, whatsapp: e.target.value })}
                            placeholder="+91 98XXXXXXXX"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-sand focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-brand-dark/40 absolute left-3 top-3.5" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-sand focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-1">
                          Bengaluru Area *
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-brand-dark/40 absolute left-3 top-3.5" />
                          <select
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-sand focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald outline-none text-sm bg-white"
                          >
                            {bengaluruLocations.map((loc) => (
                              <option key={loc} value={loc}>{loc}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-1">
                        Any specific health focus or timing note?
                      </label>
                      <textarea
                        rows="2"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Lower back stiffness, preferred morning 7 AM slot..."
                        className="w-full p-3 rounded-xl border border-brand-sand focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald outline-none text-sm"
                      />
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-brand-dark hover:bg-brand-slate text-brand-linen font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>{loading ? "Processing..." : "Create My Enquiry"}</span>
                        <ArrowRight className="w-4 h-4 text-brand-green" />
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-emerald-600/40 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>WhatsApp My Requirement</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Step Navigation Controls (Steps 1-4) */}
                {step < 5 && (
                  <div className="pt-8 flex items-center justify-between border-t border-brand-sand mt-8">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-xs font-semibold text-brand-dark/70 hover:text-brand-dark py-2 px-4 rounded-full border border-brand-sand"
                      >
                        ← Back
                      </button>
                    ) : <div></div>}

                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-brand-dark hover:bg-brand-slate text-white text-xs font-semibold uppercase tracking-wider transition-all shadow"
                    >
                      <span>Continue to Step 0{step + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
