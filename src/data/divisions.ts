export type Division = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

export const divisions: Division[] = [
  {
    slug: "riders-rescue",
    title: "GIUVA Riders Rescue",
    subtitle: "Mobile Civic Availability",
    description:
      "Voluntari instruiți, defibrilatoare mobile și sprijin comunitar responsabil, dezvoltat numai prin formare, protocoale și colaborări oficiale.",
    bullets: ["AED / DEA mobility", "Volunteer training", "Community preparedness support"]
  },
  {
    slug: "community",
    title: "GIUVA Community",
    subtitle: "People first. Community always.",
    description:
      "Azioni comunitarie, tempo libero, attività ricreative, charity, socializzazione e piano sociale.",
    bullets: ["Charity rides", "Community events", "Social impact"]
  },
  {
    slug: "journey",
    title: "Journey",
    subtitle: "Stories through roads, people and moments.",
    description:
      "Raccontiamo le nostre storie attraverso fotografie, piccole didascalie, viaggi, persone, comunità e paesaggi.",
    bullets: ["Photo stories", "Travel", "Human moments"]
  },
  {
    slug: "project-pulse",
    title: "Project Pulse",
    subtitle: "Every minute matters.",
    description:
      "Fundraising per defibrillatori, equipaggiamento, uniformi, radio, mobilità civica, scooter e supporto logistico.",
    bullets: ["Sponsor an AED", "Equip a volunteer", "Support mobility"]
  },
  {
    slug: "civil-response",
    title: "Civil Response",
    subtitle: "Community resilience & civil support.",
    description:
      "Supporto a protezione civile, manifestazioni, prevenzione e preparazione pubblica solo attraverso protocolli ufficiali, ruoli chiari e autorizzazioni.",
    bullets: ["Civil resilience", "Official protocols", "Public awareness"]
  }
];
