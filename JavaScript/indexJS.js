const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}
var intervalo = setInterval(showNextImage, 2000);


/*automatico*/
setInterval(function(){
    Next();
}, 5000);


function mostrar(){
    document.getElementById('card-list-cursos2').style.display = 'grid';
    document.getElementById('boton_mostrat' ).style.display='none';
}

function ocultar(){
    document.getElementById('card-list-cursos2').style.display = 'none';
    document.getElementById('boton_mostrat' ).style.display='grid';
}

// Obtener referencia a los elementos del DOM
var contadorElement = document.getElementById('contador');
var cursosObtenidosElement = document.getElementById('cursos-obtenidos');
var popupElement = document.getElementById('popup');
var mensajeVacioElement = document.getElementById('mensaje-vacio');

// Verificar si hay un contador almacenado en sessionStorage
if (sessionStorage.getItem('contador')) {
  // Obtener el valor almacenado
  var contador = parseInt(sessionStorage.getItem('contador'));
  // Actualizar el contador en el botón
  contadorElement.textContent = contador;
}

// Función para incrementar el contador y almacenar en sessionStorage
function incrementarContador() {
  // Obtener el valor actual del contador
  var contador = parseInt(contadorElement.textContent);
  // Incrementar el contador
  contador++;
  // Actualizar el contador en el botón
  contadorElement.textContent = contador;
  // Almacenar el contador en sessionStorage
  sessionStorage.setItem('contador', contador.toString());
}

// Función para mostrar los cursos obtenidos en el popup
function mostrarCursosObtenidos() {
  // Obtener el valor actual del contador
  var contador = parseInt(contadorElement.textContent);

  // Si no hay cursos obtenidos, mostrar mensaje vacío
  if (contador === 0) {
    mensajeVacioElement.style.display = 'block';
    cursosObtenidosElement.style.display = 'none';
  } else {
    // Mostrar cursos obtenidos
    mensajeVacioElement.style.display = 'none';
    cursosObtenidosElement.style.display = 'block';
    cursosObtenidosElement.textContent = 'Cursos obtenidos: ' + contador;
  }

  // Mostrar el popup
  popupElement.style.display = 'block';
}

// Event listener para el botón "Comprar" de cada curso
var botonesComprar = document.getElementsByClassName('comprar');
for (var i = 0; i < botonesComprar.length; i++) {
  botonesComprar[i].addEventListener('click', incrementarContador);
}
