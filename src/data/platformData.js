export const BRAND = {
  name: "Sadhya Wellness",
  tagline: "Wellness, Made Personal.",
  locationHeadline: "SADHYA WELLNESS • BENGALURU",
  phone: "+91 8618639113",
  phoneRaw: "8618639113",
  whatsapp: "+91 8618639113",
  email: "info@sadhyawellness.com",
  bengaluruUrl: "https://bangalore.sadhyawellness.com/",
  uttarakhandUrl: "https://sadhyawellness.com/",
  toursUrl: "https://tour.sadhyawellness.com/",
  logo: "/assets/logo/sadhya-wellness-official-logo.png",
  headOffice: "Nainital District, Uttarakhand, India",
  serviceDescription: "Personalised yoga, fitness and wellness sessions for individuals, women, families, workplaces and communities across selected Bengaluru areas."
};

// 4 Primary Choices immediately below Hero
export const PRIMARY_CHOICES = [
  {
    id: "home-yoga",
    title: "HOME YOGA",
    subtitle: "Doorstep Personal Practice",
    description: "Personalised yoga sessions at your home. Adapted to your comfort, space, schedule and individual movement goals.",
    cta: "Explore Home Yoga",
    actionTarget: "#home-yoga-section",
    badge: "Doorstep Visits",
    icon: "Home"
  },
  {
    id: "womens-wellness",
    title: "WOMEN'S WELLNESS",
    subtitle: "Real-Life Movement & Strength",
    description: "Movement, fitness, flexibility and wellbeing programs for women. Tailored for homemakers, working women and 40+ vitality.",
    cta: "Explore Women's Wellness",
    actionTarget: "#womens-wellness",
    badge: "Women-Focused",
    icon: "Heart"
  },
  {
    id: "corporate-wellness",
    title: "CORPORATE WELLNESS",
    subtitle: "Modern Workplace Vitality",
    description: "Yoga, mobility, breathing and wellness programs for professional teams to alleviate desk strain and recharge energy.",
    cta: "Corporate Enquiry",
    actionTarget: "#corporate-wellness",
    badge: "Workplace Teams",
    icon: "Briefcase"
  },
  {
    id: "community-yoga",
    title: "COMMUNITY YOGA",
    subtitle: "Yoga Beyond the Studio",
    description: "Yoga programs for societies, apartments, halls and community groups. Structured sessions in clubhouses and shared spaces.",
    cta: "Start a Community Program",
    actionTarget: "#community-yoga",
    badge: "Apartment Societies",
    icon: "Users"
  }
];

// Why Sadhya: 4 Visual Pillars
export const WHY_SADHYA = {
  heading: "Wellness, Made Personal.",
  subheading: "Four Foundational Pillars",
  pillars: [
    {
      title: "PERSONAL",
      tagline: "Built around the individual.",
      description: "Sessions adapted to your specific flexibility, skeletal comfort, daily routine and personal wellness milestones."
    },
    {
      title: "PRACTICAL",
      tagline: "Designed for real everyday routines.",
      description: "Sustainable practices that fit naturally into busy Bengaluru work schedules and home life without exhausting your energy."
    },
    {
      title: "PROFESSIONAL",
      tagline: "Built on education, training & practical experience.",
      description: "Guidance from university degree-holding yoga masters, physical education coaches, and physiotherapy consultants."
    },
    {
      title: "CONSISTENT",
      tagline: "Focused on sustainable practice rather than quick fixes.",
      description: "Cultivating steady long-term mobility, breath awareness and daily resilience through gradual, safe progression."
    }
  ]
};

