import {
  Bike,
  BookOpen,
  Building2,
  Coffee,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Mail,
  Map,
  Network,
  Radio,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const locales = {
  defaultLocale: "ro",
  supported: ["ro", "en"],
  future: ["it", "es", "hu", "de"]
};

export const brand = {
  name: "GIUVA Romania",
  acronym: "GIUVA",
  fullName: "Global Initiative for Urban Volunteering & Awareness",
  claim: "Connecting Communities. Creating Impact.",
  domain: "www.giuva.ro",
  email: "info@giuva.ro",
  description:
    "GIUVA Romania construiește o rețea civică de voluntari, comunități și parteneri pentru orașe mai conectate, pregătite și solidare.",
  legalBoundary:
    "GIUVA Romania este un proiect civic aflat în dezvoltare și consolidare. Nu înlocuiește serviciile publice de urgență, 112, SMURD, poliție, pompieri sau alte instituții publice. Activitățile GIUVA sunt civice, educaționale, sociale și comunitare."
};

export const seoKeywords = [
  "GIUVA Romania",
  "voluntariat Romania",
  "comunitate",
  "voluntari",
  "AED",
  "educatie civica",
  "pregatire comunitara",
  "proiect european de voluntariat",
  "rezilienta comunitara",
  "cultura preventiei"
];

export const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre" },
  { href: "/discipline", label: "Discipline" },
  { href: "/riders-rescue", label: "Riders Rescue" },
  { href: "/community", label: "Community" },
  { href: "/voluntari", label: "Voluntari" },
  { href: "/deschide-o-sediu", label: "Deschide o comunitate" },
  { href: "/partner", label: "Parteneri" },
  { href: "/sustine", label: "Susține" },
  { href: "/news", label: "Noutăți" },
  { href: "/contact", label: "Contact" }
];

export const ctas = {
  volunteer: { label: "Devino voluntar", href: "/voluntari" },
  chapter: { label: "Deschide o comunitate GIUVA", href: "/deschide-o-sediu" },
  secretariat: { label: "Contactează secretariatul", href: "/contact" },
  partner: { label: "Propune un parteneriat", href: "/partner" },
  donate: { label: "Sustine proiectul", href: "/sustine" }
};

export const projectStatus =
  "Retea civica in constructie, proiect pilot si structura in asteptare de formalizare progresiva.";

export const associationFacts = [
  {
    title: "Ce este GIUVA",
    text: "O asociatie civica romaneasca cu deschidere europeana, construita pentru voluntariat responsabil, educatie civica si pregatire comunitara."
  },
  {
    title: "Ce face",
    text: "Conecteaza oameni, comunitati si viitori parteneri prin activitati civice, formative, sociale si de awareness AED."
  },
  {
    title: "Ce nu este",
    text: "GIUVA nu este serviciu public, operator de urgenta, structura de interventie autonoma sau inlocuitor pentru institutiile statului."
  }
];

export const giuvaToday = [
  "proiect/asociatie in faza de constituire si consolidare",
  "identitate civica definita",
  "prime comunitati locale in dezvoltare",
  "formulare pregatite pentru voluntari si filiale",
  "cadru prudent pentru activitati civice si formative"
];

export const giuvaTomorrow = [
  "retea nationala in Romania",
  "filiale locale in mai multe orase",
  "voluntari formati prin parteneri autorizati",
  "parteneriate formalizate doar dupa validare legala",
  "extindere europeana treptata"
];

export const values = [
  "solidaritate",
  "incluziune",
  "responsabilitate civica",
  "pregatire",
  "cooperare",
  "transparenta",
  "impact masurabil"
];

export const europeanNetwork = [
  { label: "GIUVA România", domain: "giuva.ro", href: "https://www.giuva.ro", status: "În dezvoltare 2026" },
  { label: "GIUVA Italia", domain: "giuva.it", href: "/contact", status: "În dezvoltare 2026" },
  { label: "GIUVA Austria", domain: "giuva.at", href: "/contact", status: "Planificat 2027" },
  { label: "GIUVA Spania", domain: "giuva.es", href: "/contact", status: "În dezvoltare 2027" },
  { label: "GIUVA Ungaria", domain: "giuva.hu", href: "/contact", status: "Planificat 2028" },
  { label: "GIUVA Europe", domain: "giuva.eu", href: "/contact", status: "În dezvoltare" }
];

