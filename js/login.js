const usuario = document.querySelector(".usuario");
const senha =  document.querySelector(".senha");


function Entrar(){
    if(senha === "adm" && usuario === "adm"){
        window.location.href = "Area_adm.html"
    }
}
