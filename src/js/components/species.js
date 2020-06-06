import createElement from '../helpers/createElement';

export default class Species {
  constructor() {
    this.element = null;
    this.markup = null;
  }

  getMarkup() {
    this.markup = (
      `<section class="species">
        <article class="species__item specie">
          <h1 class="specie__header">Spirit</h1>

          <ul class="specie__info">
            <li>classification: <b>Spirit</b></li>
            <li>eye colors: <b>Red</b></li>
            <li>hair colors: <b>Light Orange</b></li>
          </ul>

          <h2 class="specie__subheader">peoples:</h2>
          <ul class="specie__peoples">
            <li><a href="">- Shishigami</a></li>
          </ul>

          <h2 class="specie__subheader">films:</h2>
          <ul class="specie__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="species__item specie">
          <h1 class="specie__header">Spirit</h1>

          <ul class="specie__info">
            <li>classification: <b>Spirit</b></li>
            <li>eye colors: <b>Red</b></li>
            <li>hair colors: <b>Light Orange</b></li>
          </ul>

          <h2 class="specie__subheader">peoples:</h2>
          <ul class="specie__peoples">
            <li><a href="">- Shishigami</a></li>
          </ul>

          <h2 class="specie__subheader">films:</h2>
          <ul class="specie__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="species__item specie">
          <h1 class="specie__header">Spirit</h1>

          <ul class="specie__info">
            <li>classification: <b>Spirit</b></li>
            <li>eye colors: <b>Red</b></li>
            <li>hair colors: <b>Light Orange</b></li>
          </ul>

          <h2 class="specie__subheader">peoples:</h2>
          <ul class="specie__peoples">
            <li><a href="">- Shishigami</a></li>
          </ul>

          <h2 class="specie__subheader">films:</h2>
          <ul class="specie__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="species__item specie">
          <h1 class="specie__header">Spirit</h1>

          <ul class="specie__info">
            <li>classification: <b>Spirit</b></li>
            <li>eye colors: <b>Red</b></li>
            <li>hair colors: <b>Light Orange</b></li>
          </ul>

          <h2 class="specie__subheader">peoples:</h2>
          <ul class="specie__peoples">
            <li><a href="">- Shishigami</a></li>
          </ul>

          <h2 class="specie__subheader">films:</h2>
          <ul class="specie__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="species__item specie">
          <h1 class="specie__header">Spirit</h1>

          <ul class="specie__info">
            <li>classification: <b>Spirit</b></li>
            <li>eye colors: <b>Red</b></li>
            <li>hair colors: <b>Light Orange</b></li>
          </ul>

          <h2 class="specie__subheader">peoples:</h2>
          <ul class="specie__peoples">
            <li><a href="">- Shishigami</a></li>
          </ul>

          <h2 class="specie__subheader">films:</h2>
          <ul class="specie__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="species__item specie">
          <h1 class="specie__header">Spirit</h1>

          <ul class="specie__info">
            <li>classification: <b>Spirit</b></li>
            <li>eye colors: <b>Red</b></li>
            <li>hair colors: <b>Light Orange</b></li>
          </ul>

          <h2 class="specie__subheader">peoples:</h2>
          <ul class="specie__peoples">
            <li><a href="">- Shishigami</a></li>
          </ul>

          <h2 class="specie__subheader">films:</h2>
          <ul class="specie__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>
      </section>`
    );

    return this.markup;
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
