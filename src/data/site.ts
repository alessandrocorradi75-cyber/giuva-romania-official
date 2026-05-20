import {
  Activity,
  BadgeCheck,
  Bike,
  BookOpen,
  Building2,
  CalendarDays,
  Camera,
  FileText,
  HandHeart,
  HeartPulse,
  Mail,
  Map,
  Radio,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";
import type { Locale } from "@/i18n/config";

export type LanguageCode = Locale;
export type LocalizedText = { ro: string } & Partial<Record<Locale, string>>;

export const languageOptions: { code: Locale; label: string }[] = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "hu", label: "Magyar" },
  { code: "sr", label: "Srpski" },
  { code: "hr", label: "Hrvatski" }
];

export const brand = {
  name: "GIUVA.RO",
  email: "contact@giuva.ro",
  tagline: {
    ro: "Platformă europeană de reziliență civică",
    en: "European civic resilience platform",
    it: "Piattaforma europea di resilienza civica",
    de: "Europäische Plattform für zivile Resilienz",
    fr: "Plateforme européenne de résilience civique",
    hu: "Európai polgári reziliencia platform",
    sr: "Evropska platforma građanske otpornosti",
    hr: "Europska platforma građanske otpornosti"
  },
  description: {
    ro: "GIUVA este o platformă europeană de reziliență civică pentru voluntariat, pregătire publică, rețele AED/DEA, sprijin comunitar și cooperare instituțională.",
    en: "GIUVA is a European civic resilience platform for volunteering, public preparedness, AED networks, community support and institutional cooperation.",
    it: "GIUVA è una piattaforma europea di resilienza civica per volontariato, preparazione pubblica, reti AED/DEA, supporto comunitario e cooperazione istituzionale.",
    de: "GIUVA ist eine europäische Plattform für zivile Resilienz, Freiwilligenarbeit, öffentliche Vorsorge, AED-Netzwerke, Gemeindehilfe und institutionelle Zusammenarbeit.",
    fr: "GIUVA est une plateforme européenne de résilience civique pour le bénévolat, la préparation publique, les réseaux DAE, le soutien communautaire et la coopération institutionnelle.",
    hu: "A GIUVA európai polgári reziliencia platform az önkéntesség, a közfelkészültség, az AED-hálózatok, a közösségi támogatás és az intézményi együttműködés számára.",
    sr: "GIUVA je evropska platforma građanske otpornosti za volontiranje, javnu pripremljenost, AED mreže, podršku zajednici i institucionalnu saradnju.",
    hr: "GIUVA je europska platforma građanske otpornosti za volontiranje, javnu pripravnost, AED mreže, podršku zajednici i institucionalnu suradnju."
  }
};

export const navItems = [
  { href: "/", label: { ro: "Acasă", en: "Home", it: "Home", de: "Start", fr: "Accueil", hu: "Főoldal", sr: "Početna", hr: "Početna" } },
  { href: "/riders-rescue", label: { ro: "Riders Rescue", en: "Riders Rescue", it: "Riders Rescue", de: "Riders Rescue", fr: "Riders Rescue", hu: "Riders Rescue", sr: "Riders Rescue", hr: "Riders Rescue" } },
  { href: "/community", label: { ro: "Community", en: "Community", it: "Community", de: "Community", fr: "Community", hu: "Community", sr: "Community", hr: "Community" } },
  { href: "/journey", label: { ro: "Journey", en: "Journey", it: "Journey", de: "Journey", fr: "Journey", hu: "Journey", sr: "Journey", hr: "Journey" } },
  { href: "/project-pulse", label: { ro: "Project Pulse", en: "Project Pulse", it: "Project Pulse", de: "Project Pulse", fr: "Project Pulse", hu: "Project Pulse", sr: "Project Pulse", hr: "Project Pulse" } },
  { href: "/civil-response", label: { ro: "Civil Response", en: "Civil Response", it: "Civil Response", de: "Civil Response", fr: "Civil Response", hu: "Civil Response", sr: "Civil Response", hr: "Civil Response" } },
  { href: "/partners", label: { ro: "Parteneri", en: "Partners", it: "Partner", de: "Partner", fr: "Partenaires", hu: "Partnerek", sr: "Partneri", hr: "Partneri" } },
  { href: "/about", label: { ro: "Despre GIUVA", en: "About", it: "Chi siamo", de: "Über GIUVA", fr: "À propos", hu: "Rólunk", sr: "O nama", hr: "O nama" } },
  { href: "/transparency", label: { ro: "Transparență", en: "Transparency", it: "Trasparenza", de: "Transparenz", fr: "Transparence", hu: "Átláthatóság", sr: "Transparentnost", hr: "Transparentnost" } },
  { href: "/impact", label: { ro: "Impact", en: "Impact", it: "Impatto", de: "Wirkung", fr: "Impact", hu: "Hatás", sr: "Uticaj", hr: "Utjecaj" } },
  { href: "/civic-availability", label: { ro: "Availability Network", en: "Availability Network", it: "Availability Network", de: "Availability Network", fr: "Availability Network", hu: "Availability Network", sr: "Availability Network", hr: "Availability Network" } },
  { href: "/contact", label: { ro: "Contact", en: "Contact", it: "Contatto", de: "Kontakt", fr: "Contact", hu: "Kapcsolat", sr: "Kontakt", hr: "Kontakt" } }
];

