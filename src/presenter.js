
import { getGreeting } from './greeting.js';

const inputNombre = document.querySelector("#nombre");
const inputGenero = document.querySelector("#genero");
const formSaludoNom = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

formSaludoNom.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (inputNombre.value || "").trim();
  const genero = (inputGenero.value || "").trim();

  if (nombre && genero) {
    div.textContent = getGreeting(nombre, genero);
  } else {
    div.textContent = "Por favor ingresa tu nombre y género ";
  }
});