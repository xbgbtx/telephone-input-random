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

  constructor() {
    super();
    this.__generateNumber();
    window.requestAnimationFrame(() => this.__tick());
  }

  __tick() {
    window.requestAnimationFrame(() => {
      this.__generateNumber();
      window.requestAnimationFrame(() => this.__tick());
    });
  }

  __generateNumber() {
    this.randomValue = `${Math.random()}`;
  }

  __halt() {}

  render() {
    return html`
      <h1>Please click 'confirm' when your telephone number is shown:</h1>
      <p>Nr. ${this.randomValue}!</p>
      <button @click=${this.__halt}>Confirm</button>
    `;
  }
}
