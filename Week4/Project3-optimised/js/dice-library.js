import { dice2, dice4, dice6, dice8, dice10, dice12, dice20 } from "./helpers.js"

const rollButton = (event) => {
  
  if (event.target.dataset.button){
    const dice = event.target.dataset.button
    const result = (
      dice === "d2" ? dice2() : 
      (dice === "d4" ? dice4() : 
      (dice === "d6" ? dice6() : 
      (dice === "d8" ? dice8() : 
      (dice === "d10" ? dice10() :
      (dice === "d12" ? dice12() : dice20()))))))
    resultBox.textContent = result
  }
}

// find buttons and add click event
const buttons = document.querySelector("#buttons")
buttons.addEventListener("click", rollButton)
const resultBox = document.querySelector("#rollResult")
