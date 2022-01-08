import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class TelephoneInputRandom extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--telephone-input-random-text-color, #000);
    }
  `;

  @property({ type: String }) value = '';

  @property({ type: String }) randomValue = '';

  @property({ type: String }) format = '(dddd)-ddd-dddd';

  running: boolean;

  constructor() {
    super();
    this.running = true;
    this.__generateNumber();
    window.requestAnimationFrame(() => this.__tick());
  }

  __tick() {
    window.requestAnimationFrame(() => {
      this.__generateNumber();

      if (this.running) window.requestAnimationFrame(() => this.__tick());
    });
  }

  __generateNumber() {
    const digits = this.format.split('').map(d => {
      switch (d) {
        case 'd':
          return Math.floor(Math.random() * 10);
        default:
          return d;
      }
    });
    this.randomValue = digits.join('');
  }

  __halt() {
    this.running = false;
    this.value = this.randomValue;
  }

  render() {
    if (this.running) {
      return html`
        <h1>Please confirm your telephone number:</h1>
        <p>My Telephone Number is: ${this.randomValue}</p>
        <button @click=${this.__halt}>Confirm</button>
      `;
    }
    return html`
      <h1>Thank you!</h1>
      <p>Your phone number is: ${this.value}.</p>
    `;
  }
}
