import renderComponent from '../helpers/renderComponent';

import About from '../views/about';
import Films from '../views/films';
import Peoples from '../views/peoples';
import Locations from '../views/locations';
import Species from '../views/species';
import Vehicles from '../views/vehicles';

export default class Main {
  constructor(container) {
    this.container = container;
    this.views = {
      about: new About(),
      films: new Films(),
      peoples: new Peoples(),
      locations: new Locations(),
      species: new Species(),
      vehicles: new Vehicles(),
    };
    this.currentView = this.views.about;
  }

  init() {
    renderComponent(this.container, this.currentView);
  }
}
