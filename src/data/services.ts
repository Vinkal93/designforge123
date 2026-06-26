export interface Service {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  premiumPrice?: number;
  deliveryDays: number;
  revisions: number;
  description: string;
  features: string[];
  popular?: boolean;
  featured?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  { slug: "branding", name: "Branding", icon: "Palette", description: "Logo, business cards, brand identity", color: "from-orange-500 to-pink-500" },
  { slug: "company-docs", name: "Company Documents", icon: "FileText", description: "Profiles, brochures, presentations", color: "from-blue-500 to-cyan-500" },
  { slug: "marketing", name: "Marketing", icon: "Megaphone", description: "Flyers, posters, social media", color: "from-purple-500 to-pink-500" },
  { slug: "hr-docs", name: "HR Documents", icon: "Users", description: "Offer letters, contracts, certificates", color: "from-green-500 to-emerald-500" },
  { slug: "legal-docs", name: "Legal Documents", icon: "Scale", description: "NDA, MoU, agreements", color: "from-red-500 to-orange-500" },
  { slug: "office-docs", name: "Office Documents", icon: "Briefcase", description: "Attendance, expense, inventory", color: "from-yellow-500 to-orange-500" },
  { slug: "certificates", name: "Certificates", icon: "Award", description: "Training, appreciation, achievement", color: "from-indigo-500 to-purple-500" },
  { slug: "digital-services", name: "Digital Services", icon: "Code", description: "Websites, mobile apps, software", color: "from-cyan-500 to-blue-500" },
];

