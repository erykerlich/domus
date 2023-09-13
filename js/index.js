const links = document.querySelectorAll(".header-menu a");
const ativarLink = (link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};
links.forEach(ativarLink);

// Duvidas
const perguntas = document.querySelectorAll(".perguntas button");

const ativarPergunta = (ev) => {
  const pergunta = ev.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
};

const eventosPerguntas = (pergunta) => {
  pergunta.addEventListener("click", ativarPergunta);
};

perguntas.forEach(eventosPerguntas);
