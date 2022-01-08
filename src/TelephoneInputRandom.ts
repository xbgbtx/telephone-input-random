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

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  constructor() {
    super();
    window.requestAnimationFrame(() => this.__tick());
  }

  __tick() {
    window.requestAnimationFrame(() => {
      this.__increment();
      window.requestAnimationFrame(() => this.__tick());
    });
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
