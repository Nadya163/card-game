import { renderEasyCard } from "./render-easy.js";
import { renderMediumCard } from "./render-medium.js"
import { renderHardCard } from "./render-hard.js";
export function renderModal() {
  const modalElement = document.querySelector(".modal");
  const modalHtml = `
    <div class="modal-box">
    <form>
      <div class="box-text">
        <p class="text">Выбери сложность</p>
      </div>
      <div class="menu-difficulty">
        <label class="menu-choice">
          <input type="radio" name="difficulty" id="easy" value="1" />
          <span class="menu-text">1</span>
        </label>
        <label class="menu-choice">
          <input type="radio" name="difficulty" id="medium" value="2" />
          <span class="menu-text">2</span>
        </label>
        <label class="menu-choice">
          <input type="radio" name="difficulty" id="hard" value="3" />
          <span class="menu-text">3</span>
        </label>
      </div>
      <button class="game-start">Старт</button>
    </form>
  </div>
    `;
  modalElement.innerHTML = modalHtml;

  const form = document.querySelector("form");
  const modal = document.querySelector(".modal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");

    const choiceDifficulty = document.querySelector(
      'input[name="difficulty"]:checked',
    );

    if (choiceDifficulty) {
      const difficulty = choiceDifficulty.value;

      if (difficulty === "1") {
        modal.style.display = "none";
        renderEasyCard();
        console.log("Первый уровень сложности 6 карт");
      } else if (difficulty === "2") {
        modal.style.display = "none";
        renderMediumCard();
        console.log("Первый уровень сложности 12 карт");
      } else if (difficulty === "3") {
        modal.style.display = "none";
        renderHardCard();
        console.log("Первый уровень сложности 18 карт");
      }
    } else {
      alert("Выберете уровень сложности");
    }
  });
}
