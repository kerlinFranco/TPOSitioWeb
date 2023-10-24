let cad = `
<img src="./imagenes/SarazaWineClubLogo.jpeg" alt="Logo Saraza Wine Club" class="isotipo">
<br>
        <menunav>
            <b class="logotipo">Saraza Wine Club</b>
            <a class="navheader" href="index.html">Inicio</a>
            <a class="navheader" href="tienda-fabian.html">Tienda</a>
            <a class="navheader" href="carrito-fabian.html">Carrito</a>
            <a class="navheader" href="registerLogin-fabian.html">Login</a>
            <a class="navheader" href="quienesSomos-fabian.html">Quienes Somos</a>
        </menunav> `

document.querySelector("header").innerHTML = cad


cad = `
        <b>© 2023 Sitio Desarrollado para Codo a Codo por Eduardo Argento - Franco Kerlin - Ximena Melendez - Ivan Reartes</b>
        `



document.querySelector("footer").innerHTML = cad


document.addEventListener("DOMContentLoaded", function () {
        new Vue({
          el: "#randomHeroImage",
          data: {
            imagenes: [
                "../imagenes/heroImage1.png",
                "../imagenes/heroImage2.png",
                "../imagenes/heroImage3.png",
                "../imagenes/heroImage4.png"
            ],
            imagenSeleccionada: ""
          }
        });
      });
      