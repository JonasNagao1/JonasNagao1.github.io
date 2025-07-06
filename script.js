// Define o idioma da página (lang)
document.documentElement.lang = "pt-BR";

// Função para mostrar a página clicada e esconder as outras
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = page.id === pageId ? "block" : "none";
  });
}

// Validação simples do formulário
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    formMessage.textContent = "Mensagem enviada com sucesso!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent =
      "Por favor, preencha todos os campos corretamente.";
    formMessage.style.color = "red";
  }
});