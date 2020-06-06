const createElement = (markup) => {
  const element = document.createElement('div');
  element.innerHTML = markup;
  return element.innerHTML;
};

export default createElement;
