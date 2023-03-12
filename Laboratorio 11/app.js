const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next();
});

app.use('/home', (request, response, next) => {

    response.send('Bienvenido a casa!');
});

app.use('/pedir', (request, response, next) => {

    console.log(request.body);
    console.log(request.body.cafe);

    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Pizzería</h1>
                <form action="/pedir" method="POST">
                    <fieldset>
                        <legend>Escoge tu pizza:</legend>
                        <div>
                            <input type="checkbox" id="hawaiana" name="hawaiana">
                            <label for="hawaiana">Hawaiana</label>
                        </div>
                        <div>
                            <input type"checkbox" id="peperoni" name="peperoni">
                            <label for="peperoni">Peperoni</label>
                        </div>
                        <div>
                            <input type="number" id="pizzas" name="pizzas" value="0" min="0">
                            <label for="pizzas"> pizzas</label>
                        </div>
                    </fieldset>
                    <br>
                    <inputtype="submit" value="pedir">
                </form>
            </body>
        </html>
    `;

    response.send(html);
});

app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('¡Hola mundo!');
});

app.listen(3000);