const cardsContainer = document.querySelector("card-colaboradores"); // Altere para o seletor correto do container dos cards
const cards = document.querySelectorAll(".card-colaboradores");

// Função para pausar a animação
function pauseAnimation() {
  cards.forEach((card) => {
    card.style.animationPlayState = "paused"; // Pausa a animação
  });
}

// Função para retomar a animação
function resumeAnimation() {
  cards.forEach((card) => {
    card.style.animationPlayState = "running"; // Retoma a animação
  });
}

// Adiciona eventos a cada card
cards.forEach((card) => {
  card.addEventListener("mouseover", pauseAnimation); // Pausa ao passar o mouse
  card.addEventListener("mouseout", resumeAnimation); // Retoma ao tirar o mouse
});

// Duplicar os cards para criar a continuidade
cards.forEach((card) => {
  const clonedCard = card.cloneNode(true); // Clona o card
  cardsContainer.appendChild(clonedCard); // Adiciona o card clonado de volta ao container
});
