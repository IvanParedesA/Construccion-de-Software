const User = require('../models/users.model');

exports.get_login = (request, response, next) => {

    let mensaje = '';

    if (request.session.mensaje != '') {
        mensaje = request.session.mensaje;
        request.session.mensaje ='';
    }

    response.render('login', {
        mensaje: mensaje,
    });
};

exports.post_login = (request, response, next) => {
    User.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length > 0) {

        } else {
            request.session.mensaje = 'Nombre de usuario y/o contraseña no coinciden';
            response.redirect('/users/login');
        }
    })
    .catch((error) => {console.log(error)});
}

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
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina
    })
};