// 12 Dynamic Services Portfolio
export const SERVICES = [
  {
    id: "home-yoga",
    title: "Personalised Home Yoga",
    category: "Home",
    duration: "60 mins / session",
    image: "/assets/images/service-holistic-yoga-assessment.png",
    shortDesc: "Private 1-on-1 doorstep yoga sessions designed around your space, routine, and personal wellness goals.",
    benefits: ["Tailored 1-on-1 instruction", "No travel or studio rush", "Anatomical alignment focus"]
  },
  {
    id: "beginner-yoga",
    title: "Beginner Yoga Foundation",
    category: "Home",
    duration: "60 mins / session",
    image: "/assets/images/service-beginner-gentle-yoga.png",
    shortDesc: "Patient, step-by-step introduction to foundational asanas, breathing pacing, and joint mobility.",
    benefits: ["Zero prior experience needed", "Safe non-intimidating pace", "Core stability & posture"]
  },
  {
    id: "womens-wellness",
    title: "Women's Wellness & Strength",
    category: "Women",
    duration: "60 mins / session",
    image: "/assets/images/feature-33xlcz.png",
    shortDesc: "Movement, flexibility and vitality protocols tailored for working women, homemakers, 40+ and 50+ routines.",
    benefits: ["Hormonal balance support", "Gentle pelvic floor care", "Lower back stress relief"]
  },
  {
    id: "family-yoga",
    title: "Family & Couple Yoga",
    category: "Community",
    duration: "60 mins / session",
    image: "/assets/images/service-couple-family-yoga.png",
    shortDesc: "Harmonious weekend practices enabling couples and family members to build health together.",
    benefits: ["Shared wellness journey", "Customized for multi-ages", "Joyful bonding routines"]
  },
  {
    id: "kids-yoga",
    title: "Kids & Youth Yoga",
    category: "Home",
    duration: "45 mins / session",
    image: "/assets/images/feature-esp4q0.png",
    shortDesc: "Engaging posture and coordination games to build physical confidence, focus, and screen detox habits.",
    benefits: ["Spine posture foundation", "Focus & concentration", "Screen fatigue recovery"]
  },
  {
    id: "senior-yoga",
    title: "50+ Senior Gentle Yoga",
    category: "Seniors",
    duration: "50 mins / session",
    image: "/assets/images/service-senior-citizen-yoga.png",
    shortDesc: "Restorative, slow-paced movement with chair and cushion support focusing on joint lubrication and stability.",
    benefits: ["Joint & knee ease", "Fall prevention & balance", "Calm breathwork"]
  },
  {
    id: "corporate-yoga",
    title: "Workplace & Corporate Yoga",
    category: "Corporate",
    duration: "45-60 mins",
    image: "/assets/images/hero-yoga-class.jpeg",
    shortDesc: "Structured sessions for tech teams and corporate organizations to alleviate desk strain and boost energy.",
    benefits: ["Cervical & shoulder release", "Mental clarity & focus", "On-site or hybrid sessions"]
  },
  {
    id: "mobility-spine",
    title: "Spine & Desk Mobility",
    category: "Therapy",
    duration: "60 mins / session",
    image: "/assets/images/service-back-neck-mobility-support.png",
    shortDesc: "Targeted decompression of cervical, thoracic, and lumbar regions counteracting prolonged seated hours.",
    benefits: ["Lumbar stiffness ease", "Ergonomic posture reset", "Functional mobility"]
  },
  {
    id: "fitness-strength",
    title: "Yoga for Fitness & Strength",
    category: "Fitness",
    duration: "60 mins / session",
    image: "/assets/images/service-fitness-flexibility-yoga.png",
    shortDesc: "Dynamic vinyasa flows and bodyweight isometric holds to build functional strength and endurance.",
    benefits: ["Core conditioning", "Functional stamina", "Calisthenic body balance"]
  },
  {
    id: "metabolic-balance",
    title: "Metabolic & Weight Balance",
    category: "Fitness",
    duration: "60 mins / session",
    image: "/assets/images/service-weight-management-yoga.png",
    shortDesc: "Active movement sequences combined with disciplined breathing to support healthy metabolism and stamina.",
    benefits: ["Metabolic rate activation", "Toning & stamina", "Sustainable lifestyle pacing"]
  },
  {
    id: "pranayama-relaxation",
    title: "Pranayama & Stress Reset",
    category: "Therapy",
    duration: "45-60 mins",
    image: "/assets/images/service-stress-relaxation-yoga.png",
    shortDesc: "Classical diaphragmatic breathing, vagal nerve soothing, and guided Yoga Nidra for profound nervous system recovery.",
    benefits: ["Deep sleep improvement", "Stress & anxiety reduction", "Mental stillness"]
  },
  {
    id: "community-society",
    title: "Society & Community Batches",
    category: "Community",
    duration: "60 mins / session",
    image: "/assets/images/service-couple-family-yoga.png",
    shortDesc: "Doorstep batches conducted in apartment clubhouses, society lawns, and community halls across Bengaluru.",
    benefits: ["Neighborhood health culture", "Cost-effective group format", "Certified instructor visits"]
  }
];

