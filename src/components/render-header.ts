import { renderModal } from "./render-modal";

export function renderHeader() {
    const headerElement = document.querySelector(".header") as HTMLDivElement;
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
    headerElement.classList.remove("hide");
  
  const buttonElement = document.querySelector(".game-begin") as HTMLButtonElement;
  const modal = document.querySelector(".modal") as HTMLDivElement;
  const gameLevelElement = document.querySelector(".game-level") as HTMLDivElement;

  buttonElement.addEventListener('click', () => {
    stopTimer();
    lastMinutes = 0;
    lastSeconds = 0;
    modal.style.display = "";
    headerElement.classList.add("hide");
    gameLevelElement.classList.add("hide");
    renderModal();
    console.log("клик");
  });
  }

let minutes = 0;
let seconds = 0;
let startTime: number = 0;
let interval: NodeJS.Timeout | undefined;
let lastMinutes = 0;
let lastSeconds = 0;

export function startTimer() {
  console.log(1);
  if (!startTime) {
    startTime = performance.now();
  }
  minutes = lastMinutes;
  seconds = lastSeconds;

  interval = setInterval(() => {
    const elapsed = Math.floor((performance.now() - startTime) / 1000);
    minutes = Math.floor(elapsed / 60);
    seconds = elapsed % 60;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const minutesElement = document.querySelector(".interval.minutes") as HTMLSpanElement;
  const secondsElement = document.querySelector(".interval.seconds") as HTMLSpanElement;
  const formatMinutes = minutes > 9 ? minutes.toString() : "0" + minutes.toString();
  const formatSeconds = seconds > 9 ? seconds.toString() : "0" + seconds.toString();
  minutesElement.innerHTML = formatMinutes;
  secondsElement.innerHTML = formatSeconds;
}

export function stopTimer() {
  startTime = 0;
  clearInterval(interval);
  lastMinutes = minutes;
  lastSeconds = seconds;
  minutes = 0;
  seconds = 0;
  updateTimer();
}

function formatTime(minutes: number, seconds: number) {
  const formattedMinutes = minutes > 9 ? minutes : "0" + minutes;
  const formattedSeconds = seconds > 9 ? seconds : "0" + seconds;
  return `${formattedMinutes}.${formattedSeconds}`;
}

export function formTime() {
  return formatTime(lastMinutes, lastSeconds);
}

