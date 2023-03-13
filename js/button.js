// Obtener el botón y el contenedor
var button = document.getElementById('button-less');
var container = document.getElementById('container-less');
var svg = document.getElementById('icon__less');

// Variable de estado para rastrear si el contenedor está visible
var currentState = 'none';

// Función para ocultar el texto si la pantalla se encoge
function hideTextOnSmallScreens() {
  if (window.innerWidth < 768) {
    container.style.display = 'none';
    currentState = 'none';
    svg.style.transform = 'rotate(0deg)';
    button.querySelector('span').textContent = 'Read more ';
  } else {
    svg.style.transform = 'rotate(0deg)';
    container.style.display = 'none';
    currentState = 'none';
    button.querySelector('span').textContent = 'Read more ';
    button.style.transform = 'perspective(0px) rotateY(0deg)';
    button.style.boxShadow = 'none';
  }
}

// Agregar un evento de clic al botón
button.addEventListener('click', function () {
  // Si el contenedor está oculto, mostrarlo y cambiar el texto del botón
  if (currentState === 'none') {
    svg.style.transform = 'rotate(180deg)';
    container.style.display = 'block';
    currentState = 'visible';
    button.querySelector('span').textContent = 'Read less ';
    button.style.transform = 'perspective(83px) rotateY(-7deg)';
    button.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
  } else {
    // Si el contenedor está visible, ocultarlo y cambiar el texto del botón
    svg.style.transform = 'rotate(0deg)';
    container.style.display = 'none';
    currentState = 'none';
    button.querySelector('span').textContent = 'Read more ';
    button.style.transform = 'perspective(0px) rotateY(0deg)';
    button.style.boxShadow = 'none';
  }
});

// Agregar un evento de resize a la ventana
window.addEventListener('resize', hideTextOnSmallScreens);

// Ocultar el texto si la pantalla es demasiado pequeña
hideTextOnSmallScreens();

// button.style.transition = 'all 0.3s ease-in-out';
button.style.transition =
  ' box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';

button.addEventListener('mouseover', function () {
  // button.style.backgroundColor = 'red';
  // button.style.color = 'white';
  button.style.transition =
    ' box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';
});

button.addEventListener('mouseout', function () {
  button.style.backgroundColor = 'white';
  // button.style.color = 'black';
  button.style.transition =
    ' box-shadow, background-color, color 5s cubic-bezier(0.4, 0, 0.2, 1)';
});
