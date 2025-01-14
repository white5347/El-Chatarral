document.addEventListener("DOMContentLoaded", function() {
    const collageItems = document.querySelectorAll('.collage-item');

    collageItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
// Función para alternar el tamaño del video al hacer clic
function toggleVideoSize(videoElement) {
    // Alterna la clase "enlarged" en el video
    videoElement.classList.toggle('enlarged');
}
