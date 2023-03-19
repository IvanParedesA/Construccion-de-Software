const Pizza = require('../models/pizzas.model');

exports.get_lista = (request, response, next) => {

    const cookies = request.get('Cookie') || '';
    
    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    //Creación de una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas);

    response.render('lista', { pizzas: Pizza.fetchAll() });
};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {
    const pizza = new Pizza({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
    });

    pizza.save();

    response.status(300).redirect('/pizzas/lista');
}

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

