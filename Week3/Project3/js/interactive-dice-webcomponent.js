

class RollDice extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor () {
    super()
    console.log(`roll dice created`, this)
    const btnText = this.innerHTML.trim()
    this.innerHTML = 
    `
      <p>
        <button>${btnText ? btnText : 'Roll a Dice'}</button>
      </p>
      <div class="message" aria-live="polite"></div>
    `
  }
  /**
   * create clickHandler
   */
  #clickHandler (event) {
    event.target.setAttribute("disabled", "");
    const host = event.target.closest('roll-dice')
    const diceSize = (host.hasAttribute('dice-size') ? parseInt(host.getAttribute('dice-size')) : 6)
    console.log(host)
    console.log(`diceSize is ${diceSize} ${typeof(diceSize)}`)
    const roll = Math.floor(Math.random() * diceSize) + 1;
    const msgTarget = host.querySelector('.message')
    msgTarget.innerHTML = `You rolled ${roll}`
    setTimeout(function () {
      msgTarget.innerHTML = ''
      event.target.removeAttribute("disabled", "");
    },3000)
  }
  connectedCallback () {
    console.log(`roll dice loaded in DOM`, this)
    const btn = this.querySelector('button')
    if (!btn) return
    btn.addEventListener('click', this.#clickHandler)
  }
  disconnectedCallback () {
    console.log(`roll dice removed from DOM`, this)
    const btn = this.querySelector('button')
    if (!btn) return
    btn.removeEventListener('click', this.#clickHandler)
  }
  
}

if ('customElements' in window) {
  customElements.define('roll-dice', RollDice)
}