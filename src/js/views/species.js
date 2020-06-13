import Abstract from './abstract';

export default class Species extends Abstract {
  constructor(entryPoint, data) {
    super();

    this.entryPoint = entryPoint;
    this.data = data;
  }

  getMarkup() {
    const species = this.data.getSpecies();

    return (
      `<section class="species">
        ${species
        .map((specie) => this.markupSpecie(specie))
        .join('')}
      </section>`
    );
  }

  markupSpecie(species) {
    const peopleId = species.people.map((resident) => (resident.replace(`${this.entryPoint}people/`, '') !== 'TODO' ? resident.replace(`${this.entryPoint}people/`, '') : false));
    const filmsId = species.films.map((film) => film.replace(`${this.entryPoint}films/`, ''));

    return (
      `<article class="species__item specie">
        <h1 class="specie__header">${species.name}</h1>

        <ul class="specie__info">
          <li>classification: <b>${species.classification}</b></li>
          <li>eye colors: <b>${species.eye_colors}</b></li>
          <li>hair colors: <b>${species.hair_colors}</b></li>
        </ul>

        <h2 class="specie__subheader">peoples:</h2>
        <ul class="specie__peoples">
      ${peopleId[0]
        ? peopleId
          .map((id) => (`<li><a id=${id} href=${this.entryPoint}people/${id}>- ${this.data.getPeopleById(id).name}</a></li>`))
          .join('\n')
        : ('<li>-</li>')}
        </ul>

        <h2 class="specie__subheader">films:</h2>
        <ul class="specie__films">
      ${filmsId
        .map((id) => (`<li><a id=${id} href=${this.entryPoint}films/${id}>- ${this.data.getFilmsById(id).title}</a></li>`))
        .join('\n')
      }
        </ul>
      </article>`
    );
  }
}
