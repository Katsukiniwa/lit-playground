var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let NameTag = class NameTag extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'one piece';
    }
    render() {
        return html `
      <p>Hello, ${this.name}!</p>
      <input
        type="text"
        @input=${this.changeName}
        placeholder="Enter your name"
      />
    `;
    }
    changeName(event) {
        const input = event.target;
        this.name = input.value;
    }
};
__decorate([
    property()
], NameTag.prototype, "name", void 0);
NameTag = __decorate([
    customElement('name-tag')
], NameTag);
export { NameTag };
//# sourceMappingURL=name-tag.js.map