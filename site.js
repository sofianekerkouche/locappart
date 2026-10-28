/**
 * LOCAPPART — SITE VITRINE OFFICIEL
 * Logique JavaScript native (Vanilla JS)
 * Données réelles selon les spécifications d'entrevue client
 */

// Données détaillées des appartements pour la modal
const PROPERTIES_DATA = {
  'prop-1': {
    title: "Studio Cocon • Résidence Thala-Allam",
    type: "Studio Meublé Privatif (18 m²)",
    category: "studio femme",
    categoryLabel: "100% Réservé Femmes",
    location: "Thala-Allam, Tizi Ouzou (Quartier résidentiel calme)",
    surface: "18 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_bedroom_1793132232924.jpg",
    description: "Conçu spécialement pour une étudiante ou jeune active recherchant la quiétude et une sécurité absolue. Ce studio privatif de 18 m² dispose d'une porte blindée, d'un accès par digicode, d'une kitchenette équipée, d'un lit orthopédique et d'un bureau studieux. Accès à la buanderie de la résidence.",
    amenities: [
      "Digicode & Portes blindées",
      "Caméras de surveillance dans les communs",
      "Eau courante H24 (eau chaude permanente)",
      "Chauffage central (y compris parties communes)",
      "Climatiseur réversible individuel",
      "Fibre Optique Wifi très haut débit illimitée",
      "100% Meublé & Kitchenette équipée",
      "Espace buanderie/laverie réservé sur place",
      "Règlement intérieur strict (calme garanti)",
      "Régisseuse de résidence sur place"
    ],
    terms: "Toutes charges comprises dans le loyer (eau, électricité, chauffage, internet). Moyen et long terme (semestre universitaire ou bail annuel).",
    phone: "0550 98 16 18"
  },
  'prop-2': {
    title: "Grand Studio Équipé • Centre Tizi-Ouzou",
    type: "Studio Standing (30 m²)",
    category: "studio femme",
    categoryLabel: "100% Réservé Femmes",
    location: "Tizi-Ouzou Ville (Centre, proche université & commodités)",
    surface: "30 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_residence_facade_1793134841735.jpg",
    description: "Studio spacieux et lumineux de 30 m² au sein de notre résidence privatisée pour femmes au centre-ville de Tizi Ouzou. Entièrement meublé à neuf, il comprend un coin salon avec TV, une literie grand confort, une cuisine aménagée et une isolation acoustique optimale.",
    amenities: [
      "Contrôle d'accès par digicode nominatif",
      "Porte d'entrée blindée multipoints",
      "Vidéosurveillance continue des halls",
      "Eau H24 garantie avec bâche à eau",
      "Chauffage central individuel & communs tempérés",
      "Climatisation split réversible",
      "Wifi Fibre Optique Haut Débit",
      "Laverie/buanderie disponible dans la résidence",
      "Règlement intérieur assurant un calme studieux",
      "Maintenance réactive 7j/7"
    ],
    terms: "Toutes charges comprises. Bail étudiant ou bail professionnel pour femme active. Zéro frais d'agence.",
    phone: "0550 98 16 18"
  },
  'prop-3': {
    title: "Appartement F1 Meublé • Bouaziz",
    type: "Appartement F1 (35 m²)",
    category: "f1",
    categoryLabel: "F1 Indépendant",
    location: "Bouaziz / Quatre Chemins, Tizi Ouzou",
    surface: "35 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_bedroom_1793132232924.jpg",
    description: "Grand F1 de 35 m² avec cuisine fermée séparée, machine à laver privative et séjour meublé. Idéalement situé au niveau du carrefour dynamique Bouaziz / Quatre Chemins, permettant un accès immédiat aux transports et commerces.",
    amenities: [
      "Machine à laver privative incluse",
      "Porte blindée et serrure de haute sécurité",
      "Digicode pour l'accès à l'immeuble",
      "Eau courante H24 continue avec réserve",
      "Chauffage central individuel",
      "Climatisation réversible neuve",
      "Connexion internet haut débit incluse",
      "Cuisine équipée (frigo, plaques, four, vaisselle)",
      "Quartier vivant et commerçant"
    ],
    terms: "Loyer charges comprises. Séjour moyen ou long terme (dès 1 mois). Dépôt de garantie équivalent à 1 mois.",
    phone: "0550 98 16 18"
  },
  'prop-4': {
    title: "Appartement F2 Sérénité • Sud-Ouest",
    type: "Appartement F2 (42 m²)",
    category: "f2 femme",
    categoryLabel: "Résidence Féminine",
    location: "Sud Ouest / Zone des dépôts, Tizi Ouzou",
    surface: "42 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_kitchen_1793134860107.jpg",
    description: "Appartement F2 confortable de 42 m² composé d'un salon avec espace repas, d'une chambre à coucher fermée avec grande armoire, d'une cuisine moderne avec lave-linge et d'une salle de bain soignée. Immeuble sécurisé avec caméras et digicode.",
    amenities: [
      "Lave-linge privatif dans la cuisine",
      "Digicode et porte blindée",
      "Vidéosurveillance des parties communes",
      "Chauffage central complet (appart + couloirs)",
      "Eau courante H24 avec suppresseur automatique",
      "Climatisation split dans les pièces",
      "Fibre optique illimitée",
      "Mobilier complet et literie de qualité",
      "Règlement intérieur strict et respectueux"
    ],
    terms: "Charges complètes comprises. Bail déclaré. Possibilité de colocation féminine pour deux résidentes.",
    phone: "0550 98 16 18"
  },
  'prop-5': {
    title: "L'Atelier Urbain • F2 Standing Tizi-Ville",
    type: "Appartement F2 (46 m²)",
    category: "f2",
    categoryLabel: "Cadres & Pros",
    location: "Tizi-Ouzou Ville (Quartier central)",
    surface: "46 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_living_room_1793132217045.jpg",
    description: "Appartement F2 de 46 m² meublé avec finitions contemporaines, salon équipé d'une Smart TV et d'un bureau de travail, chambre séparée climatisée et cuisine américaine avec machine à laver. Conçu pour les cadres, enseignants ou couples.",
    amenities: [
      "Porte blindée et accès contrôlé par digicode",
      "Machine à laver privative et étendoir",
      "Internet Fibre Pro haut débit dédié",
      "Eau courante H24 chaude et froide continue",
      "Chauffage central dans tout le bâtiment",
      "Climatisation réversible haute performance",
      "Cuisine toute équipée avec ustensiles",
      "Règlement intérieur garantissant la quiétude",
      "Facturation entreprise disponible sur demande"
    ],
    terms: "Loyer tout compris (eau, électricité, chauffage, wifi). Convention société possible pour baux professionnels.",
    phone: "0550 98 16 18"
  },
  'prop-6': {
    title: "Appartement F3 Familial • Les Oliviers Bouaziz",
    type: "Appartement F3 (65 m²)",
    category: "f3",
    categoryLabel: "Grand F3 Meublé",
    location: "Bouaziz / Quatre Chemins, Tizi Ouzou",
    surface: "65 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_kitchen_1793134860107.jpg",
    description: "Grand F3 de 65 m² offrant un grand salon convivial avec balcon, 2 chambres à coucher indépendantes équipées de grands placards, une cuisine dînatoire avec machine à laver et une salle de bain avec baignoire. Très bien desservi.",
    amenities: [
      "2 Chambres meublées indépendantes",
      "Lave-linge privatif grande capacité",
      "Balcon avec vue dégagée",
      "Porte blindée et digicode sécurisé",
      "Caméras dans les espaces communs de l'immeuble",
      "Eau H24 sous pression continue",
      "Chauffage central complet (logement + communs)",
      "Climatisation dans le salon et chambres",
      "Fibre Wifi illimitée"
    ],
    terms: "Toutes charges courantes comprises. Longue durée privilégiée (6 mois à 1 an renouvelable).",
    phone: "0550 98 16 18"
  },
  'prop-7': {
    title: "L'Exécutif Thala • Grand F3 Haut de Gamme",
    type: "Appartement F3 de Maître (78 m²)",
    category: "f3",
    categoryLabel: "Grand Standing",
    location: "Thala-Allam, Tizi Ouzou",
    surface: "78 m²",
    image: "../../brain/b70ea64c-4911-4612-a1b2-fe5d74f2f2c5/apt_living_room_1793132217045.jpg",
    description: "Le sommet du confort locatif à Tizi Ouzou : F3 de 78 m² dans le quartier résidentiel paisible de Thala-Allam. Salon d'honneur, 2 suites parentales avec literie de luxe, cuisine complète avec lave-vaisselle et lave-linge, terrasse panoramique et garage fermé en sous-sol.",
    amenities: [
      "Grande terrasse avec vue panoramique",
      "Box garage fermé en sous-sol",
      "Lave-linge et Lave-vaisselle intégrés",
      "Porte blindée de haute sécurité",
      "Accès contrôlé par digicode et caméras 24/7",
      "Eau H24 garantie sans interruption",
      "Chauffage central intégrale et climatisation",
      "Fibre optique pro très haut débit",
      "Environnement d'un calme exceptionnel",
      "Règlement strict garantissant un standing irréprochable"
    ],
    terms: "Bail de 6 à 24 mois. Charges comprises. Idéal pour cadres dirigeants, directeurs de mission ou familles exigeantes.",
    phone: "0550 98 16 18"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCatalogueFilters();
  initHeroSearch();
  initStaySimulator();
  initFaqAccordion();
  initContactForm();
  initModalListeners();
  initPaletteTester();
});

