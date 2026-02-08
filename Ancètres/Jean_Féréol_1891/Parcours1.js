// Création de la carte
var map = L.map('map').setView([49.0, 2.5], 6);

// Fond de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([45.158, 1.533]) // Cornil (Corrèze)
  .addTo(map)
  .bindPopup(
    "<strong>2 août 1914</strong><br>" +
    "Mobilisation générale<br>" +
    "Bureau de recrutement de Brive"
  );
var etapes = [
  {
    lieu: "Cornil",
    coords: [45.158, 1.533],
    texte: "<strong>Août 1914</strong><br>Mobilisation – dépôt du 126e RI"
  },
  {
    lieu: "Marne",
    coords: [49.050, 3.900],
    texte: "<strong>Septembre 1914</strong><br>Bataille de la Marne<br>JMO 126e RI"
  },
  {
    lieu: "Artois",
    coords: [50.350, 2.750],
    texte: "<strong>Mai 1915</strong><br>Offensive d’Artois"
  }
];

etapes.forEach(function(e) {
  L.marker(e.coords)
    .addTo(map)
    .bindPopup(e.texte);
});
var trajet = [
  [45.158, 1.533],
  [49.050, 3.900],
  [50.350, 2.750]
];

L.polyline(trajet, {
  color: 'black',
  weight: 2,
  dashArray: '5,5'
}).addTo(map);
L.circleMarker([50.360, 2.740], {
  radius: 6,
  color: 'black',
  fillColor: 'black',
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(
  "<strong>12 octobre 1915</strong><br>" +
  "Tué à l’ennemi<br>" +
  "Secteur de Souchez"
);
