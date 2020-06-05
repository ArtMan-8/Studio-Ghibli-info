import './sass/style.scss';

import API from './js/api/api';

const END_POINT = 'https://ghibliapi.herokuapp.com/';

const api = new API(END_POINT);
api.getData()
  .then((data) => console.log(data));


// import createMarkupHeader from './js/components/header';
// import createMarkupFooter from './js/components/footer';
// import createMarkupAbout from './js/components/about';
// import createMarkupFilms from './js/components/films';
// import createMarkupPeoples from './js/components/peoples';

// const EntryPoint = {
//   HEADER: document.querySelector('.header'),
//   MAIN: document.querySelector('.main'),
//   FOOTER: document.querySelector('.footer'),
// };

// const renderComponent = (container, markup, place = 'beforeend') => {
//   container.insertAdjacentHTML(place, markup);
// };

// renderComponent(EntryPoint.HEADER, createMarkupHeader());
// renderComponent(EntryPoint.FOOTER, createMarkupFooter());
// renderComponent(EntryPoint.MAIN, createMarkupPeoples());
// renderComponent(EntryPoint.MAIN, createMarkupFilms());
// renderComponent(EntryPoint.MAIN, createMarkupAbout());
