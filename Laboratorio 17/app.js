const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}))

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next();
});

app.use('/home', (request, response, next) => {

    response.send('Bienvenido a casa!');
    /*Puedes acceder a estas páginas:
    http://localhost:3000/home
    http://localhost:3000/saludo
    http://localhost:3000/pizzas/pedir
    http://localhost:3000/pregunta/respuesta
    http://localhost:3000/contacto/biografia
    */
});

const rutasUsers = require('./routes/users.routes');

app.use('/users', rutasUsers);

app.use('/saludo', (request, response, next) => {

    response.send('¡Hola Mundo!');
});

const pizzasRutas = require('./routes/pizzas.routes');
const contactoRutas = require('./routes/contacto.routes');
const preguntaRutas = require('./routes/pregunta.routes');

app.use('/pizzas', pizzasRutas);
app.use('/contacto',contactoRutas);
app.use('/pregunta', preguntaRutas);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404);

    //Manda la respuesta
    response.send('Error 404 Not Found');
});

app.listen(3000);