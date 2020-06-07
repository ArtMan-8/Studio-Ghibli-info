const replaceComponent = (container, newComponent, oldComponent) => {
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistElement = !!(container && newElement && oldElement);

  if (isExistElement && container.contains(oldElement)) {
    container.replaceChild(newElement, oldElement);
  }
};

export default replaceComponent;
