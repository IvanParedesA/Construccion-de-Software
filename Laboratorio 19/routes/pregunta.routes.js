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
            <h1>Preguntas Laboratorio 19</h1>

            <p>¿En qué consiste el control de acceso basado en roles?</p>
            <p>Se basa en derechos de acceso que se pueden asignar a un usuario o un equipo en una organización.</p>

            <p>Investiguen y describan 2 sistemas, uno que aplique RBAC y uno que no. Realicen un análisis de las ventajas y desventajas 
            de cada uno con respecto al control de acceso.<p>

            <p>sistema sin RBAC: Un sistema donde todos los usuarios tienen los mismos privilegios</p>
            <p>sistema con RBAC: Sistemas donde diferentes usuarios tienen diferentes provilegios como un sistema operativo</p>

            <p>ventajas:</p>
            <p>Flexibilidad</p>
            <p>Menor esfuerzo Administrativo</p>
            <p>Baja susceptibilidad a errores</p>
            <p>Aumento de la eficiencia</p>
            <p>Seguridad</p>
            <p>Transparencia</p>

            <p>desventajas:</p>
            <p>La creación es laboriosa</p>
            <p>Asignaciones temporales</p>
            <p>Aplicación</p>
        </body>
    </html>
    `;

    response.send(html)
});

module.exports = router;