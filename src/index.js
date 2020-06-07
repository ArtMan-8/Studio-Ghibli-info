import './sass/style.scss';

import API from './js/api/api';
import Data from './js/models/data';
import Main from './js/presenters/main';

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

const main = new Main(EntryPoint);
main.init();
