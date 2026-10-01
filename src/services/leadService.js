// Local & Cloud-Ready Lead Management Database for Sadhya Wellness Bengaluru
const STORAGE_KEY = 'sadhya_wellness_enquiries_v1';

// Seed initial realistic data if empty for demo/dashboard testing
const SEED_ENQUIRIES = [
  {
    id: "ENQ-1001",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    name: "Dr. Ananya Sharma",
    phone: "+91 9845012345",
    whatsapp: "+91 9845012345",
    email: "ananya.sharma@gmail.com",
    location: "Koramangala, 4th Block",
    ageGroup: "30-45",
    gender: "Female",
    service: "Personalised Home Yoga",
    programType: "Women's Wellness",
    goal: "Flexibility & Posture Recovery",
    preferredDays: ["Mon", "Wed", "Fri"],
    preferredTime: "Morning (7:00 AM)",
    frequency: "3x/week",
    sessionMode: "Home Visit",
    message: "Seeking certified female trainer for doorstep sessions to relieve lower back desk fatigue.",
    source: "homepage_hero",
    status: "New",
    assignedTo: "Kushal Dev Singh",
    notes: "Client has slight L4-L5 lumbar sensitivity. Focus on gentle decompression.",
    followUpDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    updatedAt: new Date().toISOString()
  },
  {
    id: "ENQ-1002",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    name: "Rajesh Varma",
    phone: "+91 9900188223",
    whatsapp: "+91 9900188223",
    email: "rajesh.v@techcorp.in",
    location: "HSR Layout, Sector 2",
    ageGroup: "30-45",
    gender: "Male",
    service: "Corporate Yoga",
    programType: "Corporate Wellness",
    goal: "Team Desk Mobility & De-stress",
    preferredDays: ["Tue", "Thu"],
    preferredTime: "Evening (5:30 PM)",
    frequency: "2x/week",
    sessionMode: "Office On-site",
    message: "Requirement for 25 engineering employees at our HSR Layout office for desk strain relief.",
    source: "corporate_page",
    status: "Contacted",
    assignedTo: "Harish Singh",
    notes: "Spoke with HR lead Rajesh. Proposal sent via WhatsApp and email.",
    followUpDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    updatedAt: new Date().toISOString()
  },
  {
    id: "ENQ-1003",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    name: "Meenakshi Sundaram",
    phone: "+91 9731245678",
    whatsapp: "+91 9731245678",
    email: "meenakshi.s@outlook.com",
    location: "Indiranagar, 100ft Road",
    ageGroup: "50+",
    gender: "Female",
    service: "50+ Gentle Wellness",
    programType: "Senior Citizen Yoga",
    goal: "Mobility & Fall Prevention",
    preferredDays: ["Tue", "Thu", "Sat"],
    preferredTime: "Mid-Morning (10:00 AM)",
    frequency: "3x/week",
    sessionMode: "Home Visit",
    message: "Seeking slow-paced chair and mat practice for my mother (68 yrs).",
    source: "program_builder",
    status: "Scheduled",
    assignedTo: "Abhay Joshi",
    notes: "Trial session scheduled for Saturday 10 AM. Instructor instructed on knee care.",
    followUpDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    updatedAt: new Date().toISOString()
  }
];

export const leadService = {
  getAll: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
        return SEED_ENQUIRIES;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to read leads from localStorage", e);
      return SEED_ENQUIRIES;
    }
  },

  create: (enquiryData) => {
    const leads = leadService.getAll();
    const newEnquiry = {
      id: `ENQ-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      name: enquiryData.name || "Anonymous",
      phone: enquiryData.phone || "",
      whatsapp: enquiryData.whatsapp || enquiryData.phone || "",
      email: enquiryData.email || "",
      location: enquiryData.location || "Bengaluru",
      ageGroup: enquiryData.ageGroup || "Adult",
      gender: enquiryData.gender || "Not Specified",
      service: enquiryData.service || "Personalised Home Yoga",
      programType: enquiryData.programType || "General Wellness",
      goal: enquiryData.goal || "Overall Wellbeing",
      preferredDays: enquiryData.preferredDays || ["Flexible"],
      preferredTime: enquiryData.preferredTime || "Flexible",
      frequency: enquiryData.frequency || "3x/week",
      sessionMode: enquiryData.sessionMode || "Home Visit",
      message: enquiryData.message || "",
      source: enquiryData.source || "website_form",
      status: "New",
      assignedTo: "Unassigned",
      notes: "",
      followUpDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      updatedAt: new Date().toISOString()
    };

    leads.unshift(newEnquiry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    return newEnquiry;
  },

  createLead: (enquiryData) => {
    return leadService.create(enquiryData);
  },

  updateStatus: (id, status, notes = "", assignedTo = null, followUpDate = null) => {
    const leads = leadService.getAll();
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      if (notes) leads[index].notes = notes;
      if (assignedTo) leads[index].assignedTo = assignedTo;
      if (followUpDate) leads[index].followUpDate = followUpDate;
      leads[index].updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
      return leads[index];
    }
    return null;
  },

  delete: (id) => {
    let leads = leadService.getAll();
    leads = leads.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    return true;
  },

  exportCSV: () => {
    const leads = leadService.getAll();
    if (leads.length === 0) return "";
    const headers = Object.keys(leads[0]).join(",");
    const rows = leads.map(lead => {
      return Object.values(lead).map(val => {
        const str = Array.isArray(val) ? val.join(";") : String(val ?? "");
        return `"${str.replace(/"/g, '""')}"`;
      }).join(",");
    });
    return [headers, ...rows].join("\n");
  }
};
