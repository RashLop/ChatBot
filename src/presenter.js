const first = document.querySelector("#nombre");
const formSaludoNom = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

formSaludoNom.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = first.value.trim();
  if (nombre) {
    div.textContent = `Hola "${nombre}"`;
  } else {
    div.textContent = "Por favor ingresa tu nombre";
  }
});
