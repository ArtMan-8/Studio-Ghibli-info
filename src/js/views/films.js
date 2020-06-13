import Abstract from './abstract';

export default class Films extends Abstract {
  constructor(entryPoint, data) {
    super();

    this.entryPoint = entryPoint;
    this.data = data;
  }

  getMarkup() {
    const films = this.data.getFilms();
    const locations = this.data.getLocations();
    const vehicles = this.data.getVehicles();

    return (
      `<section class="films">
        ${films
        .map((film) => this.markupFilm(film, locations, vehicles))
        .join('')}
      </section>`
    );
  }

  markupFilm(film, locations, vehicles) {
    const locs = [];
    locations
      .map((location) => location.films
        .map((loc) => ((loc.replace(`${this.entryPoint}films/`, '')) === film.id ? locs.push(location.url) : false)));
    const locationsId = locs.flat().map((lo) => lo.replace(`${this.entryPoint}locations/`, ''));

    const vehs = [];
    vehicles.map((veh) => (veh.films.replace(`${this.entryPoint}films/`, '') === film.id ? vehs.push(veh.url) : false));
    const vehiclesId = vehs.map((veh) => veh.replace(`${this.entryPoint}vehicles/`, ''));

    const peopleId = film.people.map((resident) => (resident.replace(`${this.entryPoint}people/`, '') !== 'TODO' ? resident.replace(`${this.entryPoint}people/`, '') : false));
    const speciesId = film.species.map((specie) => specie.replace(`${this.entryPoint}species/`, ''));

    return (
      `<article class="films__item film">
        <h1 class="film__header">${film.title}</h1>
        <p class="film__description">${film.description}</p>

        <ul class="film__data">
          <li>director: ${film.director}</li>
          <li>producer: ${film.producer}</li>
          <li>release date: ${film.release_date}</li>
          <li>rt score: ${film.rt_score}</li>
        </ul>

        <h2 class="film__subheader">people:</h2>
        <ul class="film__people">
        ${peopleId[0]
        ? peopleId
          .map((id) => (`<li><a id=${id} href=${this.entryPoint}people/${id}>- ${this.data.getPeopleById(id).name}</a></li>`))
          .join('\n')
        : ('<li>-</li>')}
        </ul>

        <h2 class="film__subheader">location:</h2>
        <ul class="film__location">
        ${locationsId[0]
        ? locationsId
          .map((id) => (`<li><a id=${id} href=${this.entryPoint}locations/${id}>- ${this.data.getLocationsById(id).name}</a></li>`))
          .join('\n')
        : ('<li>-</li>')}
        </ul>

        <h2 class="film__subheader">species:</h2>
        <ul class="film__species">
      ${speciesId
        .map((id) => (`<li><a id=${id} href=${this.entryPoint}species/${id}>- ${this.data.getSpeciesById(id).name}</a></li>`))
        .join('\n')
      }
        </ul>

        <h2 class="film__subheader">vehicles:</h2>
        <ul class="film__vehicles">
        ${vehiclesId[0]
        ? vehiclesId
          .map((id) => (`<li><a id=${id} href=${this.entryPoint}vehicles/${id}>- ${this.data.getVehiclesById(id).name}</a></li>`))
          .join('\n')
        : ('<li>-</li>')}
        </ul>
      </article>`
    );
  }
}