// 1. Navigation Sticky & Menu Mobile
function initNavbar() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-toggle');
  const nav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('mobile-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
        toggleBtn.setAttribute('aria-expanded', false);
      });
    });
  }
}

// 2. Filtres du Catalogue
function initCatalogueFilters() {
  const filterBtns = document.querySelectorAll('.cat-filter-btn');
  const items = document.querySelectorAll('.property-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      filterProperties(filter, items);
    });
  });
}

function filterProperties(filter, items) {
  items.forEach(item => {
    const category = item.getAttribute('data-category');
    if (filter === 'all' || category.includes(filter)) {
      item.style.display = 'flex';
      item.style.animation = 'fadeIn 0.35s ease';
    } else {
      item.style.display = 'none';
    }
  });
}

// Raccourci de filtre global
window.filterByTag = function(tag) {
  const btn = document.querySelector(`.cat-filter-btn[data-filter="${tag}"]`);
  if (btn) {
    btn.click();
  } else {
    // Si bouton direct non trouvé, filtrer manuellement
    const items = document.querySelectorAll('.property-item');
    filterProperties(tag, items);
  }
  document.getElementById('logements').scrollIntoView({ behavior: 'smooth' });
};

// 3. Recherche Rapide du Hero
function initHeroSearch() {
  const searchBtn = document.getElementById('btn-hero-search');
  const typeSelect = document.getElementById('filter-type');
  const locSelect = document.getElementById('filter-location');
  const items = document.querySelectorAll('.property-item');

  if (!searchBtn) return;

  searchBtn.addEventListener('click', () => {
    const chosenType = typeSelect.value;
    const chosenLoc = locSelect.value;

    items.forEach(item => {
      const cat = item.getAttribute('data-category');
      const loc = item.getAttribute('data-location');

      const matchType = (chosenType === 'all' || cat.includes(chosenType));
      const matchLoc = (chosenLoc === 'all' || loc === chosenLoc);

      if (matchType && matchLoc) {
        item.style.display = 'flex';
        item.style.animation = 'fadeIn 0.35s ease';
      } else {
        item.style.display = 'none';
      }
    });

    document.getElementById('logements').scrollIntoView({ behavior: 'smooth' });
    showToast("Filtres appliqués sur les logements de Tizi Ouzou.");
  });
}

