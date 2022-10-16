const addTreasure = (event) => {
  if (event.target.dataset.button){
    let goldVal
    let silverVal
    let bronzeVal
    if (event.target.dataset.action === "found") {
      goldVal = (parseInt(gold.value) ? parseInt(gold.value) : 0)
      silverVal = (parseInt(silver.value) ? parseInt(silver.value) : 0)
      bronzeVal = (parseInt(bronze.value) ? parseInt(silver.value) : 0)
    } else {
      goldVal = Math.floor(Math.random() * 100)
      silverVal = Math.floor(Math.random() * 100)
      bronzeVal = Math.floor(Math.random() * 100)
    }
    console.log(`gold: ${goldVal} ${typeof goldVal}, silver: ${silverVal} ${typeof silverVal}, bronze: ${bronzeVal} ${typeof bronzeVal}`)
    const btn = event.target
    if (btn.dataset.button === "cptFound") {
      console.log("adding Found treasure to Captain")
    } else if (btn.dataset.button === "cptDig") {
      console.log("Digging for treasure for Captain")
    } else if (btn.dataset.button === "smFound") {
      console.log("adding Found treasure to Shipmate")
    } else if (btn.dataset.button === "smDig") {
      console.log("Digging for treasure for Shipmate")
    }
    gold.value = ""
    silver.value = ""
    bronze.value = ""
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
    return this.gold
  }
  Constructor.prototype.addSilver = function (num) {
    this.silver = this.silver + num
    return this.silver
  }
  Constructor.prototype.addBronze = function (num) {
    this.bronze = this.bronze + num
    return this.bronze
  }
  return Constructor
})()

const captain = new TreasureChest()
const shipMate = new TreasureChest()