// Dedicated Home Yoga Section Data
export const HOME_YOGA_DATA = {
  title: "Personalised Home Yoga",
  subtitle: "Certified Doorstep Sessions Across Selected Bengaluru Areas",
  description: "Our instructors provide personalised sessions at your home in selected Bengaluru service areas. No traffic, no crowded studios — just disciplined, attentive guidance in your private space.",
  adaptationPoints: [
    "Experience level (complete beginner to advanced practitioner)",
    "Current fitness level & physical capabilities",
    "Daily routine and preferred morning/evening time slots",
    "Personal comfort & non-intimidating pace",
    "Available space in your living room, balcony or terrace",
    "Personal goals (mobility, back ease, stamina, relaxation)"
  ],
  ctaText: "Book a Home Session"
};

// 4 Core Streamlined Women's Wellness Programs
export const WOMENS_WELLNESS_DATA = {
  title: "Women's Wellness, Designed Around Real Life.",
  description: "Create practical wellness programs for women who want more movement, strength, flexibility, relaxation and consistency in their everyday lives.",
  programs: [
    { 
      title: "Personal Home Yoga & 1-on-1 Care", 
      desc: "Private, discreet doorstep sessions at home adapted around your schedule, personal comfort and individual movement pace.",
      tag: "1-on-1 Doorstep",
      icon: "User"
    },
    { 
      title: "Working Professionals & Posture Relief", 
      desc: "Targeted posture release, neck decompression, and evening relaxation to counteract prolonged desk hours and screen fatigue.",
      tag: "Desk Fatigue Relief",
      icon: "Briefcase"
    },
    { 
      title: "Homemakers & Daily Vitality", 
      desc: "Functional low-impact movement, core stabilization, and restorative breathing to ease everyday physical strain.",
      tag: "Daily Vitality",
      icon: "Heart"
    },
    { 
      title: "40+ & 50+ Lifelong Joint Care", 
      desc: "Mindful joint lubrication, bone density support, and gentle restorative movement with props for sustained mobility.",
      tag: "Gentle Longevity",
      icon: "Sparkles"
    }
  ],
  ctaText: "Explore Women's Wellness"
};

// Corporate Wellness Data
export const CORPORATE_DATA = {
  title: "Wellness for Modern Workplaces",
  description: "Bring practical yoga, movement and wellness into the workplace with sessions designed around professional schedules and team requirements.",
  programs: [
    { title: "Corporate Yoga", desc: "Structured on-site or hybrid sessions before work hours or during sunset recharge breaks." },
    { title: "Desk Mobility", desc: "15 to 30-minute chair-friendly stretches relieving neck stiffness and ergonomic strain." },
    { title: "Workplace Movement", desc: "Active micro-breaks to stimulate circulation and break continuous screen gazing." },
    { title: "Employee Fitness", desc: "Functional metabolic circuits customized for corporate teams and tech professionals." },
    { title: "Breathing & Relaxation", desc: "Pranayama protocols designed to calm the nervous system prior to high-pressure deadlines." },
    { title: "Meditation", desc: "Midday mental clarity and mindfulness sessions for executive focus." },
    { title: "Wellness Workshops", desc: "Comprehensive seminars on sleep hygiene, spine ergonomics, and stress management." },
    { title: "Custom Programs", desc: "Quarterly wellness initiatives customized to your organization's employee health goals." }
  ],
  ctaText: "Request Corporate Proposal",
  secondaryCta: "WhatsApp Corporate Enquiry"
};

