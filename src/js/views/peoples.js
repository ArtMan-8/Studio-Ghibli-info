import Abstract from './abstract';

export default class Peoples extends Abstract {
  constructor(entryPoint, data) {
    super();

    this.entryPoint = entryPoint;
    this.data = data;
  }

  getMarkup() {
    const peoples = this.data.getPeople();

    return (
      `<section class="peoples">
        ${peoples
        .map((people) => this.markupPeople(people))
        .join('')}
      </section>`
    );
  }

  markupPeople(people) {
    const speciesId = people.species.replace(`${this.entryPoint}species/`, '');
    const filmsId = people.films.map((film) => film.replace(`${this.entryPoint}films/`, ''));

    return (
      `<article class="peoples__item people">
        <h1 class="people__header">${people.name}</h1>

        <ul class="people__look">
          <li>gender: <b>${people.gender}</b></li>
          <li>age: <b>${people.age}</b></li>
          <li>eye color: <b>${people.eye_color}</b></li>
          <li>hair color: <b>${people.hair_color}</b></li>
        </ul>

        <h2 class="people__subheader">species:</h2>
        <ul class="people__species">
          <li><a id=${speciesId} href=${this.entryPoint}species/${speciesId}>- ${this.data.getSpeciesById(speciesId).name}</a></li>
        </ul>

        <h2 class="people__subheader">films:</h2>
        <ul class="people__films">
      ${filmsId
        .map((id) => (`<li><a id=${id} href=${this.entryPoint}films/${id}>- ${this.data.getFilmsById(id).title}</a></li>`))
        .join('\n')
      }
        </ul>
      </article>`
    );
  }
}
