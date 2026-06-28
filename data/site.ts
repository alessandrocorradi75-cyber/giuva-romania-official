import {
  Bike,
  BookOpen,
  Building2,
  Coffee,
  GraduationCap,
  HandHeart,
  HeartPulse,
  HelpCircle,
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
  "voluntariat România",
  "comunitate",
  "voluntari",
  "AED",
  "educație civică",
  "pregătire comunitară",
  "proiect european de voluntariat",
  "reziliență comunitară",
  "cultura prevenției"
];

export const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre" },
  { href: "/discipline", label: "Discipline" },
  { href: "/giuva-network", label: "Rețea" },
  { href: "/transparenta", label: "Transparență" },
  { href: "/resurse-institutionale", label: "Resurse" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/publicatii", label: "Publicații" },
  { href: "/download-center", label: "Download" },
  { href: "/faq", label: "FAQ" },
  { href: "/giuva-ai", label: "GIUVA AI" },
  { href: "/voluntari", label: "Voluntari" },
  { href: "/partner", label: "Parteneri" },
  { href: "/contact", label: "Contact" }
];

export const ctas = {
  volunteer: { label: "Devino voluntar", href: "/voluntari" },
  chapter: { label: "Deschide o comunitate GIUVA", href: "/deschide-o-sediu" },
  secretariat: { label: "Contactează secretariatul", href: "/contact" },
  partner: { label: "Propune un parteneriat", href: "/partner" },
  donate: { label: "Susține proiectul", href: "/sustine" },
  ai: { label: "Deschide GIUVA AI", href: "/giuva-ai" }
};

export const projectStatus =
  "Rețea civică în construcție, proiect pilot și structură în așteptare de formalizare progresivă.";

export const associationFacts = [
  {
    title: "Cine suntem",
    text: "O inițiativă civică românească cu deschidere europeană, construită pentru voluntariat responsabil, educație civică și pregătire comunitară."
  },
  {
    title: "Ce facem",
    text: "Conectăm oameni, comunități și viitori parteneri prin activități civice, formative, sociale, de prevenție și awareness AED."
  },
  {
    title: "Cum participi",
    text: "Poți deveni voluntar, poți deschide o comunitate locală, poți propune un parteneriat sau poți susține Project Pulse."
  },
  {
    title: "De ce să ai încredere",
    text: "GIUVA comunică prudent, separă clar rolul civic de instituțiile publice și construiește transparență înainte de fundraising."
  }
];

export const missionBlocks = [
  {
    title: "Mission",
    text: "Crearea unei rețele civice moderne care sprijină comunitățile prin educație, prevenție, voluntariat responsabil și cooperare instituțională."
  },
  {
    title: "Vision",
    text: "Construirea unei platforme europene descentralizate dedicate rezilienței urbane și comunitare, pornind din România."
  },
  {
    title: "Core Values",
    text: "Viața umană înainte de toate, solidaritate, profesionalism, transparență, neutralitate, umanitate și responsabilitate civică."
  },
  {
    title: "European Principles",
    text: "Legalitate, democrație, drepturi fundamentale, anti-discriminare, safeguarding, accountability și cooperare responsabilă."
  }
];

export const portalStats = [
  { label: "Discipline", value: "9", detail: "arii civice GIUVA", icon: Network },
  { label: "Țări", value: "6", detail: "România, Italia și roadmap UE", icon: Map },
  { label: "Voluntari", value: "0+", detail: "în onboarding viitor", icon: Users },
  { label: "Parteneri", value: "0", detail: "doar după formalizare", icon: Building2 },
  { label: "Proiecte", value: "3", detail: "pilot, awareness, community", icon: Sparkles }
];

export const giuvaToday = [
  "proiect/asociație în faza de constituire și consolidare",
  "identitate civică definită",
  "prime comunități locale în dezvoltare",
  "formulare pregătite pentru voluntari și filiale",
  "cadru prudent pentru activități civice și formative"
];

export const giuvaTomorrow = [
  "rețea națională în România",
  "filiale locale în mai multe orașe",
  "voluntari formați prin parteneri autorizați",
  "parteneriate formalizate doar după validare legală",
  "extindere europeană treptată"
];

export const values = [
  "solidaritate",
  "incluziune",
  "responsabilitate civică",
  "pregătire",
  "cooperare",
  "transparență",
  "impact măsurabil"
];

