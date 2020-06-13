import Abstract from './abstract';

export default class Vehicles extends Abstract {
  constructor(entryPoint, data) {
    super();

    this.entryPoint = entryPoint;
    this.data = data;
  }

  getMarkup() {
    const vehicles = this.data.getVehicles();

    return (
      `<section class="vehicles">
        ${vehicles
        .map((vehicle) => this.markupVehicle(vehicle))
        .join('')}
      </section>`
    );
  }

  markupVehicle(vehicle) {
    const peopleId = vehicle.pilot.replace(`${this.entryPoint}people/`, '');
    const filmsId = vehicle.films.replace(`${this.entryPoint}films/`, '');

    return (
      `<article class="vehicles__item vehicle">
        <h1 class="vehicle__header">${vehicle.name}</h1>

        <ul class="vehicle__info">
          <li>description: <b>${vehicle.description}</b></li>
          <li>vehicle class: <b>${vehicle.vehicle_class}</b></li>
          <li>length: <b>${vehicle.length}m</b></li>
        </ul>

        <h2 class="vehicle__subheader">pilots:</h2>
        <ul class="vehicle__pilots">
          <li><a id=${peopleId} href=${this.entryPoint}people/${peopleId}>- ${this.data.getPeopleById(peopleId).name}</a></li>
        </ul>

        <h2 class="vehicle__subheader">films:</h2>
        <ul class="vehicle__films">
          <li><a id=${filmsId} href=${this.entryPoint}films/${filmsId}>- ${this.data.getFilmsById(filmsId).title}</a></li>
        </ul>
      </article>`
    );
  }
}
