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
        <span class="time-text interval minutes">00</span>
        <span class="time-text">.</span>
        <span class="time-text interval seconds">00</span>
      </div>
    </div>
  </div>
  <button class="game-begin">Начать заново</button>
    `;
    headerElement.innerHTML = headerHtml;

}

let minutes = 0;
let seconds = 0;
let startTime = null;
let interval;

export function startTimer() {
  if (!startTime) {
    startTime = performance.now();
  }

  const elapsed = Math.floor((performance.now() - startTime) / 1000);
  minutes = Math.floor(elapsed / 60);
  seconds = elapsed % 60;

  const minutesElement = document.querySelector(".interval.minutes");
  const secondsElement = document.querySelector(".interval.seconds");
  minutesElement.innerHTML = minutes > 9 ? minutes : "0" + minutes;
  secondsElement.innerHTML = seconds > 9 ? seconds : "0" + seconds;

  requestAnimationFrame(startTimer);
}

export function stopTimer() {
  clearInterval(interval);
}