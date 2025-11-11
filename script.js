// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://static.wikia.nocookie.net/princesas-y-mascotas-disney/images/2/2e/Cenicienta-0.jpg/revision/latest/scale-to-width-down/303?cb=20190826103412&path-prefix=es",
  "https://static.wikia.nocookie.net/princessdisney/images/6/60/Ariel.JPG/revision/latest/thumbnail/width/360/height/360?cb=20130427061152",
  "https://static.wikia.nocookie.net/princesas-y-mascotas-disney/images/3/30/Bella.jpg/revision/latest/scale-to-width-down/323?cb=20190826181543&path-prefix=es",
  "https://pm1.aminoapps.com/6797/87683e0e212805ac0c7e56a2e5c5fe80537ef387v2_hq.jpg",
];

const titulos = [
  "Cenicienta",
  "Ariel",
  "Bella",
  "Rapunzel",
];

const frases = [
  "Haces amigos con facilidad, tienes un corazón bondadoso aunque siempre estás llegando tarde a todos lados",
  "Te encanta explorar cosas nuevas y nadar. Tu lugar favorito para vacaciones definitvamente es el mar.",
  "Encuentras refugio en los libros, nada mejor que leer con el calor de una chimenea",
  "Tu cabello es tu tesoro más preciado pero tu actividad favorita es todo lo que tenfa que ver con el arte y pintar",
];

const colores = [
  "blue",
  "red",
  "yellow",
  "purple",
]

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];
  imagen.style.borderColor = colores[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();

