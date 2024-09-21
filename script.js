let currentImageIndex = 1; // Aktueller Index der Bilder
const images = [
    document.getElementById('closed-envelope'),
    document.getElementById('open-envelope'),
    document.getElementById('image1'),
    document.getElementById('image2'),
];

document.getElementById('start-button').addEventListener('click', function() {
    // Aktuelles Bild ausblenden
    if (currentImageIndex > 0) {
        images[currentImageIndex - 1].style.display = 'none'; // Vorheriges Bild ausblenden
    }

    // Nächstes Bild anzeigen
    if (currentImageIndex < images.length) {
        images[currentImageIndex].style.display = 'block'; // Nächstes Bild einblenden
    } else {
        // Wenn das letzte Bild erreicht ist, zurücksetzen
        currentImageIndex = 0; // Zurück zum ersten Bild
        images[currentImageIndex].style.display = 'block'; // Ersten Bild einblenden
    }

    currentImageIndex++; // Index erhöhen
});
