const express = require('express');

const router = express.Router();

router.get('/biografia', (request, response, next) => {

    let html = `
    <!DOCTYPE html>
        <html>
            <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Laboratorio 1</h1>
            <p>
                Soy estudiante del Instituto Tecnológico y de Estudios Superiores de Moneterrey Campus Querétaro y
                actualmente estoy en el 4to semestre de la carrera de Ingeniería en Tecnologías Computacionales. Dentro de 
                mi área de estudios, uno de los temas que más me interesan son la inteligencia artificial y las criptomonedas. 
                Hablando de otro tipo de intereses, me gusta todo lo que tenga que ver con los autos y además uno de mis
                pasatiempos favoritos es jugar videojuegos. Como tal hoy en día no estoy llevando a cabo un proyecto personal, 
                pero soy vicepresidente del grupo estudiantil ACM, el cual está dirigido principalmente a la programación.
            </p>
        </body>
    </html>
    `;

    response.send(html)
});

module.exports = router;