// 4. Modal Détails du Logement
window.openPropertyModal = function(propId) {
  const prop = PROPERTIES_DATA[propId];
  if (!prop) return;

  const modal = document.getElementById('property-modal');
  const content = document.getElementById('modal-dynamic-content');

  const amenitiesHtml = prop.amenities.map(a => `
    <div class="feature">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#58CDBF" stroke-width="2.2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${a}</span>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="modal-media-header">
      <img src="${prop.image}" alt="${prop.title}" class="modal-main-img">
    </div>
    
    <div class="modal-body">
      <div class="modal-tags-row">
        <span class="prop-type-badge">${prop.type}</span>
        <span class="tag-status ${prop.category.includes('femme') ? 'tag-female' : 'tag-pro'}" style="position:static;">
          ${prop.categoryLabel}
        </span>
        <span class="prop-charges-badge" style="margin-bottom:0;">
          ✓ Charges comprises (Eau H24, Chauffage, Fibre)
        </span>
      </div>

      <h3 class="modal-title">${prop.title}</h3>
      <div class="modal-location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#58CDBF" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span><strong>Quartier :</strong> ${prop.location}</span>
      </div>

      <p class="modal-desc">${prop.description}</p>

      <div class="modal-amenities-section">
        <h4 class="modal-section-title">Équipements &amp; Sécurité Inclus</h4>
        <div class="modal-amenities-grid">
          ${amenitiesHtml}
        </div>
      </div>

      <div style="margin-bottom: 24px; padding: 14px; background: #FAF8F5; border-radius: 8px; border: 1px solid rgba(14,40,51,0.08);">
        <strong style="display:block; font-size:12.5px; color:#0E2833; margin-bottom:4px;">Conditions &amp; Règlement :</strong>
        <p style="font-size:12.5px; color:#586B76; line-height:1.5;">${prop.terms}</p>
      </div>

      <div class="modal-cta-row">
        <a href="https://wa.me/213550000000?text=Bonjour,%20je%20souhaite%20visiter%20le%20bien%20:%20${encodeURIComponent(prop.title)}" target="_blank" rel="noopener noreferrer" class="modal-whatsapp-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.56C8.84 7.56 8.52 7.63 8.25 7.93C7.99 8.22 7.23 8.93 7.23 10.39C7.23 11.85 8.29 13.26 8.44 13.46C8.59 13.66 10.5 16.78 13.5 17.95C15.97 18.92 16.48 18.73 17.02 18.68C17.56 18.63 18.77 17.96 19.02 17.26C19.27 16.56 19.27 15.96 19.19 15.83C19.12 15.71 18.92 15.64 18.62 15.49C18.32 15.34 16.84 14.61 16.57 14.51C16.29 14.41 16.09 14.36 15.89 14.66C15.69 14.96 15.12 15.64 14.95 15.84C14.77 16.04 14.6 16.06 14.3 15.91C14 15.76 12.75 15.35 11.26 14.02C10.1 12.98 9.32 11.69 9.17 11.44C9.02 11.19 9.15 11.05 9.3 10.9C9.44 10.76 9.61 10.53 9.76 10.36C9.91 10.19 9.96 10.06 10.06 9.86C10.16 9.66 10.11 9.49 10.04 9.34C9.96 9.19 9.36 7.72 9.11 7.12C8.87 6.54 8.62 6.62 8.44 6.61C8.26 6.61 8.06 6.61 7.86 6.61L9.04 7.56Z"/></svg>
          <span>WhatsApp Direct</span>
        </a>

        <a href="tel:+213550981618" class="modal-phone-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
          <span>Appeler : 0550 98 16 18</span>
        </a>

        <button class="modal-action-btn" onclick="selectPropertyForBooking('${prop.title.replace(/'/g, "\\'")}')">
          <span>Pré-remplir le formulaire</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

function initModalListeners() {
  const modal = document.getElementById('property-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// Pré-remplir le formulaire de contact depuis la modal
window.selectPropertyForBooking = function(propTitle) {
  const modal = document.getElementById('property-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';

  const messageBox = document.getElementById('contact-message');
  if (messageBox) {
    messageBox.value = `Bonjour, je souhaite des renseignements et planifier une visite pour le logement suivant :\n"${propTitle}"\nCharges comprises (eau H24, chauffage, internet).`;
  }

  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  showToast(`Le bien "${propTitle}" a été sélectionné dans le formulaire.`);
};

// 5. Simulateur de Séjour
function initStaySimulator() {
  const form = document.getElementById('stay-simulator-form');
  const profileInputs = document.querySelectorAll('input[name="sim-profile"]');
  const roomSelect = document.getElementById('sim-room-type');
  const locSelect = document.getElementById('sim-location-select');
  const durationSelect = document.getElementById('sim-duration-select');

  const resultTitle = document.getElementById('sum-result-title');
  const resultDesc = document.getElementById('sum-result-desc');

  function updateSimulation() {
    const checkedProfile = document.querySelector('input[name="sim-profile"]:checked')?.value;
    const room = roomSelect.value;

    if (checkedProfile === 'femme') {
      resultTitle.textContent = room === 'studio' 
        ? "Studio Cocon en Résidence Sécurisée Femmes (16 à 35 m²)" 
        : "Appartement F2 Privatif en Résidence Féminine (40 à 46 m²)";
      resultDesc.textContent = "Résidence 100% réservée aux femmes. Portes blindées, digicodes, caméras dans les communs, eau H24, chauffage collectif et buanderie.";
    } else if (checkedProfile === 'cadre') {
      resultTitle.textContent = (room === 'f3') 
        ? "Grand F3 de Standing (50 à 80 m²) avec Parking" 
        : "Appartement F2 Meublé Design (40 à 46 m²)";
      resultDesc.textContent = "Équipement haut de gamme, fibre optique illimitée, bâche à eau continue et conventionnement société possible.";
    } else {
      resultTitle.textContent = (room === 'f3')
        ? "Appartement F3 Familial (50 à 80 m²)"
        : "Appartement F2 Meublé pour Couple (40 à 46 m²)";
      resultDesc.textContent = "Logement calme et soigné, règlement intérieur strict pour un voisinage sans nuisances sonores, toutes charges comprises.";
    }
  }

  profileInputs.forEach(input => input.addEventListener('change', updateSimulation));
  if (roomSelect) roomSelect.addEventListener('change', updateSimulation);
  if (locSelect) locSelect.addEventListener('change', updateSimulation);
  if (durationSelect) durationSelect.addEventListener('change', updateSimulation);

  // Soumission du simulateur
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const profile = document.querySelector('input[name="sim-profile"]:checked')?.value;
      const room = roomSelect.options[roomSelect.selectedIndex].text;
      const quartier = locSelect.options[locSelect.selectedIndex].text;
      const dur = durationSelect.options[durationSelect.selectedIndex].text;
      const date = document.getElementById('sim-start-date').value || 'Dès que possible';

      const contactInterest = document.getElementById('contact-interest');
      if (contactInterest) {
        if (profile === 'femme') contactInterest.value = 'residence-femme';
        else if (room.includes('F3')) contactInterest.value = 'f3';
        else if (room.includes('F2')) contactInterest.value = 'f2';
        else contactInterest.value = 'studio';
      }

      const contactZone = document.getElementById('contact-zone');
      if (contactZone) {
        contactZone.value = locSelect.value;
      }

      const messageBox = document.getElementById('contact-message');
      if (messageBox) {
        messageBox.value = `Demande issue du simulateur :\n- Typologie : ${room}\n- Quartier : ${quartier}\n- Durée prévue : ${dur}\n- Date d'emménagement souhaitée : ${date}\n- Formule tout compris souhaitée.`;
      }

      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      showToast("Vos critères ont été reportés dans le formulaire de contact ci-dessous.");
    });
  }
}

