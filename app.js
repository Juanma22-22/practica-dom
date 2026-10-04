// === 1. FASE DE SELECCIÓN ===[cite: 2]
// Capturamos todos los elementos que queremos modificar usando getElementById y querySelector
const tarjeta = document.getElementById("tarjeta-perfil");
const imagen = document.getElementById("foto-usuario");
const nombre = document.querySelector("#nombre-usuario");
const biografia = document.getElementById("bio-usuario");
const contenedorEstado = document.getElementById("estado-cuenta");

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