// Community Yoga Data
export const COMMUNITY_DATA = {
  title: "Yoga Beyond the Studio",
  description: "Sadhya Wellness can conduct structured yoga and wellness programs in suitable society halls, apartment communities, clubhouses, community spaces and other agreed locations.",
  programs: [
    { title: "Morning Yoga Batches", desc: "Sunrise sessions in society lawns or clubhouses to begin the day with clarity and vigor." },
    { title: "Evening De-stress Yoga", desc: "Calming stretches and guided relaxation after returning from Bengaluru traffic and work." },
    { title: "Society Women's Groups", desc: "Comfortable, empowering wellness cohorts for apartment residents." },
    { title: "Family Yoga", desc: "Joyful weekend sessions allowing parents, couples and children to practice together." },
    { title: "Kids Yoga", desc: "Engaging posture and coordination games to build focus, body awareness and screen detox habits." },
    { title: "50+ Senior Resident Clubs", desc: "Gentle mobility circles tailored specifically for senior citizen community members." },
    { title: "Weekend Yoga", desc: "Saturday and Sunday morning revitalization practices for busy working residents." },
    { title: "Mobility & Fitness", desc: "Active movement batches helping residents build functional strength close to home." },
    { title: "Breathing & Meditation", desc: "Pranayama and Yoga Nidra sessions held in community halls for inner calm." },
    { title: "Community Workshops", desc: "Interactive health talks and posture correction camps for apartment associations." }
  ],
  ctaText: "Start a Community Program"
};

// Full Founder-Led Story
export const ABOUT_FULL_STORY = {
  title: "Our Story",
  tagline: "ROOTED IN UTTARAKHAND. BUILT WITH PURPOSE. GUIDED BY YOGA.",
  paragraphs: [
    "Sadhya Wellness began with a simple idea: Health and wellness should be personal, practical and genuinely useful in everyday life.",
    "Our connection with yoga began during childhood in Uttarakhand. Growing up in Nainital and its surrounding environment, yoga, traditional practices, physical activity and the values passed down by our elders became a natural part of our lives. The knowledge and interest received from our families, particularly from our fathers, became an important foundation of our journey.",
    "As our education and professional journey progressed, this interest developed into a deeper understanding of yoga, physical education, fitness and holistic wellness.",
    "During our college years, a shared vision began to take shape — the idea of creating a professional wellness initiative that could bring together traditional knowledge and practical modern approaches to health and fitness. That idea gradually became Sadhya Wellness.",
    "The vision was developed by its founder, Kushal Dev Singh, with the purpose of creating a wellness organisation that could go beyond a standard exercise class. The intention was to bring together: Yoga, Fitness, Mobility, Strength & Conditioning, Flexibility, Breathwork, Relaxation, and Complementary wellness practices in a practical and personalised way.",
    "Over time, the vision moved from an idea into a real organisation. The foundation of Sadhya Wellness was established in Nainital, Uttarakhand, where the founder took the initiative to develop and build the organisation's present centre. What began as a vision gradually took physical form, creating a base from which the work of Sadhya Wellness could grow.",
    "The journey was supported by a founding team with different areas of education, professional experience and expertise. Abhay Joshi is the Co-Founder, contributing his experience in yoga, breathwork, meditation and complementary wellness practices.",
    "As our practical work developed, we began working with people with different fitness and wellness goals. These experiences strengthened our belief that there is no single routine that works for everyone. Our work has included individuals seeking support with weight-management goals, flexibility, mobility, strength and conditioning, general fitness, lifestyle improvement, and movement-related concerns.",
    "In individual cases, clients working with us for PCOD-related wellness goals have reported positive changes during regular practice and lifestyle-focused programs. Similarly, individuals experiencing back-related discomfort and sciatica-associated numbness in the legs have reported reduction in symptoms and improved movement during their course of practice.",
    "These experiences have reinforced an important principle for us: Wellness should begin with understanding the individual, not simply applying a standard routine.",
    "Today, Sadhya Wellness is headquartered in Nainital district, Uttarakhand, and the same vision is being extended to Bengaluru through personalised home yoga and wellness sessions, corporate programs and community initiatives. Our purpose remains simple: To make genuine wellness guidance more personal, practical and accessible."
  ],
  vision: {
    heading: "Our Vision",
    text: "We believe that wellness is more than physical exercise. It is about developing a healthier and more capable body, a calmer mind, better daily habits and a sustainable relationship with one's own wellbeing. Our vision is to make authentic yoga and holistic wellness practical for modern everyday life.",
    focusAreas: [
      "Physical fitness", "Strength and conditioning", "Flexibility", "Mobility",
      "Weight-management goals", "Relaxation and stress management", "Breathwork",
      "Healthy lifestyle habits", "Better movement", "Overall wellbeing"
    ],
    closing: "We do not believe in one-size-fits-all routines. Every individual has different needs, abilities and goals. Our aim is to understand the individual first and build a practice around them."
  },
  mission: {
    heading: "Our Mission",
    text: "Our mission is to provide personalised yoga, fitness and wellness guidance through experienced professionals. Through home, corporate and community sessions, we aim to make regular practice easier and more meaningful. We combine traditional yoga knowledge with practical physical education, fitness, movement and wellness practices."
  },
  approach: [
    { step: "01", name: "UNDERSTAND", desc: "Understand the person's routine, experience, physical capabilities and goals." },
    { step: "02", name: "PERSONALISE", desc: "Adapt the practice to the individual rather than forcing rigid routines." },
    { step: "03", name: "PRACTISE", desc: "Build practical routines that fit sustainably into everyday life." },
    { step: "04", name: "PROGRESS", desc: "Review and adjust the approach as appropriate to foster long-term health." }
  ],
  beliefs: [
    {
      title: "PERSONALISATION BEFORE PRESCRIPTION",
      desc: "Every individual is different. Our team works across yoga, fitness, strength and conditioning, mobility, flexibility, breathwork, meditation and complementary wellness practices."
    },
    {
      title: "COMMUNITY OVER COMPETITION",
      desc: "We believe wellness grows through connection, encouragement, respect and genuine relationships."
    },
    {
      title: "QUALITY BEYOND QUANTITY",
      desc: "A good wellness practice should be appropriate, understandable and sustainable. Focus: Right Practice • Right Guidance • Regular Practice • Long-Term Consistency."
    }
  ]
};

