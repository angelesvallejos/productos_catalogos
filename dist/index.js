"use strict";
const botonPrueba = document.querySelector("#boton-prueba");
const mensajePrueba = document.querySelector("#mensaje-prueba");
if (botonPrueba !== null && mensajePrueba !== null) {
    botonPrueba.addEventListener("click", () => {
        mensajePrueba.textContent = "¡La conexión funciona!";
    });
}
const buscador = document.querySelector("#fNombre");
if (buscador !== null && mensajePrueba !== null) {
    buscador.addEventListener("input", () => {
        mensajePrueba.textContent = "Estás buscando: " + buscador.value;
    });
}
