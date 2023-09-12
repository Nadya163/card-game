import { renderHeader, startTimer } from "./render-header";
import { generateArray, createCardArray } from "./array-img";
import { renderLost, renderWin } from "./render-win-lost";

export function renderLevelCard(numCards: number) {
  const cardElement = document.querySelector(".game-level") as HTMLDivElement;
  let cardHtml = `<div class="level">`;

  for (let i = 1; i <= numCards; i++) {
    cardHtml += `<div class="card"></div>`;
  }

  cardHtml += `</div>`;
  cardElement.innerHTML = cardHtml;
  cardElement.classList.remove("hide");
  renderHeader();

  const cards = document.querySelectorAll<HTMLDivElement>(".card");
  const cardCreate = generateArray(createCardArray(numCards), numCards);
  console.log(cardCreate);
  let openedCards: HTMLDivElement[] = [];

  cards.forEach((card, index) => {
    card.classList.add("open");
    const cardImage = cardCreate[index];
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
              const allCardsMatched = Array.from(
                document.querySelectorAll(".card"),
              ).every((card) => card.classList.contains("successfully"));
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
  setTimeout(startTimer, 5000);
}