console.log("hola desde node");

//el módulo filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//El arreglo se ordena de mayor a menor por la cantidad de tiempo
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}