var http = require('http');
var url = require('url');
var str = require('string');
var mantenimientos = require('./mant/mant');
var server = http.createServer(callback_handlerHttp);
var req, res, par;

function callback_handlerHttp(request, response){
	req = request;
	res = response;
	par = url.parse(req.url, true).query;
	var accion = par.accion;

	if( accion == undefined ) {
		inicio();
	}
	else if (accion == 'Mantenimientos') {
		Mantenimientos();
	}
	else if (accion == 'Procesos') {
		Procesos();
	}
	else if (accion == 'Reportes') {
		Reportes();
	}
	else if (accion.charAt(0) == 'M') {
		mantenimientos.controller(req, res, par);
	}
	else {
		inicio();
	}
}

function Mantenimientos() {
	mantenimientos.inicioMant(req, res);
	/* res.setHeader('Content-Type', 'text/html');
	res.write('<h1>Mantenimientos - JB</h1>');
	res.end(); */
}

function Procesos() {
	res.setHeader('Content-Type', 'text/html');
	res.write('<h1>Procesos - JB</h1>');
	res.end();
}

function Reportes() {
	res.setHeader('Content-Type', 'text/html');
	res.write('<h1>Reportes - JB</h1>');
	res.end();
}

function inicio() {
	res.setHeader('Content-Type', 'text/html');
	res.write('<h1>Pagina principal de la aplicacion - JB</h1>');
	res.write('<ul><p><li><a href=/app?accion=Mantenimientos>Mantenimientos</a></li></p>' +
		  '	<p><li><a href=/app?accion=Procesos>Procesos</a></li></p>' +
		  '	<p><li><a href=/app?accion=Reportes>Reportes</a></li></p></ul>' );
	res.end();
}

console.log('Servidor iniciado en el puerto 9090');
server.listen(9090);