export const disciplines = [
  {
    slug: "community-social",
    name: "Community & Social",
    color: "verde",
    accent: "bg-[#18865B]",
    icon: Users,
    description:
      "Actiuni comunitare, socializare, sprijin local, incluziune si evenimente deschise oamenilor cu valori comune."
  },
  {
    slug: "riders-rescue",
    name: "Riders Rescue",
    color: "albastru",
    accent: "bg-[#0B2A4A]",
    icon: Bike,
    description:
      "Pilon in dezvoltare pentru voluntari mobili, awareness AED, educatie de prim ajutor si suport civic complementar."
  },
  {
    slug: "civil-support",
    name: "Civil Support",
    color: "portocaliu",
    accent: "bg-[#F97316]",
    icon: Radio,
    description:
      "Suport civic si logistic pentru activitati comunitare, evenimente locale si proiecte pilot, numai in limitele legii."
  },
  {
    slug: "preparedness",
    name: "Preparedness",
    color: "galben",
    accent: "bg-[#F2C94C]",
    icon: ShieldCheck,
    description:
      "Educatie civica, pregatire comunitara, cultura preventiei, informare publica si comportamente responsabile."
  },
  {
    slug: "journey",
    name: "Journey",
    color: "alb/verde",
    accent: "bg-[#E8F7EF]",
    icon: Map,
    description:
      "Povesti, fotografie, calatorii responsabile, memorie comunitara si promovarea locurilor printr-o perspectiva umana."
  },
  {
    slug: "project-pulse",
    name: "Project Pulse",
    color: "maro civic",
    accent: "bg-[#8B5E34]",
    icon: HeartPulse,
    description:
      "Fundraising viitor, campanii transparente, CSR, proiecte europene si raportare de impact dupa formalizarea cadrului legal."
  },
  {
    slug: "academy",
    name: "Academy",
    color: "violet",
    accent: "bg-[#7C3AED]",
    icon: GraduationCap,
    description:
      "Componenta educationala viitoare pentru workshopuri, proceduri civice, wellbeing voluntari si cresterea competentelor."
  },
  {
    slug: "youth",
    name: "Youth",
    color: "turcoaz",
    accent: "bg-[#0891B2]",
    icon: Sparkles,
    description:
      "Implicarea tinerilor, cetatenie activa, leadership civic si proiecte educationale locale."
  },
  {
    slug: "senior-network",
    name: "Senior Network",
    color: "burgundy",
    accent: "bg-[#7F1D1D]",
    icon: HandHeart,
    description:
      "Participarea activa a seniorilor, transfer de experienta si sprijin intergenerational."
  }
];

export const communities = [
  "GIUVA Community Bucuresti",
  "GIUVA Community Oradea",
  "viitoare orase din Romania",
  "viitoare comunitati europene"
];

export const partnerAreas = [
  "parteneriate in asteptare de formalizare",
  "sponsorizari viitoare",
  "CSR",
  "donatii materiale",
  "sprijin AED",
  "proiecte locale",
  "proiecte europene"
];

export const donationOptions = [
  "donatie economica viitoare",
  "sponsorizare AED",
  "materiale",
  "formare",
  "suport logistic",
  "spatii",
  "parteneriate"
];

export const news = [
  {
    slug: "giuva-romania-in-dezvoltare",
    title: "GIUVA Romania: retea civica in dezvoltare",
    date: "2026-06-25",
    category: "Institutional",
    excerpt:
      "GIUVA Romania pregateste o platforma civica pentru voluntariat urban, educatie, pregatire comunitara si cultura preventiei."
  },
  {
    slug: "community-pilot",
    title: "Community: proiect pilot pentru comunitati locale",
    date: "2026-06-25",
    category: "Community",
    excerpt:
      "O comunitate poate incepe simplu: oameni, conversatii locale, valori comune si activitati civice responsabile."
  },
  {
    slug: "riders-rescue-aed-awareness",
    title: "Riders Rescue: awareness AED si educatie civica",
    date: "2026-06-25",
    category: "Riders Rescue",
    excerpt:
      "Pilon in dezvoltare pentru awareness AED, preventie si suport comunitar complementar."
  }
];

