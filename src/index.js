import './sass/style.scss';

import API from './js/api/api';
import Data from './js/models/data';

import renderComponent from './js/helpers/renderComponent';

import Main from './js/presenters/main';
import Header from './js/views/header';
import Footer from './js/views/footer';

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
renderComponent(EntryPoint.HEADER, header);
renderComponent(EntryPoint.FOOTER, footer);

const main = new Main(EntryPoint.MAIN);
main.init();
