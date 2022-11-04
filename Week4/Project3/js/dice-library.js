import { roll } from "./helpers.js"

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
