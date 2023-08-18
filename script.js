const form = document.querySelector('form');
const modal = document.querySelector('.modal');
const gameStartButton = document.querySelector('.game-start');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit');
  
  const choiceDifficulty = document.querySelector('input[name="difficulty"]:checked');

  if (choiceDifficulty) {
    const difficulty = choiceDifficulty.value;

    if (difficulty === '1') {
        modal.style.display = 'none';
        console.log("Первый уровень сложности 6 карт");
      } else if (difficulty === '2') {
        modal.style.display = 'none';
        console.log("Первый уровень сложности 12 карт");
      } else if (difficulty === '3') {
        modal.style.display = 'none';
        console.log("Первый уровень сложности 18 карт");
      }
      //modal.style.display = 'none';
    } else {
      alert("Выберете уровень сложности");
    }
});