export const europeanNetwork = [
  { label: "GIUVA România", domain: "giuva.ro", href: "https://www.giuva.ro", status: "În dezvoltare 2026", country: "România", note: "punct de pornire civic și comunitar" },
  { label: "GIUVA Italia", domain: "giuva.it", href: "https://www.giuva.it", status: "În dezvoltare 2026", country: "Italia", note: "comunități autonome, identitate europeană" },
  { label: "GIUVA Spania", domain: "giuva.es", href: "/contact", status: "În dezvoltare 2027", country: "Spania", note: "roadmap pentru voluntariat urban" },
  { label: "GIUVA Austria", domain: "giuva.at", href: "/contact", status: "Planificat 2027", country: "Austria", note: "cooperare europeană planificată" },
  { label: "GIUVA Ungaria", domain: "giuva.hu", href: "/contact", status: "Planificat 2028", country: "Ungaria", note: "dezvoltare graduală" },
  { label: "GIUVA Europe", domain: "giuva.eu", href: "/contact", status: "În dezvoltare", country: "Europa", note: "cadru comun de valori, transparență și impact" }
];

export const disciplines = [
  {
    slug: "community-social",
    name: "Community & Social",
    color: "verde",
    accent: "bg-[#18865B]",
    border: "border-[#18865B]",
    image: "/brand/community-manifesto-2.webp",
    icon: Users,
    description:
      "Acțiuni comunitare, socializare, sprijin local, incluziune și evenimente deschise oamenilor cu valori comune.",
    mission: "Să creeze spații sigure și prietenoase pentru implicare civică, socializare și sprijin comunitar.",
    activities: ["întâlniri comunitare", "charity rides", "activități sociale", "sprijin local", "evenimente intergeneraționale"],
    faq: [
      { question: "Este un club închis?", answer: "Nu. Community & Social este gândit ca spațiu deschis, incluziv și orientat către oameni." },
      { question: "Pot participa fără experiență?", answer: "Da. Activitățile sunt civice și comunitare, cu roluri adaptate disponibilității fiecărei persoane." }
    ],
    documents: ["Cod Etic", "Safeguarding", "Ghid voluntari"],
    relatedNews: ["community-pilot"]
  },
  {
    slug: "riders-rescue",
    name: "Riders Rescue",
    color: "albastru navy",
    accent: "bg-[#0B2A4A]",
    border: "border-[#0B2A4A]",
    image: "/brand/riders-rescue-support.webp",
    icon: Bike,
    description:
      "Pilon în dezvoltare pentru voluntari mobili, awareness AED, educație de prim ajutor și suport civic complementar.",
    mission: "Să promoveze mobilitatea civică responsabilă, cultura AED și pregătirea comunitară, fără a înlocui serviciile publice.",
    activities: ["awareness AED", "educație prim ajutor", "suport la evenimente", "mobilitate civică", "cooperare doar prin cadre autorizate"],
    faq: [
      { question: "GIUVA intervine ca serviciu de urgență?", answer: "Nu. GIUVA nu înlocuiește 112, SMURD, poliția, pompierii sau instituțiile statului." },
      { question: "Când pot fi folosite resursele mobile?", answer: "Numai în activități civice, formative sau prin protocoale oficiale viitoare, în limitele legii." }
    ],
    documents: ["Cod Etic", "Politică safety", "Principii AED awareness"],
    relatedNews: ["riders-rescue-aed-awareness"]
  },
  {
    slug: "civil-support",
    name: "Civil Support",
    color: "portocaliu",
    accent: "bg-[#F97316]",
    border: "border-[#F97316]",
    image: "/brand/civil-response-scene.webp",
    icon: Radio,
    description:
      "Suport civic și logistic pentru activități comunitare, evenimente locale și proiecte pilot, numai în limitele legii.",
    mission: "Să susțină prevenția, pregătirea civică și cooperarea instituțională, fără caracter operativ autonom.",
    activities: ["prevenție", "informare publică", "sprijin logistic", "evenimente locale", "pregătire comunitară"],
    faq: [
      { question: "Este protecție civilă oficială?", answer: "Nu. Este o componentă civică de suport complementar, în dezvoltare." },
      { question: "Poate acționa independent?", answer: "Nu. Orice cooperare instituțională se face doar formal, legal și documentat." }
    ],
    documents: ["Principii de cooperare", "Safeguarding", "Transparență"],
    relatedNews: ["giuva-romania-in-dezvoltare"]
  },
  {
    slug: "preparedness",
    name: "Preparedness",
    color: "galben",
    accent: "bg-[#F2C94C]",
    border: "border-[#F2C94C]",
    image: "/brand/civil-response-protocol.webp",
    icon: ShieldCheck,
    description:
      "Educație civică, pregătire comunitară, cultura prevenției, informare publică și comportamente responsabile.",
    mission: "Să transforme prevenția într-o cultură publică accesibilă pentru tineri, familii, seniori și comunități locale.",
    activities: ["pregătire civică", "ateliere awareness", "resurse publice", "educație AED", "prevenție"],
    faq: [
      { question: "Se emit certificate?", answer: "Nu în această etapă, cu excepția unor programe viitoare prin parteneri autorizați." },
      { question: "Este potrivit pentru școli și comunități?", answer: "Da, conținutul este gândit pentru educație, prevenție și implicare civică." }
    ],
    documents: ["Ghid public", "Resurse instituționale", "Politică educațională"],
    relatedNews: ["giuva-romania-in-dezvoltare"]
  },
  {
    slug: "journey",
    name: "Journey",
    color: "verde deschis",
    accent: "bg-[#16825d]",
    border: "border-[#16825d]",
    image: "/brand/journey-urban-1.webp",
    icon: Map,
    description:
      "Povești, fotografie, călătorii responsabile, memorie comunitară și promovarea locurilor printr-o perspectivă umană.",
    mission: "Să documenteze drumuri, oameni și momente care construiesc memorie colectivă și awareness comunitar.",
    activities: ["fotografie", "storytelling", "galerii", "rapoarte vizuale", "campanii awareness"],
    faq: [
      { question: "Journey este media oficială?", answer: "Este componenta narativă GIUVA pentru documentare, povești și vizibilitate comunitară." },
      { question: "Pot trimite o poveste?", answer: "Da, prin formularul de contact sau prin viitorul sistem content driven." }
    ],
    documents: ["Ghid media", "Consimțământ imagine", "Cod Etic"],
    relatedNews: ["community-pilot"]
  },
  {
    slug: "project-pulse",
    name: "Project Pulse",
    color: "maro civic",
    accent: "bg-[#8B5E34]",
    border: "border-[#8B5E34]",
    image: "/brand/project-pulse-scene.webp",
    icon: HeartPulse,
    description:
      "Fundraising viitor, campanii transparente, CSR, proiecte europene și raportare de impact după formalizarea cadrului legal.",
    mission: "Să pregătească un model transparent de susținere pentru AED, educație, logistică și proiecte comunitare.",
    activities: ["campanii AED", "sponsorizări", "CSR", "raportare KPI", "transparență financiară"],
    faq: [
      { question: "Se colectează donații acum?", answer: "Doar după activarea cadrului legal și a mecanismelor oficiale de plată." },
      { question: "Cum se comunică impactul?", answer: "Prin rapoarte publice, KPI, campanii documentate și rezultate verificabile." }
    ],
    documents: ["Principii fundraising", "KPI & Impact", "Transparență financiară"],
    relatedNews: ["giuva-romania-in-dezvoltare"]
  },
  {
    slug: "academy",
    name: "Academy",
    color: "violet",
    accent: "bg-[#7C3AED]",
    border: "border-[#7C3AED]",
    image: "/brand/community-manifesto-1.webp",
    icon: GraduationCap,
    description:
      "Componentă educațională viitoare pentru workshopuri, proceduri civice, wellbeing voluntari și creșterea competențelor.",
    mission: "Să ofere un cadru educațional pentru voluntariat responsabil, leadership civic și cultură preventivă.",
    activities: ["ateliere", "first aid awareness", "AED awareness", "leadership civic", "wellbeing voluntari"],
    faq: [
      { question: "Academy este activă?", answer: "Este pregătită ca direcție pentru Release 1.0 și programe viitoare." },
      { question: "Cine poate participa?", answer: "Voluntari, comunități, tineri, seniori și viitori parteneri educaționali." }
    ],
    documents: ["Program educațional", "Cod Etic", "Safeguarding"],
    relatedNews: ["giuva-romania-in-dezvoltare"]
  },
  {
    slug: "youth",
    name: "Youth",
    color: "turcoaz",
    accent: "bg-[#0891B2]",
    border: "border-[#0891B2]",
    image: "/brand/community-manifesto-3.webp",
    icon: Sparkles,
    description:
      "Implicarea tinerilor, cetățenie activă, leadership civic și proiecte educaționale locale.",
    mission: "Să ofere tinerilor un cadru pozitiv pentru implicare civică, educație și proiecte cu impact real.",
    activities: ["voluntariat tineri", "educație civică", "proiecte locale", "comunicare", "leadership"],
    faq: [
      { question: "Este potrivit pentru liceeni și studenți?", answer: "Da, cu respectarea regulilor de safeguarding și a cadrului legal aplicabil." },
      { question: "Există activități online?", answer: "Da, în roadmap sunt prevăzute resurse digitale și programe educaționale." }
    ],
    documents: ["Safeguarding", "Cod Etic", "Ghid voluntari"],
    relatedNews: ["community-pilot"]
  },
  {
    slug: "senior-network",
    name: "Senior Network",
    color: "burgundy",
    accent: "bg-[#7F1D1D]",
    border: "border-[#7F1D1D]",
    image: "/brand/journey-urban-3.webp",
    icon: HandHeart,
    description:
      "Participarea activă a seniorilor, transfer de experiență și sprijin intergenerațional.",
    mission: "Să transforme experiența seniorilor într-o resursă comunitară pentru mentorat, solidaritate și memorie locală.",
    activities: ["mentorat", "sprijin intergenerațional", "povești locale", "incluziune", "participare civică"],
    faq: [
      { question: "Seniorii pot avea rol activ?", answer: "Da. Rețeaua pune accent pe experiență, respect și participare adaptată." },
      { question: "Există activități fizice obligatorii?", answer: "Nu. Rolurile sunt adaptate capacității și preferințelor fiecărei persoane." }
    ],
    documents: ["Safeguarding", "Ghid comunitate", "Cod Etic"],
    relatedNews: ["community-pilot"]
  }
];

