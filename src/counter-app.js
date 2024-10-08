import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class counterApp extends DDDSuper(LitElement) {

  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.title = "";
    this.counter = 0;
    this.min = 0;
    this.max = 25;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      min: { type: Number },
      max: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 150px;
        margin: 16px auto;
        text-align: center;
        padding: 16px;
        border: 2px solid #CCCCCC;
        border-radius: 8px;
        background-color: #FFFFFF;
      }
      .counter {
        font-size: 96px;
        margin-bottom: 4px;
      }
      .button-container {
        display: flex;
        justify-content: center;
        gap: 8px;
      }
      button {
        padding: 4px 8px;
        font-size: 16px;
        border: 2px solid transparent;
        border-radius: 4px;
        background-color: cornflowerblue;
        color: white;
      }
      button:hover, button:focus {
        background-color: #FFFFFF;
        color: cornflowerblue;
        border: 2px solid #000000;
        cursor: pointer;
      }
    `;
  }

  render() {
    const colorStyle = this.getColor();
    return html`
      <div>
        Count:
          <div class="counter" style="${colorStyle}">
            ${this.counter}
          </div>
          <div class="button-container">
            <button @click=${this.increment} ?disabled="${this.max === this.counter}">+</button>
            <button @click=${this.decrement} ?disabled="${this.min === this.counter}">-</button>
          </div>
      </div>`;
  }

  increment() {
    if (this.counter < this.max) {
      this.counter += 1;
    }
  }

  decrement() {
    if (this.counter > this.min) {
      this.counter -=1;
    }
  }

  getColor() {
    if (this.counter >= this.max || this.counter <= this.min) return 'color: blue;';
    if (this.counter === 18) return 'color: green;';
    if (this.counter === 21) return 'color: purple;';
    return '';
  }
}

globalThis.customElements.define(counterApp.tag, counterApp);