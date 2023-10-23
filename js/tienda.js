fetch('vinosLocal.json') 
        .then(response => response.json())
        .then(data => {
            const ofertasSidebar = document.getElementById('productos');

            data.forEach(oferta => {
                let num=0;
                    const ofertaCard = document.createElement('div');
                ofertaCard.classList.add('productoCard');
                if(num<=5){
                    ofertaCard.innerHTML = `
                    <h3>${oferta.nombre}</h3>
                    <span class="">
                    <img src="${oferta.fotoTarjeta}" alt=""
                    class="card" >
                    </span>
                    <div class="">
                    <span class="descripTienda">
                    <p>${oferta.descripcion}</p>
                    </span>
                    <div class="preciosTienda">
                    <h2>${oferta.precio}</h2>
                    <span class=precioClub>
                    <h2>${oferta.precioClub}</h2>
                    </span>
                    
                    </div>
                    
                    </div>
                `;
                num++;
                }
                
                
                ofertasSidebar.appendChild(ofertaCard);
                
                
            });
            

        })
        .catch(error => {
            console.error('Error al cargar las ofertas: ', error);
        });