// Initialisation de la carte
var map = L.map('map').setView([50.35, 2.75], 11);

// Fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([50.377, 2.705]) // Carency
  .addTo(map)
  .bindPopup(
    "<strong>7 mai 1915</strong><br>" +
    "Régiment en position dans le secteur de Carency.<br>" +
    "<em>Source : JMO du régiment</em>"
  );
L.marker([50.366, 2.742]) // Souchez
  .addTo(map)
  .bindPopup(
    "<strong>9 mai 1915</strong><br>" +
    "Attaque en direction de Souchez lors de l’offensive d’Artois.<br>" +
    "<em>Source : JMO, 9 mai 1915</em>"
  );
L.circleMarker([50.366, 2.742], {
  radius: 6,
  color: "black",
  fillColor: "black",
  fillOpacity: 0.8
})
.addTo(map)
.bindPopup(
  "<strong>10–12 mai 1915</strong><br>" +
  "Combats intenses et pertes importantes dans le secteur de Souchez.<br>" +
  "<em>JMO du régiment</em>"
);
L.marker([50.401, 2.698]) // Ablain-Saint-Nazaire
  .addTo(map)
  .bindPopup(
    "<strong>13 mai 1915</strong><br>" +
    "Relève du régiment et repli vers Ablain-Saint-Nazaire.<br>" +
    "<em>JMO, 13 mai 1915</em>"
  );
var parcours = [
  [50.377, 2.705], // Carency
  [50.366, 2.742], // Souchez
  [50.401, 2.698]  // Ablain-Saint-Nazaire
];

L.polyline(parcours, {
  color: "black",
  weight: 2,
  dashArray: "4,4"
}).addTo(map);
L.marker([50.366, 2.742])
  .addTo(map)
  .bindTooltip("Souchez (9–12 mai 1915)", { permanent: true })
  .bindPopup(
    "<strong>Combats de Souchez</strong><br>" +
    "Pertes importantes signalées au JMO.<br>" +
    "<em>Source : JMO du régiment</em>"
  );
