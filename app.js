// ------FASE DE SELECCION----/

const targeta = document.getElementById("targeta-perfil");
const imagen = document.getElementById("foto-ususario");
const nombre = document.querySelector("nombre-usurio");
const biografia = document.getElementById("bio-usurio");
const contenedorEstado = document.getElementById("estado-cuenta");

// ===== fase de modificacion

//modificacion
nombre.textContent = "Cristian Danilo Marin Arias";
biografia.textContent = "tecnico profesional en programacion web, con experiencia en desarrollo de aplicaciones web.";



imagen.setAttribute('src', '/img/perfil2.jpg');
imagen.setAttribute('alt', 'Cristian Danilo Marin Arias');



contenedorEstado.innerHTML = "<br><strong style='color:green;'>🟢 cuenta verificada</strong>";

//modificacion 4:Cambiar el diseño usando classlist
//agregamos la clase que teniamos preparados en css 
targeta.classList.add("perfil-premium");

