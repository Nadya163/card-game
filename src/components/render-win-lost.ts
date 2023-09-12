import { renderModal } from "./render-modal";
import { stopTimer, formTime } from "./render-header";

export function renderWin() {
  const winElement = document.querySelector(".modal-win-lost") as HTMLDivElement;
  stopTimer();
  const winHtml = `
<div class="modal-box-win-lost">
  <div class="win-lost-img">
    <img src="/static/celebration.png" alt="Вы выиграли">
  </div>
  <div class="box-text-result">
    <p class="text-resulte">Вы выиграли!</p>
  </div>
  <div class="menu-timer">
    <p class="timer-text">Затраченное время:</p>
    <p class="timer-text-time">${formTime()}</p>
  </div>
  <button class="game-restart">Играть снова</button>
</div>
`;

  winElement.innerHTML = winHtml as string;
  winElement.classList.add("open");

  const modal = document.querySelector(".modal") as HTMLDivElement;
  const buttonElement = document.querySelector(".game-restart") as HTMLButtonElement;
  const gameLevelElement = document.querySelector(".game-level") as HTMLDivElement;
  const headerElement = document.querySelector(".header") as HTMLDivElement;

  buttonElement.addEventListener("click", () => {
    gameLevelElement.innerHTML = "";
    headerElement.classList.add("hide");
    modal.style.display = "";
    winElement.classList.remove("open");
    renderModal();
  })
}

export function renderLost() {
  const lostElement = document.querySelector(".modal-win-lost") as HTMLDivElement;
  stopTimer();
  const lostHtml = `
  <div class="modal-box-win-lost">
  <div class="win-lost-img">
    <img src="/static/dead.png" alt="Вы проиграли">
  </div>
  <div class="box-text-result">
    <p class="text-resulte">Вы проиграли!</p>
    </div>
    <div class="menu-timer">
      <p class="timer-text">Затраченное время:</p>
      <p class="timer-text-time">${formTime()}</p>
    </div>
    <button class="game-restart">Играть снова</button>
    </div>
  `;
  lostElement.innerHTML = lostHtml;
  lostElement.classList.add("open");

  const modal = document.querySelector(".modal") as HTMLDivElement;
  const buttonElement = document.querySelector(".game-restart") as HTMLButtonElement;
  const gameLevelElement = document.querySelector(".game-level") as HTMLDivElement;
  const headerElement = document.querySelector(".header") as HTMLDivElement;

  buttonElement.addEventListener("click", () => {
    gameLevelElement.innerHTML = "";
    headerElement.classList.add("hide");
    modal.style.display = "";
    lostElement.classList.remove("open");
    renderModal();
  })
} 