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
            <h1>Pregunta</h1>
            <p>Describe el archivo package.json.</p>
            <p>Es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto. 
            Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan 
            las dependencias del proyecto y los contenidos de la carpeta node_modules/ .</p>
        </body>
    </html>
    `;

    response.send(html)
});

module.exports = router;