// 4 Verified Team Members with Exact Bios & User-Uploaded Authentic Photographs
export const TEAM_MEMBERS = [
  {
    name: "Kushal Dev Singh",
    role: "Founder & Lead Yoga Professional",
    credentials: "Master's in Yoga & Alternative Therapy • Master's in Physical Education • NSNIS/SAI-trained Certified Coach",
    experience: "7+ Years Professional Coaching & Teaching",
    photo: "/assets/images/team-kushal-dev-singh-real.jpg",
    bio: "Founder of Sadhya Wellness. Holds dual Master's degrees in Yoga & Alternative Therapy and Physical Education, with specialized coaching credentials from NSNIS/Sports Authority of India. Has professional teaching experience in school education, including work at Jawahar Navodaya Vidyalaya.",
    clinicalExperience: "Extensive experience designing and conducting personalized fitness and wellness programs through Sadhya Wellness. His practical work has included clients with goals involving weight management, fitness improvement, mobility, flexibility, strength, movement-related concerns, back discomfort, sciatica-associated movement concerns, and PCOD-related wellness goals (observed outcomes during regular practice and lifestyle programs).",
    focus: [
      "Yoga & Asana Coaching",
      "Physical Education",
      "Strength & Conditioning",
      "Flexibility & Mobility",
      "Weight Management",
      "Circuit Training",
      "Sports Biomechanics",
      "School & Youth Fitness"
    ]
  },
  {
    name: "Abhay Joshi",
    role: "Co-Founder & Senior Yoga Professional",
    credentials: "Master's in Yoga & Alternative Therapy",
    experience: "Providing Yoga & Wellness Services in Bengaluru Since 2019",
    photo: "/assets/images/team-abhay-joshi.png",
    bio: "Co-Founder of Sadhya Wellness. Holds a Master's degree in Yoga & Alternative Therapy. Deeply rooted in breathwork, traditional meditation, and therapeutic body alignment, Abhay has been actively conducting personal and group wellness sessions in Bengaluru since 2019.",
    clinicalExperience: "Experienced in guiding practitioners through restorative modalities, breath modulation, and relaxation therapy for corporate stress relief and daily stamina.",
    focus: [
      "Traditional Yoga",
      "Breathwork & Pranayama",
      "Meditation & Mindfulness",
      "Relaxation & Stress Relief",
      "Sudarshan Kriya",
      "Inner Engineering",
      "Rakkenho Therapy",
      "Personalised Wellness"
    ]
  },
  {
    name: "Kavindra",
    role: "Founding Partner & Regional Yoga Professional",
    credentials: "Diploma in Yoga & Alternative Therapy",
    experience: "Provided Bengaluru Services (2019–2024) • Currently Serving Pune",
    photo: "/assets/images/team-kavindra-real.jpg",
    bio: "Founding Partner of Sadhya Wellness. Holds a professional Diploma in Yoga & Alternative Therapy. Provided dedicated doorstep yoga and wellness guidance to clients across Bengaluru from 2019 through 2024, and currently coordinates wellness services in Pune, Maharashtra.",
    clinicalExperience: "Specializes in patient, foundational instruction for beginners and seniors, creating safe, gradual routines that build confidence and flexibility.",
    focus: [
      "Traditional Yoga",
      "Beginner Yoga Instruction",
      "Gentle Flexibility",
      "Joint Mobility",
      "Personalised Wellness"
    ]
  },
  {
    name: "Harish Singh",
    role: "Founding Partner & Chief Holistic Consultant",
    credentials: "BPT (Physiotherapy) • Master's in Yoga & Alternative Therapy • Diploma, Dev Sanskriti Vishwavidyalaya",
    experience: "15+ Years Clinical & Therapeutic Experience",
    photo: "/assets/images/team-harish-singh.png",
    bio: "Founding Partner and Chief Holistic Consultant. Holds a Bachelor of Physiotherapy (BPT) along with a Master's degree in Yoga & Alternative Therapy and specialized diploma from Dev Sanskriti Vishwavidyalaya.",
    clinicalExperience: "Bridges clinical musculoskeletal physiotherapy with authentic yogic therapy, ensuring each client program respects anatomical safety and biomechanical integrity.",
    focus: [
      "Yoga & Physiotherapy Integration",
      "Alternative Therapy",
      "Wellness Education",
      "Holistic Wellness",
      "Wellness Research"
    ]
  }
];

