document.addEventListener('DOMContentLoaded', () => {
  const BACKEND_URL = ''; // Use relative paths for portability

  // --- Configuration for all universities ---
  const universityConfigs = {
    chanco: {
      name: 'Chanco',
      city: 'zomba',
      logo: './image/chanco.jpg',
      theme: {
        '--primary-color': '#003366',
        '--accent-color': '#C5A100',
        '--text-dark': '#333333',
        '--text-light': '#ffffff',
        '--background': '#f5f7fa',
        '--card-bg': '#ffffff',
        '--card-hover-bg': '#f8f5e6',
        '--header-bg': 'var(--primary-color)',
        '--shadow-focus': 'rgba(197, 161, 0, 0.4)',
      },
    },
    mubas: {
      name: 'MUBAS',
      city: 'blantyre',
      logo: './image/mubas-logo.jpg',
      theme: {
        '--primary-color': '#002147',
        '--accent-color': '#005BAA',
        '--text-dark': '#333333',
        '--text-light': '#ffffff',
        '--background': '#f8fafc',
        '--card-bg': '#ffffff',
        '--card-hover-bg': '#f0f7ff',
        '--header-bg': 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
        '--shadow-focus': 'rgba(0, 91, 170, 0.2)',
      },
    },
    luanar: {
      name: 'LUANAR',
      city: 'lilongwe',
      logo: './image/Luanar logo.jpg',
      theme: {
        '--primary-color': '#014421',
        '--accent-color': '#4CAF50',
        '--text-dark': '#1e293b',
        '--text-light': '#ffffff',
        '--background': '#f8fafc',
        '--card-bg': '#ffffff',
        '--card-hover-bg': '#f0f9f0',
        '--header-bg': 'var(--primary-color)',
        '--shadow-focus': 'rgba(76, 175, 80, 0.4)',
      },
    },
    mzuni: {
      name: 'MZUNI',
      city: 'mzuzu',
      logo: './image/Mzuni-logo-NEW-2019x2048.png',
      theme: {
        '--primary-color': '#006400',
        '--accent-color': '#d4af37',
        '--text-dark': '#222',
        '--text-light': '#ffffff',
        '--background': '#f8fafc',
        '--card-bg': 'white',
        '--card-hover-bg': '#f5fff5',
        '--header-bg': 'linear-gradient(135deg, var(--primary-color) 0%, #228B22 100%)',
        '--shadow-focus': 'rgba(212, 175, 55, 0.4)',
      },
    },
    kuhes: {
      name: 'KUHeS',
      city: 'blantyre',
      logo: './image/Kuhes.jpg',
      theme: { '--primary-color': '#2E2E84', '--accent-color': '#D77A1F', '--text-dark': '#333', '--text-light': '#fff', '--background': '#f8fafc', '--card-bg': 'white', '--card-hover-bg': '#fff8f0', '--header-bg': 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', '--shadow-focus': 'rgba(215, 122, 31, 0.4)' },
    },
    biu: {
      name: 'BIU',
      city: 'blantyre',
      logo: './image/biu-logo.png',
      theme: { '--primary-color': '#0A2342', '--accent-color': '#D4AF37', '--text-dark': '#333', '--text-light': '#fff', '--background': '#f9f9f9', '--card-bg': 'white', '--card-hover-bg': '#fffaf0', '--header-bg': 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', '--shadow-focus': 'rgba(212, 175, 55, 0.4)' },
    },
    magu: {
      name: 'MAGU',
      city: 'lilongwe',
      logo: './image/magu.png',
      theme: { '--primary-color': '#002366', '--accent-color': '#FF8C00', '--text-dark': '#002366', '--text-light': '#ffffff', '--background': '#f8f9fa', '--card-bg': '#e6ecff', '--card-hover-bg': '#d6e0ff', '--header-bg': 'var(--primary-color)', '--shadow-focus': 'rgba(255, 140, 0, 0.5)' },
    },
    cu: { name: 'CU', city: 'thyolo', logo: './image/cu.png', theme: { '--primary-color': '#722F37', '--accent-color': '#C0A062', '--text-dark': '#2C0703', '--text-light': '#ffffff', '--background': '#F8F1E5', '--card-bg': 'rgba(255,255,255,0.9)', '--card-hover-bg': '#fff', '--header-bg': 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', '--shadow-focus': 'rgba(192, 160, 98, 0.4)' } },
    livingstonia: { name: 'Livingstonia', city: 'rumphi', logo: './image/Living.jpg', theme: { '--primary-color': '#5C4033', '--accent-color': '#B38B6D', '--text-dark': '#3E2723', '--text-light': '#ffffff', '--background': '#F9F6F2', '--card-bg': '#F5EDE6', '--card-hover-bg': '#E8D5C5', '--header-bg': 'var(--accent-color)', '--shadow-focus': 'rgba(179,139,109,0.5)' } },
    ekwendeni: { name: 'Ekwendeni', city: 'ekwendeni', logo: './image/Ekwendeni.jpg', theme: { '--primary-color': '#00796b', '--accent-color': '#ffd54f', '--text-dark': '#004d4d', '--text-light': '#ffffff', '--background': '#f0fafa', '--card-bg': 'white', '--card-hover-bg': '#f5f5f5', '--header-bg': 'var(--primary-color)', '--shadow-focus': 'rgba(255, 213, 79, 0.5)' } },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const university = urlParams.get('university') || 'mubas';
  const config = universityConfigs[university] || universityConfigs.mubas;
  const city = config.city;

  document.title = `${config.name} Hostels`;
  document.getElementById('uniLogo').src = config.logo;
  document.getElementById('uniLogo').alt = `${config.name} Logo`;

  const root = document.documentElement;
  for (const [key, value] of Object.entries(config.theme)) {
    root.style.setProperty(key, value);
  }
  root.style.setProperty('--border-radius', '12px');
  root.style.setProperty('--shadow', '0 4px 10px rgba(0, 0, 0, 0.1)');
  root.style.setProperty('--shadow-hover', '0 10px 25px rgba(0, 0, 0, 0.15)');
  root.style.setProperty('--transition', 'all 0.3s ease');

  const searchInput = document.getElementById('searchInput');
  const priceFilter = document.getElementById('priceFilter');
  const occupancyFilter = document.getElementById('occupancyFilter');
  const genderFilter = document.getElementById('genderFilter');
  const hostelsContainer = document.getElementById('hostelsContainer');
  const noResults = document.getElementById('noResults');

  async function fetchHostels() {
    try {
      hostelsContainer.innerHTML = `<div class="loading"><div class="spinner"></div></div>`;
      noResults.style.display = 'none';

      const params = new URLSearchParams({
        search: searchInput.value.trim(),
        maxPrice: priceFilter.value,
        occupancy: occupancyFilter.value,
        genderType: genderFilter.value,
      });
      const backendURL = `${BACKEND_URL}/api/universities/${config.city}/hostels?${params.toString()}`;

      const res = await fetch(backendURL);
      if (!res.ok) throw new Error('Failed to fetch hostels');
      const hostels = await res.json();
      renderHostels(hostels);
    } catch (err) {
      hostelsContainer.innerHTML = `
        <div id="error-state">
            <i class="fas fa-exclamation-triangle" style="font-size:2rem;"></i>
            <p>Error loading hostels: ${err.message}</p>
            <button onclick="location.reload()" style="margin-top:10px;padding:5px 10px;background:var(--accent-color);color:var(--primary-color);border:none;border-radius:4px;cursor:pointer;">Try Again</button>
        </div>`;
    }
  }

  function renderHostels(hostels) {
    hostelsContainer.innerHTML = '';
    noResults.style.display = hostels.length === 0 ? 'block' : 'none';

    const getPhotoURL = (photoUrl) => {
      const placeholder = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
      if (!photoUrl) return placeholder;
      if (photoUrl.startsWith('http')) return photoUrl;
      return BACKEND_URL + (photoUrl.startsWith('/') ? '' : '/') + photoUrl;
    };

    hostels.forEach(h => {
      const hostelType = (h.hostelType || '').toLowerCase().trim();
      let badgeText = '';
      if (hostelType === 'both' || hostelType.includes('female and male')) badgeText = 'Both';
      else if (hostelType === 'female') badgeText = 'Female';
      else if (hostelType === 'male') badgeText = 'Male';

      const card = document.createElement('a');
      card.className = 'hostel-card';
      card.href = '#';
      card.innerHTML = `
        ${badgeText ? `<span class="hostel-badge">${badgeText}</span>` : ''}
        <img src="${getPhotoURL(h.photo)}" alt="Hostel near ${city}" class="hostel-image">
        <div class="hostel-info">
            <h3><i class="fas fa-map-marker-alt"></i> ${h.location}</h3>
            <div class="hostel-details">
                <div><i class="fas fa-users"></i> ${h.occupancy} student${h.occupancy > 1 ? 's' : ''}</div>
                <div><i class="fas fa-venus-mars"></i> ${h.hostelType}</div>
            </div>
            <div class="hostel-price"><i class="fas fa-tag"></i> K${h.rent.toLocaleString()}/month</div>
        </div>
      `;
      card.addEventListener('click', e => {
        e.preventDefault();
        localStorage.setItem('selectedHostelId', h._id);
        localStorage.setItem('selectedUniversity', university);
        window.location.href = 'all-details.html';
      });
      hostelsContainer.appendChild(card);
    });
  }

  let searchTimeout;
  function handleFilterChange() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(fetchHostels, 300);
  }

  [searchInput, priceFilter, occupancyFilter, genderFilter].forEach(el => {
    if (el) el.addEventListener('input', handleFilterChange);
  });

  fetchHostels();
});