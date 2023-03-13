const express = require('express');
const path = require('path');

const router = express.Router();

const pizzas = [
    "hawaiana",
    "peperoni",
    "suprema",
    "mexicana",
    "jamón",
    "queso",
    "champiñones",
    "salchicha"
];

router.get('/lista', (request, response, next) => {
    response.render('lista', {pizzas: pizzas});

})

router.get('/pedir', (request, response, next) => {

    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Pizzería</h1>
                <form action="/pizzas/pedir" method="POST">
                    <fieldset>
                        <legend>Escoge tu pizza:</legend>
                        <div>
                            <input type="checkbox" id="hawaiana" name="hawaiana">
                            <label for="hawaiana">Hawaiana</label>
                        </div>
                        <div>
                            <input type="checkbox" id="peperoni" name="peperoni">
                            <label for="peperoni">Peperoni</label>
                        </div>
                        <div>
                            <input type="number" id="pizzas" name="pizzas" value="0" min="0">
                            <label for="pizzas"> pizzas</label>
                        </div>
                    </fieldset>
                    <br>
                    <input type="submit" value="pedir">
                </form>
            </body>
        </html>
    `;

    response.send(html);
});

router.post('/pedir', (request, response, next) => {
    console.log(request.body);

    response.send("Pediste " + request.body.pizzas + " pizzas");
});

router.get('/pedido', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});


module.exports = router;