export const contactEmails = [
  { label: "Secretariat", value: "info@giuva.ro", icon: Mail },
  { label: "Voluntari", value: "volunteers@giuva.ro", icon: Users },
  { label: "Parteneriate", value: "partnerships@giuva.ro", icon: Building2 },
  { label: "Project Pulse", value: "fundraising@giuva.ro", icon: HeartPulse }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/giuva/?viewAsMember=true" },
  { label: "Facebook", href: "https://www.facebook.com/GIUVACommunity" }
];

export const volunteerFields = [
  { name: "prenume", label: "Prenume", type: "text", required: true },
  { name: "nume", label: "Nume", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
  { name: "oras", label: "Oras", type: "text", required: true },
  { name: "tara", label: "Tara", type: "text", required: true }
];

export const disciplineOptions = [...disciplines.map((discipline) => discipline.name), "Nu stiu inca"];

export const availabilityOptions = [
  "Cateva ore pe luna",
  "O zi pe luna",
  "Disponibilitate saptamanala",
  "Doar activitati specifice",
  "De evaluat"
];

export const chapterFields = [
  { name: "prenume", label: "Prenume", type: "text", required: true },
  { name: "nume", label: "Nume", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
  { name: "oras", label: "Oras propus", type: "text", required: true },
  { name: "tara", label: "Tara", type: "text", required: true }
];

export const contactFormFields = [
  { name: "nume", label: "Nume", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefon", label: "Telefon optional", type: "tel", required: false },
  { name: "subiect", label: "Subiect", type: "text", required: true }
];

export const languageRoadmap = [
  { code: "RO", label: "Romana", status: "principala" },
  { code: "EN", label: "English", status: "secondary" }
];

export const formReadiness = [
  "nu trimite email in aceasta versiune publica",
  "nu salveaza inca intr-o baza de date reala",
  "pregatit pentru export date voluntari in integrarea viitoare",
  "consimtamant privacy vizibil si obligatoriu",
  "mesaj de confirmare local pentru verificarea formularului"
];

export const pillars = disciplines.slice(0, 5).map((discipline) => ({
  title: discipline.name,
  href: discipline.slug === "riders-rescue" ? "/riders-rescue" : "/discipline",
  icon: discipline.icon,
  byline: "GIUVA Romania",
  text: discipline.description
}));

export const journeyStories = [
  {
    title: "GIUVA Journey",
    location: "Romania / Europa",
    category: "Journey",
    image: "/brand/journey-urban-1.png",
    text: "Calatorii responsabile, povesti scurte si conexiuni intre comunitati."
  }
];

export const partnerCategories = partnerAreas;

export const projectPulseMetrics = [
  { label: "Campanii active", value: "0", icon: HeartPulse },
  { label: "AED sustinute", value: "0", icon: HeartPulse },
  { label: "Parteneriate formalizate", value: "0", icon: Building2 },
  { label: "Comunitati in dezvoltare", value: "2", icon: Users }
];

export const roadmap = [
  "identitate GIUVA Romania",
  "prime comunitati locale",
  "onboarding voluntari",
  "cadru de parteneriate",
  "Project Pulse",
  "GIUVA Europe"
];

export const operationalPages = [
  { title: "Despre", href: "/despre", icon: BookOpen },
  { title: "Discipline", href: "/discipline", icon: Network },
  { title: "Riders Rescue", href: "/riders-rescue", icon: Bike },
  { title: "Community", href: "/community", icon: Coffee },
  { title: "Parteneri", href: "/partner", icon: Building2 },
  { title: "Noutati", href: "/news", icon: BookOpen }
];
