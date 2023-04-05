module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_pizzas') >= 0)) {
        return response.redirect('/pizzas/lista');
    }
    next();
}