function calcularTotal(idMaterial, precioPorKg, idTotal) {
    const cantidad = parseFloat(document.getElementById(`cantidad${capitalizeFirstLetter(idMaterial)}`).value) || 0;

    const totalElement = document.getElementById(idTotal);
    totalElement.textContent = "Calculando...";

    setTimeout(() => {
        const total = cantidad * precioPorKg;
        totalElement.textContent = total.toFixed(2);
    }, 500); 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
