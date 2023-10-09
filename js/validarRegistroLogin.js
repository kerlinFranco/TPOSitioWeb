//Login
let email=document.getElementById("emailLogin");
let passL=document.getElementById("passwordLogin");

if(/^[A-Za-z]\s?\d$/.test(email.value))
  {
    console.log("valor valido");
  }
  else{
    console.log("valor invalido");
  }

