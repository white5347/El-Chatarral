function leerMas(postId) {
    var contenido = document.querySelector(`#${postId} .contenido`);
    var contenidoAdicional = document.querySelector(`#${postId} .contenido-adicional`);
    var boton = document.querySelector(`#${postId} .leer-mas`);

    if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
        contenidoAdicional.style.display = "none";
        boton.textContent = "Leer más";
    } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
        contenidoAdicional.style.display = "block";
        boton.textContent = "Leer menos";
    }
}
