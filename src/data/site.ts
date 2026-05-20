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

export type LanguageCode = "ro" | "en" | "it";

export type LocalizedText = Record<LanguageCode, string>;

export const languageOptions: { code: LanguageCode; label: string }[] = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" }
];

export const brand = {
  name: "GIUVA.RO",
  tagline: {
    ro: "Reziliență civică europeană",
    en: "European civic resilience",
    it: "Resilienza civica europea"
  },
  description: {
    ro: "GIUVA este o platformă europeană de reziliență civică, construită pentru voluntariat, pregătire publică, rețele AED/DEA, sprijin comunitar și cooperare cu autoritățile.",
    en: "GIUVA is a European civic resilience platform built for volunteering, public preparedness, AED networks, community support and cooperation with authorities.",
    it: "GIUVA è una piattaforma europea di resilienza civica costruita per volontariato, preparazione pubblica, reti AED/DEA, supporto comunitario e cooperazione con le autorità."
  },
  email: "contact@giuva.ro"
};

export const navItems = [
  { href: "/", label: { ro: "Acasă", en: "Home", it: "Home" } },
  { href: "/media", label: { ro: "Despre", en: "About", it: "Chi siamo" } },
  { href: "/riders-rescue", label: { ro: "Riders Rescue", en: "Riders Rescue", it: "Riders Rescue" } },
  { href: "/community", label: { ro: "Community", en: "Community", it: "Community" } },
  { href: "/journey", label: { ro: "Journey", en: "Journey", it: "Journey" } },
  { href: "/project-pulse", label: { ro: "Project Pulse", en: "Project Pulse", it: "Project Pulse" } },
  { href: "/civil-response", label: { ro: "Civil Response", en: "Civil Response", it: "Civil Response" } },
  { href: "/partners", label: { ro: "Parteneri", en: "Partners", it: "Partner" } },
  { href: "/contact", label: { ro: "Contact", en: "Contact", it: "Contatto" } }
];

export const homeCopy = {
  eyebrow: {
    ro: "Platformă europeană de reziliență civică",
    en: "European civic resilience platform",
    it: "Piattaforma europea di resilienza civica"
  },
  title: "GIUVA",
  subtitle: {
    ro: "Nu un club moto. O infrastructură civică pentru viață, comunitate și pregătire publică.",
    en: "Not a motorcycle club. A civic infrastructure for life, community and public preparedness.",
    it: "Non un motoclub. Un’infrastruttura civica per vita, comunità e preparazione pubblica."
  },
  text: {
    ro: "GIUVA construiește un ecosistem descentralizat de voluntari, educație AED/DEA, sprijin comunitar, documentare publică și cooperare cu instituțiile locale și europene.",
    en: "GIUVA builds a decentralized ecosystem for volunteers, AED education, community support, public documentation and cooperation with local and European institutions.",
    it: "GIUVA costruisce un ecosistema decentralizzato per volontari, educazione AED/DEA, supporto comunitario, documentazione pubblica e cooperazione con istituzioni locali ed europee."
  },
  primaryAction: { ro: "Devino voluntar", en: "Become a volunteer", it: "Diventa volontario" },
  secondaryAction: { ro: "Susține Project Pulse", en: "Support Project Pulse", it: "Sostieni Project Pulse" },
  panelTitle: { ro: "Misiune", en: "Mission", it: "Missione" },
  panelItems: [
    {
      ro: "Viața umană înainte de toate",
      en: "Human life first",
      it: "La vita umana prima di tutto"
    },
    {
      ro: "Pregătire publică și prevenție",
      en: "Public preparedness and prevention",
      it: "Preparazione pubblica e prevenzione"
    },
    {
      ro: "Cooperare cu autoritățile",
      en: "Cooperation with authorities",
      it: "Cooperazione con le autorità"
    },
    {
      ro: "Identitate civică europeană",
      en: "European civic identity",
      it: "Identità civica europea"
    }
  ]
};

