import { renderModal } from "./render-modal.js";

export function renderWin() {
  const winElement = document.querySelector(".modal-win-lost");
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
    <p class="timer-text-time">01.20</p>
  </div>
  <button class="game-restart">Играть снова</button>
</div>
`;
  winElement.innerHTML = winHtml;
  winElement.classList.add("open");

  const modal = document.querySelector(".modal");
  const buttonElement = document.querySelector(".game-restart");

  buttonElement.addEventListener("click", () => {
    const addElement = document.querySelector(".add");
    addElement.innerHTML = "";
  modal.style.display = "";
  winElement.classList.remove("open");
  renderModal();
  })
}

export function renderLost() {
  const lostElement = document.querySelector(".modal-win-lost");
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
      <p class="timer-text-time">01.20</p>
    </div>
    <button class="game-restart">Играть снова</button>
    </div>
  `;
  lostElement.innerHTML = lostHtml;
  lostElement.classList.add("open");

  const modal = document.querySelector(".modal");
  const buttonElement = document.querySelector(".game-restart");

  buttonElement.addEventListener("click", () => {
    const addElement = document.querySelector(".add");
    addElement.innerHTML = "";
    modal.style.display = "";
    lostElement.classList.remove("open");
    renderModal();
  })
} 