// El módulo http permite crear servidores web y manejar peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Agencia Vehícular</h1>");
        
        response.write('<form action="pedir" method="POST">');

        let form = `
            <fieldset>
                <legend>Escoge tu nuevo auto:</legend>
                <div>
                    <input type="checkbox" id="Audi" name="Audi">
                    <label for="Audi">Audi</label>
                </div>
                <div>
                    <input type="checkbox" id="Bmw" name="Bmw">
                    <label for="Bmw">Bmw</label>
                </div>
                <div>
                    <input type="number" id="meses" name="meses" value="0">
                    <label for="meses">meses de financiamiento</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="pedir">
        `;

        response.write(form);
        response.write("</form>");

        response.write("</body></html>");
        response.end();

    } else if(request.url === "/elegir") {

        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Agencia Vehícular</h1>");
        response.write("</body><html>");
        response.end();

    } else {

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Lo sentimos, el auto que estás buscando no existe</h1>");
        response.write("<h2>Error 404 NOT FOUND</h2>")
        response.end();
    }

});

server.listen(3000)