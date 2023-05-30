const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const indicacion= document.getElementById("indicacion");
const bcopiar= document.querySelector(".copiar");
bcopiar.style.opacity="0";

async function copiarEncriptado(){
 mensaje.select();
    mensaje.setSelectionRange(0,99999);
    await navigator.clipboard.writeText(mensaje.value);
    alert ("copiando.."+mensaje.value);
}


function btnEncriptar (){
const textoEncriptado = encriptar(textArea.value);
mensaje.value = textoEncriptado;
textArea.value="";
mensaje.style.backgroundImage="none";
indicacion.style.opacity="0";
bcopiar.style.opacity="1";
}

function btnDesencriptar (){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";

    }


function encriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i < matrizCodigo.length ; i++ ) {
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    stringDesencriptada = stringDesencriptada.toLowerCase();
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i < matrizCodigo.length ; i++ ) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
return stringDesencriptada;
}