export const pillars = [
  {
    title: { ro: "Riders Rescue", en: "Riders Rescue", it: "Riders Rescue" },
    href: "/riders-rescue",
    icon: Bike,
    focus: {
      ro: "Unitate rapidă de voluntari pe motociclete și scutere.",
      en: "Rapid volunteer motorcycle and scooter response unit.",
      it: "Unità rapida di volontari su motociclette e scooter."
    },
    text: {
      ro: "Mobilitate AED/DEA, sprijin urban, suport la evenimente, prim ajutor și disponibilitate responsabilă în cadrul legal.",
      en: "AED mobility, urban support, event assistance, first aid and responsible availability within legal protocols.",
      it: "Mobilità AED/DEA, supporto urbano, assistenza eventi, primo soccorso e disponibilità responsabile nei protocolli legali."
    }
  },
  {
    title: { ro: "Community", en: "Community", it: "Community" },
    href: "/community",
    icon: Users,
    focus: {
      ro: "Divizie pentru implicare comunitară.",
      en: "Community engagement division.",
      it: "Divisione per il coinvolgimento comunitario."
    },
    text: {
      ro: "Voluntariat, inițiative sociale, tineri, evenimente locale și sprijin umanitar.",
      en: "Volunteering, social initiatives, youth engagement, local events and humanitarian support.",
      it: "Volontariato, iniziative sociali, giovani, eventi locali e supporto umanitario."
    }
  },
  {
    title: { ro: "Journey", en: "Journey", it: "Journey" },
    href: "/journey",
    icon: Camera,
    focus: {
      ro: "Divizie de storytelling și documentare.",
      en: "Storytelling and documentary division.",
      it: "Divisione narrativa e documentaristica."
    },
    text: {
      ro: "Povești reale, fotografie, raportare umanitară, documentare pe teren și campanii de conștientizare.",
      en: "Real stories, photography, humanitarian reporting, field documentation and awareness campaigns.",
      it: "Storie reali, fotografia, reporting umanitario, documentazione sul campo e campagne di sensibilizzazione."
    }
  },
  {
    title: { ro: "Project Pulse", en: "Project Pulse", it: "Project Pulse" },
    href: "/project-pulse",
    icon: HeartPulse,
    focus: {
      ro: "Divizie pentru finanțare și infrastructură.",
      en: "Fundraising and infrastructure division.",
      it: "Divisione per raccolta fondi e infrastruttura."
    },
    text: {
      ro: "Campanii AED/DEA, echipamente, motociclete de intervenție, uniforme, donații și impact transparent.",
      en: "AED campaigns, equipment, rescue motorcycles, uniforms, donations and transparent impact.",
      it: "Campagne AED/DEA, attrezzature, moto di supporto, uniformi, donazioni e impatto trasparente."
    }
  },
  {
    title: { ro: "Civil Response", en: "Civil Response", it: "Civil Response" },
    href: "/civil-response",
    icon: ShieldCheck,
    focus: {
      ro: "Pregătire civilă și cooperare instituțională.",
      en: "Civil preparedness and institutional cooperation.",
      it: "Preparazione civile e cooperazione istituzionale."
    },
    text: {
      ro: "Cooperare cu protecția civilă, asistență la evenimente, pregătire pentru dezastre și suport de comunicare, doar în cadrul protocoalelor.",
      en: "Civil protection cooperation, public event assistance, disaster preparedness and communication support, only within formal protocols.",
      it: "Cooperazione con protezione civile, assistenza eventi, preparazione ai disastri e supporto comunicazione, solo entro protocolli formali."
    }
  }
];

export const roadmap = [
  { ro: "Fundație comunitară", en: "Community foundation", it: "Fondazione comunitaria" },
  { ro: "Onboarding voluntari", en: "Volunteer onboarding", it: "Onboarding volontari" },
  { ro: "Educație AED/DEA", en: "AED awareness", it: "Educazione AED/DEA" },
  { ro: "Protocoale parteneri", en: "Partner protocols", it: "Protocolli partner" },
  { ro: "Campanii Project Pulse", en: "Project Pulse campaigns", it: "Campagne Project Pulse" },
  { ro: "Portal voluntari", en: "Volunteer portal", it: "Portale volontari" },
  { ro: "Sistem Journey", en: "Journey content system", it: "Sistema contenuti Journey" },
  { ro: "Pilot european", en: "European pilot", it: "Pilota europeo" }
];

