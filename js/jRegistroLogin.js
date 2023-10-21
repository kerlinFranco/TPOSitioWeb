
// css del registro y login
document.getElementById("bRegistrar").addEventListener("click",registro);
document.getElementById("bIniciarSession").addEventListener("click",login);
// window.addEventListener("resize",anchoPag);

let cajaAtras=document.querySelector(".cajaAtras");
let cajaAtrasDiv=document.querySelector(".cajaAtras div");
let contenedorLoginRegistro=document.querySelector(".contenedorLoginRegistro");
let formularioLogin=document.querySelector(".formularioLogin");
let formularioRegistro=document.querySelector(".formularioRegistro");
let cajaAtrasLogin=document.querySelector(".cajaLogin");
let cajaAtrasRegistro=document.querySelector(".cajaRegistro");

// function anchoPag(){
 
//     if(window.innerWidth>768){

//     }else{

//     }

// }
// anchoPag();

function registro(){
    formularioRegistro.style.display="block";
    formularioLogin.style.display="none";
    cajaAtras.style.height="820px";
    cajaAtrasRegistro.style.display="none";
    cajaAtrasRegistro.style.opacity="0";
    cajaAtrasLogin.style.display="block";
    cajaAtrasLogin.style.opacity="1";
    

    
}

function login(){
    formularioRegistro.style.display="none";
    formularioLogin.style.display="block";
    cajaAtras.style.height="720px";
    cajaAtrasRegistro.style.display="block";
    cajaAtrasRegistro.style.opacity="1";
    cajaAtrasLogin.style.display="none";
    cajaAtrasLogin.style.opacity="0";


}
//fin del css
//consumo de json para oferta en registro

fetch('vinosLocal.json') 
        .then(response => response.json())
        .then(data => {
            const ofertasSidebar = document.getElementById('ofertas-sidebar');
            let num=parseInt((Math.random()*100)+1)
            console.log(num)
            data.forEach(oferta => {
                if(oferta.id==1){
                    const ofertaCard = document.createElement('div');
                ofertaCard.classList.add('oferta-card');
                ofertaCard.innerHTML = `
                    <h3>${oferta.nombre}</h3>
                    <img src="${oferta.fotoTarjeta}" alt="Bienvenido a Sara Winery Club"
                    class="widget">
                    <p>${oferta.descripcion}</p>
                    <h2>${oferta.precioClub}</h2>
                    <a href="${oferta.enlace}" target="blank">Ver oferta</a>
                    
                `;
                ofertasSidebar.appendChild(ofertaCard);
                }
                
            });
        })
        .catch(error => {
            console.error('Error al cargar las ofertas: ', error);
        });