export const homeCopy = {
  heroEyebrow: {
    ro: "Reziliență civică. Voluntariat. Pregătire publică.",
    en: "Civic resilience. Volunteering. Public preparedness.",
    it: "Resilienza civica. Volontariato. Preparazione pubblica.",
    de: "Zivile Resilienz. Freiwillige. Öffentliche Vorsorge.",
    fr: "Résilience civique. Bénévolat. Préparation publique.",
    hu: "Polgári reziliencia. Önkéntesség. Közfelkészültség.",
    sr: "Građanska otpornost. Volontiranje. Javna pripremljenost.",
    hr: "Građanska otpornost. Volontiranje. Javna pripravnost."
  },
  heroTitle: {
    ro: "O platformă civică europeană pentru comunități pregătite.",
    en: "A European civic platform for prepared communities.",
    it: "Una piattaforma civica europea per comunità preparate.",
    de: "Eine europäische Bürgerplattform für vorbereitete Gemeinschaften.",
    fr: "Une plateforme civique européenne pour des communautés préparées.",
    hu: "Európai civil platform felkészült közösségeknek.",
    sr: "Evropska građanska platforma za pripremljene zajednice.",
    hr: "Europska građanska platforma za pripremljene zajednice."
  },
  heroText: {
    ro: "GIUVA nu este un club moto. GIUVA construiește un ecosistem descentralizat de reziliență civică: voluntari, răspuns rapid, educație de prim ajutor, rețele AED/DEA, sprijin comunitar și cooperare cu autoritățile.",
    en: "GIUVA is not a motorcycle club. GIUVA builds a decentralized civic resilience ecosystem: volunteers, rapid response, first aid education, AED networks, community support and cooperation with authorities.",
    it: "GIUVA non è un motoclub. GIUVA costruisce un ecosistema decentralizzato di resilienza civica: volontari, risposta rapida, educazione al primo soccorso, reti AED, supporto comunitario e cooperazione con le autorità.",
    de: "GIUVA ist kein Motorradclub. GIUVA baut ein dezentrales Ökosystem ziviler Resilienz auf: Freiwillige, schnelle Unterstützung, Erste-Hilfe-Bildung, AED-Netzwerke, Gemeindehilfe und Zusammenarbeit mit Behörden.",
    fr: "GIUVA n’est pas un club moto. GIUVA construit un écosystème décentralisé de résilience civique : bénévoles, réponse rapide, formation aux premiers secours, réseaux DAE, soutien communautaire et coopération avec les autorités.",
    hu: "A GIUVA nem motoros klub. A GIUVA decentralizált polgári reziliencia ökoszisztémát épít: önkéntesek, gyors támogatás, elsősegély-oktatás, AED-hálózatok, közösségi támogatás és együttműködés a hatóságokkal.",
    sr: "GIUVA nije motociklistički klub. GIUVA gradi decentralizovan ekosistem građanske otpornosti: volontere, brzu podršku, edukaciju prve pomoći, AED mreže, podršku zajednici i saradnju sa vlastima.",
    hr: "GIUVA nije moto klub. GIUVA gradi decentralizirani ekosustav građanske otpornosti: volontere, brzu podršku, edukaciju prve pomoći, AED mreže, podršku zajednici i suradnju s vlastima."
  },
  ctaVolunteer: { ro: "Devino voluntar", en: "Become a volunteer", it: "Diventa volontario", de: "Freiwillig werden", fr: "Devenir bénévole", hu: "Legyél önkéntes", sr: "Postani volonter", hr: "Postani volonter" },
  ctaSupport: { ro: "Susține proiectul", en: "Support the project", it: "Sostieni il progetto", de: "Projekt unterstützen", fr: "Soutenir le projet", hu: "Támogasd a projektet", sr: "Podrži projekat", hr: "Podrži projekt" },
  ctaPartners: { ro: "Parteneriate instituționale", en: "Institutional partnerships", it: "Partnership istituzionali", de: "Institutionelle Partnerschaften", fr: "Partenariats institutionnels", hu: "Intézményi partnerségek", sr: "Institucionalna partnerstva", hr: "Institucionalna partnerstva" },
  missionTitle: {
    ro: "Misiune",
    en: "Mission",
    it: "Missione",
    de: "Mission",
    fr: "Mission",
    hu: "Küldetés",
    sr: "Misija",
    hr: "Misija"
  },
  missionText: {
    ro: "Misiunea GIUVA este să transforme solidaritatea în capacitate publică reală: oameni formați, comunități informate, echipamente utile, campanii transparente și cooperare responsabilă cu instituțiile.",
    en: "GIUVA’s mission is to turn solidarity into real public capacity: trained people, informed communities, useful equipment, transparent campaigns and responsible cooperation with institutions.",
    it: "La missione di GIUVA è trasformare la solidarietà in capacità pubblica reale: persone formate, comunità informate, attrezzature utili, campagne trasparenti e cooperazione responsabile con le istituzioni.",
    de: "Die Mission von GIUVA ist es, Solidarität in echte öffentliche Handlungsfähigkeit zu verwandeln: geschulte Menschen, informierte Gemeinschaften, sinnvolle Ausrüstung, transparente Kampagnen und verantwortliche Zusammenarbeit.",
    fr: "La mission de GIUVA est de transformer la solidarité en capacité publique réelle : personnes formées, communautés informées, équipements utiles, campagnes transparentes et coopération responsable.",
    hu: "A GIUVA küldetése, hogy a szolidaritást valódi közösségi kapacitássá alakítsa: képzett emberek, tájékozott közösségek, hasznos eszközök, átlátható kampányok és felelős együttműködés.",
    sr: "Misija GIUVA je da solidarnost pretvori u stvarni javni kapacitet: obučene ljude, informisane zajednice, korisnu opremu, transparentne kampanje i odgovornu saradnju.",
    hr: "Misija GIUVA je pretvoriti solidarnost u stvarni javni kapacitet: obučene ljude, informirane zajednice, korisnu opremu, transparentne kampanje i odgovornu suradnju."
  }
};

export const foundationStatement = {
  label: {
    ro: "European Community Civil Resilience Platform",
    en: "European Community Civil Resilience Platform"
  },
  title: {
    ro: "GIUVA este o infrastructură civică complementară.",
    en: "GIUVA is complementary civic infrastructure."
  },
  paragraphs: [
    {
      ro: "GIUVA este o platformă europeană de reziliență civică și comunitară construită pentru a sprijini comunitățile locale prin voluntariat, educație, pregătire civică, răspuns comunitar rapid și cooperare instituțională.",
      en: "GIUVA is a European civic and community resilience platform built to support local communities through volunteering, education, civic preparedness, rapid community response and institutional cooperation."
    },
    {
      ro: "GIUVA nu înlocuiește instituțiile statului. GIUVA acționează ca infrastructură civică complementară pentru creșterea rezilienței teritoriale și reducerea timpului de răspuns în situații critice.",
      en: "GIUVA does not replace state institutions. GIUVA acts as complementary civic infrastructure to increase territorial resilience and reduce response time in critical situations."
    }
  ]
};

export const strategicDoctrine = [
  {
    title: { ro: "Misiune", en: "Mission" },
    text: {
      ro: "Crearea unei rețele moderne de voluntariat civic capabile să sprijine populația prin educație pentru situații de urgență, formare în prim ajutor, promovarea utilizării defibrilatoarelor AED, sprijin comunitar, pregătire civică și cooperare cu autoritățile.",
      en: "Creating a modern civic volunteer network capable of supporting the population through emergency education, first aid training, AED awareness, community support, civic preparedness and cooperation with authorities."
    }
  },
  {
    title: { ro: "Viziune", en: "Vision" },
    text: {
      ro: "Construirea primei platforme civice europene descentralizate dedicate rezilienței urbane și comunitare.",
      en: "Building the first decentralized European civic platform dedicated to urban and community resilience."
    }
  },
  {
    title: { ro: "Principii operaționale", en: "Operational principles" },
    text: {
      ro: "Cooperare instituțională, suport civic complementar, prevenție, educație, reacție rapidă, voluntariat responsabil, comunicare profesionistă și respectarea legislației naționale și europene.",
      en: "Institutional cooperation, complementary civic support, prevention, education, rapid reaction, responsible volunteering, professional communication and respect for national and European law."
    }
  }
];

export const values = [
  "viața umană înainte de toate",
  "solidaritate",
  "profesionalism",
  "transparență",
  "cooperare",
  "responsabilitate civică",
  "pregătire continuă",
  "respect instituțional",
  "neutralitate",
  "umanitate"
];

export const objectives = [
  "dezvoltarea unei rețele AED",
  "formarea voluntarilor",
  "organizarea de campanii publice",
  "crearea unei academii civice",
  "dezvoltarea unei platforme digitale de coordonare",
  "susținerea comunităților locale",
  "colaborarea cu autoritățile publice",
  "accesarea fondurilor europene",
  "dezvoltarea unei rețele europene GIUVA"
];