export const projectPulseMetrics = [
  { label: { ro: "AED finanțate", en: "AEDs funded", it: "AED finanziati" }, value: "0", icon: HeartPulse },
  { label: { ro: "Voluntari instruiți", en: "Volunteers trained", it: "Volontari formati" }, value: "0", icon: BadgeCheck },
  { label: { ro: "Campanii active", en: "Active campaigns", it: "Campagne attive" }, value: "0", icon: Activity },
  { label: { ro: "Comunități atinse", en: "Communities reached", it: "Comunità raggiunte" }, value: "0", icon: Building2 }
];

export const platformModules = [
  {
    title: { ro: "Sistem donații", en: "Donation system", it: "Sistema donazioni" },
    text: {
      ro: "Placeholder pentru donații transparente, campanii, sponsori și destinații publice ale fondurilor.",
      en: "Placeholder for transparent donations, campaigns, sponsors and public fund destinations.",
      it: "Placeholder per donazioni trasparenti, campagne, sponsor e destinazioni pubbliche dei fondi."
    },
    icon: HandHeart
  },
  {
    title: { ro: "Portal voluntari", en: "Volunteer portal", it: "Portale volontari" },
    text: {
      ro: "Onboarding, identitate, status, training, participare și traseu profesional voluntar.",
      en: "Onboarding, identity, status, training, participation and volunteer development path.",
      it: "Onboarding, identità, status, formazione, partecipazione e percorso del volontario."
    },
    icon: Users
  },
  {
    title: { ro: "Hartă AED viitoare", en: "Future AED map", it: "Mappa AED futura" },
    text: {
      ro: "Spațiu pregătit pentru resurse publice, informare AED/DEA și integrare cu surse oficiale.",
      en: "Prepared space for public resources, AED information and integration with official sources.",
      it: "Spazio pronto per risorse pubbliche, informazione AED e integrazione con fonti ufficiali."
    },
    icon: Map
  },
  {
    title: { ro: "Cooperare instituțională", en: "Institutional cooperation", it: "Cooperazione istituzionale" },
    text: {
      ro: "Secțiuni pentru parteneri instituționali, urgență, municipalități și protocoale semnate.",
      en: "Sections for institutional partners, emergency partners, municipalities and signed protocols.",
      it: "Sezioni per partner istituzionali, emergenza, municipalità e protocolli firmati."
    },
    icon: Radio
  }
];

export const partnerGroups = [
  {
    title: { ro: "Parteneri instituționali", en: "Institutional partners", it: "Partner istituzionali" },
    text: {
      ro: "Municipalități, consilii locale, autorități publice și entități europene de finanțare.",
      en: "Municipalities, local councils, public authorities and European funding entities.",
      it: "Municipalità, consigli locali, autorità pubbliche ed enti europei di finanziamento."
    },
    icon: Building2
  },
  {
    title: { ro: "Parteneri de urgență", en: "Emergency partners", it: "Partner emergenza" },
    text: {
      ro: "Instituții de urgență, protecție civilă, Crucea Roșie, ERC și furnizori autorizați de training.",
      en: "Emergency institutions, civil protection, Red Cross, ERC and authorized training providers.",
      it: "Istituzioni di emergenza, protezione civile, Croce Rossa, ERC e provider formativi autorizzati."
    },
    icon: ShieldCheck
  },
  {
    title: { ro: "Cooperare municipală", en: "Municipal cooperation", it: "Cooperazione municipale" },
    text: {
      ro: "Suport pentru evenimente publice, educație locală, campanii AED și pregătire comunitară.",
      en: "Public event support, local education, AED campaigns and community preparedness.",
      it: "Supporto eventi pubblici, educazione locale, campagne AED e preparazione comunitaria."
    },
    icon: CalendarDays
  }
];

