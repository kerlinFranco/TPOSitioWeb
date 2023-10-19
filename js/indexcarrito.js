const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoVino = document.createElement("div");
    nuevoVino.classList = "tarjeta-producto"
    nuevoVino.innerHTML = `
    <img src="./imagenes/vinos/malbec/${producto.id}.jpg" alt="Vinos">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p><br>
    <p class="stoc">${producto.stock}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoVino);
    nuevoVino.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(vinosMalbec);