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
            <h1>Preguntas Laboratorio 18</h1>
            <p>¿Qué otras formas de autentificación existen?</p>
            <p>Autenticación QR.</p>
            <p>Doble Factor de autenticación.</p>
            <p>OTP SMS.</p>
            <p>Firma electrónica con OTP SMS.</p>
            <p>Biometría.</p>
            <p>Certificado digital.</p>
        </body>
    </html>
    `;

    response.send(html)
});

module.exports = router;