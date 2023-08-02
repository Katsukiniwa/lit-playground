var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MoreExpression = class MoreExpression extends LitElement {
    constructor() {
        super(...arguments);
        this.checked = false;
    }
    render() {
        return html `
      <div>
        <input type="text" value="hello here" ?disabled=${!this.checked} />
      </div>
      <label>
        <input type="checkbox" @change=${this.setChecked} />
        Enable editing
      </label>
    `;
    }
    setChecked(event) {
        this.checked = event.target.checked;
    }
};
__decorate([
    property()
], MoreExpression.prototype, "checked", void 0);
MoreExpression = __decorate([
    customElement('more-expression')
], MoreExpression);
export { MoreExpression };
//# sourceMappingURL=more-expression.js.map