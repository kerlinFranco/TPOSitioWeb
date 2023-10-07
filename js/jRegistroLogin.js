document.getElementById("bRegistrar").addEventListener("click",registro);
document.getElementById("bIniciarSession").addEventListener("click",login);
window.addEventListener("resize",anchoPag);

let cajaAtras=document.querySelector(".cajaAtras");
let contenedorLoginRegistro=document.querySelector(".contenedorLoginRegistro");
let formularioLogin=document.querySelector(".formularioLogin");
let formularioRegistro=document.querySelector(".formularioRegistro");
let cajaAtrasLogin=document.querySelector(".cajaLogin");
let cajaAtrasRegistro=document.querySelector(".cajaRegistro");

function anchoPag(){
    if(window.innerWidth>850){
        cajaAtrasLogin.style.display="block";
        cajaAtrasRegistro.style.display="block";
    }else{
        cajaAtrasRegistro.style.display="block";
        cajaAtrasRegistro.style.opacity="1";
        cajaAtrasLogin.style.display="none";
        formularioLogin.style.display="block";
        formularioRegistro.style.display="none";
        contenedorLoginRegistro.style.left="0px";
        
    }
}

anchoPag();

function registro(){
    if(window.innerWidth>850){
        formularioRegistro.style.display="block";
        contenedorLoginRegistro.style.left="460px";
        formularioLogin.style.display="none";
        cajaAtrasRegistro.style.opacity="0";
        cajaAtrasLogin.style.opacity="1";
    }else{
        formularioRegistro.style.display="block";
        contenedorLoginRegistro.style.left="0px";
        formularioLogin.style.display="none";
        cajaAtrasRegistro.style.display="none";
        cajaAtrasLogin.style.display="block";
        cajaAtrasLogin.style.opacity="1";
        cajaAtras.style.height= "900px";//hacer lo mismo para el login 
        formularioRegistro.style.top="-600px";//tambien hay que aplicarlo anchoPag
    }
    
}

function login(){
    if(window.innerWidth>850){
        formularioRegistro.style.display="none";
        contenedorLoginRegistro.style.left="10px";
        formularioLogin.style.display="block";
        cajaAtrasRegistro.style.opacity="1";
        cajaAtrasLogin.style.opacity="0";
    }else{
        formularioRegistro.style.display="none";
        contenedorLoginRegistro.style.left="0px";
        formularioLogin.style.display="block";
        cajaAtrasRegistro.style.display="block";
        cajaAtrasLogin.style.display="none";  
    }
}
