import {
  Activity,
  BadgeCheck,
  Bike,
  BookOpen,
  Building2,
  CalendarDays,
  Camera,
  HandHeart,
  HeartPulse,
  Mail,
  Map,
  Radio,
  ShieldCheck,
  Users
} from "lucide-react";

export const brand = {
  name: "GIUVA.RO",
  tagline: "Ride • Respond • Unite",
  description:
    "Platformă comunitară pentru mobilitate voluntară, educație AED/DEA, reziliență civică, povești și impact transparent.",
  descriptionEn:
    "A community platform for volunteer mobility, AED awareness, civic resilience, storytelling and transparent impact.",
  email: "contact@giuva.ro"
};

export const navItems = [
  { href: "/", label: "Acasă / Home" },
  { href: "/riders-rescue", label: "Riders Rescue" },
  { href: "/community", label: "Comunitate / Community" },
  { href: "/journey", label: "Journey" },
  { href: "/project-pulse", label: "Project Pulse" },
  { href: "/civil-response", label: "Civil Response" },
  { href: "/partners", label: "Parteneri / Partners" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" }
];

export const pillars = [
  {
    title: "Riders Community",
    href: "/community",
    icon: Users,
    byline: "by GIUVA",
    text: "Comunitate, socializare, valori comune, acțiuni caritabile și inițiative locale.",
    textEn: "Community, shared values, charity rides and local initiatives."
  },
  {
    title: "Riders Rescue",
    href: "/riders-rescue",
    icon: Bike,
    byline: "by GIUVA",
    text: "Voluntari instruiți, AED/DEA mobile, kituri de prim ajutor și sprijin comunitar.",
    textEn: "Trained volunteers, mobile AED units, first aid kits and community support."
  },
  {
    title: "Civil Response",
    href: "/civil-response",
    icon: ShieldCheck,
    byline: "by GIUVA",
    text: "Informare publică, pregătire, calendar de training și coordonare voluntari.",
    textEn: "Public information, preparedness, training calendar and volunteer coordination."
  },
  {
    title: "Riders Journey",
    href: "/journey",
    icon: Map,
    byline: "by GIUVA",
    text: "Călătorii, experiențe, oameni, fotografii și memorie comunitară.",
    textEn: "Roads, people, photographs and collective community memory."
  },
  {
    title: "Project Pulse",
    href: "/project-pulse",
    icon: HeartPulse,
    byline: "by GIUVA",
    text: "Campanii pentru AED/DEA, formare, echipamente și impact măsurabil.",
    textEn: "Campaigns for AED units, training, equipment and measurable impact."
  }
];

export const roadmap = [
  "Fundație comunitară / Community foundation",
  "Onboarding voluntari / Volunteer onboarding",
  "Educație AED/DEA / AED awareness",
  "Protocoale parteneri / Partner protocols",
  "Campanii Project Pulse / Project Pulse campaigns",
  "Portal voluntari / Volunteer portal",
  "Sistem Journey / Journey content system",
  "Pilot european / European pilot"
];

export const projectPulseMetrics = [
  { label: "AED finanțate / AED funded", value: "0", icon: HeartPulse },
  { label: "Voluntari instruiți / Volunteers trained", value: "0", icon: BadgeCheck },
  { label: "Km acoperiți / Km covered", value: "0", icon: Bike },
  { label: "Comunități atinse / Communities reached", value: "0", icon: Building2 }
];

export const partnerCategories = [
  "Instituțional / Institutional",
  "Medical",
  "Hospitality",
  "Media",
  "Tehnic / Technical",
  "Mobilitate / Mobility"
];

export const platformModules = [
  {
    title: "CMS ready",
    text: "Journey, știri, evenimente, povești și campanii pot trece în Sanity sau Strapi.",
    icon: BookOpen
  },
  {
    title: "Portal voluntari",
    text: "Onboarding, badge QR, status, training, participare și istoricul evenimentelor.",
    icon: Users
  },
  {
    title: "Project Pulse",
    text: "Obiective publice, sponsori, dashboard și indicatori transparenți de impact.",
    icon: Activity
  },
  {
    title: "Civil information",
    text: "Preparedness, informare publică, training calendar și coordonare voluntari.",
    icon: Radio
  }
];

export const journeyStories = [
  {
    title: "Drumuri, oameni, sens",
    location: "România",
    category: "Journey",
    image: "/brand/journey-urban-1.png",
    text: "Inima media a GIUVA: povești scurte, oameni reali, drumuri documentate și momente comunitare."
  },
  {
    title: "Zi de training",
    location: "Eveniment partener viitor",
    category: "Volunteer story",
    image: "/brand/journey-urban-2.png",
    text: "Un spațiu viitor pentru rapoarte de training, certificate, galerii și educație publică."
  },
  {
    title: "Community ride",
    location: "Rută locală",
    category: "Gallery",
    image: "/brand/journey-urban-3.png",
    text: "Model pentru charity rides, opriri la parteneri, captions și vizibilitate pentru sponsori."
  }
];

export const communityManifestos = [
  {
    title: "People first. Community always.",
    image: "/brand/community-manifesto-3.png",
    text: "Manifest vizual pentru community rides, charity, activități sociale și responsabilitate comună."
  },
  {
    title: "Community manifesto",
    image: "/brand/community-manifesto-2.png",
    text: "Material compact pentru comunicare publică și prezentări către parteneri."
  },
  {
    title: "Printable manifesto",
    image: "/brand/community-manifesto-1.png",
    text: "Format de afiș care poate deveni asset descărcabil în media kit."
  }
];

export const contactChannels = [
  { label: "General", value: "info@giuva.ro", icon: Mail },
  { label: "Media", value: "media@giuva.ro", icon: Camera },
  { label: "Partnerships", value: "partnerships@giuva.ro", icon: HandHeart },
  { label: "Volunteers", value: "volunteers@giuva.ro", icon: Users },
  { label: "Project Pulse", value: "projectpulse@giuva.ro", icon: HeartPulse }
];

export const trainingCalendar = [
  { title: "Sesiune AED/DEA", date: "De programat", audience: "Voluntari" },
  { title: "Pregătire comunitară", date: "De programat", audience: "Public" },
  { title: "Briefing suport evenimente", date: "De programat", audience: "Coordonatori" }
];

export const contentModels = ["story", "gallery", "event", "campaign", "volunteer story", "partner profile"];

export const operationalPages = [
  { title: "Ce este GIUVA / What is GIUVA", href: "/media", icon: BookOpen },
  { title: "Reziliență comunitară / Community resilience", href: "/civil-response", icon: ShieldCheck },
  { title: "AED Awareness", href: "/project-pulse", icon: HeartPulse },
  { title: "Mobilitate voluntară / Volunteer mobility", href: "/riders-rescue", icon: Bike },
  { title: "Charity rides", href: "/community", icon: CalendarDays },
  { title: "Journey stories", href: "/journey", icon: Camera }
];
