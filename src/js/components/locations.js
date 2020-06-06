import createElement from '../helpers/createElement';

export default class About {
  constructor() {
    this.element = null;
    this.markup = null;
  }

  getMarkup() {
    this.markup = (
      `<section class="locations">
        <article class="locations__item location">
          <h1 class="location__header">Irontown</h1>

          <ul class="location__info">
            <li>climate: <b>Continental</b></li>
            <li>terrain: <b>Mountain</b></li>
            <li>surface water: <b>40</b></li>
          </ul>

          <h2 class="location__subheader">residents:</h2>
          <ul class="location__residents">
            <li><a href="">- Ashitaka</a></li>
            <li><a href="">- Yakul</a></li>
          </ul>

          <h2 class="location__subheader">films:</h2>
          <ul class="location__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="locations__item location">
          <h1 class="location__header">Irontown</h1>

          <ul class="location__info">
            <li>climate: <b>Continental</b></li>
            <li>terrain: <b>Mountain</b></li>
            <li>surface water: <b>40</b></li>
          </ul>

          <h2 class="location__subheader">residents:</h2>
          <ul class="location__residents">
            <li><a href="">- Ashitaka</a></li>
            <li><a href="">- Yakul</a></li>
          </ul>

          <h2 class="location__subheader">films:</h2>
          <ul class="location__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="locations__item location">
          <h1 class="location__header">Irontown</h1>

          <ul class="location__info">
            <li>climate: <b>Continental</b></li>
            <li>terrain: <b>Mountain</b></li>
            <li>surface water: <b>40</b></li>
          </ul>

          <h2 class="location__subheader">residents:</h2>
          <ul class="location__residents">
            <li><a href="">- Ashitaka</a></li>
            <li><a href="">- Yakul</a></li>
          </ul>

          <h2 class="location__subheader">films:</h2>
          <ul class="location__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="locations__item location">
          <h1 class="location__header">Irontown</h1>

          <ul class="location__info">
            <li>climate: <b>Continental</b></li>
            <li>terrain: <b>Mountain</b></li>
            <li>surface water: <b>40</b></li>
          </ul>

          <h2 class="location__subheader">residents:</h2>
          <ul class="location__residents">
            <li><a href="">- Ashitaka</a></li>
            <li><a href="">- Yakul</a></li>
          </ul>

          <h2 class="location__subheader">films:</h2>
          <ul class="location__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="locations__item location">
          <h1 class="location__header">Irontown</h1>

          <ul class="location__info">
            <li>climate: <b>Continental</b></li>
            <li>terrain: <b>Mountain</b></li>
            <li>surface water: <b>40</b></li>
          </ul>

          <h2 class="location__subheader">residents:</h2>
          <ul class="location__residents">
            <li><a href="">- Ashitaka</a></li>
            <li><a href="">- Yakul</a></li>
          </ul>

          <h2 class="location__subheader">films:</h2>
          <ul class="location__films">
            <li><a href="">- Princess Mononoke</a></li>
          </ul>
        </article>

        <article class="locations__item location">
          <h1 class="location__header">Irontown</h1>

          <ul class="location__info">
            <li>climate: <b>Continental</b></li>
            <li>terrain: <b>Mountain</b></li>
            <li>surface water: <b>40</b></li>
          </ul>

          <h2 class="location__subheader">residents:</h2>
          <ul class="location__residents">
            <li><a href="">- Ashitaka</a></li>
            <li><a href="">- Yakul</a></li>
          </ul>

          <h2 class="location__subheader">films:</h2>
          <ul class="location__films">
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
