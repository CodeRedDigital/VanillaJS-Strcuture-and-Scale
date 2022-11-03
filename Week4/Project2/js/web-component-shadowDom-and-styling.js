

class RollDice extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor () {
    super()
    console.log(`roll dice created`, this)
    this.root = this.attachShadow({mode: 'closed'})
    const btnText = this.innerHTML.trim()
    this.root.innerHTML = 
    `
      <style>
        button {
          font-size: 1.44rem;
          font-family: var(--monospace);
          padding: 1rem;
          margin: 0.83rem;
          border-radius: 0.58rem 0.58rem 1.44rem 0.58rem;
          filter: drop-shadow(0px 10px 20px rgba(11, 9, 9, 0.7));
          color: var(--white-colour);
          background-color: var(--primary-colour);
        }
      </style>
      <p>
        <button part="btn">${btnText ? btnText : 'Roll a Dice'}</button>
      </p>
      <div class="message" aria-live="polite"></div>
    `
  }
  /**
   * create clickHandler
   */
  #clickHandler (event) {
    const host = event.target.getRootNode().host
    const btn = host.root.querySelector('button')
    btn.setAttribute("disabled", "");
    const diceSize = (host.hasAttribute('dice-size') ? parseInt(host.getAttribute('dice-size')) : 6)
    console.log(host.root)
    console.log(`diceSize is ${diceSize} ${typeof(diceSize)}`)
    const roll = Math.floor(Math.random() * diceSize) + 1;
    const msgTarget = host.root.querySelector('.message')
    msgTarget.innerHTML = `You rolled ${roll}`
    setTimeout(function () {
      msgTarget.innerHTML = ''
      btn.removeAttribute("disabled", "");
    },3000)
  }
  connectedCallback () {
    console.log(`roll dice loaded in DOM`, this.root)
    const btn = this.root.querySelector('button')
    if (!btn) return
    btn.addEventListener('click', this.#clickHandler)
  }
  disconnectedCallback () {
    console.log(`roll dice removed from DOM`, this.root)
    const btn = this.root.querySelector('button')
    if (!btn) return
    btn.removeEventListener('click', this.#clickHandler)
  }
  
}

if ('customElements' in window) {
  customElements.define('roll-dice', RollDice)
}