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

const pizzasRutas = require('./routes/pizzas.routes');

app.use('/pizzas', pizzasRutas);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('Error 404 Not Found');
});

app.listen(3000);