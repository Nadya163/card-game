import { renderHeader } from "./render-header";
import { createCardArray, duplicateArray } from "./array-img.js";
import { renderLost, renderWin } from "./render-win-lost.js";

export function renderLevelCard(numCards) {
  const cardElement = document.querySelector(".game-level");
  let cardHtml = `<div class="level">`;

  for (let i = 1; i <= numCards; i++) {
    cardHtml += `<div class="card"></div>`;
  }

  cardHtml += `</div>`;
  cardElement.innerHTML = cardHtml;
  renderHeader();

  const cards = document.querySelectorAll(".card");
  const cardCreate = createCardArray(numCards);
  const duplicateCard = duplicateArray(cardCreate);
  console.log(duplicateCard);
  let openedCards = [];

  cards.forEach((card, index) => {
    card.classList.add("open");
    const cardImage = duplicateCard[index];
    card.style.backgroundImage = `url(${cardImage})`;
    setTimeout(() => {
      card.classList.remove("open");
      card.style.backgroundImage = `url(/static/img/shirt.jpg)`;
    }, 5000);
    card.addEventListener("click", () => {
      if (openedCards.length < 2) {
        card.classList.add("open");
        card.style.backgroundImage = `url(${cardImage})`;
        openedCards.push(card);
        if (openedCards.length === 2) {
          const ferstCard = openedCards[0];
          const secondCard = openedCards[1];
          const ferstImage = ferstCard.style.backgroundImage;
          const secondImage = secondCard.style.backgroundImage;
          if (ferstImage === secondImage) {
            openedCards = [];
            ferstCard.classList.add("successfully");
            secondCard.classList.add("successfully");
            if (ferstImage === secondImage) {
              openedCards = [];
              ferstCard.classList.add("successfully");
              secondCard.classList.add("successfully");
              const allCardsMatched = Array.from(document.querySelectorAll(".card")).every(card => card.classList.contains("successfully"));
              if (allCardsMatched) {
                renderWin();
              }
            }
          } else {
            setTimeout(() => {
              ferstCard.classList.remove("open");
              ferstCard.style.backgroundImage = `url(/static/img/shirt.jpg)`;
              secondCard.classList.remove("open");
              secondCard.style.backgroundImage = `url(/static/img/shirt.jpg)`;
              openedCards = [];
              renderLost();
            }, 1000);
          }
        }
      }
    });
  });
}