export const partnerCategories = [
  "Institutional partners",
  "Emergency institutions",
  "Municipal cooperation",
  "Medical training",
  "Corporate sponsors",
  "European funding entities"
];

export const legalAndBenchmarkReferences = [
  {
    title: "European Road Safety Charter - AASI",
    type: "Legal and institutional reference",
    href: "https://road-safety-charter.ec.europa.eu/user/3617",
    text:
      "Useful reference for European civic positioning, education, professional roles and cooperation around road safety."
  },
  {
    title: "Rider Rescue Network",
    type: "Application benchmark and possible dialogue",
    href: "https://apps.apple.com/us/app/riders-to-the-rescue/id6744728720",
    text:
      "Relevant benchmark for community-oriented mobile support. It can inspire the future GIUVA portal or app without implying current partnership."
  }
];

export const journeyStories = [
  {
    title: { ro: "Drumuri, oameni, sens", en: "Roads, people, meaning", it: "Strade, persone, senso" },
    location: { ro: "România", en: "Romania", it: "Romania" },
    category: { ro: "Journey", en: "Journey", it: "Journey" },
    image: "/brand/journey-urban-1.png",
    text: {
      ro: "Inima media a GIUVA: povești scurte, oameni reali, drumuri documentate și momente comune.",
      en: "GIUVA’s media heart: short stories, real people, documented roads and shared moments.",
      it: "Il cuore media di GIUVA: storie brevi, persone reali, strade documentate e momenti comuni."
    }
  },
  {
    title: { ro: "Zi de training", en: "Training day", it: "Giornata di training" },
    location: { ro: "Eveniment partener viitor", en: "Future partner event", it: "Evento partner futuro" },
    category: { ro: "Volunteer story", en: "Volunteer story", it: "Storia volontario" },
    image: "/brand/journey-urban-2.png",
    text: {
      ro: "Spațiu viitor pentru rapoarte de training, certificate, galerii și educație publică.",
      en: "Future space for training reports, certificates, galleries and public education.",
      it: "Spazio futuro per report training, certificati, gallerie ed educazione pubblica."
    }
  },
  {
    title: { ro: "Community ride", en: "Community ride", it: "Community ride" },
    location: { ro: "Rută locală", en: "Local route", it: "Percorso locale" },
    category: { ro: "Awareness", en: "Awareness", it: "Sensibilizzazione" },
    image: "/brand/journey-urban-3.png",
    text: {
      ro: "Model pentru charity rides, opriri la parteneri, captions și vizibilitate pentru sponsori.",
      en: "A model for charity rides, partner stops, captions and sponsor visibility.",
      it: "Un modello per charity ride, soste da partner, didascalie e visibilità sponsor."
    }
  }
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
    name: "Fii Pregătit",
    badge: "DSU",
    href: "https://fiipregatit.ro/harta",
    note: "Hartă publică și resurse de pregătire."
  },
  {
    name: "Salvează o viață",
    badge: "AED",
    href: "https://salveaza-o-viata.ro/",
    note: "Resursă publică despre defibrilatoare."
  }
];

export const contactChannels = [
  { label: "General", value: "info@giuva.ro", icon: Mail },
  { label: "Media", value: "media@giuva.ro", icon: Camera },
  { label: "Partnerships", value: "partnerships@giuva.ro", icon: HandHeart },
  { label: "Volunteers", value: "volunteers@giuva.ro", icon: Users },
  { label: "Project Pulse", value: "projectpulse@giuva.ro", icon: HeartPulse }
];

export const contentModels = ["story", "gallery", "event", "campaign", "volunteer story", "partner profile"];

export const operationalPages = [
  { title: "What is GIUVA", href: "/media", icon: BookOpen },
  { title: "Community resilience", href: "/civil-response", icon: ShieldCheck },
  { title: "AED awareness", href: "/project-pulse", icon: HeartPulse },
  { title: "Volunteer mobility", href: "/riders-rescue", icon: Bike },
  { title: "Charity rides", href: "/community", icon: CalendarDays },
  { title: "Journey stories", href: "/journey", icon: Camera }
];
