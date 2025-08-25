import { getGreeting } from './greeting.js';
const first = document.querySelector("#nombre");
const formSaludoNom = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

formSaludoNom.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (first.value || "").trim();
  if (nombre) {
    const saludo = getGreeting();
    div.textContent = `${saludo} "${nombre}"`;
  } else {
    div.textContent = "Por favor ingresa tu nombre";
  }
});
