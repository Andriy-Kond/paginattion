export default class LoadMoreBtnService {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = document.querySelector('.label');
    refs.spinner = document.querySelector('.spinner');
    return refs;
  }

  enable() {
    this.refs.button.disable = false;
    this.refs.label.textContent = 'Show More';
    this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.button.disable = true;
    this.refs.label.textContent = 'Downloading...';
    this.refs.spinner.classList.remove('is-hidden');
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}
