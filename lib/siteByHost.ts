export function getSiteByHost(host: string) {
  const cleanHost = host.replace("www.", "").toLowerCase();

  if (cleanHost.includes("giuva.it")) {
    return {
      country: "Italia",
      eyebrow: "GIUVA Italia",
      title: "GIUVA Italia",
      description:
        "GIUVA Italia costruisce una rete civica di volontari, comunita e partner per citta piu connesse, preparate e solidali.",
      positioning: "Posizionamento pubblico",
      sectionTitle: "Comunita, preparazione e impatto civico.",
      today: "GIUVA oggi",
      tomorrow: "GIUVA domani",
      disciplinesEyebrow: "Le 9 discipline",
      disciplinesText:
        "Le discipline GIUVA mostrano come puo crescere l'associazione: sociale, educativa, civica, preventiva, narrativa ed europea.",
      europeText: "Costruiamo insieme una rete europea di comunita.",
      socialTitle: "Segui lo sviluppo di GIUVA.",
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
      disciplinesEyebrow: "The 9 disciplines",
      disciplinesText:
        "The GIUVA disciplines show how the organization can grow: social, educational, civic, preventive, narrative and European.",
      europeText: "Together, we are building a European network of communities.",
      socialTitle: "Follow GIUVA development.",
    };
  }

  return {
    country: "Romania",
    eyebrow: "GIUVA Romania",
    title: "GIUVA Romania",
    description:
      "GIUVA Romania construieste o retea civica de voluntari, comunitati si parteneri, pentru orase mai conectate, pregatite si solidare.",
    positioning: "Pozitionare publica",
    sectionTitle: "Comunitate, pregatire si impact civic.",
    today: "GIUVA astazi",
    tomorrow: "GIUVA maine",
    disciplinesEyebrow: "Cele 9 discipline",
    disciplinesText:
      "Disciplinele GIUVA arata cum poate creste asociatia: social, educativ, civic, preventiv, narativ si european.",
    europeText: "Construim impreuna o retea europeana de comunitati.",
    socialTitle: "Urmareste dezvoltarea GIUVA.",
  };
}