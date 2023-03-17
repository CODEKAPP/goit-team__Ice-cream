// muestra la flecha cuando el usuario hace scroll
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.scroll-to-top').style.display = 'block';
  } else {
    document.querySelector('.scroll-to-top').style.display = 'none';
  }
};

// hace que el enlace funcione correctamente
document
  .querySelector('.scroll-to-top')
  .addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#header').scrollIntoView({ behavior: 'smooth' });
  });
