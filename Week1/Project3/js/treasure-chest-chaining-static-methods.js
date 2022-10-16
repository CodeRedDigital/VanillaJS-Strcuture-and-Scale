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
      goldVal = TreasureChest.random()
      silverVal = TreasureChest.random()
      bronzeVal = TreasureChest.random()
    }
    console.log(`gold: ${goldVal} ${typeof goldVal}, silver: ${silverVal} ${typeof silverVal}, bronze: ${bronzeVal} ${typeof bronzeVal}`)
    const btn = event.target
    if (btn.dataset.button === "cpt") {
      console.log("adding treasure to Captain")
      captain.addGold(goldVal).addSilver(silverVal).addBronze(bronzeVal)
      cptGoldVal.textContent = captain.gold
      cptSilverVal.textContent = captain.silver
      cptBronzeVal.textContent = captain.bronze
      cptLootVal.textContent = captain.getLoot()
    } else if (btn.dataset.button === "sm") {
      console.log("adding treasure to Shipmate")
      shipMate.addGold(goldVal).addSilver(silverVal).addBronze(bronzeVal)
      smGoldVal.textContent = shipMate.gold
      smSilverVal.textContent = shipMate.silver
      smBronzeVal.textContent = shipMate.bronze
      smLootVal.textContent = shipMate.getLoot()
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
  const amount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
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
    return this
  }
  Constructor.prototype.addSilver = function (num) {
    this.silver = this.silver + num
    return this
  }
  Constructor.prototype.addBronze = function (num) {
    this.bronze = this.bronze + num
    return this
  }
  Constructor.random = function () {
    shuffle(amount)
    return amount[0]
  }
  return Constructor
})()

const captain = new TreasureChest()
const shipMate = new TreasureChest()