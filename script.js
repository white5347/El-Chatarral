const imagenDestacada = document.getElementById("imagen-destacada");
const imagenes = ["img/chatarra.png", "img/reciclaje.jpg", "img/metales.jpg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % imagenes.length;
    imagenDestacada.src = imagenes[index];
}, 5000);

const toggleButton = document.getElementById("toggleInfo");
const infoText = document.getElementById("informacion");

toggleButton.addEventListener("click", () => {
    if (infoText.style.display === "none") {
        infoText.style.display = "block"; // Mostrar texto
        toggleButton.textContent = "Leer menos";
    } else {
        infoText.style.display = "none"; // Ocultar texto
        toggleButton.textContent = "Leer más";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll('.producto');
    
    // Lógica de alternancia de productos (puedes ajustar la lógica si lo necesitas)
    setInterval(() => {
        productos.forEach(producto => {
            producto.classList.toggle('activo');
        });
    }, 5000); // Alterna cada 5 segundos
});
