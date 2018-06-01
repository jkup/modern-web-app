export default class List extends HTMLElement {
  constructor() {
    super();
    this.items = this.getAttribute('items').split(',') || [];
  }

  connectedCallback() {
    this.innerHTML = `<ul>
      ${this.items.map(item => `<li>${item}</li>`).join('')}
    </ul>`;
  }
}

if (!window.customElements.get('x-list')) {
  window.customElements.define('x-list', List);
}