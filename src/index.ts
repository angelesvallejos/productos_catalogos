const botonPrueba = document.querySelector<HTMLButtonElement>("#boton-prueba");
const mensajePrueba = document.querySelector<HTMLParagraphElement>("#mensaje-prueba");
if (botonPrueba !== null && mensajePrueba !== null) 
{
    botonPrueba.addEventListener("click", () => {
        mensajePrueba.textContent = "¡La conexión funciona!";
    });
}


const buscador = document.querySelector<HTMLInputElement>("#fNombre");
if (buscador !== null && mensajePrueba !== null) {
  buscador.addEventListener("input", () => {
    mensajePrueba.textContent = "Estás buscando: " + buscador.value;
  });
}

