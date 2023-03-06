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

//Problema 3
document.write("<br> Problema 3: <br>");

//Definimos el arreglo
const arregloProblema3 = [1, 4, -9, 0, 5, 2, -8, 2, 0, 9, 1, 8, -5, 7, 5, 0, 9].sort();

//Mostramos el arreglo
document.write("Este es el arreglo: ");
document.write("[" + arregloProblema3 + "]<br>");

//Definimos la función
function contador(arreglo){
  //Contadores
  let numerosNegativos = 0;
  let numeroDeCeros = 0;
  let numerosPositivos = 0;

  //Ciclo para encontrar los números
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] < 0){
      numerosNegativos ++;
    }
    else if(arreglo[i] === 0){
      numeroDeCeros ++;
    }
    else if(arreglo[i] > 0){
      numerosPositivos ++;
    }
  }

  //Enviar las respuestas
  document.write("La cantidad de números negativos en el arreglo fue de: " + numerosNegativos + "<br>");
  document.write("La cantidad de ceros en el arreglo fue de: " + numeroDeCeros + "<br>");
  document.write("La cantidad de números mayores a cero es de: " + numerosPositivos + "<br>");
}

//Llamar a la función
console.log(contador(arregloProblema3));

//Problema 4
document.write("<br> Problema 4: <br>");

//Definimos un arreglo de arreglos
const arregloProblema4 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

//Mostramos el arreglo
document.write("Este es el arreglo: ");
document.write("[[" + arregloProblema4[0] + "], [" + arregloProblema4[1] + "], [" + arregloProblema4[2] + "]] <br>");

//Definimos la función
function promedios(arreglo){
  const arregloPromedios = [];
  for(let i = 0; i < arreglo.length; i++){
    let suma = 0;
    let promedio = 0;
    let contador = 0;
    for(let j = 0; j < arreglo[i].length; j++){
      suma += arreglo[i][j];
      contador++;
    }
    promedio = suma / contador;
    arregloPromedios.push(promedio);
  }
  document.write("Este es un arreglo con los promedios de los otros arreglos: " + arregloPromedios + "<br>");
}

//Llamar a la función
console.log(promedios(arregloProblema4));