export const pillars = [
  {
    slug: "riders-rescue",
    icon: Bike,
    title: { ro: "Riders Rescue", en: "Riders Rescue", it: "Riders Rescue", de: "Riders Rescue", fr: "Riders Rescue", hu: "Riders Rescue", sr: "Riders Rescue", hr: "Riders Rescue" },
    mission: {
      ro: "Răspuns rapid voluntar pe motociclete și scutere.",
      en: "Rapid volunteer response on motorcycles and scooters.",
      it: "Risposta rapida volontaria su motociclette e scooter.",
      de: "Schnelle freiwillige Unterstützung mit Motorrädern und Scootern.",
      fr: "Réponse rapide bénévole à moto et scooter.",
      hu: "Gyors önkéntes reagálás motorokkal és robogókkal.",
      sr: "Brza volonterska podrška motociklima i skuterima.",
      hr: "Brza volonterska podrška motociklima i skuterima."
    },
    purpose: {
      ro: "Mobilitate AED/DEA, suport urban, evenimente publice, prim ajutor și disponibilitate responsabilă în cadrul protocoalelor.",
      en: "AED mobility, urban support, public events, first aid and responsible availability within protocols.",
      it: "Mobilità AED, supporto urbano, eventi pubblici, primo soccorso e disponibilità responsabile entro protocolli.",
      de: "AED-Mobilität, urbane Unterstützung, öffentliche Veranstaltungen, Erste Hilfe und verantwortliche Verfügbarkeit in Protokollen.",
      fr: "Mobilité DAE, soutien urbain, événements publics, premiers secours et disponibilité responsable dans des protocoles.",
      hu: "AED-mobilitás, városi támogatás, nyilvános események, elsősegély és felelős rendelkezésre állás protokollok szerint.",
      sr: "AED mobilnost, urbana podrška, javni događaji, prva pomoć i odgovorna dostupnost po protokolima.",
      hr: "AED mobilnost, urbana podrška, javni događaji, prva pomoć i odgovorna dostupnost prema protokolima."
    }
  },
  {
    slug: "community",
    icon: Users,
    title: { ro: "Community", en: "Community", it: "Community", de: "Community", fr: "Community", hu: "Community", sr: "Community", hr: "Community" },
    mission: {
      ro: "Implicare civică și sprijin comunitar.",
      en: "Civic engagement and community support.",
      it: "Coinvolgimento civico e supporto comunitario.",
      de: "Bürgerliches Engagement und Gemeindehilfe.",
      fr: "Engagement civique et soutien communautaire.",
      hu: "Polgári részvétel és közösségi támogatás.",
      sr: "Građansko uključivanje i podrška zajednici.",
      hr: "Građansko uključivanje i podrška zajednici."
    },
    purpose: {
      ro: "Voluntariat, tineri, inițiative sociale, activități locale, suport umanitar și solidaritate teritorială.",
      en: "Volunteering, youth engagement, social initiatives, local activities, humanitarian support and territorial solidarity.",
      it: "Volontariato, giovani, iniziative sociali, attività locali, supporto umanitario e solidarietà territoriale.",
      de: "Freiwilligenarbeit, Jugend, soziale Initiativen, lokale Aktivitäten, humanitäre Hilfe und territoriale Solidarität.",
      fr: "Bénévolat, jeunesse, initiatives sociales, activités locales, soutien humanitaire et solidarité territoriale.",
      hu: "Önkéntesség, fiatalok, társadalmi kezdeményezések, helyi programok, humanitárius támogatás és területi szolidaritás.",
      sr: "Volontiranje, mladi, društvene inicijative, lokalne aktivnosti, humanitarna podrška i teritorijalna solidarnost.",
      hr: "Volontiranje, mladi, društvene inicijative, lokalne aktivnosti, humanitarna podrška i teritorijalna solidarnost."
    }
  },
  {
    slug: "journey",
    icon: Camera,
    title: { ro: "Journey", en: "Journey", it: "Journey", de: "Journey", fr: "Journey", hu: "Journey", sr: "Journey", hr: "Journey" },
    mission: {
      ro: "Documentare, storytelling și memorie colectivă.",
      en: "Documentation, storytelling and collective memory.",
      it: "Documentazione, storytelling e memoria collettiva.",
      de: "Dokumentation, Storytelling und kollektives Gedächtnis.",
      fr: "Documentation, narration et mémoire collective.",
      hu: "Dokumentáció, történetmesélés és kollektív emlékezet.",
      sr: "Dokumentovanje, priče i kolektivno pamćenje.",
      hr: "Dokumentiranje, priče i kolektivno pamćenje."
    },
    purpose: {
      ro: "Fotografie, rapoarte umanitare, povești reale, campanii de conștientizare și transparență narativă.",
      en: "Photography, humanitarian reports, real stories, awareness campaigns and narrative transparency.",
      it: "Fotografia, report umanitari, storie reali, campagne di sensibilizzazione e trasparenza narrativa.",
      de: "Fotografie, humanitäre Berichte, echte Geschichten, Sensibilisierungskampagnen und narrative Transparenz.",
      fr: "Photographie, rapports humanitaires, histoires réelles, campagnes de sensibilisation et transparence narrative.",
      hu: "Fotózás, humanitárius jelentések, valódi történetek, tudatossági kampányok és narratív átláthatóság.",
      sr: "Fotografija, humanitarni izveštaji, stvarne priče, kampanje svesti i narativna transparentnost.",
      hr: "Fotografija, humanitarni izvještaji, stvarne priče, kampanje svijesti i narativna transparentnost."
    }
  },
  {
    slug: "project-pulse",
    icon: HeartPulse,
    title: { ro: "Project Pulse", en: "Project Pulse", it: "Project Pulse", de: "Project Pulse", fr: "Project Pulse", hu: "Project Pulse", sr: "Project Pulse", hr: "Project Pulse" },
    mission: {
      ro: "Finanțare transparentă pentru infrastructură civică.",
      en: "Transparent funding for civic infrastructure.",
      it: "Finanziamento trasparente per infrastruttura civica.",
      de: "Transparente Finanzierung ziviler Infrastruktur.",
      fr: "Financement transparent de l’infrastructure civique.",
      hu: "Átlátható finanszírozás civil infrastruktúrához.",
      sr: "Transparentno finansiranje građanske infrastrukture.",
      hr: "Transparentno financiranje građanske infrastrukture."
    },
    purpose: {
      ro: "Campanii AED/DEA, echipamente, uniforme, motociclete de suport, logistică și donații cu destinație clară.",
      en: "AED campaigns, equipment, uniforms, support motorcycles, logistics and donations with a clear destination.",
      it: "Campagne AED, attrezzature, uniformi, moto di supporto, logistica e donazioni con destinazione chiara.",
      de: "AED-Kampagnen, Ausrüstung, Uniformen, Unterstützungsfahrzeuge, Logistik und zweckgebundene Spenden.",
      fr: "Campagnes DAE, équipements, uniformes, motos de soutien, logistique et dons à destination claire.",
      hu: "AED-kampányok, felszerelés, egyenruhák, támogató motorok, logisztika és világos célú adományok.",
      sr: "AED kampanje, oprema, uniforme, motocikli podrške, logistika i donacije sa jasnom namenom.",
      hr: "AED kampanje, oprema, uniforme, motocikli podrške, logistika i donacije s jasnom namjenom."
    }
  },
  {
    slug: "civil-response",
    icon: ShieldCheck,
    title: { ro: "Civil Response", en: "Civil Response", it: "Civil Response", de: "Civil Response", fr: "Civil Response", hu: "Civil Response", sr: "Civil Response", hr: "Civil Response" },
    mission: {
      ro: "Pregătire civilă și cooperare instituțională.",
      en: "Civil preparedness and institutional cooperation.",
      it: "Preparazione civile e cooperazione istituzionale.",
      de: "Zivile Vorsorge und institutionelle Zusammenarbeit.",
      fr: "Préparation civile et coopération institutionnelle.",
      hu: "Polgári felkészültség és intézményi együttműködés.",
      sr: "Civilna pripremljenost i institucionalna saradnja.",
      hr: "Civilna pripravnost i institucionalna suradnja."
    },
    purpose: {
      ro: "Protecție civilă, suport la evenimente, pregătire pentru dezastre și comunicare de urgență doar prin protocoale oficiale.",
      en: "Civil protection, event support, disaster preparedness and emergency communication only through official protocols.",
      it: "Protezione civile, supporto eventi, preparazione ai disastri e comunicazione di emergenza solo tramite protocolli ufficiali.",
      de: "Zivilschutz, Veranstaltungsunterstützung, Katastrophenvorsorge und Notfallkommunikation nur über offizielle Protokolle.",
      fr: "Protection civile, soutien aux événements, préparation aux catastrophes et communication d’urgence uniquement par protocoles officiels.",
      hu: "Polgári védelem, eseménytámogatás, katasztrófa-felkészülés és vészhelyzeti kommunikáció kizárólag hivatalos protokollokon keresztül.",
      sr: "Civilna zaštita, podrška događajima, priprema za katastrofe i hitna komunikacija samo kroz zvanične protokole.",
      hr: "Civilna zaštita, podrška događajima, priprema za katastrofe i hitna komunikacija samo kroz službene protokole."
    }
  },
  {
    slug: "emergency-communications",
    icon: Radio,
    title: { ro: "Emergency Communications Unit", en: "Emergency Communications Unit", it: "Emergency Communications Unit", de: "Emergency Communications Unit", fr: "Emergency Communications Unit", hu: "Emergency Communications Unit", sr: "Emergency Communications Unit", hr: "Emergency Communications Unit" },
    mission: {
      ro: "Comunicare de urgență, coordonare informațională și suport civic responsabil.",
      en: "Emergency communication, informational coordination and responsible civic support."
    },
    purpose: {
      ro: "Unitate viitoare pentru comunicare operațională, radio, fluxuri de informare, suport la evenimente și legături cu partenerii, fără dispecerat sau comandă de intervenție.",
      en: "Future unit for operational communication, radio, information flows, event support and partner liaison, without dispatch or intervention command."
    }
  },
  {
    slug: "volunteer-academy",
    icon: BookOpen,
    title: { ro: "Volunteer Academy", en: "Volunteer Academy", it: "Volunteer Academy", de: "Volunteer Academy", fr: "Volunteer Academy", hu: "Volunteer Academy", sr: "Volunteer Academy", hr: "Volunteer Academy" },
    mission: {
      ro: "Academie civică pentru formare, certificări și pregătire continuă.",
      en: "Civic academy for training, certifications and continuous preparedness."
    },
    purpose: {
      ro: "Training, prim ajutor, CPR, AED/DEA, proceduri operaționale, cod de conduită, siguranță și standarde de voluntariat profesionist.",
      en: "Training, first aid, CPR, AED, operational procedures, code of conduct, safety and professional volunteer standards."
    }
  }
];

