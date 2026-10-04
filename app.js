const tarjeta = document.getElementById("tarjeta-perfil");
const imagen = document.getElementById("foto-usuario");
const nombre = document.getElementById("nombre-usuario");
const biografia = document.getElementById("bio-usuario");
const contenedorEstado = document.getElementById("estado-cuenta");

//modificar mediante textcontent
nombre.textContent = "Juan Miguel López";
biografia.textContent = "Técnico profesional en programción web, con experiencia en desarrolo de aplicativos Web";

//modificar mediante setAttribute
imagen.setAttribute('src', 'img/perfil2.jpg');
imagen.setAttribute('alt', 'Foto de Juan Miguel López');

//inyectar nuevo html usando innerhtml
contenedorEstado.innerHTML = "<br><strong style='color: green;'>🟢Cuenta verificada</strong>";

//cambiar diseño usando classlist     agregamos la clase que estava lista en el css
tarjeta.classList.add("perfil-premium");