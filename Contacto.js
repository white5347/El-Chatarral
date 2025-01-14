function validarFormulario() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("phone").value;
    const mensaje = document.getElementById("message").value;

    // Validación del campo Nombre
    if (nombre == "") {
        alert("El nombre es obligatorio.");
        return false;
    }

    // Validación del correo electrónico
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
    }

    // Validación del campo Mensaje
    if (mensaje == "") {
        alert("El mensaje no puede estar vacío.");
        return false;
    }

    // Si todo es válido, mostramos un mensaje de éxito
    alert("Formulario enviado correctamente.");
    return true;
}
