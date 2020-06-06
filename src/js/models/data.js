export default class Data {
  constructor() {
    this.films = null;
    this.people = null;
    this.locations = null;
    this.species = null;
    this.vehicles = null;
  }

  setFilms(films) {
    this.films = films;
  }

  setPeople(people) {
    this.people = people;
  }

  setLocations(locations) {
    this.locations = locations;
  }

  setSpecies(species) {
    this.species = species;
  }

  setVehicles(vehicles) {
    this.vehicles = vehicles;
  }

  getFilms() {
    return this.films;
  }

  getFilmsById(id) {
    return this.films.find((film) => film.id === id);
  }

  getPeople() {
    return this.people;
  }

  getPeopleById(id) {
    return this.people.find((people) => people.id === id);
  }

  getLocations() {
    return this.locations;
  }

  getLocationsById(id) {
    return this.locations.find((locations) => locations.id === id);
  }

  getSpecies() {
    return this.species;
  }

  getSpeciesById(id) {
    return this.species.find((species) => species.id === id);
  }

  getVehicles() {
    return this.vehicles;
  }

  getVehiclesById(id) {
    return this.vehicles.find((vehicles) => vehicles.id === id);
  }
}
