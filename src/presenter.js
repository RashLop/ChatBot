import { buildGreeting } from './greeting.js';

const inputNombre  = document.querySelector("#nombre");
const inputGenero  = document.querySelector("#genero");
const inputEdad    = document.querySelector("#edad");
const formSaludo   = document.querySelector("#saludar-form");
const divResultado = document.querySelector("#resultado-div");

formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (inputNombre.value || "").trim();
  const genero = (inputGenero.value || "").trim(); 
  const edad   = (inputEdad.value || "").trim();   

  if (!nombre) {
    divResultado.textContent = "Por favor ingresa tu nombre";
    return;
  }
  if (!edad || isNaN(Number(edad)) || Number(edad) < 0) {
    divResultado.textContent = "Por favor ingresa una edad válida";
    return;
  }

  const saludo = buildGreeting(nombre, genero, edad);
  divResultado.textContent = saludo;
});