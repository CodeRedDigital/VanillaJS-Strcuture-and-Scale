


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
    // console.log(dice[n])
    // console.log(dice[n][0])
    const result = dice[n][0]
    // console.log(result)
    return result
  }
  function dice2 () {
    getRoll('d2')
  }
  function dice4 () {
    // shuffle(d4)
    // const result = d4[0]
    // return result
    getRoll('d4')
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
