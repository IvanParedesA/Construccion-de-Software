const express = require('express');

const router = express.Router();

router.get('/respuesta', (request, response, next) => {

    let html = `
    <!DOCTYPE html>
        <html>
            <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Preguntas Laboratorio 17</h1>
            <p>¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?</p>
            <p>Para tener control de los datos que van a entrar y salir de la base de datos y 
            a la vez no haya ningún problema con otras partes del código. En parte, esto también 
            representa una medida de seguridad.</p>
            <p>¿Qué es SQL injection y cómo se puede prevenir?</p>
            <p>es un ataque de inyección de código utilizado para atacar aplicaciones basadas en datos 
            en las que se insertan sentencias SQL maliciosas en un campo de entrada para su ejecución.
            Para prevenirlo, se pueden limitar los privilegios de los usuarios, utilizar procedimientos
            almacenados, consultas parametrizadas y también implementar seguridad multicapa en el sitio.
        </body>
    </html>
    `;

    response.send(html)
});

module.exports = router;