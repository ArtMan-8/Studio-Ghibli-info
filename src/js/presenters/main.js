import renderComponent from '../helpers/renderComponent';
import replaceComponent from '../helpers/replaceComponent';

import Observer from '../observers/observer';
import Header from '../views/header';
import Footer from '../views/footer';
import About from '../views/about';
import Films from '../views/films';
import Peoples from '../views/peoples';
import Locations from '../views/locations';
import Species from '../views/species';
import Vehicles from '../views/vehicles';

export default class Main {
  constructor(containers, entryPoint, data) {
    this.containers = containers;
    this.observer = new Observer();
    this.views = {
      about: new About(),
      films: new Films(entryPoint, data),
      people: new Peoples(entryPoint, data),
      locations: new Locations(entryPoint, data),
      species: new Species(entryPoint, data),
      vehicles: new Vehicles(entryPoint, data),
    };
    this.currentView = this.views.about;
    this.changeView = this.changeView.bind(this);
  }

  init() {
    renderComponent(this.containers.HEADER, new Header());
    renderComponent(this.containers.FOOTER, new Footer(this.observer));
    renderComponent(this.containers.MAIN, this.currentView);
    this.observer.subscribe(this.changeView);
  }

  changeView(newView) {
    replaceComponent(this.containers.MAIN, this.views[newView], this.currentView);
    this.currentView = this.views[newView];
  }
}
