document.getElementById("toggleFont").addEventListener("click", function () {
  document.body.classList.toggle("body-dyslexic");

  // Mudar o texto do botão dependendo da fonte ativa
  if (document.body.classList.contains("body-dyslexic")) {
    this.textContent = "Desativar fonte para dislexia";
  } else {
    this.textContent = "Ativar fonte para dislexia";
  }
});
