import './sass/style.scss';

import API from './js/api/api';
import Data from './js/models/data';

import renderComponent from './js/helpers/renderComponent';

import createMarkupHeader from './js/components/header';
import createMarkupFooter from './js/components/footer';
import About from './js/components/about';
import Header from './js/components/header';
import Footer from './js/components/footer';
// import createMarkupFilms from './js/components/films';
// import createMarkupPeoples from './js/components/peoples';
// import createMarkupLocations from './js/components/locations';
// import createMarkupSpecies from './js/components/species';
// import createMarkupVehicles from './js/components/vehicles';

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

const about = new About();
const header = new Header();
const footer = new Footer();

renderComponent(EntryPoint.HEADER, header.getElement());
renderComponent(EntryPoint.FOOTER, footer.getElement());
renderComponent(EntryPoint.MAIN, about.getElement());
// renderComponent(EntryPoint.MAIN, createMarkupFilms());
// renderComponent(EntryPoint.MAIN, createMarkupPeoples());
// renderComponent(EntryPoint.MAIN, createMarkupLocations());
// renderComponent(EntryPoint.MAIN, createMarkupSpecies());
// renderComponent(EntryPoint.MAIN, createMarkupVehicles());
