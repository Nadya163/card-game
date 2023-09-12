const { shuffleArray, cards, generateArray, createCardArray } = require("./array-img");

describe('', () => {
  it("should shuffle the array", () => {
    const newArray = Array.from(cards);
    const shuffleCards = shuffleArray(cards);

    //Проверяем shuffleCards, что он не равен newArray
    expect(shuffleCards).not.toEqual(newArray);

    //Проверяем shuffleCards, что он содержит все эллементы из исходного newArray
    expect(shuffleCards).toEqual(expect.arrayContaining(newArray));

    //Проверяем shuffleCards, что он содержит только элементы этого массива newArray
    expect(shuffleCards.length).toBe(newArray.length);
  });


  it('should return a shuffled array', () => {
    const newArray = Array.from(cards);
    const generateCards = generateArray(newArray);

    expect(generateCards).not.toEqual(newArray);

    expect(generateCards).toEqual(expect.arrayContaining(newArray));
    
    expect(generateCards.length).not.toEqual(newArray.length);
  });

  it('Should return an array of 3 cards when initialCount is 6', () => {
    const result = createCardArray(6);
    expect(result).toHaveLength(3);
  });
  
  it('Should return an array of 6 cards when initialCount is 12', () => {
    const result = createCardArray(12);
    expect(result).toHaveLength(6);
  });
  
  it('Should return an array of 9 cards when initialCount is 18', () => {
    const result = createCardArray(18);
    expect(result).toHaveLength(9);
  });
  
  it('Should throw an error when initialCount is invalid', () => {
    expect(() => createCardArray(5)).toThrow('Invalid initial count: 5');
  });
});
