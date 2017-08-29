document.addEventListener('DOMContentLoaded', function () {
  let btn = document.getElementById('button');

  btn.onclick = function (event) {
    if (event.target.classList.contains('loading')) {
      event.target.classList.remove('loading');
      event.target.innerHTML = 'Cargar';
    } else {
      event.target.classList.add('loading');
      event.target.innerHTML = 'Cargando...';
    }
  };
});
