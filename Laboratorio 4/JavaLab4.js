alert('Bienvenido a mi Laboratorio 4');

//Preguntamos al usuario un número
const numero = Number(prompt("Ingresa un número"));

document.write("Problema 1:")
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