// 10 Core Bengaluru Service Areas
export const BENGALURU_AREAS = [
  { name: "Ejipura", type: "Core Service Hub", desc: "Doorstep home visits and personalized sessions." },
  { name: "Koramangala", type: "Residential & Corporate", desc: "Home sessions & corporate desk mobility." },
  { name: "BTM Layout", type: "Apartments & Residences", desc: "Apartment clubhouses & private home visits." },
  { name: "HSR Layout", type: "Executive & Family Homes", desc: "1-on-1 personal instruction & women's wellness." },
  { name: "Viveknagar", type: "Residential Neighborhood", desc: "Personal yoga and senior citizen care." },
  { name: "Adugodi", type: "Central Connectivity", desc: "Doorstep personal yoga & mobility care." },
  { name: "Jakkasandra", type: "Community Hub", desc: "Home visits and private family cohorts." },
  { name: "Indiranagar", type: "Prime Wellness Zone", desc: "Executive home yoga & bespoke fitness." },
  { name: "Domlur", type: "Corporate & Residential", desc: "Workplace teams and doorstep sessions." },
  { name: "Wilson Garden", type: "Residential Zone", desc: "Personalized home therapy & senior yoga." }
];

// 5-Step Onboarding Timeline
export const HOW_IT_WORKS = [
  { step: "01", title: "Tell Us About You", desc: "Share your location in Bengaluru, preferred days, and what you wish to achieve via WhatsApp or our online builder." },
  { step: "02", title: "Understand Your Needs", desc: "Our masters connect to discuss your lifestyle, health history, flexibility level, and preferred session timings." },
  { step: "03", title: "Choose Your Schedule", desc: "Pick your recurring schedule (morning, afternoon, or evening) tailored to your personal or workplace calendar." },
  { step: "04", title: "Begin Your Session", desc: "Your dedicated university-credentialed yoga master arrives at your home, office, or clubhouse to guide you." },
  { step: "05", title: "Build Your Practice", desc: "Experience gradual, joyful progress with ongoing posture reviews, breath refinement, and sustainable habits." }
];

