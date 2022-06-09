var btnEncriptar = document.querySelector(".btn_encriptar");
var btnDesencriptar = document.querySelector(".btn_desencriptar");
var ingreso = document.querySelector(".area_ingreso");
var salida = document.querySelector(".area_salida");
var btnCopiar = document.querySelector(".btn_copiar");
var muneco = document.querySelector(".muneco");

function enviar(){
 salida.textContent = ingreso.value;
}

btnEncriptar.addEventListener("click",enviar)
btnDesencriptar.addEventListener("click",enviar)






