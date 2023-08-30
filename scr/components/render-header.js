export function renderHeader() {
    const headerElement = document.querySelector(".header");
    const headerHtml = `
    <div class="timer">
    <div class="timer-box">
      <div class="expiration-time">
          <p class="text-name min">min</p>
          <p class="text-name sec">sek</p>
      </div>
      <div class="time">
        <P class="time-text">00.00</P>
      </div>
    </div>
  </div>
  <button class="game-begin">Начать заново</button>
    `;
    headerElement.innerHTML = headerHtml;
} 