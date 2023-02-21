// Obtener el botón de "Mostrar más"
const mostrarMasBtn = document.getElementById("mostrar-mas");
// Obtener el botón de "Ocultar"
const ocultarBtn = document.getElementById("ocultar");
// Obtener la sección de "Más información"
const masInfo = document.getElementById("mas-info");
// Obtener todos los elementos de habilidades
const habilidades = document.querySelectorAll(".habilidad");

// Agregar un controlador de eventos al botón de "Mostrar más"
mostrarMasBtn.addEventListener("click", function() {
  // Mostrar la sección de "Más información"
  masInfo.style.display = "block";
});

// Agregar un controlador de eventos al botón de "Ocultar"
ocultarBtn.addEventListener("click", function() {
  // Ocultar la sección de "Más información"
  masInfo.style.display = "none";
});
