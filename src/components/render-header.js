export function renderHeader() {
    const headerElement = document.querySelector(".header");
    const headerHtml = `
  <div class="timer">
    <div class="timer-box">
      <div class="expiration-time">
          <span class="text-name min">min</span>
          <span class="text-name sec">sek</span>
      </div>
      <div class="time">
        <span class="time-text minutes">00</span>
        <span class="time-text">.</span>
        <span class="time-text seconds">00</span>
      </div>
    </div>
  </div>
  <button class="game-begin">Начать заново</button>
    `;
    headerElement.innerHTML = headerHtml;

  // const minutesBlock = document.querySelector(".minutes");
  //       secondsBlock = document.querySelector(".seconds");
} 