export const communities = [
  "GIUVA Community București",
  "GIUVA Community Oradea",
  "viitoare orașe din România",
  "viitoare comunități europene"
];

export const partnerAreas = [
  "parteneriate în așteptare de formalizare",
  "sponsorizări viitoare",
  "CSR",
  "donații materiale",
  "sprijin AED",
  "proiecte locale",
  "proiecte europene"
];

export const donationOptions = [
  "donație economică viitoare",
  "sponsorizare AED",
  "materiale",
  "formare",
  "suport logistic",
  "spații",
  "parteneriate"
];

export const news = [
  {
    slug: "giuva-romania-in-dezvoltare",
    title: "GIUVA Romania: rețea civică în dezvoltare",
    date: "2026-06-25",
    category: "Institutional",
    excerpt:
      "GIUVA Romania pregătește o platformă civică pentru voluntariat urban, educație, pregătire comunitară și cultura prevenției."
  },
  {
    slug: "community-pilot",
    title: "Community: proiect pilot pentru comunități locale",
    date: "2026-06-25",
    category: "Community",
    excerpt:
      "O comunitate poate începe simplu: oameni, conversații locale, valori comune și activități civice responsabile."
  },
  {
    slug: "riders-rescue-aed-awareness",
    title: "Riders Rescue: awareness AED și educație civică",
    date: "2026-06-25",
    category: "Riders Rescue",
    excerpt:
      "Pilon în dezvoltare pentru awareness AED, prevenție și suport comunitar complementar."
  }
];

