const addTreasure = (event) => {
  if (event.target.dataset.button){
    const btn = event.target
    if (btn.dataset.button === "cptGold") {
      if (parseInt(gold.value)) {captain.addGold(parseInt(gold.value))
      cptGoldVal.textContent = captain.gold
      cptLootVal.textContent = captain.getLoot()
      gold.value = ""} else {
        gold.value = ""
      }
    } else if (btn.dataset.button === "cptSilver") {
      if (parseInt(silver.value)) {
        captain.addSilver(parseInt(silver.value))
        cptSilverVal.textContent = captain.silver
        cptLootVal.textContent = captain.getLoot()
        silver.value = ""
      } else {
        silver.value = ""
      }
    } else if (btn.dataset.button === "cptBronze") {
      if (parseInt(bronze.value)) {
        captain.addBronze(parseInt(bronze.value))
        cptBronzeVal.textContent = captain.bronze
        cptLootVal.textContent = captain.getLoot()
        bronze.value = ""
      } else {
        bronze.value = ""
      }
    } else if (btn.dataset.button === "smGold") {
      if (parseInt(gold.value)) {
        shipMate.addGold(parseInt(gold.value))
        smGoldVal.textContent = shipMate.gold
        smLootVal.textContent = shipMate.getLoot()
        gold.value = ""
      } else {
        gold.value = ""
      }
    } else if (btn.dataset.button === "smSilver") {
      if (parseInt(silver.value)) {
        shipMate.addSilver(parseInt(silver.value))
        smSilverVal.textContent = shipMate.silver
        smLootVal.textContent = shipMate.getLoot()
        silver.value = ""
      } else {
        silver.value = ""
      }
    } else if (btn.dataset.button === "smBronze") {
      if (parseInt(bronze.value)) {
        shipMate.addBronze(parseInt(bronze.value))
        smBronzeVal.textContent = shipMate.bronze
        smLootVal.textContent = shipMate.getLoot()
        bronze.value = ""
      } else {
        bronze.value = ""
      }
    }
  }
}

const buttons = document.querySelector("#buttons")
const gold = document.querySelector("#gold")
const silver = document.querySelector("#silver")
const bronze = document.querySelector("#bronze")
const cptGoldVal = document.querySelector("#cptGoldVal")
const cptSilverVal = document.querySelector("#cptSilverVal")
const cptBronzeVal = document.querySelector("#cptBronzeVal")
const cptLootVal = document.querySelector("#cptLootVal")
const smGoldVal = document.querySelector("#smGoldVal")
const smSilverVal = document.querySelector("#smSilverVal")
const smBronzeVal = document.querySelector("#smBronzeVal")
const smLootVal = document.querySelector("#smLootVal")
buttons.addEventListener("click", addTreasure)
const TreasureChest = (function () {
  function Constructor (num = 0) {
    this.gold = num
    this.silver = num
    this.bronze = num
    this.getLoot = () => {
      return `Gold: ${this.gold}, Silver ${this.silver} and Bronze: ${this.bronze}`
    }
  }
  Constructor.prototype.addGold = function (num) {
    this.gold = this.gold + num
  }
  Constructor.prototype.addSilver = function (num) {
    this.silver = this.silver + num
  }
  Constructor.prototype.addBronze = function (num) {
    this.bronze = this.bronze + num
  }
  return Constructor
})()

const captain = new TreasureChest()
const shipMate = new TreasureChest()