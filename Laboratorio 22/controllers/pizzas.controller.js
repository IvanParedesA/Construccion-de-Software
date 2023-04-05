const Pizza = require('../models/pizzas.model');

exports.get_lista = (request, response, next) => {

    const cookies = request.get('Cookie') || '';
    
    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    //Creación de una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');
    
    const id = request.params.id || 0;

    Pizza.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        //console.log(fieldData);

        response.render('lista', {
            pizzas: rows,
            ultima_pizza: request.session.ultima_pizza || '',
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(error => {
        console.log(error);
    });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_nuevo = (request, response, next) => {

    console.log(request.file);
    
    const pizza = new Pizza({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
        imagen: request.file.filename,
    });

    pizza.save()
    .then(([rows, fieldData]) => {
        request.session.ultima_pizza = pizza.nombre;

        response.status(300).redirect('/pizzas/lista');
    })
    .catch(error => console.log(error));

};

exports.get_pedir = (request, response, next) => {

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
};

exports.post_pedir = (request, response, next) => {
    console.log(request.body);

    response.send("Pediste " + request.body.pizzas + "pizzas");
}

exports.get_pedido = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}

