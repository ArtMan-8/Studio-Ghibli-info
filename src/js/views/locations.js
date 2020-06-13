import Abstract from './abstract';

export default class About extends Abstract {
  constructor(entryPoint, data) {
    super();

    this.entryPoint = entryPoint;
    this.data = data;
  }

  getMarkup() {
    const locations = this.data.getLocations();

    return (
      `<section class="locations">
        ${locations
        .map((location) => this.markupLocation(location))
        .join('')}
      </section>`
    );
  }

  markupLocation(location) {
    const residentsId = location.residents.map((resident) => (resident.replace(`${this.entryPoint}people/`, '') !== 'TODO' ? resident.replace(`${this.entryPoint}people/`, '') : false));
    const filmsId = location.films.map((film) => film.replace(`${this.entryPoint}films/`, ''));

    return (
      `<article class="locations__item location">
        <h1 class="location__header">${location.name}</h1>

        <ul class="location__info">
          <li>climate: <b>${location.climate}</b></li>
          <li>terrain: <b>${location.terrain}</b></li>
          <li>surface water: <b>${location.surface_water}%</b></li>
        </ul>

        <h2 class="location__subheader">residents:</h2>
        <ul class="location__residents">
        ${residentsId[0]
        ? residentsId
          .map((id) => (`<li><a id=${id} href=${this.entryPoint}people/${id}>- ${this.data.getPeopleById(id).name}</a></li>`))
          .join('\n')
        : ('<li>-</li>')}
        </ul>

        <h2 class="location__subheader">films:</h2>
        <ul class="location__films">
      ${filmsId
        .map((id) => (`<li><a id=${id} href=${this.entryPoint}films/${id}>- ${this.data.getFilmsById(id).title}</a></li>`))
        .join('\n')
      }
        </ul>
      </article>`
    );
  }
}