export const contactEmails = [
  { label: "Secretariat", value: "info@giuva.ro", icon: Mail },
  { label: "Voluntari", value: "volunteers@giuva.ro", icon: Users },
  { label: "Parteneriate", value: "partnerships@giuva.ro", icon: Building2 },
  { label: "Project Pulse", value: "fundraising@giuva.ro", icon: HeartPulse }
];

export const socialChannels = {
  official: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/giuva/?viewAsMember=true", status: "oficial" },
    { label: "Facebook", href: "https://www.facebook.com/GIUVACommunity", status: "oficial" },
    { label: "Instagram", href: "https://www.instagram.com/giuva.ro", status: "în dezvoltare" },
    { label: "TikTok", href: "https://www.tiktok.com/@giuva.ro", status: "în dezvoltare" },
    { label: "YouTube", href: "https://www.youtube.com/@GIUVACommunity", status: "în dezvoltare" }
  ],
  future: [
    { label: "Threads", href: "/contact", status: "placeholder" },
    { label: "WhatsApp Channel", href: "/contact", status: "future" },
    { label: "Telegram", href: "/contact", status: "future" },
    { label: "Roblox", href: "/giuva-ai", status: "roadmap educațional" }
  ]
};

export const socialLinks = socialChannels.official.slice(0, 2);

