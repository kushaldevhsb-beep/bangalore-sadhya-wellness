# Sadhya Wellness — Bengaluru: Comprehensive Website Redesign Audit & Strategy Report

## 1. Executive Audit Overview
This audit inspects the current codebase of **Sadhya Wellness — Bengaluru** (`bangalore.sadhyawellness.com`) against the master redesign specifications.

| Component / Area | Current Status | Audit Finding | Redesign / Action Required |
| :--- | :--- | :--- | :--- |
| **Business Positioning** | Good | Bengaluru is currently positioned as a service operation. | Strengthen clarity: Head Office is in Nainital, Uttarakhand. Bengaluru is dedicated to doorstep home visits, workplace wellness, and society programs. No fake street address. |
| **Visual Identity & Theme** | Adequate | Current colors are sage green and warm linen. | Upgrade to refined color system: **Deep Forest Green** (`#16281e`), **Natural Olive** (`#627551`), **Warm Cream** (`#fcfaf6`), **Earth Beige** (`#e8e2d8`), and **Muted Himalayan Gold** (`#c5a059`). Avoid generic corporate blue or neon tones. |
| **Typography** | Good | Hedvig Letters Serif + Manrope. | Retain and polish editorial contrast: classical humanist serif for headings with high-readability sans-serif for body copy. |
| **Logo** | Excellent | Official transparent Sadhya Wellness emblem (`sadhya-wellness-official-logo.png`). | Retain without any alteration of proportions or core identity. Ensure correct responsive variants across light/dark backgrounds. |
| **Hero Section** | Needs Polish | Has eyebrow, H1, subtext, dual CTA, and trust line. | Refine visual depth with authentic photography, subtle Himalayan contour, exact trust line (`Home • Women • Corporate • Community`), and phone number (`+91 8618639113`). |
| **4 Main Programs Entry** | Good | 4 cards currently exist below hero. | Polish copy and subtle hover interactions for: Home Yoga, Women's Wellness, Corporate Wellness, Community Yoga. |
| **Why Sadhya** | Needs Content Update | Currently uses Personal, Practical, Flexible, Human. | Update pillars to exact specification: **PERSONAL**, **PRACTICAL**, **PROFESSIONAL**, **CONSISTENT** under heading *"Wellness, Made Personal."* |
| **Home Yoga Section** | Missing as Dedicated Section | Was merged into general services. | Create a dedicated, standalone **Personalised Home Yoga** section highlighting doorstep visits in Bengaluru, adaptable around routine, space, and goals. |
| **Women's Wellness** | Adequate | 8 programs exist. | Replace visual with authentic Indian women's wellness photography. Emphasize real-life everyday routines (working women, homemakers, 40+, 50+). |
| **Corporate Wellness** | Needs Dedicated Form | Has programs but generic inquiry. | Add dedicated **Corporate B2B Proposal Form** with fields for company name, employee count, preferred frequency, and format. |
| **Community Yoga** | Needs Image & Form Update | Image showed single trainer instead of group. | Replace image with genuine group/society hall practice. Add dedicated **Community Program Request Form**. |
| **Custom Program Builder** | Excellent | 5-step interactive builder. | Retain and ensure all 5 steps feed directly into `leadService` database with 1-click WhatsApp pre-filled generation. |
| **How It Works** | Good | 5 steps exist. | Polish visual timeline: 01 Tell Us -> 02 Understand Needs -> 03 Choose Schedule -> 04 Begin Session -> 05 Build Practice. |
| **Team Section (CRITICAL)** | Needs Urgent Photo & Bio Update | Used earlier generic/extracted images. | **Replace photos with user-uploaded authentic photos**: Kushal Dev Singh (real photo in white kurta before wall plaque) and Kavindra (real photo in white kurta with olive gamcha). Update credentials, school education at Jawahar Navodaya Vidyalaya, observation-based wellness goals without medical cure language. |
| **Bengaluru Service Areas** | Good | 10 core neighborhoods. | Retain interactive neighborhood map visual: Ejipura, Koramangala, BTM Layout, HSR Layout, Viveknagar, Adugodi, Jakkasandra, Indiranagar, Domlur, Wilson Garden. Communicate Home Visits & Workplace sessions. |
| **About Page & Our Story** | Needs Content Overhaul | Contained old brief preview. | Replace with natural founder-led story (Uttarakhand roots, fathers' values, university vision, Kushal Dev Singh & Abhay Joshi, real client wellness observations, closing with *"Rooted in Uttarakhand. Built with Purpose. Guided by Yoga."*). Add full About modal with Vision, Mission, Approach (4 stages), and What We Believe. |
| **Uttarakhand Roots** | Good | Positioned toward bottom. | Retain position after Bengaluru content. Heading: *"Rooted in Nainital, Uttarakhand"*, links to `https://sadhyawellness.com/`. |
| **Sadhya Tours** | Good | Positioned as teaser. | Retain heading: *"Travel With Purpose"*, links to `https://tour.sadhyawellness.com/`. |
| **Workshops & Gallery** | Good | 4 workshops + filterable masonry gallery with lightbox. | Polish categories and responsive lightbox. |
| **Universal Enquiry & Contact** | Good | Forms exist. | Provide separate specialized forms for Corporate, Community, and Universal Enquiry with source attribution. |
| **Admin Dashboard** | Good | Protected PIN dashboard. | Enhance metrics: Total, New, Contacted, Scheduled, Follow-up, Corporate, Community, Women's, Home Yoga. |
| **Floating CTA** | Good | Desktop WhatsApp + mobile sticky bottom (`WhatsApp | Call | Book`). | Retain with instant contextual WhatsApp messages. |

---

## 2. Master Implementation Strategy

### Step 1: Update Platform Data (`src/data/platformData.js`)
- Update team data with exact bios, qualifications, and the new authentic photo paths:
  - Kushal Dev Singh: `/assets/images/team-kushal-dev-singh-real.jpg`
  - Kavindra: `/assets/images/team-kavindra-real.jpg`
- Update Why Sadhya pillars: **PERSONAL**, **PRACTICAL**, **PROFESSIONAL**, **CONSISTENT**.
- Update full About Story, Vision, Mission, 4-stage Approach, and Core Beliefs.
- Update refined color tokens in `tailwind.config.js`.

### Step 2: Implement Missing Dedicated Sections
- **`HomeYogaSection.jsx`**: Standalone high-conversion section for 1-on-1 home visits.
- **`CorporateEnquiryModal.jsx`**: Specialized B2B proposal form.
- **`CommunityEnquiryModal.jsx`**: Society & apartment clubhouse booking form.
- **`AboutModal.jsx`**: Full dedicated view of Our Story, Vision, Mission, Approach, and Beliefs.

### Step 3: Implement Exact Homepage Order (Section 37)
```
01 Header
02 Hero
03 Four Main Programs (Primary Choices)
04 Why Sadhya Wellness (Personal, Practical, Professional, Consistent)
05 Personalised Home Yoga
06 Women's Wellness (Revised Authentic Imagery)
07 Corporate Wellness (With Proposal Action)
08 Community Yoga (With Group Imagery & Society Action)
09 Custom Wellness Builder (5 Steps)
10 How It Works (5-Step Timeline)
11 Our Team (Authentic Photos & Full Verified Bios)
12 Bengaluru Service Areas (10 Localities Map Visual)
13 Short Our Story (Triggering Full Story)
14 Uttarakhand Roots (Head Office Heritage)
15 Sadhya Tours (Travel With Purpose Teaser)
16 Workshops (Dynamic CMS)
17 Gallery (Masonry with Lightbox)
18 Genuine Testimonials
19 Universal Enquiry & Booking Forms
20 Final CTA
21 Footer
```

### Step 4: Verification & Performance Testing
- Build production bundle (`npm run build`).
- Verify asset loading over HTTP (200 OK for real team photos, logo, and artwork).
- Test on desktop, tablet, and mobile breakpoints.
