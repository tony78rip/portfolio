window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }, 3000);
});

const map = L.map('map').setView([48.866, 2.15], 11);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


L.marker([48.8831, 2.1347]).addTo(map)
  .bindPopup('📍 Le Vésinet – Possible localisation')
  .openPopup();


L.marker([48.885, 2.212]).addTo(map)
  .bindPopup('📍 Mont Valérien (Nanterre) – Autre possibilité');


L.marker([48.7412, 1.8493]).addTo(map)
  .bindPopup('📍 Osmoy (78) – je vie ici');

