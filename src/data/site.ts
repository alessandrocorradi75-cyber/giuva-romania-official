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
  { href: "/", label: "Acasă" },
  { href: "/media", label: "Despre" },
  { href: "/riders-rescue", label: "Salvatori Moto" },
  { href: "/contact", label: "Voluntari" },
  { href: "/project-pulse", label: "Susține" },
  { href: "/project-pulse", label: "Campanie DEA" },
  { href: "/civil-response", label: "Resurse" },
  { href: "/journey", label: "Travel" },
  { href: "/journey", label: "Galerie" },
  { href: "/contact", label: "Contact" }
];

export const pillars = [
  {
    title: "Community",
    href: "/community",
    icon: Users,
    byline: "by GIUVA",
    text: "Acțiuni comunitare, socializare, recreere și solidaritate.",
    textEn: "Community actions, social life, recreation and solidarity."
  },
  {
    title: "Riders Rescue",
    href: "/riders-rescue",
    icon: Bike,
    byline: "by GIUVA",
    text: "Voluntari instruiți. Defibrilatoare mobile. Răspuns rapid și responsabil.",
    textEn: "Trained volunteers. Mobile defibrillators. Fast and responsible response."
  },
  {
    title: "Civil Response",
    href: "/civil-response",
    icon: ShieldCheck,
    byline: "by GIUVA",
    text: "Activități de protecție civilă, sprijin autorizat și coordonare la solicitarea autorităților.",
    textEn: "Civil protection activities, authorized support and coordination upon request from authorities."
  },
  {
    title: "Journey",
    href: "/journey",
    icon: Map,
    byline: "by GIUVA",
    text: "Povești, activități recreative, socializare și memorie comunitară.",
    textEn: "Stories, recreational activities, social connection and community memory."
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

export const languageOptions = [
  { code: "ro", label: "Română" },
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "hu", label: "Magyar" },
  { code: "sr", label: "Srpski" },
  { code: "hr", label: "Hrvatski" }
];

export const officialResources = [
  {
    name: "Poliția Română",
    badge: "PR",
    logo: "https://politiaromana.ro/front/view/img/stema_igpr.png",
    href: "https://www.politiaromana.ro/ro/",
    note: "Resursă oficială pentru informare publică."
  },
  {
    name: "ISU București-Ilfov",
    badge: "ISU",
    logo: "https://isubif.igsu.ro/resources/c1166be2-ed0b-4b1c-92b9-caad95c910a2.png",
    href: "https://www.isubif.ro/",
    note: "Inspectorat pentru situații de urgență."
  },
  {
    name: "SMURD",
    badge: "SMURD",
    logo: "https://smurd.ro/wp-content/uploads/2014/05/logo-smurd%402x.png",
    href: "https://smurd.ro/",
    note: "Resurse publice și informații SMURD."
  },
  {
    name: "Primăria Capitalei",
    badge: "PMB",
    logo: "https://www2.pmb.ro/orasul/stema/imag/stema.jpg",
    href: "https://www2.pmb.ro/",
    note: "Administrația locală a Municipiului București."
  },
  {
    name: "MAI - Protecție Civilă",
    badge: "MAI",
    href: "https://www.mai.gov.ro/despre-noi/organizare/aparat-central/directia-generala-pentru-protectie-civila/",
    note: "Direcția Generală pentru Protecție Civilă."
  },
  {
    name: "Fii Pregătit - Hartă",
    badge: "FP",
    logo: "https://fiipregatit.ro/_next/static/media/LogoDsu.166alx4dke6mn.png",
    href: "https://fiipregatit.ro/harta",
    note: "Hartă publică a punctelor de interes."
  },
  {
    name: "Salvează o viață",
    badge: "AED",
    logo: "https://salveaza-o-viata.ro/wp-content/uploads/2019/12/salveaza.png",
    href: "https://salveaza-o-viata.ro/",
    note: "Resursă publică despre acces la defibrilatoare."
  }
];

export const legalAndBenchmarkReferences = [
  {
    title: "European Road Safety Charter - AASI",
    type: "Referință juridică / instituțională",
    href: "https://road-safety-charter.ec.europa.eu/user/3617",
    text:
      "Model util pentru poziționare europeană, educație, recunoașterea rolurilor profesionale și colaborare în zona siguranței rutiere."
  },
  {
    title: "Rider Rescue Network",
    type: "Benchmark aplicație / posibil contact",
    href: "https://apps.apple.com/us/app/riders-to-the-rescue/id6744728720",
    text:
      "Exemplu de aplicație mobilă orientată către comunitate și suport pe teren. Poate inspira viitorul portal/app GIUVA și poate deveni subiect de dialog pentru parteneriat."
  }
];

export const journeyStories = [
  {
    title: "Drumuri, oameni, sens",
    location: "România",
    category: "Journey",
    image: "/brand/journey-urban-1.png",
    text: "Inima media a GIUVA: povești scurte, oameni reali, drumuri documentate și momente comune."
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
