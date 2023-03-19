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
            <h1>Preguntas Laboratorio 14</h1>
            <p>¿Qué beneficios encuentras en el estilo MVC?</p>
            <p>Principalmente que facilita una buena organización de todo el sistema de tu página web y además 
            porque de esta manera también se puede trabajar en equipo eficazmente dividiendo los roles.</p>
            <p>¿Encuentras alguna desventaja en el estilo arquitectónico MVC?>
            <p>Mientras hacía correcciones a mi laboratorio, me percaté de que quizás algunos errores sean 
            dificiles de encontrar por la cantidad de archivos que debe llevar el sistema, así que diría que 
            dividir el proyecto de esta manera también le agrega complejidad.
        </body>
    </html>
    `;

    response.send(html)
});

module.exports = router;