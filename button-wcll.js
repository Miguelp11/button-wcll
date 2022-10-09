import { LitElement, html, css } from 'lit';

export class ButtonWcll extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        --background-color: blue;
      }
      button {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        padding: 10px 15px;
        background-color: var(--background-color);
        color: white;
        cursor: pointer;
        border-radius: 10px;
        margin: 10px;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String }
    }
  }

  constructor() {
    super();
    this.name = 'Aceptar';
  }

  render() {
    return html`
      <button>${this.name}</button>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('button-wcll', ButtonWcll);