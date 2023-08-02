var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
let ToDoList = class ToDoList extends LitElement {
    constructor() {
        super(...arguments);
        this._listItems = [
            { text: 'Start Lit tutorial', completed: true },
            { text: 'Make to-do list', completed: false },
        ];
        this.hideCompleted = false;
    }
    toggleCompleted(item) {
        item.completed = !item.completed;
        this.requestUpdate();
    }
    setHideCompleted(e) {
        this.hideCompleted = e.target.checked;
    }
    render() {
        const items = this.hideCompleted
            ? this._listItems.filter((item) => !item.completed)
            : this._listItems;
        const todoList = html ` <ul>
      ${items.map((item) => html ` <li
            class=${item.completed ? 'completed' : ''}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}
          </li>`)}
    </ul>`;
        const caughtUpMessage = html ` <p>You're all caught up!</p> `;
        const toDoListOrMessage = items.length > 0 ? todoList : caughtUpMessage;
        return html `
      <h2>To Do</h2>
      ${toDoListOrMessage}
      <input id="new-item" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <br />
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `;
    }
    addToDo() {
        this._listItems = [
            ...this._listItems,
            { text: this.input.value, completed: false },
        ];
        this.input.value = '';
    }
};
ToDoList.styles = css `
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;
__decorate([
    state()
], ToDoList.prototype, "_listItems", void 0);
__decorate([
    query('#new-item')
], ToDoList.prototype, "input", void 0);
__decorate([
    property()
], ToDoList.prototype, "hideCompleted", void 0);
ToDoList = __decorate([
    customElement('todo-list')
], ToDoList);
export { ToDoList };
//# sourceMappingURL=todo-list.js.map