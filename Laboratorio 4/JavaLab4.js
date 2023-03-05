alert('Bienvenido a mi Laboratorio 4');

//Problema 1
document.write("Problema 1:")

//Preguntamos al usuario un número
const numero = Number(prompt("Ingresa un número para generar la tabla"));

//Imprimir base de la tabla
document.write("<table>");

//Generar el ciclo de la tabla
for(i = 1; i < numero + 1; i++){
  // Imprimir las filas
  document.write("<tr>");

    //Columnas
    document.write("<td>");
    document.write(i);
    document.write("</td>");

    document.write("<td>");
    document.write(i*i);
    document.write("</td>");

    document.write("<td>");
    document.write(i*i*i);
    document.write("</td>");

  //Cerrar las filas
  document.write("</tr>");
}
//Cerrar la tabla
document.write("</table>");

//Problema 2
document.write("<br> Problema 2: <br>");

//Definimos los números aleatorios
let random1 = Math.floor(Math.random()*100);
let random2 = Math.floor(Math.random()*100);

//Definimos la suma
let suma = random1 + random2;

//Registramos el tiempo en el que empezó a hacer la operación
let tiempoInicio = new Date();

//Mensaje para que el usuario responda la suma
let respuesta = Number(prompt("¿Cuánto es " + random1 + " + " + random2 + "?"));

//Registramos el tiempo en el que terminó a hacer la operación
let tiempoFinal = new Date();

//Diferencia en segundos
let tiempoDiferencia = tiempoFinal - tiempoInicio;
let diferenciaSegundos = tiempoDiferencia / 1000;

//Condicionales
if(respuesta == suma){
  document.write("¡Felicidades! Lograste hacer la suma en " + diferenciaSegundos + " segundos. <br>");
}
else{
  document.write("No lograste resolver adecuadamente la suma y tardaste " + diferenciaSegundos + " segundos. <br>");
}