export const homepageSections = {
  pillarsTitle: {
    ro: "Cinci piloni operaționali, identități separate, misiune comună.",
    en: "Five operational pillars, separate identities, one mission.",
    it: "Cinque pilastri operativi, identità separate, una missione.",
    de: "Fünf operative Säulen, getrennte Identitäten, eine Mission.",
    fr: "Cinq piliers opérationnels, identités séparées, une mission.",
    hu: "Öt operatív pillér, külön identitások, egy küldetés.",
    sr: "Pet operativnih stubova, odvojeni identiteti, jedna misija.",
    hr: "Pet operativnih stupova, odvojeni identiteti, jedna misija."
  },
  pillarsText: {
    ro: "Fiecare pilon poate funcționa autonom, dar este coordonat prin standarde comune, transparență și cooperare instituțională.",
    en: "Each pillar can operate independently while being coordinated through shared standards, transparency and institutional cooperation.",
    it: "Ogni pilastro può operare autonomamente ma resta coordinato tramite standard comuni, trasparenza e cooperazione istituzionale.",
    de: "Jede Säule kann eigenständig arbeiten und wird durch gemeinsame Standards, Transparenz und institutionelle Zusammenarbeit koordiniert.",
    fr: "Chaque pilier peut fonctionner de manière autonome tout en étant coordonné par des standards communs, la transparence et la coopération institutionnelle.",
    hu: "Minden pillér önállóan működhet, miközben közös standardok, átláthatóság és intézményi együttműködés koordinálja.",
    sr: "Svaki stub može raditi samostalno, uz koordinaciju kroz zajedničke standarde, transparentnost i institucionalnu saradnju.",
    hr: "Svaki stup može djelovati samostalno, uz koordinaciju kroz zajedničke standarde, transparentnost i institucionalnu suradnju."
  },
  cooperationTitle: {
    ro: "Cooperare instituțională, nu improvizație.",
    en: "Institutional cooperation, not improvisation.",
    it: "Cooperazione istituzionale, non improvvisazione.",
    de: "Institutionelle Zusammenarbeit, keine Improvisation.",
    fr: "Coopération institutionnelle, pas improvisation.",
    hu: "Intézményi együttműködés, nem improvizáció.",
    sr: "Institucionalna saradnja, ne improvizacija.",
    hr: "Institucionalna suradnja, ne improvizacija."
  },
  aedTitle: {
    ro: "AED/DEA și pregătire publică.",
    en: "AED and public preparedness.",
    it: "AED/DEA e preparazione pubblica.",
    de: "AED und öffentliche Vorsorge.",
    fr: "DAE et préparation publique.",
    hu: "AED és közfelkészültség.",
    sr: "AED i javna pripremljenost.",
    hr: "AED i javna pripravnost."
  },
  volunteerTitle: {
    ro: "Recrutare voluntari cu profesionalism.",
    en: "Volunteer recruitment with professionalism.",
    it: "Reclutamento volontari con professionalità.",
    de: "Freiwilligengewinnung mit Professionalität.",
    fr: "Recrutement bénévole avec professionnalisme.",
    hu: "Önkéntes toborzás professzionálisan.",
    sr: "Regrutovanje volontera sa profesionalizmom.",
    hr: "Regrutiranje volontera s profesionalnošću."
  },
  europeanTitle: {
    ro: "Viziune europeană.",
    en: "European vision.",
    it: "Visione europea.",
    de: "Europäische Vision.",
    fr: "Vision européenne.",
    hu: "Európai vízió.",
    sr: "Evropska vizija.",
    hr: "Europska vizija."
  },
  partnersTitle: {
    ro: "Parteneri și resurse publice.",
    en: "Partners and public resources.",
    it: "Partner e risorse pubbliche.",
    de: "Partner und öffentliche Ressourcen.",
    fr: "Partenaires et ressources publiques.",
    hu: "Partnerek és közforrások.",
    sr: "Partneri i javni resursi.",
    hr: "Partneri i javni resursi."
  }
};

export const featureCards = [
  { icon: Building2, titleKey: "cooperationTitle", text: brand.description },
  {
    icon: HeartPulse,
    titleKey: "aedTitle",
    text: {
      ro: "Educație AED/DEA, campanii pentru defibrilatoare, hartă AED viitoare și materiale de pregătire pentru public.",
      en: "AED education, defibrillator campaigns, future AED map and public preparedness materials.",
      it: "Educazione AED, campagne defibrillatori, futura mappa AED e materiali di preparazione pubblica.",
      de: "AED-Bildung, Defibrillator-Kampagnen, zukünftige AED-Karte und Materialien für öffentliche Vorsorge.",
      fr: "Éducation DAE, campagnes de défibrillateurs, future carte DAE et ressources de préparation publique.",
      hu: "AED-oktatás, defibrillátor kampányok, jövőbeli AED-térkép és közfelkészültségi anyagok.",
      sr: "AED edukacija, kampanje defibrilatora, buduća AED mapa i materijali javne pripreme.",
      hr: "AED edukacija, kampanje defibrilatora, buduća AED karta i materijali javne pripravnosti."
    }
  },
  {
    icon: Users,
    titleKey: "volunteerTitle",
    text: {
      ro: "Onboarding, training, status, participare la evenimente, cod de conduită și traseu de dezvoltare voluntară.",
      en: "Onboarding, training, status, event participation, code of conduct and volunteer development path.",
      it: "Onboarding, formazione, status, partecipazione eventi, codice di condotta e percorso volontario.",
      de: "Onboarding, Schulung, Status, Teilnahme an Veranstaltungen, Verhaltenskodex und Entwicklungsweg.",
      fr: "Onboarding, formation, statut, participation aux événements, code de conduite et parcours bénévole.",
      hu: "Onboarding, képzés, státusz, eseményrészvétel, magatartási kódex és fejlődési út.",
      sr: "Onboarding, obuka, status, učešće na događajima, kodeks ponašanja i razvojni put volontera.",
      hr: "Onboarding, obuka, status, sudjelovanje u događajima, kodeks ponašanja i razvojni put volontera."
    }
  },
  {
    icon: Map,
    titleKey: "europeanTitle",
    text: {
      ro: "Model replicabil pentru orașe, municipalități, sponsori, comunități și entități europene de finanțare.",
      en: "A replicable model for cities, municipalities, sponsors, communities and European funding entities.",
      it: "Un modello replicabile per città, municipalità, sponsor, comunità ed enti europei di finanziamento.",
      de: "Ein replizierbares Modell für Städte, Kommunen, Sponsoren, Gemeinschaften und europäische Förderstellen.",
      fr: "Un modèle reproductible pour villes, municipalités, sponsors, communautés et entités européennes de financement.",
      hu: "Megismételhető modell városok, önkormányzatok, szponzorok, közösségek és európai finanszírozók számára.",
      sr: "Model koji se može ponoviti za gradove, opštine, sponzore, zajednice i evropske finansijere.",
      hr: "Model koji se može replicirati za gradove, općine, sponzore, zajednice i europske financijere."
    }
  }
];

