import { LitElement, html, css } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';

interface ToDoItem {
  text: string;
  completed: boolean;
}

@customElement('todo-list')
export class ToDoList extends LitElement {
  @state()
  private _listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false },
  ];

  static override styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  @query('#new-item')
  input!: HTMLInputElement;

  @property()
  hideCompleted = false;

  override render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;

    const todoList = html` <ul>
      ${items.map(
      (item) =>
        html` <li
            class=${item.completed ? 'completed' : ''}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}
          </li>`
    )}
    </ul>`;

    const caughtUpMessage = html` <p>You're all caught up!</p> `;
    const toDoListOrMessage = items.length > 0 ? todoList : caughtUpMessage;

    return html`
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
}
