export function generateArray(array: string[]): string[] {
  console.log(array);
  let newArray: string[] = array;

  newArray = newArray.concat(newArray);
  console.log(newArray);

  newArray.sort(() => Math.random() - 0.5);
  return newArray;
}

export function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

 export const cards = [
  "/static/img/sixDiamonds.jpg",
  "/static/img/sixCross.jpg",
  "/static/img/sixSpades.jpg",
  "/static/img/sixHearts.jpg",
  "/static/img/sevenDiamonds.jpg",
  "/static/img/sevenCross.jpg",
  "/static/img/sevenSpades.jpg",
  "/static/img/sevenHearts.jpg",
  "/static/img/eightDiamonds.jpg",
  "/static/img/eightCross.jpg",
  "/static/img/eightSpades.jpg",
  "/static/img/eightHearts.jpg",
  "/static/img/nineDiamonds.jpg",
  "/static/img/nineCross.jpg",
  "/static/img/nineSpades.jpg",
  "/static/img/nineHearts.jpg",
  "/static/img/tenDiamonds.jpg",
  "/static/img/tenCross.jpg",
  "/static/img/tenHearts.jpg",
  "/static/img/tenSpades.jpg",
  "/static/img/jackOfDiamonds.jpg",
  "/static/img/jackOfCross.jpg",
  "/static/img/jackOfSpades.jpg",
  "/static/img/jackOfHearts.jpg",
  "/static/img/ladyOfDiamonds.jpg",
  "/static/img/ladyOfSpades.jpg",
  "/static/img/ladyOfTheCross.jpg",
  "/static/img/ladyOfHearts.jpg",
  "/static/img/kingOfDiamonds.jpg",
  "/static/img/kingOfCross.jpg",
  "/static/img/kingOfSpades.jpg",
  "/static/img/kingOfHearts.jpg",
  "/static/img/aceOfDiamonds.jpg",
  "/static/img/aceOfCross.jpg",
  "/static/img/aceOfSpades.jpg",
  "/static/img/aceOfHearts.jpg"
];
  
export function createCardArray(initialCount: number) {

  const shuffledCards = shuffleArray(cards);

  switch (initialCount) {
    case 6:
      return shuffledCards.slice(0, 3);
    case 12:
      return shuffledCards.slice(0, 6); 
    case 18:
      return shuffledCards.slice(0, 9);
    default:
      throw new Error(`Invalid initial count: ${initialCount}`);
  }
}