export const institutionalMatrix = [
  {
    icon: Building2,
    title: { ro: "Municipalități și autorități locale", en: "Municipalities and local authorities" },
    text: {
      ro: "Integrare cu orașe, consilii locale și structuri administrative pentru campanii, evenimente, pregătire publică și infrastructură AED.",
      en: "Integration with cities, local councils and administrative structures for campaigns, events, public preparedness and AED infrastructure."
    }
  },
  {
    icon: ShieldCheck,
    title: { ro: "Protecție civilă și agenții de urgență", en: "Civil protection and emergency agencies" },
    text: {
      ro: "Cooperare numai în baza protocoalelor, cu roluri clare, limite operaționale și comunicare responsabilă.",
      en: "Cooperation only through protocols, with clear roles, operational limits and responsible communication."
    }
  },
  {
    icon: HeartPulse,
    title: { ro: "Crucea Roșie, ERC și formare medicală", en: "Red Cross, ERC and medical training" },
    text: {
      ro: "Aliniere la educație de prim ajutor, CPR, AED/DEA, certificări și furnizori autorizați de training.",
      en: "Alignment with first aid, CPR, AED education, certifications and authorized training providers."
    }
  },
  {
    icon: Radio,
    title: { ro: "MAI, IGSU și comunicare de urgență", en: "MAI, IGSU and emergency communication" },
    text: {
      ro: "Poziționare informativă și de cooperare, fără dispecerat, comandă operativă sau intervenție neautorizată.",
      en: "Informational and cooperative positioning, with no dispatch, operational command or unauthorized intervention."
    }
  }
];

export const institutionalPrograms = [
  {
    icon: HeartPulse,
    label: "AED / DEA",
    title: { ro: "Public Preparedness", en: "Public Preparedness" },
    text: {
      ro: "Conștientizare AED, educație CPR, materiale pentru comunitate, exerciții de pregătire și campanii publice.",
      en: "AED awareness, CPR education, community materials, preparedness exercises and public campaigns."
    }
  },
  {
    icon: FileText,
    label: "Reports",
    title: { ro: "Transparency", en: "Transparency" },
    text: {
      ro: "Placeholder pentru rapoarte anuale, statistici operaționale, rapoarte de transparență și responsabilitate publică.",
      en: "Placeholder for annual reports, operational statistics, transparency reports and public accountability."
    }
  },
  {
    icon: BookOpen,
    label: "Academy",
    title: { ro: "Volunteer Academy", en: "Volunteer Academy" },
    text: {
      ro: "Training, certificări, ERC, prim ajutor, proceduri operaționale, cod de conduită și traseu de dezvoltare voluntară.",
      en: "Training, certifications, ERC, first aid, operational procedures, code of conduct and volunteer development path."
    }
  },
  {
    icon: Map,
    label: "Infrastructure",
    title: { ro: "Emergency Infrastructure", en: "Emergency Infrastructure" },
    text: {
      ro: "Placeholder pentru hartă AED, rețea de voluntari, acoperire de răspuns și comunicare de urgență.",
      en: "Placeholder for AED map, volunteer network, response coverage and emergency communication."
    }
  }
];

export const futureIntegrations = [
  { icon: Users, title: { ro: "Volunteer registration", en: "Volunteer registration" }, text: { ro: "Formulare, onboarding, status și validare.", en: "Forms, onboarding, status and validation." } },
  { icon: HandHeart, title: { ro: "Donation platform", en: "Donation platform" }, text: { ro: "Campanii, sponsori, destinații clare și rapoarte.", en: "Campaigns, sponsors, clear destinations and reports." } },
  { icon: Map, title: { ro: "Emergency map", en: "Emergency map" }, text: { ro: "Hartă AED și resurse publice integrate.", en: "AED map and integrated public resources." } },
  { icon: Activity, title: { ro: "Operational dashboard", en: "Operational dashboard" }, text: { ro: "Indicatori, acoperire, training și impact.", en: "Metrics, coverage, training and impact." } },
  { icon: CalendarDays, title: { ro: "Events calendar", en: "Events calendar" }, text: { ro: "Training, campanii, evenimente și suport public.", en: "Training, campaigns, events and public support." } },
  { icon: Building2, title: { ro: "Partner portal", en: "Partner portal" }, text: { ro: "Municipalități, sponsori, protocoale și vizibilitate.", en: "Municipalities, sponsors, protocols and visibility." } }
];

export const divisionCapabilities = [
  {
    title: { ro: "Guvernanță", en: "Governance" },
    text: {
      ro: "Roluri clare, proceduri, limite operaționale, comunicare publică responsabilă și documentare verificabilă.",
      en: "Clear roles, procedures, operational limits, responsible public communication and verifiable documentation."
    }
  },
  {
    title: { ro: "Parteneriate", en: "Partnerships" },
    text: {
      ro: "Cooperare cu municipalități, instituții, sponsori, formatori și organizații de sprijin prin protocoale.",
      en: "Cooperation with municipalities, institutions, sponsors, trainers and support organizations through protocols."
    }
  },
  {
    title: { ro: "Indicatori", en: "Metrics" },
    text: {
      ro: "Placeholder pentru statistici, rapoarte anuale, activitate, training, acoperire și impact public.",
      en: "Placeholder for statistics, annual reports, activity, training, coverage and public impact."
    }
  },
  {
    title: { ro: "Integrare viitoare", en: "Future integration" },
    text: {
      ro: "Pregătit pentru portal voluntari, dashboard operațional, calendar evenimente și CMS Journey.",
      en: "Ready for volunteer portal, operational dashboard, events calendar and Journey CMS."
    }
  }
];

