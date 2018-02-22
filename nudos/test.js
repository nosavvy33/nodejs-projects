var http = require('http');

function callback_createServer(request, response) {
   response.writeHead(200);
   response.write('<H1> Hola NODEJS - Juan Perez - C15 </H1>');
   response.write('<I> <H2> Tecsup </H2> </I>');
   response.end();
}

var server = http.createServer(callback_createServer);


server.listen(8080);

