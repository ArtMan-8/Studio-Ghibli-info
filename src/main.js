import './sass/style.scss';

import API from './js/api/api';
import Data from './js/models/data';

import renderComponent from './js/helpers/renderComponent';

import Header from './js/view/header';
import Footer from './js/view/footer';
import About from './js/view/about';
// import Films from './js/view/films';
// import Peoples from './js/view/peoples';
// import Locations from './js/view/locations';
// import Species from './js/view/species';
// import Vehicles from './js/view/vehicles';

const END_POINT = 'https://ghibliapi.herokuapp.com/';

const EntryPoint = {
  HEADER: document.querySelector('.header'),
  MAIN: document.querySelector('.main'),
  FOOTER: document.querySelector('.footer'),
};

const api = new API(END_POINT);
const data = new Data();

api.getData()
  .then((response) => {
    data.setFilms(response.films);
    data.setPeople(response.people);
    data.setLocations(response.locations);
    data.setSpecies(response.species);
    data.setVehicles(response.vehicles);
  });

const header = new Header();
const footer = new Footer();
const about = new About();
// const films = new Films();
// const peoples = new Peoples();
// const locations = new Locations();
// const species = new Species();
// const vehicles = new Vehicles();

renderComponent(EntryPoint.HEADER, header.getElement());
renderComponent(EntryPoint.FOOTER, footer.getElement());
renderComponent(EntryPoint.MAIN, about.getElement());
// renderComponent(EntryPoint.MAIN, films.getElement());
// renderComponent(EntryPoint.MAIN, peoples.getElement());
// renderComponent(EntryPoint.MAIN, locations.getElement());
// renderComponent(EntryPoint.MAIN, species.getElement());
// renderComponent(EntryPoint.MAIN, vehicles.getElement());
