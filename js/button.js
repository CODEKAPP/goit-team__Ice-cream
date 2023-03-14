// Obtener el botón y el contenedor
var button = document.getElementById('button-less');
var container = document.getElementById('container-less');
var text_one = document.getElementById('description-less_one');
var text_two = document.getElementById('description-less_two');
var svg = document.getElementById('icon__less');

// Variable de estado para rastrear si el contenedor está visible
var currentState = 'none';

// Función para ocultar el texto si la pantalla se encoge
function hideTextOnSmallScreens() {
  if (window.innerWidth < 768) {
    container.style.display = 'none';
    currentState = 'none';
    svg.style.transform = 'rotate(0deg)';
    button.querySelector('span').textContent = 'Read more';
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    text_one.style.display = 'block';
    text_two.style.display = 'none';
    container.style.display = 'block';
    currentState = 'none';
    svg.style.transform = 'rotate(0deg)';
    button.querySelector('span').textContent = 'Read more';
  } else {
    text_one.style.display = 'block';
    text_two.style.display = 'block';
    container.style.display = 'block';
    currentState = 'visible';
    svg.style.transform = 'rotate(180deg)';
    button.querySelector('span').textContent = 'Read less';
    button.style.transition =
      'box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';
  }
}

// Agregar un evento de clic al botón
button.addEventListener('click', function () {
  // Si el contenedor está oculto, mostrarlo y cambiar el texto del botón
  if (currentState === 'none') {
    svg.style.transform = 'rotate(180deg)';
    text_one.style.display = 'block';
    text_two.style.display = 'block';
    container.style.display = 'block';
    currentState = 'visible';
    button.querySelector('span').textContent = 'Read less';
  } else {
    // Si el contenedor está visible, ocultarlo y cambiar el texto del botón
    svg.style.transform = 'rotate(0deg)';
    container.style.display = 'none';
    currentState = 'none';
    button.querySelector('span').textContent = 'Read more';
  }
});

// Agregar un evento de resize a la ventana
window.addEventListener('resize', hideTextOnSmallScreens);

// Ocultar el texto si la pantalla es demasiado pequeña
hideTextOnSmallScreens();

button.style.transition =
  'box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';

button.addEventListener('mouseover', function () {
  button.style.transition =
    'box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';
});

button.addEventListener('mouseout', function () {
  // button.style.backgroundColor = 'white';
  button.style.transition =
    'box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';
});
