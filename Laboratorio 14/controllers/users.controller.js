exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/pizzas/lista'); //Este código se ejecuta cuando la sesión se elimina
    })
}