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
        response.write('<a href="/elegir">Elige tu próximo auto</a>');
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