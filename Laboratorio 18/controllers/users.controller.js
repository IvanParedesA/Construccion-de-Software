const User = require('../models/users.model');

exports.get_signup = (request, response, next) => {
    response.render('signup');
};

exports.post_signup = (request, response, next) => {

    const nuevo_usuario = new User({
        nombre: request.body.nombre,
        username: request.body.username,
        password: request.body.password,
    });

    nuevo_usuario.save()
    .then(([rows, fieldData]) => {

        request.session.mensaje = "Usuario registrado.";

        response.redirect('/users/login');
    })
    .catch((error) => console.log(error));
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/pizzas/lista'); //Este código se ejecuta cuando la sesión se elimina
    })
};