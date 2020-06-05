export default class API {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  getFilms() {
    return this.load({ url: 'films' });
  }

  getPeople() {
    return this.load({ url: 'people' });
  }

  getLocations() {
    return this.load({ url: 'locations' });
  }

  getSpecies() {
    return this.load({ url: 'species' });
  }

  getVehicles() {
    return this.load({ url: 'vehicles' });
  }

  getData() {
    return Promise.all([
      this.getFilms(),
      this.getPeople(),
      this.getLocations(),
      this.getSpecies(),
      this.getVehicles(),
    ])
      .then((response) => {
        const [films, people, locations, species, vehicles] = response;
        return {
          films,
          people,
          locations,
          species,
          vehicles,
        };
      });
  }

  load({ url, body = null }) {
    return fetch(`${this.endPoint}${url}`, { body })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status}: ${response.statusText}`);
      })
      .catch((error) => {
        throw error;
      });
  }
}