export const volunteerFields = [
  { name: "prenume", label: "Prenume", type: "text", required: true },
  { name: "nume", label: "Nume", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
  { name: "oras", label: "Oraș", type: "text", required: true },
  { name: "tara", label: "Țara", type: "text", required: true }
];

export const disciplineOptions = [...disciplines.map((discipline) => discipline.name), "Nu știu încă"];

export const availabilityOptions = [
  "Câteva ore pe lună",
  "O zi pe lună",
  "Disponibilitate săptămânală",
  "Doar activități specifice",
  "De evaluat"
];

export const chapterFields = [
  { name: "prenume", label: "Prenume", type: "text", required: true },
  { name: "nume", label: "Nume", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
  { name: "oras", label: "Oraș propus", type: "text", required: true },
  { name: "tara", label: "Țara", type: "text", required: true }
];

export const contactFormFields = [
  { name: "nume", label: "Nume", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telefon", label: "Telefon opțional", type: "tel", required: false },
  { name: "subiect", label: "Subiect", type: "text", required: true }
];

export const languageRoadmap = [
  { code: "RO", label: "Română", status: "principală" },
  { code: "EN", label: "English", status: "secondary" }
];

export const formReadiness = [
  "nu trimite email în această versiune publică",
  "nu salvează încă într-o bază de date reală",
  "pregătit pentru export date voluntari în integrarea viitoare",
  "consimțământ privacy vizibil și obligatoriu",
  "mesaj de confirmare local pentru verificarea formularului"
];

export const pillars = disciplines.slice(0, 5).map((discipline) => ({
  title: discipline.name,
  href: `/discipline/${discipline.slug}`,
  icon: discipline.icon,
  byline: "GIUVA Romania",
  text: discipline.description
}));

export const journeyStories = [
  {
    title: "GIUVA Journey",
    location: "România / Europa",
    category: "Journey",
    image: "/brand/journey-urban-1.webp",
    text: "Călătorii responsabile, povești scurte și conexiuni între comunități."
  }
];

export const partnerCategories = partnerAreas;

export const projectPulseMetrics = [
  { label: "Campanii active", value: "0", icon: HeartPulse },
  { label: "AED susținute", value: "0", icon: HeartPulse },
  { label: "Parteneriate formalizate", value: "0", icon: Building2 },
  { label: "Comunități în dezvoltare", value: "2", icon: Users }
];

export const roadmap = [
  "identitate GIUVA Romania",
  "prime comunități locale",
  "onboarding voluntari",
  "cadru de parteneriate",
  "Project Pulse",
  "GIUVA Europe"
];

export const operationalPages = [
  { title: "Despre", href: "/despre", icon: BookOpen },
  { title: "Discipline", href: "/discipline", icon: Network },
  { title: "Riders Rescue", href: "/discipline/riders-rescue", icon: Bike },
  { title: "Community", href: "/discipline/community-social", icon: Coffee },
  { title: "Parteneri", href: "/partner", icon: Building2 },
  { title: "Noutăți", href: "/news", icon: BookOpen }
];

export const giuvaAiTopics = [
  { title: "Devino voluntar", href: "/voluntari", icon: Users },
  { title: "Deschide o sediu", href: "/deschide-o-sediu", icon: Building2 },
  { title: "Colaborează", href: "/partner", icon: HandHeart },
  { title: "Media", href: "/media", icon: BookOpen },
  { title: "Academy", href: "/discipline/academy", icon: GraduationCap },
  { title: "Funding", href: "/sustine", icon: HeartPulse },
  { title: "Europa", href: "/giuva-network", icon: Map },
  { title: "FAQ", href: "/giuva-ai", icon: HelpCircle }
];

export const institutionalResources = [
  {
    group: "România",
    items: [
      { label: "112 România", href: "https://www.112.ro/", note: "portal public pentru numărul european de urgență" },
      { label: "Departamentul pentru Situații de Urgență", href: "https://www.dsu.mai.gov.ro/", note: "resursă publică oficială" },
      { label: "Inspectoratul General pentru Situații de Urgență", href: "https://www.igsu.ro/", note: "resursă publică oficială" },
      { label: "Ministerul Afacerilor Interne", href: "https://www.mai.gov.ro/", note: "minister competent" },
      { label: "Ministerul Sănătății", href: "https://www.ms.ro/", note: "minister competent" },
      { label: "ANPC", href: "https://anpc.ro/", note: "protecția consumatorilor" },
      { label: "Fii Pregătit - hartă", href: "https://fiipregatit.ro/harta", note: "resursă publică de pregătire" },
      { label: "Salvează o viață", href: "https://salveaza-o-viata.ro/", note: "resursă publică AED/prim ajutor" }
    ]
  },
  {
    group: "Uniunea Europeană",
    items: [
      { label: "Comisia Europeană", href: "https://commission.europa.eu/", note: "portal instituțional UE" },
      { label: "European Solidarity Corps", href: "https://youth.europa.eu/solidarity_en", note: "voluntariat și solidaritate europeană" },
      { label: "EU Civil Protection Mechanism", href: "https://civil-protection-humanitarian-aid.ec.europa.eu/what/civil-protection/eu-civil-protection-mechanism_en", note: "mecanism european de protecție civilă" },
      { label: "EU Funding & Tenders", href: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home", note: "portal oficial granturi și licitații" },
      { label: "CORDIS", href: "https://cordis.europa.eu/", note: "proiecte și rezultate cercetare UE" }
    ]
  },
  {
    group: "Organizații internaționale",
    items: [
      { label: "European Resuscitation Council", href: "https://www.erc.edu/", note: "resursă educațională internațională" },
      { label: "International Federation of Red Cross and Red Crescent Societies", href: "https://www.ifrc.org/", note: "organizație umanitară internațională" }
    ]
  }
];

export const transparencyDocuments = [
  { title: "Statut", text: "Document public după finalizarea formalizării juridice.", href: "/contact" },
  { title: "Act Constitutiv", text: "Document disponibil după constituirea finală.", href: "/contact" },
  { title: "Cod Etic", text: "Principii de integritate, neutralitate și responsabilitate publică.", href: "/contact" },
  { title: "Safeguarding", text: "Protecția persoanelor vulnerabile și participarea sigură.", href: "/contact" },
  { title: "Privacy", text: "Politica privind protecția datelor personale.", href: "/privacy-policy" },
  { title: "Cookie Policy", text: "Informații despre cookie-uri și tehnologii similare.", href: "/cookie-policy" },
  { title: "Governance", text: "Roluri, responsabilități și principii de conducere.", href: "/guvernanta" },
  { title: "Documente", text: "Hub pentru documentele publice GIUVA.", href: "/transparenta" }
];

export const governanceRoles = [
  { role: "Președinte", status: "în curs de formalizare", responsibility: "reprezentare strategică și guvernanță civică" },
  { role: "Vicepreședinte", status: "în curs de formalizare", responsibility: "coordonare programe și comunități" },
  { role: "Secretar General", status: "în curs de formalizare", responsibility: "secretariat, documente și fluxuri administrative" },
  { role: "Consiliu Director", status: "în curs de formalizare", responsibility: "decizii instituționale și supraveghere" },
  { role: "Coordonatori Naționali", status: "roadmap", responsibility: "dezvoltare comunități și discipline" }
];

export const newsCenter = [
  {
    slug: "giuva-romania-in-dezvoltare",
    title: "GIUVA Romania: rețea civică în dezvoltare",
    date: "2026-06-25",
    category: "Institutional",
    discipline: "Governance",
    country: "România",
    author: "Secretariat GIUVA",
    tags: ["transparență", "voluntariat", "Europa"],
    image: "/brand/giuva-romania-disciplines-flag.webp",
    excerpt: "GIUVA Romania pregătește o platformă civică pentru voluntariat urban, educație, pregătire comunitară și cultura prevenției.",
    cta: "Citește actualizarea"
  },
  {
    slug: "community-pilot",
    title: "Community: proiect pilot pentru comunități locale",
    date: "2026-06-25",
    category: "Community",
    discipline: "Community & Social",
    country: "România",
    author: "Community Desk",
    tags: ["comunitate", "incluziune", "social"],
    image: "/brand/community-manifesto-2.webp",
    excerpt: "O comunitate poate începe simplu: oameni, conversații locale, valori comune și activități civice responsabile.",
    cta: "Vezi detalii"
  },
  {
    slug: "riders-rescue-aed-awareness",
    title: "Riders Rescue: awareness AED și educație civică",
    date: "2026-06-25",
    category: "Riders Rescue",
    discipline: "Riders Rescue",
    country: "România",
    author: "AED Awareness Desk",
    tags: ["AED", "prevenție", "educație"],
    image: "/brand/riders-rescue-support.webp",
    excerpt: "Pilon în dezvoltare pentru awareness AED, prevenție și suport comunitar complementar.",
    cta: "Citește actualizarea"
  }
];

export const eventGroups = {
  upcoming: [
    { title: "Community Introduction Day", status: "Upcoming", date: "Roadmap 2026", organizer: "GIUVA Romania", location: "București / online", cta: "Anunță interes", href: "/contact" },
    { title: "AED Awareness Session", status: "Upcoming", date: "Roadmap 2026", organizer: "Academy Desk", location: "Hibrid", cta: "Urmărește noutăți", href: "/news" },
    { title: "GIUVA Network Briefing", status: "Upcoming", date: "Roadmap 2026", organizer: "European Desk", location: "Online", cta: "Vezi rețeaua", href: "/giuva-network" }
  ],
  past: [
    { title: "Identity & Portal Review", status: "Past", date: "June 2026", organizer: "GIUVA Romania", location: "Digital", cta: "Vezi transparența", href: "/transparenta" }
  ]
};

export const publications = [
  { title: "Annual Report", type: "Annual Report", status: "Roadmap", description: "Raport anual public după primul an operațional documentat.", href: "/transparenta" },
  { title: "Impact Report", type: "Impact Report", status: "Roadmap", description: "Indicatori de impact comunitar, voluntariat, educație și parteneriate formalizate.", href: "/transparenta" },
  { title: "Guidelines", type: "Guidelines", status: "Under Development", description: "Ghiduri publice pentru participare civică, prevenție și comunicare responsabilă.", href: "/resurse-institutionale" },
  { title: "Policies", type: "Policies", status: "Available progressively", description: "Privacy, Cookie, Safeguarding și principii de guvernanță.", href: "/privacy-policy" },
  { title: "Manuals", type: "Manuals", status: "Internal / future", description: "Manualele complete nu sunt publicate până la validare și formalizare.", href: "/contact" },
  { title: "Institutional Documents", type: "Documents", status: "In formalizare", description: "Statut, Act Constitutiv și documente publice după finalizarea cadrului juridic.", href: "/transparenta" }
];

export const downloadItems = [
  { title: "Prezentare instituțională GIUVA", type: "Documentație", status: "Coming Soon", description: "PDF public de prezentare pentru voluntari, parteneri și comunități.", href: "/contact" },
  { title: "Media Kit", type: "Media Kit", status: "Under Development", description: "Pachet media pregătit pentru comunicare publică după validarea materialelor oficiale.", href: "/media" },
  { title: "Brand Assets", type: "Brand Assets", status: "Restricted", description: "Logo-urile oficiale se folosesc doar conform regulilor de brand și cu acord GIUVA.", href: "/contact" },
  { title: "Template parteneriat", type: "Template", status: "Roadmap", description: "Model orientativ pentru discuții, fără valoare juridică până la formalizare.", href: "/partner" },
  { title: "Politici publice", type: "Download", status: "Public pages", description: "Privacy, Cookie, transparență și guvernanță sunt disponibile ca pagini publice.", href: "/transparenta" }
];

export const partnerProfiles = [
  { category: "Institutional", title: "Autorități și instituții publice", text: "Dialog și cooperare doar prin cadre formale, fără a declara parteneriate implicite.", status: "fără logo-uri terțe" },
  { category: "Academic", title: "Universități și școli", text: "Educație civică, awareness AED, voluntariat și proiecte pentru tineri.", status: "în dezvoltare" },
  { category: "NGO", title: "Organizații civice", text: "Cooperare în jurul prevenției, incluziunii, safeguarding și impactului comunitar.", status: "roadmap" },
  { category: "Corporate", title: "Companii & CSR", text: "Sprijin transparent pentru educație, Project Pulse, materiale și inițiative locale.", status: "după formalizare" },
  { category: "Media", title: "Media & Storytelling", text: "Comunicare publică responsabilă, documentare Journey și campanii de awareness.", status: "în dezvoltare" },
  { category: "International", title: "Rețele europene", text: "Direcție europeană, fonduri, schimb de bune practici și proiecte de impact.", status: "roadmap european" }
];

export const faqGroups = [
  {
    title: "Volunteers",
    items: [
      { question: "Cum devin voluntar GIUVA?", answer: "Completezi formularul de interes, alegi o disciplină și vei fi contactat după activarea fluxului oficial de onboarding." },
      { question: "Am nevoie de experiență?", answer: "Nu pentru activități civice generale. Pentru activități sensibile vor fi necesare formări și criterii specifice." }
    ]
  },
  {
    title: "Academy",
    items: [
      { question: "GIUVA Academy emite certificate?", answer: "Nu în Release 1.0. Certificatele vor exista doar prin parteneri autorizați sau programe validate." },
      { question: "Ce teme vor exista?", answer: "First aid awareness, AED awareness, prevenție, comunicare, leadership civic și cooperare instituțională." }
    ]
  },
  {
    title: "Europe",
    items: [
      { question: "GIUVA există în mai multe țări?", answer: "GIUVA Romania este punct de pornire. Alte țări sunt prezentate ca roadmap sau dezvoltare separată, fără parteneriate implicite." },
      { question: "GIUVA Europe este o instituție UE?", answer: "Nu. Este o direcție de dezvoltare civică europeană, nu o instituție publică." }
    ]
  },
  {
    title: "Funding",
    items: [
      { question: "Pot dona acum?", answer: "Mecanismele publice de donație vor fi activate doar după formalizare și validare legală." },
      { question: "Cum va fi raportat impactul?", answer: "Prin KPI, rapoarte de impact, transparență financiară și rezultate documentate." }
    ]
  },
  {
    title: "GIUVA AI",
    items: [
      { question: "GIUVA AI oferă sfaturi medicale sau juridice?", answer: "Nu. Este un asistent de orientare în portal, demonstrativ în Release 1.0." },
      { question: "Poate prelua cereri operative?", answer: "Nu. GIUVA AI nu este sistem de dispatch, urgență sau intervenție." }
    ]
  },
  {
    title: "Privacy",
    items: [
      { question: "Formularele trimit date reale?", answer: "În Release 1.0 formularele validează local și sunt pregătite pentru integrare viitoare." },
      { question: "Este necesar consimțământ GDPR?", answer: "Da, consimțământul privacy este vizibil și obligatoriu în formulare." }
    ]
  },
  {
    title: "Network",
    items: [
      { question: "Pot deschide o comunitate locală?", answer: "Da, poți trimite interes prin formularul dedicat. Deschiderea se face doar după validare internă." },
      { question: "Există sedii oficiale?", answer: "Doar cele formalizate vor fi publicate ca atare. Restul sunt direcții de dezvoltare." }
    ]
  },
  {
    title: "Donations",
    items: [
      { question: "Ce este Project Pulse?", answer: "Componenta viitoare de fundraising transparent pentru AED, educație, logistică și proiecte comunitare." },
      { question: "Se publică destinația fondurilor?", answer: "Da, obiectivul este trasabilitate publică, campanii clare și raportare de impact." }
    ]
  }
];

export const portalSearchItems = [
  { title: "Devino voluntar", category: "Volunteers", href: "/voluntari", keywords: ["onboarding", "formular", "discipline"] },
  { title: "Discipline GIUVA", category: "Programmes", href: "/discipline", keywords: ["community", "riders", "academy", "youth"] },
  { title: "GIUVA AI", category: "Assistant", href: "/giuva-ai", keywords: ["faq", "assistant", "orientare"] },
  { title: "Transparență", category: "Governance", href: "/transparenta", keywords: ["documente", "privacy", "statut"] },
  { title: "Resurse instituționale", category: "Resources", href: "/resurse-institutionale", keywords: ["112", "DSU", "UE", "AED"] },
  { title: "Download Center", category: "Downloads", href: "/download-center", keywords: ["media kit", "brand", "template"] },
  { title: "FAQ Center", category: "Support", href: "/faq", keywords: ["întrebări", "privacy", "donations"] }
];

