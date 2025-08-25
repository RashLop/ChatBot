// presenter.js
import { buildGreeting } from './greeting.js';

const inputNombre  = document.querySelector("#nombre");
const inputGenero  = document.querySelector("#genero");
const inputEdad    = document.querySelector("#edad");
const inputIdioma  = document.querySelector("#idioma");
const formSaludo   = document.querySelector("#saludar-form");
const divResultado = document.querySelector("#resultado-div");

formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

    const nombre = (inputNombre.value || "").trim();
    const genero = (inputGenero.value || "").trim(); 
    const edad   = (inputEdad.value || "").trim();
    const idioma = (inputIdioma.value || "es");

  if (!nombre) {
    divResultado.textContent = idioma === "en" 
      ? "Please enter your name " 
      : "Por favor ingresa tu nombre ";
    return;
  }
  if (!edad || isNaN(Number(edad)) || Number(edad) < 0) {
    divResultado.textContent = idioma === "en" 
      ? "Please enter a valid age " 
      : "Por favor ingresa una edad válida ";
    return;
  }

  const saludo = buildGreeting(nombre, genero, edad, idioma);
  divResultado.textContent = saludo;
});
