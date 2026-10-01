import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PrimaryChoices from './components/PrimaryChoices';
import WhySadhya from './components/WhySadhya';
import HomeYogaSection from './components/HomeYogaSection';
import ServicesSection from './components/ServicesSection';
import WomensWellness from './components/WomensWellness';
import CorporateWellness from './components/CorporateWellness';
import CommunitySection from './components/CommunitySection';
import ProgramBuilder from './components/ProgramBuilder';
import HowItWorks from './components/HowItWorks';
import TeamSection from './components/TeamSection';
import BengaluruAreas from './components/BengaluruAreas';
import OurStoryShort from './components/OurStoryShort';
import UttarakhandRoots from './components/UttarakhandRoots';
import SadhyaToursPreview from './components/SadhyaToursPreview';
import WorkshopsSection from './components/WorkshopsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AdminDashboard from './components/AdminDashboard';
import AboutModal from './components/AboutModal';
import CorporateEnquiryModal from './components/CorporateEnquiryModal';
import CommunityEnquiryModal from './components/CommunityEnquiryModal';

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [preselectedCommunityProg, setPreselectedCommunityProg] = useState('');

  const scrollToBuilder = (presetGoal = null) => {
    const el = document.getElementById('builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCommunity = (progTitle = '') => {
    setPreselectedCommunityProg(progTitle);
    setCommunityOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-stone-900 flex flex-col font-sans selection:bg-brand-forest selection:text-white pb-14 md:pb-0">
      
      {/* 01. Header with Top Utility Bar */}
      <Header 
        onBookClick={scrollToBuilder} 
        onAdminClick={() => setAdminOpen(true)} 
      />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <Hero onBookClick={scrollToBuilder} />

        {/* 03. 4 Main Programs (Primary Choices) */}
        <PrimaryChoices onSelectChoice={(choice) => {
          if (choice.id === 'home-yoga') scrollToBuilder('Home Yoga');
          else if (choice.id === 'corporate-wellness') setCorporateOpen(true);
          else if (choice.id === 'community-yoga') handleOpenCommunity('Apartment Regular Batch');
          else scrollToBuilder(choice.title);
        }} />

        {/* 04. Why Sadhya Wellness (4 Pillars: Personal, Practical, Professional, Consistent) */}
        <WhySadhya />

        {/* 05. Dedicated Personalised Home Yoga Section */}
        <HomeYogaSection onBookClick={scrollToBuilder} />

        {/* 06. 12 Dynamic Services Portfolio (#services) */}
        <ServicesSection 
          onBookService={(s) => scrollToBuilder(s.title)} 
        />

        {/* 07. Dedicated Women's Wellness */}
        <WomensWellness onEnquire={(prog) => scrollToBuilder(prog)} />

        {/* 08. Dedicated Corporate Wellness with B2B Action */}
        <CorporateWellness 
          onOpenCorporateModal={() => setCorporateOpen(true)}
          onEnquire={(prog) => setCorporateOpen(true)} 
        />

        {/* 09. Dedicated Community Section with Society Action */}
        <CommunitySection 
          onOpenCommunityModal={handleOpenCommunity}
          onEnquire={(prog) => handleOpenCommunity(prog)} 
        />

        {/* 10. Interactive 5-Step Custom Program Builder */}
        <ProgramBuilder onSuccess={(lead) => console.log('Enquiry created:', lead)} />

        {/* 11. How It Works 5-Step Visual Timeline */}
        <HowItWorks />

        {/* 12. Certified Team & Master Profiles (Authentic Photos: Kushal Dev Singh & Kavindra) */}
        <TeamSection />

        {/* 13. Bengaluru Neighborhoods Coverage Map */}
        <BengaluruAreas onCheckArea={(area) => scrollToBuilder(`Home visit in ${area}`)} />

        {/* 14. Short Homepage Story Preview (Triggering Full Story Modal) */}
        <OurStoryShort onOpenStory={() => setAboutOpen(true)} />

        {/* 15. Uttarakhand Roots Heritage (Positioned after Bengaluru Content) */}
        <UttarakhandRoots />

        {/* 16. Sadhya Tours Preview (Travel With Purpose) */}
        <SadhyaToursPreview />

        {/* 17. Workshops & Experiences */}
        <WorkshopsSection onEnquireWorkshop={(title) => scrollToContact()} />

        {/* 18. Dynamic Gallery with Lightbox */}
        <GallerySection />

        {/* 19. Genuine Client Testimonials */}
        <TestimonialsSection />

        {/* 20. Frequently Asked Questions */}
        <FaqSection />

        {/* 21. Universal Enquiry & Booking */}
        <ContactSection onSuccess={(lead) => console.log('Contact inquiry created:', lead)} />

        {/* 22. Final High-Conversion CTA */}
        <FinalCTA onBookClick={scrollToBuilder} />
      </main>

      {/* 23. Large 6-Section Footer */}
      <Footer onAdminClick={() => setAdminOpen(true)} />

      {/* 24. Floating WhatsApp & Mobile Sticky Bar */}
      <FloatingCTA onBookClick={scrollToBuilder} />

      {/* Modals & Dialogs */}
      <AboutModal 
        isOpen={aboutOpen} 
        onClose={() => setAboutOpen(false)} 
      />

      <CorporateEnquiryModal 
        isOpen={corporateOpen} 
        onClose={() => setCorporateOpen(false)} 
        onSuccess={(lead) => console.log('Corporate enquiry submitted:', lead)}
      />

      <CommunityEnquiryModal 
        isOpen={communityOpen} 
        onClose={() => setCommunityOpen(false)} 
        preselectedProgram={preselectedCommunityProg}
      />

      {adminOpen && (
        <AdminDashboard onClose={() => setAdminOpen(false)} />
      )}
    </div>
  );
}
