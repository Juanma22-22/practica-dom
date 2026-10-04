//=============== 1. FASE DE SELECIÓN ==================[cite: 2]
// Capturamos todos los elementos que queremos modificar usando getElementById y querySelector

const tarjeta = document.getElementById("tarjeta-perfil");
const imagen = document.getElementById("foto-usuario");
const nombre = document.querySelector("#nombre-usuario");
const biografia = document.getElementById("bio-usuario");
const contenedorEstado = document.getElementById("estado-cuenta");

//=============== 2: FASE DE MIDIFICACIÓN ==============

// Modificación 1: Cambia textos usando textContent
nombre.textContent = "Jhonatan Bustos Martinez";
biografia.textContent = " Tengo profesional en programación web con experiencia en desarrollo de aplicativos web";

// El Modificación 2: cambiar la imagen usando setAttribute
// Cambia el archivo de la imagen y el texto alternativo
imagen.setAttribute('src', '/img/perfil2.jpg');
imagen.setAttribute('alt', 'foto de Jhonatan Bustos Martinez');

// Modificación 3: inyectar HTML nuevo usando innerHTML
// Creamos una etiqueta fuerte y un salto de linea desde cero
contenedorEstado.innerHTML = "<br><strong style='color: orange;'>🟢 cuenta verificada</strong>";

// Modificación 4: cambiar el diseño usando classList
// Agregamos la clase que teníamos preparada en CCS
tarjeta.classList.add("perfil-premium");