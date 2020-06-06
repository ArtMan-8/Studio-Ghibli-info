import createElement from '../helpers/createElement';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Can`t instantiate Abstract, only concrete one.');
    }

    this.element = null;
    this.markup = null;
  }

  getMarkup() {
    throw new Error('Abstract method not implemented: getMarkup');
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getMarkup());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
