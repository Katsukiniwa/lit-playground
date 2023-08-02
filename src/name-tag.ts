import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  name = 'one piece';

  override render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <input
        type="text"
        @input=${this.changeName}
        placeholder="Enter your name"
      />
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}
