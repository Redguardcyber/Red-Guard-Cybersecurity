const translations = {
  it: {
    "services": "Servizi",
    "about": "Chi Siamo",
    "contact": "Contatti",
    "hero-title": "Proteggi il tuo futuro con Cybersecurity professionale",
    "hero-desc": "Servizi di penetration testing, valutazione vulnerabilità e formazione per proteggere il tuo business.",
    "cta-btn": "Contattaci",
    "services-title": "I Nostri Servizi",
    "pentest": "Penetration Testing",
    "pentest-desc": "Test approfonditi per identificare vulnerabilità e minacce nei tuoi sistemi.",
    "vuln-assessment": "Valutazione delle Vulnerabilità",
    "vuln-assessment-desc": "Analisi dettagliata delle vulnerabilità per ridurre i rischi e migliorare la sicurezza.",
    "training": "Formazione e Consulenza",
    "training-desc": "Programmi di formazione e consulenza per aumentare la consapevolezza e la protezione.",
    "about-title": "Chi Siamo",
    "about-desc": "Red Guard Cybersecurity è un team di esperti in sicurezza informatica che si impegna a proteggere la tua azienda dalle minacce digitali con servizi di alta qualità.",
    "contact-title": "Contattaci",
    "send-btn": "Invia Messaggio"
  },
  en: {
    "services": "Services",
    "about": "About Us",
    "contact": "Contact",
    "hero-title": "Protect Your Future with Professional Cybersecurity",
    "hero-desc": "Penetration testing, vulnerability assessment, and training services to safeguard your business.",
    "cta-btn": "Contact Us",
    "services-title": "Our Services",
    "pentest": "Penetration Testing",
    "pentest-desc": "Thorough testing to identify vulnerabilities and threats in your systems.",
    "vuln-assessment": "Vulnerability Assessment",
    "vuln-assessment-desc": "Detailed analysis of vulnerabilities to reduce risks and improve security.",
    "training": "Training & Consulting",
    "training-desc": "Training and consulting programs to raise awareness and enhance protection.",
    "about-title": "About Us",
    "about-desc": "Red Guard Cybersecurity is a team of cybersecurity experts committed to protecting your business from digital threats with high-quality services.",
    "contact-title": "Contact Us",
    "send-btn": "Send Message"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