export const transparencyPage = {
  eyebrow: {
    ro: "Transparență & Documente",
    en: "Transparency & Documents",
    it: "Trasparenza & Documenti"
  },
  title: {
    ro: "Transparență, guvernanță și responsabilitate publică",
    en: "Transparency, governance and public accountability",
    it: "Trasparenza, governance e responsabilità pubblica"
  },
  text: {
    ro: "GIUVA este o asociație română cu deschidere europeană și o platformă cu orientare europeană de reziliență civică. GIUVA NU înlocuiește instituțiile statului, are caracter complementar instituțional și acționează în limitele legii și cu respectarea valorilor democratice europene.",
    en: "GIUVA is a Romanian association with European openness and a European-oriented civic resilience platform. GIUVA does NOT replace state institutions, has a complementary institutional role and acts within the law and democratic European values.",
    it: "GIUVA è un’associazione rumena con apertura europea e una piattaforma orientata alla resilienza civica europea. GIUVA NON sostituisce le istituzioni dello Stato, ha carattere complementare istituzionale e agisce nei limiti della legge e dei valori democratici europei."
  },
  documents: [
    { title: "Statut GIUVA", file: "statut-giuva.pdf", status: { ro: "placeholder public", en: "public placeholder", it: "placeholder pubblico" } },
    { title: "Act Constitutiv", file: "act-constitutiv.pdf", status: { ro: "placeholder public", en: "public placeholder", it: "placeholder pubblico" } },
    { title: "Regulament Intern", file: "regulament-intern.pdf", status: { ro: "în pregătire", en: "in preparation", it: "in preparazione" } },
    { title: "Cod Etic", file: "cod-etic.pdf", status: { ro: "în pregătire", en: "in preparation", it: "in preparazione" } },
    { title: "SOP principale", file: "sop-principale.pdf", status: { ro: "în pregătire", en: "in preparation", it: "in preparazione" } },
    { title: "KPI & Impact", file: "kpi-impact.pdf", status: { ro: "dashboard viitor", en: "future dashboard", it: "dashboard futuro" } },
    { title: "Politică GDPR", file: "politica-gdpr.pdf", status: { ro: "placeholder legal", en: "legal placeholder", it: "placeholder legale" } },
    { title: "Transparență financiară", file: "transparenta-financiara.pdf", status: { ro: "raportare viitoare", en: "future reporting", it: "reportistica futura" } },
    { title: "Parteneriate instituționale", file: "parteneriate-institutionale.pdf", status: { ro: "protocol cadru", en: "framework protocol", it: "protocollo quadro" } },
    { title: "Volunteer Academy", file: "volunteer-academy.pdf", status: { ro: "program viitor", en: "future program", it: "programma futuro" } },
    { title: "European Affairs & Funding Office", file: "european-affairs-funding-office.pdf", status: { ro: "birou strategic", en: "strategic office", it: "ufficio strategico" } }
  ],
  whyTitle: {
    ro: "Ce publicăm și de ce",
    en: "What we publish and why",
    it: "Cosa pubblichiamo e perché"
  },
  whyText: {
    ro: "Publicăm documente de guvernanță, politici, proceduri, indicatori și rapoarte pentru a susține transparența, accountability, voluntariatul responsabil și cooperarea instituțională.",
    en: "We publish governance documents, policies, procedures, indicators and reports to support transparency, accountability, responsible volunteering and institutional cooperation.",
    it: "Pubblichiamo documenti di governance, policy, procedure, indicatori e report per sostenere trasparenza, accountability, volontariato responsabile e cooperazione istituzionale."
  },
  principles: [
    { ro: "cooperare instituțională", en: "institutional cooperation", it: "cooperazione istituzionale" },
    { ro: "caracter complementar instituțional", en: "complementary institutional role", it: "ruolo complementare istituzionale" },
    { ro: "voluntariat responsabil", en: "responsible volunteering", it: "volontariato responsabile" },
    { ro: "transparență financiară", en: "financial transparency", it: "trasparenza finanziaria" },
    { ro: "respectarea legislației naționale și europene", en: "respect for national and European law", it: "rispetto della legge nazionale ed europea" },
    { ro: "neutralitate, umanitate și valori democratice europene", en: "neutrality, humanity and European democratic values", it: "neutralità, umanità e valori democratici europei" }
  ],
  kpis: [
    { label: "voluntari formați", value: "0" },
    { label: "campanii publice", value: "0" },
    { label: "AED susținute", value: "0" },
    { label: "parteneriate active", value: "0" }
  ],
  ctaVolunteer: { ro: "Devino voluntar", en: "Become a volunteer", it: "Diventa volontario" },
  ctaPartner: { ro: "Propune un parteneriat", en: "Propose a partnership", it: "Proponi una partnership" },
  ctaSupport: { ro: "Susține proiectul", en: "Support the project", it: "Sostieni il progetto" }
};

export const governancePackage = {
  hero: {
    eyebrow: { ro: "GIUVA", en: "GIUVA", it: "GIUVA" },
    title: {
      ro: "Platformă cu orientare europeană de reziliență civică, voluntariat responsabil și cooperare instituțională.",
      en: "European-oriented civic resilience, responsible volunteering and institutional cooperation platform.",
      it: "Piattaforma orientata alla resilienza civica europea, volontariato responsabile e cooperazione istituzionale."
    },
    text: {
      ro: "GIUVA este o asociație română cu deschidere europeană, care promovează pregătirea civică, cultura prevenției, educația comunitară și solidaritatea responsabilă.",
      en: "GIUVA is a Romanian association with European openness, promoting civic preparedness, prevention culture, community education and responsible solidarity.",
      it: "GIUVA è un’associazione rumena con apertura europea, che promuove preparazione civica, cultura della prevenzione, educazione comunitaria e solidarietà responsabile."
    },
    banner: {
      ro: "GIUVA NU înlocuiește instituțiile statului. GIUVA acționează exclusiv cu caracter complementar instituțional.",
      en: "GIUVA does NOT replace state institutions. GIUVA acts exclusively with a complementary institutional character.",
      it: "GIUVA NON sostituisce le istituzioni dello Stato. GIUVA agisce esclusivamente con carattere complementare istituzionale."
    }
  },
  transparencyIntro: {
    ro: "GIUVA promovează transparența, accountability, integritatea și buna guvernanță, în conformitate cu valorile democratice europene.",
    en: "GIUVA promotes transparency, accountability, integrity and good governance, in line with European democratic values.",
    it: "GIUVA promuove trasparenza, accountability, integrità e buona governance, in conformità con i valori democratici europei."
  },
  publicDocuments: [
    {
      title: "Statut",
      file: "statut-giuva.pdf",
      description: {
        ro: "Documentul fundamental care stabilește misiunea, principiile, structura de guvernanță și funcționarea organizației.",
        en: "The fundamental document defining the mission, principles, governance structure and functioning of the organization.",
        it: "Il documento fondamentale che stabilisce missione, principi, governance e funzionamento dell’organizzazione."
      }
    },
    {
      title: "Cod Etic",
      file: "cod-etic.pdf",
      description: {
        ro: "Principiile etice, de integritate, neutralitate și responsabilitate publică care guvernează activitatea GIUVA.",
        en: "Ethical principles of integrity, neutrality and public responsibility governing GIUVA activity.",
        it: "Principi etici di integrità, neutralità e responsabilità pubblica che guidano l’attività GIUVA."
      }
    },
    {
      title: "KPI & Impact",
      file: "kpi-impact-report.pdf",
      description: {
        ro: "Indicatori privind impactul comunitar, activitățile educaționale, voluntariatul și cooperarea instituțională.",
        en: "Indicators on community impact, educational activities, volunteering and institutional cooperation.",
        it: "Indicatori su impatto comunitario, attività educative, volontariato e cooperazione istituzionale."
      }
    },
    {
      title: "GDPR & Confidențialitate",
      file: "gdpr-policy.pdf",
      description: {
        ro: "Politicile privind protecția datelor, confidențialitatea și securitatea informațiilor.",
        en: "Policies regarding data protection, confidentiality and information security.",
        it: "Policy relative a protezione dati, riservatezza e sicurezza delle informazioni."
      }
    },
    {
      title: "Parteneriate & Cooperare",
      file: "partnership-principles.pdf",
      description: {
        ro: "Principiile de cooperare instituțională și dezvoltare de parteneriate publice, private și europene.",
        en: "Principles for institutional cooperation and development of public, private and European partnerships.",
        it: "Principi per cooperazione istituzionale e sviluppo di partnership pubbliche, private ed europee."
      }
    },
    {
      title: "Transparency Report",
      file: "transparency-report.pdf",
      description: {
        ro: "Raport public pentru transparență, guvernanță, accountability și activități documentate.",
        en: "Public report for transparency, governance, accountability and documented activities.",
        it: "Report pubblico per trasparenza, governance, accountability e attività documentate."
      }
    }
  ],
  nonPublicDocuments: [
    "SOP complete",
    "Regulament intern complet",
    "documenti disciplinari",
    "procedure operative sensibili",
    "processi interni dettagliati"
  ],
  principles: [
    {
      title: "Legalitate",
      text: {
        ro: "GIUVA respectă legislația română și europeană aplicabilă.",
        en: "GIUVA respects applicable Romanian and European law.",
        it: "GIUVA rispetta la normativa rumena ed europea applicabile."
      }
    },
    {
      title: "Anti-extremism",
      text: {
        ro: "GIUVA interzice orice formă de extremism, radicalizare, discriminare, violență sau comportament incompatibil cu valorile democratice și europene.",
        en: "GIUVA prohibits any form of extremism, radicalization, discrimination, violence or conduct incompatible with democratic and European values.",
        it: "GIUVA vieta ogni forma di estremismo, radicalizzazione, discriminazione, violenza o condotta incompatibile con valori democratici ed europei."
      }
    },
    {
      title: "Human Rights",
      text: {
        ro: "GIUVA își desfășoară activitatea cu respectarea drepturilor fundamentale ale omului și a valorilor democratice europene.",
        en: "GIUVA operates with respect for fundamental human rights and European democratic values.",
        it: "GIUVA opera nel rispetto dei diritti fondamentali dell’uomo e dei valori democratici europei."
      }
    },
    {
      title: "Safeguarding",
      text: {
        ro: "GIUVA promovează protecția persoanelor vulnerabile și desfășoară activitățile sale în condiții de siguranță, responsabilitate și respect.",
        en: "GIUVA promotes protection of vulnerable people and conducts activities with safety, responsibility and respect.",
        it: "GIUVA promuove la protezione delle persone vulnerabili e svolge attività in sicurezza, responsabilità e rispetto."
      }
    },
    {
      title: "Transparență",
      text: {
        ro: "GIUVA promovează transparența, integritatea, accountability și buna guvernanță.",
        en: "GIUVA promotes transparency, integrity, accountability and good governance.",
        it: "GIUVA promuove trasparenza, integrità, accountability e buona governance."
      }
    }
  ],
  academyBlocks: ["first aid awareness", "AED awareness", "prevenție", "comunicare", "leadership civic", "cooperare instituțională"],
  europeanOffice: {
    ro: "European Affairs & Funding Office coordonează dezvoltarea parteneriatelor europene, identificarea granturilor, proiectele europene, cooperarea instituțională internațională și dezvoltarea programelor de impact comunitar.",
    en: "The European Affairs & Funding Office coordinates European partnerships, grant identification, European projects, international institutional cooperation and community impact programs.",
    it: "L’European Affairs & Funding Office coordina partnership europee, identificazione grant, progetti europei, cooperazione istituzionale internazionale e programmi di impatto comunitario."
  },
  impactAreas: ["Comunitate", "Voluntariat", "AED Awareness", "Educație", "Parteneriate", "Impact social", "Granturi și proiecte"]
};

