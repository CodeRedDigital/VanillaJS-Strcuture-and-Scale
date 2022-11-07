
  // dice arrays
  const d2 = [1, 2];
  const d4 = [1, 2, 3, 4];
  const d6 = [1, 2, 3, 4, 5, 6];
  const d8 = [1, 2, 3, 4, 5, 6, 7, 8];
  const d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {Array}       The shuffled array
   */
  function shuffle (array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  }
  function dice2 () {
    shuffle(d2)
    const result = d2[0]
    return result
  }
  function dice4 () {
    shuffle(d4)
    const result = d4[0]
    return result
  }
  function dice6 () {
    shuffle(d6)
    const result = d6[0]
    return result
  }
  function dice8 () {
    shuffle(d8)
    const result = d8[0]
    return result
  }
  function dice10 () {
    shuffle(d10)
    const result = d10[0]
    return result
  }
  function dice12 () {
    shuffle(d12)
    const result = d12[0]
    return result
  }
  function dice20 () {
    shuffle(d20)
    const result = d20[0]
    return result
  }


export { dice2, dice4, dice6, dice8, dice10, dice12, dice20 }