export const services: Service[] = [
  // BRANDING
  { id: "logo-design", name: "Logo Design", category: "Branding", categorySlug: "branding", price: 1499, premiumPrice: 4999, deliveryDays: 3, revisions: 3, description: "Professional unique logo design with source files", features: ["3 concepts", "Vector files", "Brand guidelines", "All formats"], popular: true, featured: true },
  { id: "business-card", name: "Business Card", category: "Branding", categorySlug: "branding", price: 399, premiumPrice: 999, deliveryDays: 2, revisions: 2, description: "Modern business card design, print-ready", features: ["Double-sided", "Print-ready", "Multiple formats"], popular: true },
  { id: "letterhead", name: "Letterhead", category: "Branding", categorySlug: "branding", price: 499, deliveryDays: 2, revisions: 2, description: "Professional letterhead with brand identity", features: ["Editable file", "Print-ready", "Word + PDF"] },
  { id: "envelope", name: "Envelope Design", category: "Branding", categorySlug: "branding", price: 399, deliveryDays: 2, revisions: 2, description: "Branded envelope design", features: ["Multiple sizes", "Print-ready"] },
  { id: "id-card", name: "ID Card", category: "Branding", categorySlug: "branding", price: 299, deliveryDays: 2, revisions: 2, description: "Employee ID card design", features: ["Front & back", "Photo space", "QR ready"] },
  { id: "employee-card", name: "Employee Card", category: "Branding", categorySlug: "branding", price: 349, deliveryDays: 2, revisions: 2, description: "Custom employee identification card", features: ["Bulk template", "Print-ready"] },
  { id: "company-stamp", name: "Company Stamp", category: "Branding", categorySlug: "branding", price: 299, deliveryDays: 2, revisions: 2, description: "Official company stamp design", features: ["Round & rectangular", "Vector file"] },
  { id: "invoice-design", name: "Invoice Design", category: "Branding", categorySlug: "branding", price: 599, deliveryDays: 2, revisions: 2, description: "Custom invoice template", features: ["Excel + PDF", "GST format", "Editable"] },
  { id: "visiting-card", name: "Visiting Card", category: "Branding", categorySlug: "branding", price: 399, deliveryDays: 2, revisions: 2, description: "Premium visiting card design", features: ["Modern style", "Print-ready"] },
  { id: "qr-card", name: "QR Card", category: "Branding", categorySlug: "branding", price: 349, deliveryDays: 2, revisions: 2, description: "Digital QR business card", features: ["Custom QR", "Digital share"] },

  // COMPANY DOCS
  { id: "company-profile", name: "Company Profile", category: "Company Documents", categorySlug: "company-docs", price: 2999, premiumPrice: 5999, deliveryDays: 5, revisions: 3, description: "Professional 10-15 page company profile", features: ["10-15 pages", "Editable PDF", "Print-ready"], popular: true, featured: true },
  { id: "portfolio", name: "Portfolio Design", category: "Company Documents", categorySlug: "company-docs", price: 2499, deliveryDays: 5, revisions: 3, description: "Stunning portfolio design", features: ["10-20 pages", "Custom layout"] },
  { id: "brochure", name: "Brochure", category: "Company Documents", categorySlug: "company-docs", price: 1499, deliveryDays: 3, revisions: 2, description: "Tri-fold or bi-fold brochure design", features: ["Print-ready", "Multiple formats"] },
  { id: "catalogue", name: "Catalogue", category: "Company Documents", categorySlug: "company-docs", price: 2999, deliveryDays: 5, revisions: 3, description: "Professional product catalogue", features: ["Up to 20 pages", "Print-ready"] },
  { id: "product-catalogue", name: "Product Catalogue", category: "Company Documents", categorySlug: "company-docs", price: 3499, deliveryDays: 6, revisions: 3, description: "Detailed product catalogue with pricing", features: ["20+ pages", "Editable"] },
  { id: "presentation", name: "Presentation", category: "Company Documents", categorySlug: "company-docs", price: 1999, deliveryDays: 4, revisions: 3, description: "Professional PowerPoint presentation", features: ["Up to 20 slides", "Editable PPT"] },
  { id: "pitch-deck", name: "Pitch Deck", category: "Company Documents", categorySlug: "company-docs", price: 4999, premiumPrice: 9999, deliveryDays: 6, revisions: 3, description: "Investor-ready pitch deck", features: ["12-15 slides", "Strategy review"], featured: true },
  { id: "investor-deck", name: "Investor Deck", category: "Company Documents", categorySlug: "company-docs", price: 5999, deliveryDays: 7, revisions: 3, description: "Premium investor pitch deck", features: ["15-20 slides", "Financial visuals"] },
  { id: "proposal", name: "Business Proposal", category: "Company Documents", categorySlug: "company-docs", price: 1499, deliveryDays: 3, revisions: 2, description: "Professional business proposal", features: ["Editable", "Branded"] },
  { id: "quotation", name: "Quotation Template", category: "Company Documents", categorySlug: "company-docs", price: 599, deliveryDays: 2, revisions: 2, description: "Custom quotation template", features: ["Excel + PDF", "GST ready"] },
  { id: "estimate", name: "Estimate Template", category: "Company Documents", categorySlug: "company-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Project estimate template", features: ["Editable", "Branded"] },
  { id: "price-list", name: "Price List", category: "Company Documents", categorySlug: "company-docs", price: 799, deliveryDays: 2, revisions: 2, description: "Designed price list", features: ["Print-ready", "Editable"] },

  // MARKETING
  { id: "flyer", name: "Flyer Design", category: "Marketing", categorySlug: "marketing", price: 499, deliveryDays: 2, revisions: 2, description: "Eye-catching promotional flyer", features: ["A4 / A5", "Print-ready"], popular: true },
  { id: "poster", name: "Poster Design", category: "Marketing", categorySlug: "marketing", price: 499, deliveryDays: 2, revisions: 2, description: "Custom poster design", features: ["Multiple sizes", "Print-ready"] },
  { id: "banner", name: "Banner Design", category: "Marketing", categorySlug: "marketing", price: 599, deliveryDays: 2, revisions: 2, description: "Web or print banner", features: ["Any size", "Print-ready"] },
  { id: "social-media-post", name: "Social Media Post", category: "Marketing", categorySlug: "marketing", price: 299, deliveryDays: 1, revisions: 2, description: "Instagram / Facebook post design", features: ["Square / story", "Editable"], popular: true },
  { id: "rollup-banner", name: "Roll-up Banner", category: "Marketing", categorySlug: "marketing", price: 899, deliveryDays: 3, revisions: 2, description: "Standing roll-up banner", features: ["6x3 ft", "Print-ready"] },
  { id: "standee", name: "Standee Design", category: "Marketing", categorySlug: "marketing", price: 799, deliveryDays: 3, revisions: 2, description: "Event standee design", features: ["Custom size", "Print-ready"] },
  { id: "flex", name: "Flex Banner", category: "Marketing", categorySlug: "marketing", price: 699, deliveryDays: 2, revisions: 2, description: "Outdoor flex banner design", features: ["Large format", "Print-ready"] },
  { id: "pamphlet", name: "Pamphlet", category: "Marketing", categorySlug: "marketing", price: 599, deliveryDays: 2, revisions: 2, description: "Promotional pamphlet", features: ["A4 / A5", "Print-ready"] },

  // HR DOCS
  { id: "offer-letter", name: "Offer Letter", category: "HR Documents", categorySlug: "hr-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Professional offer letter template", features: ["Editable Word", "Branded"] },
  { id: "appointment-letter", name: "Appointment Letter", category: "HR Documents", categorySlug: "hr-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Employee appointment letter", features: ["Word + PDF", "Editable"] },
  { id: "joining-letter", name: "Joining Letter", category: "HR Documents", categorySlug: "hr-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Joining confirmation letter", features: ["Editable template"] },
  { id: "experience-letter", name: "Experience Letter", category: "HR Documents", categorySlug: "hr-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Work experience certificate", features: ["Word + PDF"] },
  { id: "internship-certificate", name: "Internship Certificate", category: "HR Documents", categorySlug: "hr-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Internship completion certificate", features: ["Print-ready", "Editable"] },
  { id: "salary-slip", name: "Salary Slip", category: "HR Documents", categorySlug: "hr-docs", price: 599, deliveryDays: 2, revisions: 2, description: "Monthly salary slip template", features: ["Excel format", "Auto calculation"] },
  { id: "warning-letter", name: "Warning Letter", category: "HR Documents", categorySlug: "hr-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Formal warning letter", features: ["Editable Word"] },
  { id: "relieving-letter", name: "Relieving Letter", category: "HR Documents", categorySlug: "hr-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Employee relieving letter", features: ["Editable"] },
  { id: "resignation-acceptance", name: "Resignation Acceptance", category: "HR Documents", categorySlug: "hr-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Resignation acceptance letter", features: ["Editable Word"] },
  { id: "job-description", name: "Job Description", category: "HR Documents", categorySlug: "hr-docs", price: 599, deliveryDays: 2, revisions: 2, description: "Detailed job description template", features: ["Editable", "Branded"] },

  // LEGAL DOCS
  { id: "nda", name: "NDA Agreement", category: "Legal Documents", categorySlug: "legal-docs", price: 999, deliveryDays: 3, revisions: 2, description: "Non-Disclosure Agreement", features: ["Lawyer-reviewed", "Editable"] },
  { id: "mou", name: "MoU Document", category: "Legal Documents", categorySlug: "legal-docs", price: 999, deliveryDays: 3, revisions: 2, description: "Memorandum of Understanding", features: ["Editable", "Professional"] },
  { id: "agreement", name: "General Agreement", category: "Legal Documents", categorySlug: "legal-docs", price: 1499, deliveryDays: 4, revisions: 2, description: "Custom business agreement", features: ["Editable", "Reviewed"] },
  { id: "service-agreement", name: "Service Agreement", category: "Legal Documents", categorySlug: "legal-docs", price: 1499, deliveryDays: 4, revisions: 2, description: "Client service agreement", features: ["Lawyer-reviewed"] },
  { id: "employment-contract", name: "Employment Contract", category: "Legal Documents", categorySlug: "legal-docs", price: 1499, deliveryDays: 4, revisions: 2, description: "Employee contract template", features: ["Editable Word"] },
  { id: "freelancer-agreement", name: "Freelancer Agreement", category: "Legal Documents", categorySlug: "legal-docs", price: 999, deliveryDays: 3, revisions: 2, description: "Freelance work agreement", features: ["Editable", "Reviewed"] },

  // OFFICE DOCS
  { id: "attendance-sheet", name: "Attendance Sheet", category: "Office Documents", categorySlug: "office-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Monthly attendance tracker", features: ["Excel", "Auto sum"] },
  { id: "leave-form", name: "Leave Form", category: "Office Documents", categorySlug: "office-docs", price: 299, deliveryDays: 1, revisions: 2, description: "Employee leave application form", features: ["Editable", "Print-ready"] },
  { id: "daily-report", name: "Daily Report", category: "Office Documents", categorySlug: "office-docs", price: 399, deliveryDays: 2, revisions: 2, description: "Daily work report template", features: ["Excel + Word"] },
  { id: "expense-sheet", name: "Expense Sheet", category: "Office Documents", categorySlug: "office-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Monthly expense tracker", features: ["Excel", "Auto calculation"] },
  { id: "salary-register", name: "Salary Register", category: "Office Documents", categorySlug: "office-docs", price: 699, deliveryDays: 2, revisions: 2, description: "Employee salary register", features: ["Excel", "Formulas included"] },
  { id: "inventory-sheet", name: "Inventory Sheet", category: "Office Documents", categorySlug: "office-docs", price: 599, deliveryDays: 2, revisions: 2, description: "Stock & inventory tracker", features: ["Excel", "Auto-update"] },
  { id: "purchase-order", name: "Purchase Order", category: "Office Documents", categorySlug: "office-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Purchase order template", features: ["Editable", "GST ready"] },
  { id: "work-order", name: "Work Order", category: "Office Documents", categorySlug: "office-docs", price: 499, deliveryDays: 2, revisions: 2, description: "Work order template", features: ["Editable"] },

  // CERTIFICATES
  { id: "training-certificate", name: "Training Certificate", category: "Certificates", categorySlug: "certificates", price: 599, deliveryDays: 2, revisions: 2, description: "Professional training certificate", features: ["Print-ready", "Editable"] },
  { id: "participation-certificate", name: "Participation Certificate", category: "Certificates", categorySlug: "certificates", price: 499, deliveryDays: 2, revisions: 2, description: "Event participation certificate", features: ["Editable", "Print-ready"] },
  { id: "appreciation-certificate", name: "Appreciation Certificate", category: "Certificates", categorySlug: "certificates", price: 499, deliveryDays: 2, revisions: 2, description: "Employee appreciation certificate", features: ["Print-ready", "Editable"] },
  { id: "achievement-certificate", name: "Achievement Certificate", category: "Certificates", categorySlug: "certificates", price: 599, deliveryDays: 2, revisions: 2, description: "Award & achievement certificate", features: ["Custom design"] },

  // DIGITAL SERVICES
  { id: "website", name: "Business Website", category: "Digital Services", categorySlug: "digital-services", price: 14999, premiumPrice: 29999, deliveryDays: 15, revisions: 3, description: "Professional responsive website", features: ["5-7 pages", "Mobile responsive", "SEO ready", "1 year support"], popular: true, featured: true },
  { id: "android-app", name: "Android App", category: "Digital Services", categorySlug: "digital-services", price: 24999, premiumPrice: 49999, deliveryDays: 30, revisions: 3, description: "Custom Android mobile application", features: ["Play Store ready", "Source code", "1 year support"], featured: true },
  { id: "ios-app", name: "iOS App", category: "Digital Services", categorySlug: "digital-services", price: 29999, premiumPrice: 59999, deliveryDays: 35, revisions: 3, description: "Custom iOS mobile application", features: ["App Store ready", "Source code"] },
  { id: "software-development", name: "Software Development", category: "Digital Services", categorySlug: "digital-services", price: 39999, deliveryDays: 45, revisions: 3, description: "Custom software solution", features: ["Tailored to your needs", "Source code"] },
  { id: "erp", name: "ERP System", category: "Digital Services", categorySlug: "digital-services", price: 49999, deliveryDays: 60, revisions: 3, description: "Enterprise resource planning system", features: ["Multi-module", "User roles"] },
  { id: "crm", name: "CRM System", category: "Digital Services", categorySlug: "digital-services", price: 34999, deliveryDays: 45, revisions: 3, description: "Customer relationship management", features: ["Lead tracking", "Reports"] },
  { id: "school-management", name: "School Management Software", category: "Digital Services", categorySlug: "digital-services", price: 44999, deliveryDays: 60, revisions: 3, description: "Complete school management system", features: ["Students, fees, attendance", "Parent portal"] },
  { id: "institute-management", name: "Institute Management Software", category: "Digital Services", categorySlug: "digital-services", price: 39999, deliveryDays: 50, revisions: 3, description: "Coaching institute management", features: ["Batches, fees, attendance"] },
  { id: "ecommerce-website", name: "Ecommerce Website", category: "Digital Services", categorySlug: "digital-services", price: 24999, premiumPrice: 49999, deliveryDays: 25, revisions: 3, description: "Online store with payment integration", features: ["Cart, checkout, payments", "Admin panel"] },
  { id: "landing-page", name: "Landing Page", category: "Digital Services", categorySlug: "digital-services", price: 4999, premiumPrice: 9999, deliveryDays: 5, revisions: 3, description: "High-converting landing page", features: ["Mobile responsive", "Lead form"], popular: true },
];

export const getServiceById = (id: string) => services.find((s) => s.id === id);
export const getServicesByCategory = (slug: string) => services.filter((s) => s.categorySlug === slug);
export const getCategoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const getFeaturedServices = () => services.filter((s) => s.featured);
export const getPopularServices = () => services.filter((s) => s.popular);
