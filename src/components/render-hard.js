import { renderHeader } from "./render-header.js";
export function renderHardCard() {
    const cardElement = document.querySelector(".game-level");
    const cardHtml = `
    <div class="hard">
        <div class="card ace-of-spades"></div>
        <div class="card ten-hearts"></div>
        <div class="card seven-crosses"></div>
        <div class="card ace-of-hearts"></div>
        <div class="card seven-diamonds"></div>
        <div class="card ten-crosses"></div>
        <div class="card ace-of-spades"></div>
        <div class="card ten-hearts"></div>
        <div class="card seven-crosses"></div>
        <div class="card ace-of-hearts"></div>
        <div class="card seven-diamonds"></div>
        <div class="card ten-crosses"></div>
        <div class="card ace-of-spades"></div>
        <div class="card ten-hearts"></div>
        <div class="card seven-crosses"></div>
        <div class="card ace-of-hearts"></div>
        <div class="card seven-diamonds"></div>
        <div class="card ten-crosses"></div>
    </div>
    `;
    cardElement.innerHTML = cardHtml;
    renderHeader();

    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("click", () => {
            console.log("Клик");
            card.classList.add("open");
        });
    })
}