


let roll = (function (){
  // dice arrays
  const dice = {
    d2: [1, 2],
    d4: [1, 2, 3, 4],
    d6: [1, 2, 3, 4, 5, 6],
    d8: [1, 2, 3, 4, 5, 6, 7, 8],
    d10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    d12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    d20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  }
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
  function getRoll (n) {
    if (!dice[n]) return 0
    shuffle(dice[n])
    return dice[n][0]
  }
  function dice2 () {
    return getRoll('d2')
  }
  function dice4 () {
    return getRoll('d4')
  }
  function dice6 () {
    return getRoll('d6')
  }
  function dice8 () {
    return getRoll('d8')
  }
  function dice10 () {
    return getRoll('d10')
  }
  function dice12 () {
    return getRoll('d12')
  }
  function dice20 () {
    return getRoll('d20')
  }
  return {dice2, dice4, dice6, dice8, dice10, dice12, dice20}
})()

const rollButton = (event) => {
  
  if (event.target.dataset.button){
    const dice = event.target.dataset.button
    const result = (
      dice === "d2" ? roll.dice2() : 
      (dice === "d4" ? roll.dice4() : 
      (dice === "d6" ? roll.dice6() : 
      (dice === "d8" ? roll.dice8() : 
      (dice === "d10" ? roll.dice10() :
      (dice === "d12" ? roll.dice12() : roll.dice20()))))))
    resultBox.textContent = result
  }
}

// find buttons and add click event
const buttons = document.querySelector("#buttons")
buttons.addEventListener("click", rollButton)
const resultBox = document.querySelector("#rollResult")