// 6. Accordéon FAQ
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 7. Formulaire de Contact Principal
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const situation = document.getElementById('contact-situation')?.value || '';

    if (!name || !phone || !situation) {
      showToast("Veuillez renseigner votre nom, votre numéro de téléphone et votre situation.");
      return;
    }

    showToast(`Merci ${name} ! Votre demande a été enregistrée. Notre gestionnaire vous contactera au ${phone} très rapidement.`);
    form.reset();
  });
}

// Utilité : Notification Toast
function showToast(message) {
  const toast = document.getElementById('site-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

// 8. Testeur de Palette D.A. (Charte Validée vs Variante Affiche Résidence)
function initPaletteTester() {
  const btnStandard = document.getElementById('theme-btn-standard');
  const btnHeritage = document.getElementById('theme-btn-heritage');

  if (!btnStandard || !btnHeritage) return;

  btnStandard.addEventListener('click', () => {
    document.body.classList.remove('theme-residence-heritage');
    btnStandard.classList.add('active');
    btnHeritage.classList.remove('active');
    showToast("Charte Validée activée : Bleu Nuit Minéral & Turquoise Solaire.");
  });

  btnHeritage.addEventListener('click', () => {
    document.body.classList.add('theme-residence-heritage');
    btnHeritage.classList.add('active');
    btnStandard.classList.remove('active');
    showToast("Variante Affiche Résidence activée : Touches Cyan (#22A6E6), Orange (#F37A1F) & Grenat (#961A28).");
  });
}