export const civicAvailabilityNetwork = {
  name: "GIUVA Civic Availability Network",
  disclaimer: {
    ro: "GIUVA NU înlocuiește instituțiile statului. Platforma GIUVA are caracter complementar instituțional și oferă exclusiv suport informațional, awareness comunitar și localizare resurse civice disponibile.",
    en: "GIUVA does NOT replace state institutions. The GIUVA platform has a complementary institutional character and provides only informational support, community awareness and localization of available civic resources.",
    it: "GIUVA NON sostituisce le istituzioni dello Stato. La piattaforma GIUVA ha carattere complementare istituzionale e offre esclusivamente supporto informativo, awareness comunitaria e localizzazione di risorse civiche disponibili."
  },
  purpose: {
    ro: "O platformă civică, non-guvernamentală și complementară care afișează disponibilitatea și localizarea resurselor comunitare GIUVA pentru parteneri instituționali autorizați.",
    en: "A civic, non-governmental and complementary platform displaying availability and location of GIUVA community resources for authorized institutional partners.",
    it: "Una piattaforma civica, non governativa e complementare che mostra disponibilità e localizzazione delle risorse comunitarie GIUVA per partner istituzionali autorizzati."
  },
  accessLevels: [
    {
      title: "Public Map",
      visibility: "public",
      text: {
        ro: "Afișează AED, arii de acoperire și impact comunitar. Nu afișează GPS live al voluntarilor sau resurse operaționale.",
        en: "Shows AED locations, coverage areas and community impact. It does not show live volunteer GPS or live operational resources.",
        it: "Mostra AED, aree di copertura e impatto comunitario. Non mostra GPS live dei volontari o risorse operative live."
      }
    },
    {
      title: "Partner Dashboard",
      visibility: "secure read-only",
      text: {
        ro: "Acces securizat pentru parteneri instituționali autorizați: resurse disponibile, categorie, poziție GPS cu consimțământ, ETA și contact coordonator.",
        en: "Secure access for authorized institutional partners: available resources, category, GPS location with consent, ETA and coordinator contact.",
        it: "Accesso sicuro per partner istituzionali autorizzati: risorse disponibili, categoria, GPS con consenso, ETA e contatto coordinatore."
      }
    },
    {
      title: "Internal Dashboard",
      visibility: "internal",
      text: {
        ro: "Hartă internă completă pentru coordonatori GIUVA: voluntari, ture, status, rapoarte, audit log și export KPI.",
        en: "Full internal map for GIUVA coordinators: volunteers, shifts, status, reports, audit log and KPI export.",
        it: "Mappa interna completa per coordinatori GIUVA: volontari, turni, status, report, audit log ed export KPI."
      }
    }
  ],
  roles: ["Public visitor", "GIUVA volunteer", "GIUVA coordinator", "Institutional partner viewer", "Admin"],
  statuses: ["offline", "available", "assigned", "moving", "on scene", "unavailable"],
  slots: ["08:00-12:00", "12:00-18:00", "18:00-22:00"],
  categories: [
    { color: "blue", title: "Rider BLS-D / AED community responder", className: "bg-blue-600" },
    { color: "orange", title: "Partner medical resource / ambulance partner with AED", className: "bg-orange-500" },
    { color: "green", title: "Community support volunteer for civil protection support activities", className: "bg-emerald-600" },
    { color: "yellow", title: "Logistics and fire-prevention support team", className: "bg-yellow-400" },
    { color: "purple", title: "Coordination / communication unit", className: "bg-purple-600" }
  ],
  features: [
    "live map",
    "filters by category",
    "filters by status",
    "nearest AED",
    "nearest available volunteer",
    "ETA calculation",
    "resource details",
    "contact coordinator",
    "shift calendar",
    "incident note field",
    "audit log"
  ],
  privacy: [
    "GDPR consent required",
    "data retention settings",
    "volunteer can go offline",
    "private location is never public",
    "GPS visible only when available and consented"
  ],
  stack: [
    "Next.js + React + Tailwind",
    "FastAPI or NestJS",
    "PostgreSQL + PostGIS",
    "WebSocket or Supabase Realtime",
    "Mapbox or Google Maps",
    "Traccar API integration",
    "React Native or Flutter"
  ],
  pages: [
    { slug: "coverage-map", title: "Public Coverage Map", access: "public" },
    { slug: "aed-registry", title: "AED Registry", access: "public" },
    { slug: "volunteer-login", title: "Volunteer Login", access: "secure" },
    { slug: "coordinator-dashboard", title: "Coordinator Dashboard", access: "internal" },
    { slug: "partner-dashboard", title: "Partner Dashboard", access: "secure read-only" },
    { slug: "admin-panel", title: "Admin Panel", access: "admin" },
    { slug: "gdpr-consent", title: "GDPR Consent", access: "volunteer" },
    { slug: "kpi-reports", title: "KPI & Reports", access: "internal / public summary" }
  ]
};

