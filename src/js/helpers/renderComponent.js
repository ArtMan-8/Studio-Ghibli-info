const renderComponent = (container, markup, place = 'beforeend') => {
  container.insertAdjacentHTML(place, markup);
};

export default renderComponent;
