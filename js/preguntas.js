document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las preguntas
    const preguntas = document.querySelectorAll('.pregunta');

    // Agrega un evento a cada pregunta
    preguntas.forEach(function(pregunta) {
        pregunta.addEventListener('click', function() {
            // Encuentra el elemento de la respuesta
            const respuesta = this.querySelector('.respuesta');
            const icono = this.querySelector('.icono-flecha');
            
            // Alterna la visibilidad de la respuesta
            if (respuesta.style.display === "none" || respuesta.style.display === "") {
                respuesta.style.display = "block";
                icono.innerHTML = "&#x25B2;"; // Flecha hacia arriba
            } else {
                respuesta.style.display = "none";
                icono.innerHTML = "&#x25BC;"; // Flecha hacia abajo
            }
        });
    });
});