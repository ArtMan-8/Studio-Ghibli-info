import './sass/style.scss';

import createMarkupHeader from './js/components/header';
import createMarkupFooter from './js/components/footer';
import createMarkupAbout from './js/components/about';
import createMarkupFilms from './js/components/films';

const EntryPoint = {
  HEADER: document.querySelector('.header'),
  MAIN: document.querySelector('.main'),
  FOOTER: document.querySelector('.footer'),
};

const renderComponent = (container, markup, place = 'beforeend') => {
  container.insertAdjacentHTML(place, markup);
};

renderComponent(EntryPoint.HEADER, createMarkupHeader());
renderComponent(EntryPoint.FOOTER, createMarkupFooter());
renderComponent(EntryPoint.MAIN, createMarkupFilms());
// renderComponent(EntryPoint.MAIN, createMarkupAbout());
