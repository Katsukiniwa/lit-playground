import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('more-expression')
export class MoreExpression extends LitElement {
  @property()
  checked = false;

  override render() {
    return html`
      <div>
        <input type="text" value="hello here" ?disabled=${!this.checked} />
      </div>
      <label>
        <input type="checkbox" @change=${this.setChecked} />
        Enable editing
      </label>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}
