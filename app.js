/**
 * LOCAPPART — Direction Artistique & Studio Interactif
 * Logique JavaScript native (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initStressTest();
  initIconsAndFavicons();
});

// Toast notification pour la copie de codes HEX
window.copyHex = function(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Code couleur ${hex} copié dans le presse-papier !`);
  }).catch(() => {
    showToast(`Couleur : ${hex}`);
  });
};

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// 1. Filtrage par onglets
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = {
    dir1: document.getElementById('card-dir1'),
    dir2: document.getElementById('card-dir2'),
    dir3: document.getElementById('card-dir3')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');

      if (target === 'all') {
        Object.values(cards).forEach(c => {
          if (c) {
            c.style.display = 'block';
            c.style.animation = 'fadeIn 0.3s ease';
          }
        });
      } else {
        Object.keys(cards).forEach(key => {
          if (cards[key]) {
            if (key === target) {
              cards[key].style.display = 'block';
              cards[key].style.animation = 'scaleIn 0.35s ease';
              cards[key].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
              cards[key].style.display = 'none';
            }
          }
        });
      }
    });
  });
}

// 2. Gestion du Stress Test (Changement de surfaces)
function initStressTest() {
  const stButtons = document.querySelectorAll('.st-btn');
  const stage = document.getElementById('stress-stage');

  stButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      stButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const surface = btn.getAttribute('data-surface');
      stage.className = `stress-test-stage surface-${surface}`;

      // Actualiser les logos selon fond clair ou sombre
      const isDark = (surface === 'dark' || surface === 'photo');
      renderStressLogos(isDark);
    });
  });

  // Rendu initial (fond clair)
  renderStressLogos(false);
}

// 3. Rendu dynamique des logos dans le Stress-Test
function renderStressLogos(isDark) {
  const c1 = document.getElementById('canvas-dir1');
  const c2 = document.getElementById('canvas-dir2');
  const c3 = document.getElementById('canvas-dir3');

  // Direction 1 Logo SVG
  if (c1) {
    if (isDark) {
      c1.innerHTML = `
        <svg viewBox="0 0 340 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(8, 6) scale(0.72)">
            <path d="M16 24C16 16.268 22.268 10 30 10H36C39.3137 10 42 12.6863 42 16V60C42 63.3137 44.6863 66 48 66H70C73.3137 66 76 68.6863 76 72V76C76 79.3137 73.3137 82 70 82H28C21.3726 82 16 76.6274 16 70V24Z" fill="#F4F1E9"/>
            <path d="M48 20C48 16.6863 50.6863 14 54 14H60C63.3137 14 66 16.6863 66 20V50C66 52.2091 64.2091 54 62 54H52C49.7909 54 48 52.2091 48 50V20Z" fill="#75D6C5"/>
            <circle cx="57" cy="26" r="2.5" fill="#102D3A"/>
          </g>
          <g transform="translate(82, 0)">
            <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" letter-spacing="-0.8">LOC</text>
            <text x="73" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="400" fill="#E2EDF0" letter-spacing="-0.5">APPART</text>
            <circle cx="218" cy="40" r="4.5" fill="#75D6C5"/>
            <text x="2" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" fill="#93B4C1" letter-spacing="3.2">RÉSIDENCES &amp; APPARTEMENTS • TIZI OUZOU</text>
          </g>
        </svg>
      `;
    } else {
      c1.innerHTML = `
        <svg viewBox="0 0 340 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(8, 6) scale(0.72)">
            <path d="M16 24C16 16.268 22.268 10 30 10H36C39.3137 10 42 12.6863 42 16V60C42 63.3137 44.6863 66 48 66H70C73.3137 66 76 68.6863 76 72V76C76 79.3137 73.3137 82 70 82H28C21.3726 82 16 76.6274 16 70V24Z" fill="#0E2733"/>
            <path d="M48 20C48 16.6863 50.6863 14 54 14H60C63.3137 14 66 16.6863 66 20V50C66 52.2091 64.2091 54 62 54H52C49.7909 54 48 52.2091 48 50V20Z" fill="#58CDBF"/>
            <circle cx="57" cy="26" r="2.5" fill="#FFFFFF"/>
          </g>
          <g transform="translate(82, 0)">
            <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#0E2733" letter-spacing="-0.8">LOC</text>
            <text x="73" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="400" fill="#1A4A5E" letter-spacing="-0.5">APPART</text>
            <circle cx="218" cy="40" r="4.5" fill="#58CDBF"/>
            <text x="2" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" fill="#6B8894" letter-spacing="3.2">RÉSIDENCES &amp; APPARTEMENTS • TIZI OUZOU</text>
          </g>
        </svg>
      `;
    }
  }

  // Direction 2 Logo SVG
  if (c2) {
    if (isDark) {
      c2.innerHTML = `
        <svg viewBox="0 0 340 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 6) scale(0.72)">
            <path d="M22 22C22 15.3726 27.3726 10 34 10C40.6274 10 46 15.3726 46 22V58H66C72.6274 58 78 63.3726 78 70C78 76.6274 72.6274 82 66 82H34C27.3726 82 22 76.6274 22 70V22Z" fill="#FAF8F5"/>
            <path d="M38 36C38 27.1634 45.1634 20 54 20C62.8366 20 70 27.1634 70 36V54H54C45.1634 54 38 45.9543 38 36Z" fill="#6EE0CC"/>
            <circle cx="54" cy="36" r="5" fill="#123847"/>
          </g>
          <g transform="translate(84, 0)">
            <text x="0" y="44" font-family="'Sora', sans-serif" font-size="33" font-weight="700" fill="#FFFFFF" letter-spacing="-0.5">loc<tspan font-weight="300" fill="#D3E5EB">appart</tspan></text>
            <circle cx="186" cy="38" r="4" fill="#6EE0CC"/>
            <text x="2" y="62" font-family="'Sora', sans-serif" font-size="8.5" font-weight="600" fill="#9FB4BE" letter-spacing="3.5">LOGEMENTS MEUBLÉS • TIZI OUZOU</text>
          </g>
        </svg>
      `;
    } else {
      c2.innerHTML = `
        <svg viewBox="0 0 340 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 6) scale(0.72)">
            <path d="M22 22C22 15.3726 27.3726 10 34 10C40.6274 10 46 15.3726 46 22V58H66C72.6274 58 78 63.3726 78 70C78 76.6274 72.6274 82 66 82H34C27.3726 82 22 76.6274 22 70V22Z" fill="#123847"/>
            <path d="M38 36C38 27.1634 45.1634 20 54 20C62.8366 20 70 27.1634 70 36V54H54C45.1634 54 38 45.9543 38 36Z" fill="#41BBAA"/>
            <circle cx="54" cy="36" r="5" fill="#FAF8F5"/>
          </g>
          <g transform="translate(84, 0)">
            <text x="0" y="44" font-family="'Sora', sans-serif" font-size="33" font-weight="700" fill="#0E2833" letter-spacing="-0.5">loc<tspan font-weight="300" fill="#1A4A5E">appart</tspan></text>
            <circle cx="186" cy="38" r="4" fill="#41BBAA"/>
            <text x="2" y="62" font-family="'Sora', sans-serif" font-size="8.5" font-weight="600" fill="#758B94" letter-spacing="3.5">LOGEMENTS MEUBLÉS • TIZI OUZOU</text>
          </g>
        </svg>
      `;
    }
  }

  // Direction 3 Logo SVG
  if (c3) {
    if (isDark) {
      c3.innerHTML = `
        <svg viewBox="0 0 340 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8) scale(0.68)">
            <rect x="18" y="10" width="20" height="72" rx="6" fill="#FFFFFF"/>
            <rect x="42" y="28" width="18" height="54" rx="5" fill="#D2E4EA"/>
            <rect x="64" y="52" width="18" height="30" rx="5" fill="#32D2B8"/>
            <circle cx="73" cy="40" r="5" fill="#F3A759"/>
          </g>
          <g transform="translate(86, 0)">
            <text x="0" y="44" font-family="'Epilogue', sans-serif" font-size="33" font-weight="800" fill="#FFFFFF" letter-spacing="-0.8">LOC<tspan font-weight="500" fill="#C5DCE4">APPART</tspan></text>
            <rect x="226" y="30" width="8" height="8" rx="2" fill="#F3A759"/>
            <text x="2" y="62" font-family="'Epilogue', sans-serif" font-size="8.5" font-weight="600" fill="#91ABB7" letter-spacing="3.4">IMMOBILIER RÉSIDENTIEL • TIZI OUZOU</text>
          </g>
        </svg>
      `;
    } else {
      c3.innerHTML = `
        <svg viewBox="0 0 340 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8) scale(0.68)">
            <rect x="18" y="10" width="20" height="72" rx="6" fill="#0D222E"/>
            <rect x="42" y="28" width="18" height="54" rx="5" fill="#184357"/>
            <rect x="64" y="52" width="18" height="30" rx="5" fill="#2EB8A1"/>
            <circle cx="73" cy="40" r="5" fill="#E29D52"/>
          </g>
          <g transform="translate(86, 0)">
            <text x="0" y="44" font-family="'Epilogue', sans-serif" font-size="33" font-weight="800" fill="#0D222E" letter-spacing="-0.8">LOC<tspan font-weight="500" fill="#1B495C">APPART</tspan></text>
            <rect x="226" y="30" width="8" height="8" rx="2" fill="#E29D52"/>
            <text x="2" y="62" font-family="'Epilogue', sans-serif" font-size="8.5" font-weight="600" fill="#718B97" letter-spacing="3.4">IMMOBILIER RÉSIDENTIEL • TIZI OUZOU</text>
          </g>
        </svg>
      `;
    }
  }
}

// 4. Initialisation des favicons miniatures dans le stress test
function initIconsAndFavicons() {
  const i1 = document.getElementById('sub-icon-1');
  const i2 = document.getElementById('sub-icon-2');
  const i3 = document.getElementById('sub-icon-3');

  if (i1) {
    i1.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="24" fill="#0E2733"/>
        <path d="M26 28C26 22 30 18 36 18H40C43 18 45 20 45 23V58C45 61 47 63 50 63H68C71 63 73 65 73 68V72C73 75 71 77 68 77H34C29 77 26 74 26 69V28Z" fill="#F4F1E9"/>
        <path d="M51 26C51 23 53 21 56 21H60C63 21 65 23 65 26V50C65 52 63 54 61 54H55C53 54 51 52 51 50V26Z" fill="#58CDBF"/>
      </svg>
    `;
  }

  if (i2) {
    i2.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="24" fill="#123847"/>
        <path d="M26 22C26 16.5 30.5 12 36 12C41.5 12 46 16.5 46 22V56H64C69.5 56 74 60.5 74 66C74 71.5 69.5 76 64 76H36C30.5 76 26 71.5 26 66V22Z" fill="#FAF8F5"/>
        <path d="M38 34C38 27.5 43.5 22 50 22C56.5 22 62 27.5 62 34V48H50C43.5 48 38 41.5 38 34Z" fill="#41BBAA"/>
      </svg>
    `;
  }

  if (i3) {
    i3.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="24" fill="#0D222E"/>
        <rect x="22" y="16" width="18" height="64" rx="5" fill="#FFFFFF"/>
        <rect x="44" y="32" width="16" height="48" rx="4" fill="#88B8C9"/>
        <rect x="64" y="52" width="16" height="28" rx="4" fill="#2EB8A1"/>
      </svg>
    `;
  }
}
