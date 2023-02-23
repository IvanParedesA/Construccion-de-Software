//Una función que reciba un arreglo de números y devuelva su promedio
const arreglo = [1,2,3,4,5,6,7,8,9,10];

function promedio_arreglo (arreglo){
    let suma = 0;
    for(let item of arreglo){
        suma = suma + item;
    }
    let promedio = suma / arreglo.length;
    return promedio;
    
}

console.log(promedio_arreglo(arreglo));