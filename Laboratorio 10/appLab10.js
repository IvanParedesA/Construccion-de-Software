// El módulo http permite crear servidores web y manejar peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Pizzería</h1>");
        response.write('<a href="/pedir">Pide aquí tu pizza</a>')
        response.write("</body></html>");
        response.end();

    } else if(request.url === "/pedir" && request.method === "GET") {

        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Pizzería</h1>");
        response.write('<form action="/pedir" method="POST">');

        let form = `
            <fieldset>
                <legend>Escoge la pizza que desees:</legend>
                <div>
                    <input type="checkbox" id="Peperoni" name="Peperoni">
                    <label for="Peperoni">Peperoni</label>
                </div>
                <div>
                    <input type="checkbox" id="Hawaiana" name="Hawaiana">
                    <label for="Hawaiana">Hawaiana</label>
                </div>
                <div>
                    <input type="number" id="pizzas" name="pizzas" value="0" min="0">
                    <label for="pizzas">Pizzas</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="pedir">
        `;

        response.write(form);
        response.write("</form>");
        response.write("</body><html>");
        response.end();

    } else if(request.url === "/pedir" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);

            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write('<h1>Ingredientes</h1>');

            let respuesta = "<ul>";

            const peperoni = datos_completos.split('=')[0];
            if (peperoni === "peperoni") {
                respuesta += "<li>peperoni</li>";
            }

            try {
                if (datos_completos.split('&')[0].split('=')[0] === "hawaiana" || 
                    datos_completos-split('&')[1].split('=')[0] === "hawaiana") {
                        respuesta += "<li>piña</li>";
                    }
            } catch (error) {

            }

            const pizzas = datos_completos.split('pizzas=')[1];
            const numero_pizzas = Number(pizzas);

            if (numero_pizzas > 0) {
                respuesta += "<li>" + numero_pizzas + " kg. de harina</li>";
                respuesta += "<li>" + numero_pizzas + " cucharadas de sal fina</li>";
                respuesta += "<li>" + 30 * numero_pizzas + " gr. de levadura</li>";
                respuesta += "<li>" + 2 * numero_pizzas + " cucharadas de aceite de oliva</li>";
            }
            respuesta += "</ul>";

            response.write(respuesta);

            return response.end();
        });
        

    } else {

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Error 404 NOT FOUND. Lo sentimos, la pizza que estás buscando no existe</h1>");
        response.end();
    }

});

server.listen(3000)