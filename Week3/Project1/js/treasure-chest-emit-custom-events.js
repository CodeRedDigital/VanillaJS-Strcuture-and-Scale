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
      cptGoldVal.textContent = captain.getGold()
      cptSilverVal.textContent = captain.getSilver()
      cptBronzeVal.textContent = captain.getBronze()
      cptLootVal.textContent = captain.getLoot()
    } else if (btn.dataset.button === "sm") {
      console.log("adding treasure to Shipmate")
      shipMate.addGold(goldVal).addSilver(silverVal).addBronze(bronzeVal)
      smGoldVal.textContent = shipMate.getGold()
      smSilverVal.textContent = shipMate.getSilver()
      smBronzeVal.textContent = shipMate.getBronze()
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
class TreasureChest {
  #gold;
  #silver;
  #bronze;
  #msg;
  #emit (type, detail) {

    // Create a new event
    let event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail: detail
    });
  
    // Dispatch the event
    return document.dispatchEvent(event);
  
  }
  constructor (options = {}) {
    let {gold, silver, bronze, msg} = Object.assign({
      gold: 0,
      silver: 0,
      bronze: 0,
      msg: `Gold: {{gold}}, Silver {{silver}} and Bronze: {{bronze}}`
    }, options)

    this.#gold = gold
    this.#silver = silver
    this.#bronze = bronze
    this.#msg = msg

    this.getLoot = () => {
      return this.#msg.replace('{{gold}}', this.#gold).replace('{{silver}}', this.#silver).replace('{{bronze}}', this.#bronze)
    }
    
  }

  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {Array}       The shuffled array
   */
   static #shuffle (array) {

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

  addGold(num) {
    const start = this.#gold
    this.#emit('TreasureChest:addGold', {total: this.#gold, start, num})
    this.#gold += num
    return this
  }
  addSilver(num) {
    const start = this.#silver
    this.#emit('TreasureChest:addSilver', {total: this.#silver, start, num})
    this.#silver += num
    return this
  }
  addBronze(num) {
    const start = this.#bronze
    this.#emit('TreasureChest:addBronze', {total: this.#bronze, start, num})
    this.#bronze += num
    return this
  }
  static random() {
    const amount = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
    this.#shuffle(amount)
    return amount[0]
  }

  getGold () {
    return this.#gold
  }
  getSilver () {
    return this.#silver
  }
  getBronze () {
    return this.#bronze
  }
  // return Constructor
}

function log (event) {
  console.log(event.type, event.detail);
  if (event.detail.total > 50) {
    console.log('Hooray!');
  }
}
document.addEventListener('TreasureChest:addGold', log);
document.addEventListener('TreasureChest:addSilver', log);
document.addEventListener('TreasureChest:addBronze', log);
const captain = new TreasureChest({
  gold: 12,
  bronze: 4,
  msg: "Arrrgh ye be rich {{gold}} gold, {{silver}} silver, {{bronze}} bronze."
})
const shipMate = new TreasureChest()

const startingValues = () => {
  captain.addGold(0).addSilver(0).addBronze(0)
  cptGoldVal.textContent = captain.getGold()
  cptSilverVal.textContent = captain.getSilver()
  cptBronzeVal.textContent = captain.getBronze()
  cptLootVal.textContent = captain.getLoot()
  shipMate.addGold(0).addSilver(0).addBronze(0)
  smGoldVal.textContent = shipMate.getGold()
  smSilverVal.textContent = shipMate.getSilver()
  smBronzeVal.textContent = shipMate.getBronze()
  smLootVal.textContent = shipMate.getLoot()
}
startingValues()