export const footerLinks = [
  "GDPR",
  "ANPC",
  "IGSU",
  "MAI",
  "ERC",
  "Romanian Red Cross",
  "Legal placeholder",
  "Emergency authorities"
];

export const projectPulseMetrics = [
  { label: { ro: "AED finanțate", en: "AEDs funded", it: "AED finanziati", de: "Finanzierte AED", fr: "DAE financés", hu: "Finanszírozott AED", sr: "Finansirani AED", hr: "Financirani AED" }, value: "0", icon: HeartPulse },
  { label: { ro: "Voluntari instruiți", en: "Volunteers trained", it: "Volontari formati", de: "Geschulte Freiwillige", fr: "Bénévoles formés", hu: "Képzett önkéntesek", sr: "Obučeni volonteri", hr: "Obučeni volonteri" }, value: "0", icon: BadgeCheck },
  { label: { ro: "Campanii active", en: "Active campaigns", it: "Campagne attive", de: "Aktive Kampagnen", fr: "Campagnes actives", hu: "Aktív kampányok", sr: "Aktivne kampanje", hr: "Aktivne kampanje" }, value: "0", icon: Activity },
  { label: { ro: "Comunități atinse", en: "Communities reached", it: "Comunità raggiunte", de: "Erreichte Gemeinschaften", fr: "Communautés touchées", hu: "Elért közösségek", sr: "Dosegnute zajednice", hr: "Dosegnute zajednice" }, value: "0", icon: Building2 }
];

export const officialResources = [
  { name: "IGSU", badge: "IGSU", href: "https://www.igsu.ro/", note: "Inspectoratul General pentru Situații de Urgență" },
  { name: "MAI", badge: "MAI", href: "https://www.mai.gov.ro/", note: "Ministerul Afacerilor Interne" },
  { name: "ERC", badge: "ERC", href: "https://www.erc.edu/", note: "European Resuscitation Council" },
  { name: "Romanian Red Cross", badge: "CRR", href: "https://crucearosie.ro/", note: "Crucea Roșie Română" }
];

export const contactChannels = [
  { label: "General", value: "info@giuva.ro", icon: Mail },
  { label: "Media", value: "media@giuva.ro", icon: Camera },
  { label: "Partnerships", value: "partnerships@giuva.ro", icon: HandHeart },
  { label: "Volunteers", value: "volunteers@giuva.ro", icon: Users },
  { label: "Project Pulse", value: "projectpulse@giuva.ro", icon: HeartPulse }
];

export const partnerGroups = [
  { icon: Building2, title: { ro: "Municipalități", en: "Municipalities", it: "Municipalità", de: "Kommunen", fr: "Municipalités", hu: "Önkormányzatok", sr: "Opštine", hr: "Općine" }, text: brand.description },
  { icon: ShieldCheck, title: { ro: "Instituții de urgență", en: "Emergency institutions", it: "Istituzioni di emergenza", de: "Notfallinstitutionen", fr: "Institutions d’urgence", hu: "Sürgősségi intézmények", sr: "Hitne institucije", hr: "Hitne institucije" }, text: pillars[4].purpose },
  { icon: Scale, title: { ro: "Legal și conformitate", en: "Legal and compliance", it: "Legale e conformità", de: "Recht und Compliance", fr: "Juridique et conformité", hu: "Jogi és megfelelőség", sr: "Pravno i usklađenost", hr: "Pravno i usklađenost" }, text: { ro: "Protocoale, GDPR, siguranță, roluri clare și comunicare responsabilă.", en: "Protocols, GDPR, safety, clear roles and responsible communication.", it: "Protocolli, GDPR, sicurezza, ruoli chiari e comunicazione responsabile.", de: "Protokolle, DSGVO, Sicherheit, klare Rollen und verantwortliche Kommunikation.", fr: "Protocoles, RGPD, sécurité, rôles clairs et communication responsable.", hu: "Protokollok, GDPR, biztonság, világos szerepek és felelős kommunikáció.", sr: "Protokoli, GDPR, bezbednost, jasne uloge i odgovorna komunikacija.", hr: "Protokoli, GDPR, sigurnost, jasne uloge i odgovorna komunikacija." } }
];

export const partnerCategories = ["Institutional", "Emergency", "Municipal", "Medical", "Corporate", "European funding"];
export const legalAndBenchmarkReferences = [
  { title: "European Road Safety Charter - AASI", type: "Reference", href: "https://road-safety-charter.ec.europa.eu/user/3617", text: "European civic and road safety positioning reference." },
  { title: "Rider Rescue Network", type: "Benchmark", href: "https://apps.apple.com/us/app/riders-to-the-rescue/id6744728720", text: "Mobile support benchmark; no current partnership implied." }
];

export const roadmap = [
  { ro: "Fundație comunitară", en: "Community foundation", it: "Fondazione comunitaria", de: "Community Foundation", fr: "Fondation communautaire", hu: "Közösségi alapítvány", sr: "Fondacija zajednice", hr: "Zaklada zajednice" },
  { ro: "Onboarding voluntari", en: "Volunteer onboarding", it: "Onboarding volontari", de: "Freiwilligen-Onboarding", fr: "Onboarding bénévole", hu: "Önkéntes onboarding", sr: "Onboarding volontera", hr: "Onboarding volontera" },
  { ro: "Educație AED/DEA", en: "AED awareness", it: "Educazione AED", de: "AED-Bewusstsein", fr: "Sensibilisation DAE", hu: "AED tudatosság", sr: "AED edukacija", hr: "AED edukacija" },
  { ro: "Pilot european", en: "European pilot", it: "Pilota europeo", de: "Europäischer Pilot", fr: "Pilote européen", hu: "Európai pilot", sr: "Evropski pilot", hr: "Europski pilot" }
];

export const journeyStories = [
  { title: { ro: "Drumuri, oameni, sens", en: "Roads, people, meaning", it: "Strade, persone, senso", de: "Wege, Menschen, Sinn", fr: "Routes, personnes, sens", hu: "Utak, emberek, értelem", sr: "Putevi, ljudi, smisao", hr: "Putevi, ljudi, smisao" }, location: { ro: "România", en: "Romania", it: "Romania", de: "Rumänien", fr: "Roumanie", hu: "Románia", sr: "Rumunija", hr: "Rumunjska" }, category: { ro: "Journey", en: "Journey", it: "Journey", de: "Journey", fr: "Journey", hu: "Journey", sr: "Journey", hr: "Journey" }, image: "/brand/journey-urban-1.png", text: brand.description }
];

export const platformModules = featureCards.map((card) => ({
  icon: card.icon,
  title: homepageSections[card.titleKey as keyof typeof homepageSections] as LocalizedText,
  text: card.text
}));

export const contentModels = ["story", "gallery", "event", "campaign", "volunteer story", "partner profile"];
export const operationalPages = [
  { title: "What is GIUVA", href: "/media", icon: BookOpen },
  { title: "Community resilience", href: "/civil-response", icon: ShieldCheck },
  { title: "AED awareness", href: "/project-pulse", icon: HeartPulse },
  { title: "Volunteer mobility", href: "/riders-rescue", icon: Bike },
  { title: "Charity rides", href: "/community", icon: CalendarDays },
  { title: "Journey stories", href: "/journey", icon: Camera }
];

export function t(locale: Locale, value: LocalizedText) {
  return value[locale] ?? value.ro;
}
