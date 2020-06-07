import renderComponent from '../helpers/renderComponent';

import Header from '../views/header';
import Footer from '../views/footer';
import About from '../views/about';
import Films from '../views/films';
import Peoples from '../views/peoples';
import Locations from '../views/locations';
import Species from '../views/species';
import Vehicles from '../views/vehicles';

export default class Main {
  constructor(containers) {
    this.containers = containers;
    this.views = {
      header: new Header(),
      footer: new Footer(),
      about: new About(),
      films: new Films(),
      people: new Peoples(),
      locations: new Locations(),
      species: new Species(),
      vehicles: new Vehicles(),
    };
    this.currentView = this.views.about;
  }

  init() {
    renderComponent(this.containers.HEADER, this.views.header);
    renderComponent(this.containers.FOOTER, this.views.footer);
    renderComponent(this.containers.MAIN, this.currentView);
  }
}
