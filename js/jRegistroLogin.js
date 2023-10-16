
// css del registro y login
document.getElementById("bRegistrar").addEventListener("click",registro);
document.getElementById("bIniciarSession").addEventListener("click",login);
window.addEventListener("resize",anchoPag);

let cajaAtras=document.querySelector(".cajaAtras");
let cajaAtrasDiv=document.querySelector(".cajaAtras div");
let contenedorLoginRegistro=document.querySelector(".contenedorLoginRegistro");
let formularioLogin=document.querySelector(".formularioLogin");
let formularioRegistro=document.querySelector(".formularioRegistro");
let cajaAtrasLogin=document.querySelector(".cajaLogin");
let cajaAtrasRegistro=document.querySelector(".cajaRegistro");

function anchoPag(){

    
    }
    // if(window.innerWidth>850){
    //     cajaAtrasLogin.style.display="block";
    //     cajaAtrasRegistro.style.display="block";
    //     cajaAtras.style.height= "auto";
    // }else{
    //     cajaAtrasRegistro.style.display="block";
    //     cajaAtrasRegistro.style.opacity="1";
    //     cajaAtrasLogin.style.display="none";
    //     formularioLogin.style.display="block";
    //     formularioRegistro.style.display="none";
    //     contenedorLoginRegistro.style.left="0px";
    //     cajaAtras.style.height= "750px";
        
    // }


anchoPag();

function registro(){
    formularioRegistro.style.display="block";
    formularioLogin.style.display="none";
    cajaAtras.style.height="820px";
    cajaAtrasRegistro.style.display="none";
    cajaAtrasRegistro.style.opacity="0";
    cajaAtrasLogin.style.display="block";
    cajaAtrasLogin.style.opacity="1";
    

    // if(window.innerWidth>850){
    //     formularioRegistro.style.display="block";
    //     contenedorLoginRegistro.style.left="460px";
    //     formularioLogin.style.display="none";
    //     cajaAtrasRegistro.style.opacity="0";
    //     cajaAtrasLogin.style.opacity="1";
    //     formularioRegistro.style.top="-300px";
        
    // }else{
    //     formularioRegistro.style.display="block";
    //     contenedorLoginRegistro.style.left="0px";
    //     formularioLogin.style.display="none";
    //     cajaAtrasRegistro.style.display="none";
    //     cajaAtrasLogin.style.display="block";
    //     cajaAtrasLogin.style.opacity="1";
    //     cajaAtras.style.height= "900px";//hacer lo mismo para el login 
    //     formularioRegistro.style.top="-600px";//tambien hay que aplicarlo anchoPag
    // }
    
}

function login(){
    formularioRegistro.style.display="none";
    formularioLogin.style.display="block";
    cajaAtras.style.height="720px";
    cajaAtrasRegistro.style.display="block";
    cajaAtrasRegistro.style.opacity="1";
    cajaAtrasLogin.style.display="none";
    cajaAtrasLogin.style.opacity="0";


    // if(window.innerWidth>850){
    //     formularioRegistro.style.display="none";
    //     contenedorLoginRegistro.style.left="10px";
    //     formularioLogin.style.display="block";
    //     cajaAtrasRegistro.style.opacity="1";
    //     cajaAtrasLogin.style.opacity="0";
    // }else{
    //     formularioRegistro.style.display="none";
    //     contenedorLoginRegistro.style.left="0px";
    //     formularioLogin.style.display="block";
    //     cajaAtrasRegistro.style.display="block";
    //     cajaAtrasLogin.style.display="none";
    //     cajaAtras.style.height= "750px";
    //     formularioRegistro.style.top="-500px";  
    // }
}
//fin del css