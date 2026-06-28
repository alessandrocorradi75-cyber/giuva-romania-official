export function getSiteByHost(host: string) {
  const cleanHost = host.replace("www.", "").toLowerCase();

  if (cleanHost.includes("giuva.it")) {
    return {
      country: "Italia",
      eyebrow: "GIUVA Italia",
      title: "GIUVA Italia",
      description:
        "GIUVA Italia costruisce una rete civica di volontari, comunità e partner per città più connesse, preparate e solidali.",
      positioning: "Posizionamento pubblico",
      sectionTitle: "Comunità, preparazione e impatto civico.",
      today: "GIUVA oggi",
      tomorrow: "GIUVA domani",
      disciplinesEyebrow: "Le discipline",
      disciplinesText:
        "Le discipline GIUVA mostrano come può crescere l'associazione: sociale, educativa, civica, preventiva, narrativa ed europea.",
      europeText: "Costruiamo insieme una rete europea di comunità.",
      socialTitle: "Segui lo sviluppo di GIUVA."
    };
  }

  if (cleanHost.includes("giuva.eu")) {
    return {
      country: "Europe",
      eyebrow: "GIUVA Europe",
      title: "GIUVA Europe",
      description:
        "GIUVA Europe is building a civic network of volunteers, communities and partners for more connected, prepared and supportive cities.",
      positioning: "Public positioning",
      sectionTitle: "Community, preparedness and civic impact.",
      today: "GIUVA today",
      tomorrow: "GIUVA tomorrow",
      disciplinesEyebrow: "The disciplines",
      disciplinesText:
        "The GIUVA disciplines show how the organization can grow: social, educational, civic, preventive, narrative and European.",
      europeText: "Together, we are building a European network of communities.",
      socialTitle: "Follow GIUVA development."
    };
  }

  return {
    country: "Romania",
    eyebrow: "GIUVA Romania",
    title: "GIUVA Romania",
    description:
      "GIUVA Romania construiește o rețea civică de voluntari, comunități și parteneri, pentru orașe mai conectate, pregătite și solidare.",
    positioning: "Poziționare publică",
    sectionTitle: "Comunitate, pregătire și impact civic.",
    today: "GIUVA astăzi",
    tomorrow: "GIUVA mâine",
    disciplinesEyebrow: "Discipline GIUVA",
    disciplinesText:
      "Disciplinele GIUVA arată cum poate crește asociația: social, educativ, civic, preventiv, narativ și european.",
    europeText: "Construim împreună o rețea europeană de comunități.",
    socialTitle: "Urmărește dezvoltarea GIUVA."
  };
}
