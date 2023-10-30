function dataContainer () {
  const wrapperId = document.getElementById('wrapper');
  const dataContainer = document.createElement('section');

  dataContainer.className = 'data-container'
  dataContainer.id = 'data-container'

  wrapperId.appendChild(dataContainer);
}

dataContainer();
