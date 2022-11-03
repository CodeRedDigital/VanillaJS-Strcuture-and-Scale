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
      <div className="message" aria-live="polite"></div>
    `
  }
  connectedCallback () {
    console.log(`roll dice loaded in DOM`, this)
  }
  disconnectedCallback () {
    console.log(`roll dice removed from DOM`, this)
  }
  
}

if ('customElements' in window) {
  customElements.define('roll-dice', RollDice)
}