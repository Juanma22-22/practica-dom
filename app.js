<<<<<<< HEAD
// === 1. FASE DE SELECCIÓN === [Reto: 2]
=======
// === 1. FASE DE SELECCIÓN ===[cite: 2]
>>>>>>> 82a1984c7faf29370ca5bfae3ca660d462cb4f06
// Capturamos todos los elementos que queremos modificar usando getElementById y querySelector
const tarjeta = document.getElementById("tarjeta-perfil");
const imagen = document.getElementById("foto-usuario");
const nombre = document.querySelector("#nombre-usuario");
const biografia = document.getElementById("bio-usuario");
const contenedorEstado = document.getElementById("estado-cuenta");

<<<<<<< HEAD
//Modificación 1: Cambiar textos usando textContent
nombre.textContent = "sebastian angel castaño";
biografia.textContent = "Tecnico profesional en Programación web, con expreciancia en desarrollo de aplicativos Web.";

//Modificación 2: Cambiar la imagen usando setAttribute
//Cambiamos el archivo de la imagen y el texto alternativo
imagen.setAttribute('src', 'img/perfil1.jpg');
imagen.setAttribute('alt', 'Foto de sebastian angel castaño');

//Modificación 3: Inyectar HTML nuevo usando innerHTML
//Creamos una etiqueta fuerte y un salto de línea desde cero
contenedorEstado.innerHTML = "<br><strong style='color: green;'>🟢 Cuenta verificada</strong>";

//Modificación 4: Cambiar el diseño usando classList
//Agregamos la clase que teníamos preparada en el CSS
tarjeta.classList.add("perfil-premium");
=======
// === 2. FASE DE MODIFICACIÓN

//Modificación 1: Cambiar textos usando textContent
nombre.textContent = "Juan Manuel Beltrán";
biografia.textContent = "Tecnico profesional en Programación web, con expreciencia en desarrollo de aplicativos Web.";

//Modificación 2: Cambiar la imagen usando setAttribute
//Cambiamos el archivo de la imagen y el texto alternativo
imagen.setAttribute('src', '/img/perfil2.jpg');
imagen.setAttribute('alt', 'Foto de Juan Manuel Beltrán');

//Modificación 3: Inyectar HTML nuevo usando innerHTML
//Creamnos una etiqueta fuerte y un salto de linea desde cero
contenedorEstado.innerHTML = "<br><strong style='color: green;'>🟢 Cuenta verificada</strong>";

//Modificación 4: Cambiar el diseño usando classList
//Agregamos la clase que teniamos preparada en el CSS
tarjeta.classList.add("perfil-premium");
>>>>>>> 82a1984c7faf29370ca5bfae3ca660d462cb4f06
