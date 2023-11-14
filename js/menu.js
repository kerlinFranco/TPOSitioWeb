let cad = `
<img src="./imagenes/isologotipo-saraza-wine-club-redux.png" alt="Logo Saraza Wine Club" class="isotipo">
<br>
        <menunav>
            
            <a class="navheader" href="index.html">Inicio</a>
            <a class="navheader" href="tienda.html">Tienda</a>
            <a class="navheader" href="carrito.html">Carrito</a>
            <a class="navheader" href="registerLogin.html">Login</a>
            <a class="navheader" href="quienesSomos.html">Quienes Somos</a>
        </menunav> `

document.querySelector("header").innerHTML = cad
//<b class="logotipo">Saraza Wine Club</b> se quito temporalmente para ver como queda 

cad = `
<img src="./imagenes/isologotipo-saraza-social-redux.png" alt="Logo Saraza Wine Club" class="social">
<br>
<h3>Seguinos en nuestras redes!</h3>

<div class="wrapper">
  <i class="fa fa-5x fa-facebook-square" href="https://www.facebook.com/">.</i>
  <i class="fa fa-5x fa-twitter-square" href="https://www.twitter.com/home">.</i>
  <i class="fa fa-5x fa-github-square" href="https://www.github.com/">.</i>
  <i class="fa fa-5x fa-snapchat-square" href="https://www.snapchat.com">.</i>
</div>
<br>
<br>
        <b>© 2023 Sitio Desarrollado para Codo a Codo por Eduardo Argento - Franco Kerlin - Ximena Melendez - Ivan Reartes</b>
        `

document.querySelector("footer").innerHTML = cad