// Short Homepage Story Preview
export const HOMEPAGE_STORY_PREVIEW = {
  text: "Sadhya Wellness began with a lifelong connection to yoga and a vision of making wellness more personal and practical.\n\nRooted in Nainital, Uttarakhand, our work combines traditional yoga knowledge with physical education, fitness, movement and holistic wellness.\n\nToday, we bring this experience to Bengaluru through personalised home, corporate and community programs.",
  ctaText: "Read Our Story"
};

// Uttarakhand Roots Section
export const UTTARAKHAND_DATA = {
  heading: "Rooted in Nainital, Uttarakhand",
  description: "Sadhya Wellness is headquartered in Nainital district, Uttarakhand. The organisation's roots, original vision and present head office are based there. Today, the same vision is being extended to Bengaluru through personalised wellness services.",
  ctaText: "Visit Sadhya Wellness Uttarakhand",
  link: "https://sadhyawellness.com/"
};

// Sadhya Tours Teaser
export const SADHYA_TOURS_DATA = {
  heading: "Travel With Purpose",
  subheading: "Yoga • Nature • Culture • Uttarakhand",
  description: "Explore Uttarakhand through yoga retreats, nature experiences, Char Dham journeys, Neem Karoli Baba journeys and other curated travel experiences.",
  ctaText: "Explore Sadhya Tours",
  link: "https://tour.sadhyawellness.com/"
};

// Workshops
export const WORKSHOPS = [
  {
    title: "Desk Mobility & Ergonomics Workshop",
    type: "Corporate On-site",
    duration: "Half-Day / 3 Hours",
    audience: "Corporate Teams & IT Workplaces",
    desc: "Cervical spine decompression, wrist ergonomics, and 5-minute desk mobility rituals to combat screen fatigue."
  },
  {
    title: "Pranayama & Nervous System Reset",
    type: "Weekend Intensive",
    duration: "2-Day Immersion",
    audience: "Individuals & Working Professionals",
    desc: "Classical diaphragmatic breathwork, vagus nerve stimulation, and deep relaxation practices for mental clarity."
  },
  {
    title: "Spine & Joint Longevity Camp",
    type: "Society Community Camp",
    duration: "Weekend Morning (2 Hours)",
    audience: "Apartment Societies & Seniors",
    desc: "Led by our physiotherapist and lead masters, focusing on core stabilization, hip mobility, and safe lifting biomechanics."
  },
  {
    title: "Women's Lifecycle Vitality Masterclass",
    type: "Specialized Cohort",
    duration: "Single Session (2.5 Hours)",
    audience: "Women of All Life Stages",
    desc: "Gentle restorative postures, pelvic floor support, and soothing breathwork tailored for hormonal balance."
  }
];

