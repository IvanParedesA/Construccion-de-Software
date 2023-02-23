// Laboratorio 8
// Iván Ricardo Paredes Avilez A01705083
// 23/02/2022


//Una función que reciba un arreglo de números y devuelva su promedio
const arreglo1 = [1,2,3,4,5,6,7,8,9,10];

function promedio_arreglo (arreglo){
    let suma = 0;
    for(let item of arreglo){
        suma = suma + item;
    }
    let promedio = suma / arreglo.length;
    return promedio;
    
}

console.log(promedio_arreglo(arreglo1));

//Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs. 
const string1 = "Hola, me llamo Iván. ¿Cómo estas?";

function saludo (string){
    const filesystem = require('fs');
    filesystem.writeFileSync('saludo', string);
}

saludo(string1);

//Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en 
//js que se ejecute sobre node. 

function calcular_IMC(peso, altura){
    let IMC = 0;
    IMC = peso / (altura * altura);
    return IMC;
}

console.log(calcular_IMC(73, 1.73))
