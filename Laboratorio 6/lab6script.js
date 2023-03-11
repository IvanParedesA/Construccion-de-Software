var myInput = document.getElementById("psw");
var minuscula = document.getElementById("minuscula");
var mayuscula = document.getElementById("mayuscula");
var numero = document.getElementById("numero");
var longitud = document.getElementById("longitud")

//Mostrar la caja de mensajes cuando el usuario seleccione el campo de contraseña
myInput.onfocus = function() {
    document.getElementById("mensaje").style.display = "block";
}

//Quitar la caja de mensajes cuando el usuario no seleccione el campo de contraseña
myInput.onblur = function() {
    document.getElementById("mensaje").style.display = "none";
}

//Cuando el usuario empiece a escribir en el campo de la contraseña
myInput.onkeyup = function() {

    //Validar letras minúsculas
    var letrasMinusculas = /[a-z]/g;
    if(myInput.ariaValueMax.match(letrasMinusculas)) {
        minuscula.classList.remove("invalid");
        minuscula.classList.add("valid");
    } else {
        minuscula.classList.remove("valid");
        minuscula.classList.add("invalid");
    }

    //Validar letras mayúsculas
    var letrasMayusculas = /[A-Z]/g;
    if(myInput.value.match(letrasMayusculas)) {
        mayuscula.classList.remove("invalid");
        mayuscula.classList.add("valid");
    } else {
        mayuscula.classList.remove("valid");
        mayuscula.classList.add("invalid");
    }

    //Validar números
    var numeros = /[0-9]/g;
    if(myInput.value.match(numeros)) {
        numero.classList.remove("invalid");
        numero.classList.add("valid");
    } else {
        numero.classList.remove("valid");
        numero.classList.add("invalid");
    }

    //Validar longitud
    if(myInput.value.length >= 8) {
        longitud.classList.remove("invalid");
        longitud.classList.add("valid");
    } else {
        longitud.classList.remove("valid");
        longitud.classList.add("invalid")
    }
}