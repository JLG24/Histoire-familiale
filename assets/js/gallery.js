document.addEventListener("DOMContentLoaded", function () {

  if (typeof PERSON_ID === "undefined") return;

  const container = document.getElementById("timeline");
  if (!container) return;

  // Filtrer + trier chronologiquement
  const filtered = photos
    .filter(photo => photo.personnes.includes(PERSON_ID))
    .sort((a, b) => a.date.localeCompare(b.date));

  let currentYear = "";
  let currentPhotos = [];
  let currentIndex = 0;

  // Génération galerie chronologique
  filtered.forEach((photo, index) => {

    const year = photo.date.substring(0, 4);

    if (year !== currentYear) {
      currentYear = year;
      const yearTitle = document.createElement("h2");
      yearTitle.className = "year";
      yearTitle.textContent = year;
      container.appendChild(yearTitle);
    }

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = "../../ancetres/photos/miniatures/" + photo.file;
    img.alt = photo.titre;
    img.style.cursor = "pointer";

    img.onclick = () => openLightbox(index);

    const caption = document.createElement("figcaption");
    caption.textContent = photo.titre;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);

    currentPhotos.push(photo);
  });

  // LIGHTBOX

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

 function openLightbox(index) {
  currentIndex = index;
  const photo = currentPhotos[index];

  lightbox.classList.add("active");   // ← changement ici

  lightboxImg.src = "../../ancetres/photos/originaux/" + photo.file;
  caption.textContent = photo.date + " — " + photo.titre;
}

function closeLightbox() {
  lightbox.classList.remove("active");  // ← changement ici
}

  function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentPhotos.length - 1;
    if (currentIndex >= currentPhotos.length) currentIndex = 0;
    openLightbox(currentIndex);
  }

  document.querySelector(".close").onclick = closeLightbox;

  lightbox.onclick = function (e) {
    if (e.target === lightbox) closeLightbox();
  };

  document.querySelector(".prev").onclick = () => changeSlide(-1);
  document.querySelector(".next").onclick = () => changeSlide(1);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
  });

});