// Gallery
export const GALLERY_ITEMS = [
  { id: 1, title: "Personal Doorstep Session", category: "Yoga", image: "/assets/images/service-holistic-yoga-assessment.png", location: "Koramangala, Bengaluru", year: "2024" },
  { id: 2, title: "Spine & Mobility Guidance", category: "Yoga", image: "/assets/images/service-back-neck-mobility-support.png", location: "HSR Layout, Bengaluru", year: "2024" },
  { id: 3, title: "Women's Movement Practice", category: "Women", image: "/assets/images/feature-33xlcz.png", location: "Indiranagar, Bengaluru", year: "2024" },
  { id: 4, title: "Senior Citizen Joint Care", category: "Yoga", image: "/assets/images/service-senior-citizen-yoga.png", location: "BTM Layout, Bengaluru", year: "2024" },
  { id: 5, title: "Mindful Breathwork & Nidra", category: "Yoga", image: "/assets/images/service-stress-relaxation-yoga.png", location: "Ejipura, Bengaluru", year: "2024" },
  { id: 6, title: "Corporate Team Session", category: "Corporate", image: "/assets/images/hero-yoga-class.jpeg", location: "Domlur, Bengaluru", year: "2024" },
  { id: 7, title: "Couple & Family Harmony", category: "Community", image: "/assets/images/service-couple-family-yoga.png", location: "Whitefield, Bengaluru", year: "2024" },
  { id: 8, title: "Youth Concentration & Flexibility", category: "Yoga", image: "/assets/images/feature-esp4q0.png", location: "Koramangala, Bengaluru", year: "2024" },
  { id: 9, title: "Himalayan Roots & Retreats", category: "Uttarakhand", image: "/assets/images/team-kushal-dev-singh-real.jpg", location: "Nainital District, Uttarakhand", year: "2023" }
];

// Real Client Reflections
export const CLIENT_REFLECTIONS = [
  {
    name: "Lokesh Baid",
    age: 35,
    location: "Koramangala, Bengaluru",
    context: "Couple Wellness",
    description: "Personalised couple yoga and wellness sessions designed around shared movement, flexibility and fitness goals."
  },
  {
    name: "Ashish Jauhari",
    age: 50,
    location: "Bellandur, Bengaluru",
    context: "Back Pain & Mobility Support",
    description: "Personalised yoga and movement sessions focused on mobility, gentle practice and everyday movement support."
  },
  {
    name: "Dhruv Daga",
    age: 22,
    location: "Koramangala, Bengaluru",
    context: "Fitness & Strength",
    description: "Yoga and fitness sessions supporting strength, mobility, conditioning and an active lifestyle."
  }
];

export const TESTIMONIALS = CLIENT_REFLECTIONS;

// FAQs
export const FAQS = [
  {
    question: "Do I need any special equipment for home yoga sessions?",
    answer: "No complicated gym gear is required. All you need is a standard non-slip yoga mat and a well-ventilated, quiet floor space (approx. 6x4 feet) in your living room or balcony. If any specialized therapeutic blocks, straps, or cushions are recommended, our instructors provide guidance during the initial assessment."
  },
  {
    question: "How flexible are session timings for working professionals?",
    answer: "Extremely flexible. We understand Bengaluru's hectic commute and corporate shifts. We offer early morning slots (starting from 6:00 AM), afternoon breaks, and evening slots (up to 8:00 PM). You can schedule 2, 3, or 5 sessions per week, and reschedule with advance notice."
  },
  {
    question: "Are your sessions suitable for complete beginners or people with chronic stiffness?",
    answer: "Absolutely. Over 65% of our clients start with zero prior yoga experience or severe stiffness from long desk hours. Every session begins with gentle joint loosening (Sukshma Vyayama), gradual mobility progression, and conscious breath pacing without any forceful twisting."
  },
  {
    question: "Which areas in Bengaluru do you serve for doorstep visits?",
    answer: "Our core doorstep coverage includes Ejipura, Koramangala, BTM Layout, HSR Layout, Viveknagar, Adugodi, Jakkasandra, Indiranagar, Domlur, Wilson Garden, and adjoining central-south Bengaluru neighborhoods. We also service community apartment cohorts across outer ring road and Whitefield by arrangement."
  },
  {
    question: "How does the initial consultation work?",
    answer: "You can request a consultation via WhatsApp or our online builder. We review your goals (back pain, flexibility, stress, general fitness), match you with the right master (Hatha, Vinyasa, or Therapeutic), and arrange an initial doorstep assessment session."
  }
];
