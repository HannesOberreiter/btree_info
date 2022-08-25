export const SITE = {
  title: "b.tree",
  description: "Professional Beekeeping Database",
  defaultLanguage: "de_DE",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://info.btree.at/default-og-image.jpg",
    alt: "b.tree Professional Beekeeping Database since 2014",
  },
  twitter: "btree_hannes",
};

export const KNOWN_LANGUAGES = {
  English: "en",
  Deutsch: "de",
};

export const SIDEBAR = {
  en: [
    { text: "", header: true },
    { text: "Beekeeping Application", header: true },
    { text: "Introduction", link: "en/introduction" },
    { text: "Login/Register", link: "https://app.btree.at" },
    { text: "Price", link: "en/price" },
    { text: "FAQs", link: "en/doc-faqs" },
    { text: "First Steps", link: "en/doc-first-steps" },
    { text: "API", link: "en/doc-api" },
    { text: "Other", link: "en/doc-other" },

    { text: "Hannes Oberreiter", header: true },
    { text: "Curriculum Vitae", link: "en/cv" },
    { text: "Science", link: "en/science" },
    { text: "Projects", link: "en/projects" },

    { text: "Notice", header: true },
    { text: "Impressum", link: "en/impressum" },
    { text: "Data privacy", link: "en/data-privacy" },
  ],
  de: [
    { text: "", header: true },
    { text: "Imkerei Software", header: true },
    { text: "Einführung", link: "de/introduction" },
    { text: "Login/Registrierung", link: "https://app.btree.at" },
    { text: "Preis", link: "de/price" },
    { text: "FAQs", link: "de/doc-faqs" },
    { text: "Ersten Schritte", link: "de/doc-first-steps" },
    { text: "API", link: "de/doc-api" },
    { text: "Sonstiges", link: "de/doc-other" },

    { text: "Hannes Oberreiter", header: true },
    { text: "Curriculum Vitae", link: "de/cv" },
    { text: "Science", link: "de/science" },
    { text: "Projekte", link: "de/projects" },

    { text: "Rechtliches", header: true },
    { text: "Impressum", link: "de/impressum" },
    { text: "Datenschutz", link: "de/data-privacy" },
  ],
};
