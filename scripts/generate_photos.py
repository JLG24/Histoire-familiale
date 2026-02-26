import os
import json
import re

PHOTOS_DIR = "../ancetres/photos/miniatures"
OUTPUT_FILE = "../ancetres/photos/data/photos.js"

photos = []

for filename in sorted(os.listdir(PHOTOS_DIR)):
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):

        name_without_ext = os.path.splitext(filename)[0]

        # Séparer date du reste
        parts = name_without_ext.split("_", 1)
        date = parts[0]

        reste = parts[1] if len(parts) > 1 else ""

        # --- EXTRACTION DES PERSONNES (_p1-p3) ---
        match = re.search(r"_p([\d\-]+)", reste)

        if match:
            persons_str = match.group(1)
            personnes = [int(p) for p in persons_str.split("-") if p.isdigit()]
            reste = re.sub(r"_p[\d\-]+", "", reste)
        else:
            personnes = []
        # Nettoyage titre
        titre = reste.replace("_", " ").strip().capitalize()
        photos.append({
            "file": filename,
            "titre": titre,
            "date": date,
            "personnes": personnes
        })
    
print(f"Traitement : {filename}")    

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write("const photos = ")
    json.dump(photos, f, indent=2, ensure_ascii=False)
    f.write(";")

print("photos.js généré avec succès.")